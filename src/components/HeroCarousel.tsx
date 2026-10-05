import React, { useState, useEffect, useRef } from 'react';
import { HERO_CAROUSEL_SLIDES } from '../data/mockData';
import { ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSlides = HERO_CAROUSEL_SLIDES.length;

  // Auto-carrusel automático por defecto (cada 5 segundos)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % totalSlides);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentSlide((curr) => (curr + 1) % totalSlides);
      }, 5000);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeData = HERO_CAROUSEL_SLIDES[currentSlide];

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center bg-zinc-950 text-white overflow-hidden pt-20"
      aria-roledescription="carousel"
      aria-label="Subsidios y acondicionamiento térmico Kotai"
    >
      {/* Background Image Carousel with smooth crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_CAROUSEL_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform duration-1000`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />
          </div>
        ))}
      </div>

      {/* Main Content Container with Larger, Senior-Friendly Text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Call to Action (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-kotai-800/90 border border-kotai-500/40 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
              <span>{activeData.tag}</span>
            </div>

            {/* Headline with High Legibility */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              {activeData.title}
            </h1>

            {/* Subtitle - Increased size for seniors */}
            <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl font-medium leading-relaxed">
              {activeData.description}
            </p>

            {/* Action Buttons - Pure Postulación terminology */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contacto"
                onClick={(e) => handleSoftScroll(e, '#contacto')}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-kotai-800 hover:bg-kotai-700 text-white font-bold text-base shadow-crimson transition-all duration-200 active:scale-[0.98]"
              >
                <span>Postula con Nosotros</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#servicios"
                onClick={(e) => handleSoftScroll(e, '#servicios')}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-sm border border-white/25 transition-all duration-200"
              >
                <span>Revisar Subsidios y Requisitos</span>
              </a>
            </div>

            {/* Trust Highlights Strip with larger fonts */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15 text-sm font-semibold text-zinc-200">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-kotai-400 shrink-0" />
                <span>Tramo HASTA el 60% RSH</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-kotai-400 shrink-0" />
                <span>Aporte desde 1 UF (~$41.500)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-kotai-400 shrink-0" />
                <span>Acompañamiento en tu Postulación</span>
              </div>
            </div>

          </div>

          {/* Right Summary Badge (4 cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-zinc-900/90 backdrop-blur-md border border-white/15 rounded-3xl p-7 shadow-2xl space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-kotai-800 text-white text-xs font-bold uppercase tracking-wider">
                Postulaciones Abiertas
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                {activeData.stat}
              </div>
              <div className="text-base text-zinc-300 font-medium leading-snug">
                {activeData.statLabel}
              </div>
              
              <div className="pt-5 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span>Subsidio Estatal Minvu</span>
                <span className="flex items-center gap-1.5 font-bold text-kotai-300 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-kotai-400" />
                  {currentSlide + 1} de {totalSlides}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Carousel Navigation Bottom Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {HERO_CAROUSEL_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? 'w-9 h-2.5 bg-kotai-500'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ver slide ${idx + 1}`}
                aria-current={idx === currentSlide}
              />
            ))}
          </div>

          {/* Prev / Next Manual Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-kotai-800 text-white border border-white/10 backdrop-blur-sm transition-all duration-200"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-kotai-800 text-white border border-white/10 backdrop-blur-sm transition-all duration-200"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
