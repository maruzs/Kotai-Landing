import React from 'react';
import { HOLDING_COMPANIES } from '../data/mockData';
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
            Perteneciente al Grupo Alianza G5
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed">
            Kotai forma parte de un holding empresarial multisectorial que entrega solidez financiera, abastecimiento prioritario e ingeniería integrada para garantizar cada obra.
          </p>
        </div>

        {/* Kotai Hero Card in Holding */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-kotai-950 via-kotai-900 to-zinc-900 border border-kotai-600/40 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-kotai-600/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-kotai-800 text-white text-[11px] font-bold uppercase tracking-wider">
                Empresa Operativa Principal
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Kotai · Constructora y Montaje
              </h3>
              <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                Es la empresa encargada de ejecutar en terreno: montaje de estructuras pesadas de acero, galpones industriales, construcción de viviendas y ampliaciones habitacionales con cuadrillas propias.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-xs text-zinc-200 bg-black/30 p-2.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Solvencia y Respaldo G5</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-200 bg-black/30 p-2.5 rounded-xl border border-white/10">
                <CheckCircle className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Garantía de Continuidad de Obra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Companies in Holding Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOLDING_COMPANIES.filter(c => !c.isMain).map((company) => (
            <div
              key={company.id}
              className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="text-xs font-bold text-kotai-400 uppercase tracking-wider mb-2">
                  Alianza G5
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
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
                <span>Empresa Colaboradora</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Holding Trust Strip */}
        <div className="mt-12 text-center text-xs text-zinc-400 max-w-xl mx-auto">
          Grupo Alianza G5 · Sinergia técnica, comercial y constructiva al servicio de nuestros clientes en todo Chile.
        </div>

      </div>
    </section>
  );
};

export default HoldingG5;
