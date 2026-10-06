import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const VideoSection: React.FC = () => {

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="video-explicativo" className="py-16 sm:py-24 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-kotai-800/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-kotai-900/80 border border-kotai-700/60 text-kotai-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-kotai-400" />
            <span>Video Informativo Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Conoce el Subsidio Térmico en 1 Minuto
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Mira este breve video explicativo con locución y fotos reales. Conoce qué incluye el proyecto, los 3 requisitos obligatorios para calificar y cómo Kotai te acompaña en tu postulación.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/15 shadow-2xl group">
            
            {/* Native Video Element */}
            <video
              src="/video_kotai_oficial.mp4"
              poster="/video_poster.jpg"
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover bg-black"
            />


          </div>

          {/* Highlights Row below video */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2.5 text-kotai-400 text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Obras Reales</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Termopaneles y Aislación
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Recambio completo por ventanas de doble vidrio hermético, revestimiento de muros y agua caliente solar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2.5 text-kotai-400 text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Requisitos Claros</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                RSH Hasta el 60%
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Libreta para la vivienda con ahorro desde 1 UF (~$41.500) y ser dueño/a o heredero/a de la casa.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2.5 text-kotai-400 text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-kotai-400 shrink-0" />
                <span>Asesoría Kotai</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Acompañamiento a Vecinos
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Revisión técnica en terreno, verificación de cartola RSH y postulación de tu carpeta ante el Serviu.
              </p>
            </div>

          </div>

          {/* Action Call below video */}
          <div className="mt-8 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-base sm:text-lg font-extrabold text-white">
                ¿Quieres saber si tu casa califica hoy mismo?
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">
                Llámanos a los teléfonos oficiales o escríbenos por WhatsApp para asesorarte.
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contacto"
                onClick={(e) => handleSoftScroll(e, '#contacto')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-kotai-800 hover:bg-kotai-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Postular Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/56950501231?text=Hola%20Kotai,%20vi%20el%20video%20explicativo%20y%20deseo%20saber%20si%20mi%20casa%20califica%20al%20subsidio%20termico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoSection;
