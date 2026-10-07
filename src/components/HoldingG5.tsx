import React from 'react';
import { HOLDING_COMPANIES, COMPANY_INFO } from '../data/mockData';
import { Building, ShieldCheck, CheckCircle } from 'lucide-react';

export const HoldingG5: React.FC = () => {
  return (
    <section id="holding" className="py-16 sm:py-24 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-kotai-300 border border-kotai-700/50 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-kotai-400" />
            <span>Respaldo Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Grupo Empresarial “ALIANZA G5”
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed">
            Kotai forma parte de un holding multisectorial que entrega solvencia técnica, solidez financiera, abastecimiento prioritario y garantía de continuidad de obra en cada proyecto Serviu.
          </p>
        </div>

        {/* Kotai Hero Card in Holding */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-kotai-950 via-kotai-900 to-zinc-900 border border-kotai-600/40 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-kotai-600/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-kotai-800 text-white text-[11px] font-bold uppercase tracking-wider">
                Empresa Operativa de Acondicionamiento Térmico · RUT {COMPANY_INFO.rut}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                Empresa del holding encargada de la formulación técnica, licitación y ejecución de subsidios de eficiencia energética D.S. N° 27 de 2016 (DS27) Serviu, con cuadrillas de terreno propias y supervisión diaria. Representante Legal: <strong>{COMPANY_INFO.representative}</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-xs text-zinc-200 bg-black/30 p-2.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Solvencia y Respaldo Holding Alianza G5</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-200 bg-black/30 p-2.5 rounded-xl border border-white/10">
                <CheckCircle className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Garantía de Continuidad de Obra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Companies in Holding Grid with real RUTs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {HOLDING_COMPANIES.filter(c => !c.isMain).map((company) => (
            <div
              key={company.id}
              className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-kotai-400 uppercase tracking-wider">
                    Alianza G5
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {company.name}
                </h4>
                <div className="text-xs font-semibold text-zinc-400 mb-3">
                  {company.category}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {company.tagline}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                <span>Empresa del Holding</span>
                <span className="w-1.5 h-1.5 rounded-full bg-kotai-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Ciclo de Trabajo SERVIU y Departamentos */}
        <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-7 sm:p-9">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-kotai-400">
              Metodología de Trabajo SERVIU
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Ciclo de Gestión y Ejecución Profesional
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Flujo integrado entre las áreas del holding para asegurar cumplimiento técnico y administrativo sin contratiempos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-kotai-900 text-kotai-300 font-bold flex items-center justify-center text-sm shrink-0">1</div>
              <div>
                <div className="text-sm font-bold text-white">Social</div>
                <div className="text-[11px] text-zinc-400">Captación y vínculo comunitario</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-kotai-900 text-kotai-300 font-bold flex items-center justify-center text-sm shrink-0">2</div>
              <div>
                <div className="text-sm font-bold text-white">Administración</div>
                <div className="text-[11px] text-zinc-400">Presupuestos y validación de fondos</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-kotai-900 text-kotai-300 font-bold flex items-center justify-center text-sm shrink-0">3</div>
              <div>
                <div className="text-sm font-bold text-white">Técnica</div>
                <div className="text-[11px] text-zinc-400">Planimetría y presentación Serviu</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-kotai-900 text-kotai-300 font-bold flex items-center justify-center text-sm shrink-0">4</div>
              <div>
                <div className="text-sm font-bold text-white">Operaciones</div>
                <div className="text-[11px] text-zinc-400">Ejecución en terreno y entrega</div>
              </div>
            </div>
          </div>

          {/* Bottom Holding Trust Strip */}
          <div className="text-center text-xs text-zinc-400 pt-4 border-t border-zinc-800/80">
            Grupo Empresarial Alianza G5 · Sinergia técnica, comercial y constructiva en las Regiones de Ñuble y Biobío.
          </div>
        </div>

      </div>
    </section>
  );
};

export default HoldingG5;
