import { navigate } from '../utils/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER_CASES, BeforeAfterItem } from '../data/mockData';
import { Sparkles, MapPin, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck, Layers } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase: BeforeAfterItem = BEFORE_AFTER_CASES[selectedCaseIndex] || BEFORE_AFTER_CASES[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignorar si el navegador no soporta capture
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignorar si el navegador no soporta capture
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(`/${href}`);
  };

  return (
    <section id="antes-despues" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Larger Text */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-kotai-800" />
            <span>Transformación Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Antes y Después: Acondicionamiento Térmico Kotai
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Desliza la barra con el dedo o el mouse para comparar cómo era la vivienda y cómo quedó completamente aislada y renovada.
          </p>

          {/* Selector de Casos Reales */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {BEFORE_AFTER_CASES.map((item, idx) => {
              const isSelected = idx === selectedCaseIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedCaseIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-kotai-800 text-white shadow-md shadow-kotai-900/20 ring-2 ring-kotai-800'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                  }`}
                >
                  <Layers className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-kotai-800'}`} />
                  <span>{item.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Comparison Stage */}
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Split Image Canvas (7 cols) */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                className="relative h-[320px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden rounded-2xl select-none cursor-ew-resize border border-zinc-300 shadow-md bg-zinc-900 touch-pan-y"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                {/* AFTER IMAGE (Base Layer) */}
                <img
                  src={activeCase.afterImage}
                  alt={activeCase.afterLabel}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                  draggable={false}
                />

                {/* AFTER BADGE (Top Right) */}
                <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-xl bg-kotai-800 text-white text-xs sm:text-sm font-bold shadow-md uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                  DESPUÉS (Kotai)
                </div>

                {/* BEFORE IMAGE (Full Size Layer, Clipped via hardware clipPath) */}
                <div
                  className="absolute inset-0 pointer-events-none select-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt={activeCase.beforeLabel}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* BEFORE BADGE (Top Left) */}
                  <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-xl bg-zinc-900/90 text-white text-xs sm:text-sm font-bold shadow-md uppercase tracking-wider backdrop-blur-sm border border-white/20">
                    ANTES
                  </div>
                </div>

                {/* SLIDER DIVIDER LINE & HANDLE */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-kotai-800 border-2 border-white shadow-xl flex items-center justify-center text-white">
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft className="w-4 h-4" />
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Helper hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-zinc-950/80 text-xs sm:text-sm font-medium text-white backdrop-blur-sm pointer-events-none">
                  Mueve la barra central para comparar
                </div>
              </div>
            <div className="mt-4">
              <label htmlFor="comparison-range" className="block text-base font-semibold mb-2">Comparar antes y después</label>
              <input id="comparison-range" type="range" min="0" max="100" value={sliderPosition} onChange={e => setSliderPosition(Number(e.target.value))} className="w-full h-11 accent-kotai-800" />
            </div>

            </div>

            {/* Information Card (5 cols) with Larger Text */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-kotai-800">
                  {activeCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1 leading-snug">
                  {activeCase.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2">
                  <MapPin className="w-4 h-4 text-kotai-800" />
                  <span>{activeCase.location}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                {activeCase.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs sm:text-sm font-bold uppercase text-zinc-500">
                  Beneficios Directos Obtenidos
                </div>
                {activeCase.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-zinc-800">
                    <CheckCircle className="w-5 h-5 text-kotai-800 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-kotai-50 border border-kotai-200 text-sm font-medium text-kotai-950 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-kotai-800 shrink-0" />
                <span>El subsidio financia la obra. Consulta con Kotai el ahorro requerido para el llamado correspondiente.</span>
              </div>

              <div className="pt-2">
                <a
                  href="/#contacto"
                  onClick={(e) => handleSoftScroll(e, '#contacto')}
                  className="inline-flex w-full items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-kotai-800 hover:bg-kotai-700 text-white font-bold text-base shadow-crimson transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Postula a este Subsidio con Kotai</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;
