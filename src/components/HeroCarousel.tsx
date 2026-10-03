import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/mockData';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowDown, ShieldCheck, HardHat, CheckCircle2 } from 'lucide-react';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-stone-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Carrusel principal de Kotai Constructora"
    >
      {/* Background Slides with Fade Transition */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-7000 ease-out"
          />
          {/* Gradients to ensure text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white">
        <div className="max-w-3xl space-y-6">
          
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 bg-kotai-800/90 border border-kotai-500/50 text-kotai-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase backdrop-blur-sm shadow-md">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>{HERO_SLIDES[currentSlide].tag}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>Chile</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-lg sm:text-xl text-stone-200 leading-relaxed font-normal max-w-2xl bg-stone-950/30 backdrop-blur-[2px] p-2 rounded-lg">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/56987654321?text=Hola,%20quisiera%20pedir%20presupuesto%20o%20visita%20a%20terreno%20a%20Kotai%20Constructora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl shadow-hero hover:shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl border border-white/30 backdrop-blur-md transition hover:border-white"
            >
              <span>Ver Fotos Antes y Después</span>
              <ArrowDown className="w-5 h-5 text-amber-400" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-stone-300 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Visita a Terreno Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Garantía Legal por Escrito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-kotai-400 shrink-0" />
              <span>Respaldo Grupo Alianza G5</span>
            </div>
          </div>

        </div>
      </div>

      {/* Manual Slide Controls (Arrow buttons) */}
      <button
        onClick={goToPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/70 hover:bg-kotai-800 text-white border border-stone-700 hover:border-kotai-600 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/70 hover:bg-kotai-800 text-white border border-stone-700 hover:border-kotai-600 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2.5">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              index === currentSlide
                ? 'w-8 h-3 bg-kotai-500 shadow-md ring-2 ring-white/50'
                : 'w-3 h-3 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle indicator of auto-slide */}
      <div className="absolute top-4 right-4 z-30 hidden sm:block text-[11px] text-stone-400 bg-stone-900/80 px-2.5 py-1 rounded-full border border-stone-800">
        {isPaused ? '⏸ Carrusel pausado' : '▶ Cambia automáticamente'}
      </div>
    </section>
  );
};
