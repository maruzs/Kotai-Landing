import React, { useState, useEffect } from 'react';
import { Eye, BarChart3, TrendingUp, X, ShieldCheck } from 'lucide-react';

interface VisitStats {
  total: number;
  month: number;
  today: number;
  history: { date: string; visits: number }[];
}

export const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<VisitStats>({
    total: 0,
    month: 0,
    today: 0,
    history: []
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable' | 'local'>('loading');

  useEffect(() => {
    let active = true;
    const fetchStats = async () => {
      if (['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
        setStatus('local');
        return;
      }
      try {
        const SESSION_FLAG = 'kotai_session_counted_v2';
        const VISITOR_ID_KEY = 'kotai_vid';
        const day = new Date().toISOString().slice(0, 10);
        let visitorId = localStorage.getItem(VISITOR_ID_KEY);
        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem(VISITOR_ID_KEY, visitorId);
        }
        const isHit = sessionStorage.getItem(SESSION_FLAG) !== day;
        const res = await fetch('/api/visits', {
          method: isHit ? 'POST' : 'GET',
          headers: { 'X-Visitor-Id': visitorId },
          cache: 'no-store',
        });
        if (!res.ok || !res.headers.get('Content-Type')?.includes('application/json')) throw new Error('API no disponible');
        const data = await res.json();
        if (data.configured !== true || ![data.total, data.month, data.today].every(n => Number.isFinite(n) && n >= 0) || !Array.isArray(data.history)) throw new Error('Estadísticas no disponibles');
        // Marcar la sesión únicamente cuando el servidor confirma el registro.
        if (isHit) sessionStorage.setItem(SESSION_FLAG, day);
        if (active) { setStats(data); setStatus('ready'); }
      } catch {
        if (active) setStatus('unavailable');
      }
    };
    fetchStats();
    return () => { active = false; };
  }, []);

  if (status !== 'ready') return <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400" role="status" title={status === 'local' ? 'El contador se consulta en el sitio publicado; las pruebas locales no registran visitas.' : undefined}>
    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
    {status === 'loading' ? 'Consultando visitas…' : status === 'local' ? 'Visitas: —' : 'Visitas no disponibles'}
  </span>;

  const maxVisits = Math.max(...stats.history.map(h => h.visits), 1);

  return (
    <>
      {/* Botón / Badge Discreto en el Footer */}
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold border border-zinc-800 transition-colors"
        title="Ver estadísticas y contador de visitas"
      >
        <Eye className="w-3.5 h-3.5 text-kotai-400" />
        <span>Visitas: <strong>{stats.total.toLocaleString('es-CL')}</strong></span>
        <span className="hidden sm:inline text-zinc-600">·</span>
        <span className="hidden sm:inline text-zinc-400">Mes: {stats.month}</span>
        <BarChart3 className="w-3.5 h-3.5 text-zinc-500 ml-0.5" />
      </button>

      {/* Modal de Estadísticas Básicas (Tema 6 de la Reunión) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl relative">

            {/* Header Modal */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-kotai-900/80 border border-kotai-700/60 flex items-center justify-center text-kotai-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none">
                    Contador y Estadísticas de Visitas
                  </h3>
                  <span className="text-xs text-zinc-400">
                    Tráfico oficial en constructorakotai.cl
                  </span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tarjetas Métricas */}
            <div className="grid grid-cols-3 gap-3 my-6">
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-center">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Hoy
                </div>
                <div className="text-2xl font-black text-kotai-400 font-mono">
                  {stats.today}
                </div>
              </div>

              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-center">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Este Mes
                </div>
                <div className="text-2xl font-black text-white font-mono">
                  {stats.month}
                </div>
              </div>

              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-center">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Total
                </div>
                <div className="text-2xl font-black text-kotai-400 font-mono">
                  {stats.total}
                </div>
              </div>
            </div>

            {/* Gráfico Simple de Barras Semanal */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-kotai-400" />
                  <span>Ingresos últimos 7 días</span>
                </span>
                <span>Promedio: ~{stats.history.length > 0 ? Math.round(stats.history.reduce((a, b) => a + b.visits, 0) / stats.history.length) : 0} / día</span>
              </div>

              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <div className="flex items-end justify-between gap-2 h-28 pt-4">
                  {stats.history.map((item, idx) => {
                    const heightPercent = Math.round((item.visits / maxVisits) * 100);
                    const isToday = idx === stats.history.length - 1;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] font-mono text-zinc-400">
                          {item.visits}
                        </span>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[28px] rounded-t-md transition-all duration-300 ${
                            isToday ? 'bg-kotai-600' : 'bg-zinc-700/80 hover:bg-zinc-600'
                          }`}
                        />
                        <span className={`text-[10px] font-bold ${isToday ? 'text-kotai-400' : 'text-zinc-500'}`}>
                          {item.date}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Nota de evolución futura al CRM */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-kotai-400 shrink-0 mt-0.5" />
              <span>
                Se cuenta una visita por navegador al día. Recargar la página no duplica el conteo. Las estadísticas se consultan al abrir el sitio.
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default VisitorCounter;
