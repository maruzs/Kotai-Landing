import React from 'react';
import { HOLDING_COMPANIES } from '../data/mockData';
import { ShieldCheck, Network, Building, Check } from 'lucide-react';

export const HoldingG5: React.FC = () => {
  return (
    <section id="holding" className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#881020_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-stone-800 text-amber-400 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3 border border-stone-700">
            <Network className="w-4 h-4" />
            <span>Respaldo Corporativo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pertenecemos al Grupo Alianza G5
          </h2>

          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Kotai no trabaja sola. Formamos parte de un holding empresarial integral que abarca ingeniería, comercialización de insumos, construcción habitacional y montaje estructural a gran escala en Chile.
          </p>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-stone-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Solvencia Financiera
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-stone-600"></span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Capacidad Técnica Multi-Área
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-stone-600"></span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-kotai-400" /> Cero Riesgo de Abandono de Obra
            </span>
          </div>
        </div>

        {/* Kotai Flagship Showcase Card */}
        <div className="mb-12 bg-gradient-to-r from-kotai-950 via-kotai-900 to-kotai-800 rounded-3xl p-6 sm:p-10 border-2 border-kotai-600/70 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-stone-950 text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
                ★ Marca Principal de Construcción & Montaje
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src="/kotai-logo.png" 
                  alt="Kotai" 
                  className="h-16 w-auto bg-white p-2 rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    KOTAI Constructora y Montaje
                  </h3>
                  <p className="text-stone-300 text-sm">
                    Brazo operativo y ejecutor directo en terreno
                  </p>
                </div>
              </div>

              <p className="text-stone-200 text-base sm:text-lg leading-relaxed">
                Dentro de la Alianza G5, Kotai lidera los proyectos de edificación, ampliaciones comunitarias, subsidios y montaje de estructuras pesadas. Al contratarnos, cuentas con toda la maquinaria, logística y bodega del holding a tu servicio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-stone-100 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Montaje de vigas y techumbres de alto tonelaje</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-100 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cuadrillas de maestros seleccionados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-100 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantía respaldada por el holding G5</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-100 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Asesoría directa Serviu Renac</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-stone-950/60 rounded-2xl border border-white/10 text-center">
              <span className="text-stone-400 text-xs uppercase tracking-wider font-bold">
                Holding Central
              </span>
              <span className="text-2xl font-black text-white mt-1 mb-2">
                Grupo Alianza G5
              </span>
              <p className="text-stone-300 text-xs mb-4">
                Red multisectorial de construcción e ingeniería
              </p>
              <div className="w-full text-xs text-stone-300 bg-stone-900 p-3 rounded-lg border border-stone-800">
                <span>Contacto centralizado del holding:</span>
                <strong className="block text-amber-400 font-mono mt-1 text-sm">correo@alianzag5.cl</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Other Brands Grid */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Las 5 Empresas que Integran la Alianza G5
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              Sinergia completa en cada etapa de la construcción
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOLDING_COMPANIES.map((comp, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                  comp.isMain
                    ? 'bg-kotai-900/90 border-kotai-500 ring-2 ring-kotai-500/50 shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 hover:border-stone-500'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-stone-900 text-stone-300">
                      0{idx + 1}
                    </span>
                    {comp.isMain && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-stone-950">
                        Destacada
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-black text-white">{comp.name}</h4>
                  <p className="text-xs font-bold text-amber-400 mt-0.5 mb-2">{comp.category}</p>
                  <p className="text-xs text-stone-300 leading-relaxed">{comp.tagline}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-stone-400 flex items-center justify-between">
                  <span>Grupo Alianza G5</span>
                  <Building className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
