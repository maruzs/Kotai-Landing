import React, { useState, useEffect, useRef } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/mockData';
import { ChevronLeft, ChevronRight, CheckCircle, MapPin, Sparkles, ArrowRightLeft } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [viewMode, setViewMode] = useState<'compare' | 'before' | 'after'>('compare');
  const timerRef = useRef<number | null>(null);

  const currentProject = BEFORE_AFTER_PROJECTS[selectedIdx];

  // Auto-advance project every 7 seconds if not interacting
  useEffect(() => {
    if (isAutoCycling) {
      timerRef.current = setInterval(() => {
        setSelectedIdx((prev) => (prev + 1) % BEFORE_AFTER_PROJECTS.length);
        setSliderPos(50); // reset slider to center on slide change
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoCycling]);

  const handleNext = () => {
    setIsAutoCycling(false);
    setSelectedIdx((prev) => (prev + 1) % BEFORE_AFTER_PROJECTS.length);
    setSliderPos(50);
  };

  const handlePrev = () => {
    setIsAutoCycling(false);
    setSelectedIdx((prev) => (prev - 1 + BEFORE_AFTER_PROJECTS.length) % BEFORE_AFTER_PROJECTS.length);
    setSliderPos(50);
  };

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoCycling(false);
    setSliderPos(Number(e.target.value));
  };

  return (
    <section 
      id="proyectos" 
      className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-b border-stone-200"
      onMouseEnter={() => setIsAutoCycling(false)}
      onMouseLeave={() => setIsAutoCycling(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-kotai-100 text-kotai-900 font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wider mb-3 border border-kotai-200">
            <Sparkles className="w-4 h-4 text-kotai-700" />
            <span>Transformaciones Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
            Nuestros Proyectos: Antes y Después
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Las fotos hablan por sí solas. Mira cómo convertimos terrenos y construcciones desgastadas en espacios firmes, seguros y de alta calidad.
          </p>
          <div className="mt-2 text-xs text-stone-500 font-medium">
            {isAutoCycling ? '🔄 Los proyectos rotan automáticamente cada 7 segundos' : '⏸ Rotación pausada'}
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {BEFORE_AFTER_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedIdx(idx);
                setIsAutoCycling(false);
                setSliderPos(50);
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 border ${
                idx === selectedIdx
                  ? 'bg-kotai-800 text-white border-kotai-900 shadow-md scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-300'
              }`}
            >
              <span>{proj.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                idx === selectedIdx ? 'bg-kotai-950/60 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                {proj.category}
              </span>
            </button>
          ))}
        </div>

        {/* Main Comparison Showcase */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-card border border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Slider Interactive Container (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* View mode toggle for ease of use */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-bold">
                <span className="text-stone-500 flex items-center gap-1">
                  <ArrowRightLeft className="w-4 h-4 text-kotai-800" />
                  Mueve la barra central para comparar:
                </span>
                <div className="flex bg-stone-100 p-1 rounded-lg border border-stone-200">
                  <button
                    onClick={() => setViewMode('compare')}
                    className={`px-3 py-1 rounded text-xs transition ${viewMode === 'compare' ? 'bg-kotai-800 text-white' : 'text-stone-700'}`}
                  >
                    Comparador
                  </button>
                  <button
                    onClick={() => setViewMode('before')}
                    className={`px-3 py-1 rounded text-xs transition ${viewMode === 'before' ? 'bg-kotai-800 text-white' : 'text-stone-700'}`}
                  >
                    Solo Antes
                  </button>
                  <button
                    onClick={() => setViewMode('after')}
                    className={`px-3 py-1 rounded text-xs transition ${viewMode === 'after' ? 'bg-kotai-800 text-white' : 'text-stone-700'}`}
                  >
                    Solo Después
                  </button>
                </div>
              </div>

              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner bg-stone-900 select-none">
                
                {/* AFTER image (Full background layer) */}
                <img
                  src={currentProject.afterImage}
                  alt={`${currentProject.title} - Después`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* BEFORE image (Clipped overlay layer) */}
                {viewMode !== 'after' && (
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      width: viewMode === 'before' ? '100%' : `${sliderPos}%`,
                      transition: viewMode === 'compare' ? 'none' : 'width 0.3s ease',
                    }}
                  >
                    <img
                      src={currentProject.beforeImage}
                      alt={`${currentProject.title} - Antes`}
                      className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    {/* Shadow border separating before and after */}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]" />
                  </div>
                )}

                {/* Floating Labels for clarity */}
                <div className="absolute top-4 left-4 z-20 bg-stone-900/85 text-white text-xs sm:text-sm font-black px-3 py-1.5 rounded-lg backdrop-blur-sm border border-stone-700 shadow">
                  🔴 ESTADO INICIAL (ANTES)
                </div>

                <div className="absolute top-4 right-4 z-20 bg-emerald-700/90 text-white text-xs sm:text-sm font-black px-3 py-1.5 rounded-lg backdrop-blur-sm border border-emerald-500 shadow">
                  🟢 TRABAJO KOTAI (DESPUÉS)
                </div>

                {/* Slider divider line with draggable circle icon */}
                {viewMode === 'compare' && (
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none z-20"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-kotai-800 text-white flex items-center justify-center shadow-2xl border-2 border-white ring-4 ring-black/20">
                      <ArrowRightLeft className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* Native Range Slider for smooth touch & mouse interaction */}
                {viewMode === 'compare' && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={handleSliderMove}
                    aria-label="Comparar antes y después con barra deslizante"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                )}
              </div>

              {/* Navigation buttons below image */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 text-stone-700 hover:text-kotai-800 font-bold text-sm bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-xl transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Proyecto Anterior</span>
                </button>

                <div className="text-xs font-semibold text-stone-500">
                  {selectedIdx + 1} de {BEFORE_AFTER_PROJECTS.length}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 text-stone-700 hover:text-kotai-800 font-bold text-sm bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-xl transition"
                >
                  <span>Siguiente Proyecto</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Project Details (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="flex items-center gap-2">
                <span className="bg-kotai-100 text-kotai-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {currentProject.category}
                </span>
                <span className="text-stone-500 text-xs flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-kotai-600" />
                  {currentProject.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                {currentProject.title}
              </h3>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                {currentProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                  Aspectos Clave de la Obra:
                </h4>
                <div className="space-y-2">
                  {currentProject.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-stone-800 font-medium text-sm sm:text-base">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp quotation for this exact kind of project */}
              <div className="pt-4 border-t border-stone-200">
                <a
                  href={`https://wa.me/56987654321?text=Hola,%20vi%20el%20proyecto%20"${encodeURIComponent(currentProject.title)}"%20y%20me%20gustaría%20saber%20el%20costo%20aproximado%20para%20un%20trabajo%20similar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  <span>Consultar por un trabajo como este</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
