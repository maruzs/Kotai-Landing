import { navigate } from '../utils/navigation';
import React from 'react';
import { SIMPLE_STEPS } from '../data/mockData';
import { FileSearch, Home, FolderCheck, ShieldCheck, ArrowRight } from 'lucide-react';

export const SimplicityBanner: React.FC = () => {
  const stepIcons = [
    <FileSearch className="w-7 h-7 text-kotai-800" />,
    <Home className="w-7 h-7 text-kotai-800" />,
    <FolderCheck className="w-7 h-7 text-kotai-800" />,
    <ShieldCheck className="w-7 h-7 text-kotai-800" />,
  ];

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(`/${href}`);
  };

  return (
    <section id="proceso" className="py-16 sm:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Large, Friendly Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Te Ayudamos a Postular Paso a Paso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Acceder a tu Subsidio es Fácil con Kotai
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Te asesoramos con paciencia, sin palabras difíciles y con la experiencia de haber aislado cientos de hogares en toda la región.
          </p>
        </div>

        {/* 4 Steps Grid with Large, Readable Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SIMPLE_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-zinc-50 rounded-3xl p-7 border border-zinc-200/90 shadow-sm hover:border-kotai-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-black text-zinc-300 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center text-sm font-bold text-kotai-800">
                <span>Paso {step.number} del proceso</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout Box with Larger Text & Direct RSH Link */}
        <div className="mt-14 rounded-3xl bg-zinc-900 text-white p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-900/80 text-kotai-300 text-xs font-bold uppercase tracking-wider border border-kotai-700/50">
              <ShieldCheck className="w-3.5 h-3.5 text-kotai-400" />
              <span>Asesoría 100% Gratuita · Regiones de Ñuble y Biobío</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              ¿No sabes si cumples con tu Registro Social de Hogares?
            </h4>
            <p className="text-base sm:text-lg text-zinc-300">
              Revisamos tu cartola sin costo alguno. El beneficiario no paga nada a Kotai ni a la entidad patrocinante.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://registrosocial.gob.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white text-base font-bold transition-all duration-200 border border-zinc-700"
            >
              <span>Consultar en RSH</span>
              <span className="text-xs text-kotai-400">↗</span>
            </a>

            <a
              href="/#contacto"
              onClick={(e) => handleSoftScroll(e, '#contacto')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-kotai-800 hover:bg-kotai-700 text-white text-base font-bold transition-all duration-200 active:scale-[0.98] shadow-sm"
            >
              <span>Postula con Nosotros</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SimplicityBanner;
