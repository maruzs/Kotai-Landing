import React, { useState } from 'react';
import { REAL_WORKS_GALLERY, GalleryPhoto } from '../data/mockData';
import { Camera, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, Maximize2 } from 'lucide-react';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

export const RealWorksCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const total = REAL_WORKS_GALLERY.length;
  const pageSize = 6;
  const pageStart = Math.floor(currentIndex / pageSize) * pageSize;
  const visiblePhotos = REAL_WORKS_GALLERY.slice(pageStart, pageStart + pageSize);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const currentPhoto: GalleryPhoto = REAL_WORKS_GALLERY[currentIndex] || REAL_WORKS_GALLERY[0];

  // Adaptar para el modal
  const lightboxItems: LightboxItem[] = REAL_WORKS_GALLERY.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    description: item.description,
    tag: item.tag,
  }));

  return (
    <section id="fotos-obras" className="py-12 sm:py-16 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kotai-100 text-kotai-900 text-sm font-bold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-kotai-800" />
            <span>Evidencia en Terreno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Fotos Reales de Nuestras Instalaciones
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Haz clic en cualquier imagen para agrandarla en pantalla completa y ver cada detalle de terminación de termopaneles, puertas y colectores solares.
          </p>
        </div>

        {/* Foto destacada con controles manuales y altura adaptable */}
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Image (7 cols) - Clickeable para agrandar */}
            <div
              onClick={() => openLightboxAt(currentIndex)}
              className="group lg:col-span-7 relative h-[280px] sm:h-[400px] lg:min-h-[440px] lg:h-full w-full overflow-hidden bg-zinc-950 cursor-pointer"
              title="Haz clic para agrandar esta imagen"
            >
              <img
                src={currentPhoto.image}
                alt={currentPhoto.title}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay Badge con indicador de zoom */}
              <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="px-4 py-2 rounded-2xl bg-zinc-900/90 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4 text-kotai-400" />
                  <span>Clic para agrandar foto</span>
                </div>
              </div>

              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900/90 text-white backdrop-blur-sm border border-white/20">
                  {currentPhoto.tag}
                </span>
              </div>

              {/* Botón flotante para agrandar en la esquina superior derecha */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightboxAt(currentIndex);
                  }}
                  className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-kotai-800 text-white backdrop-blur-sm border border-white/20 shadow-md transition-all duration-200"
                  aria-label="Agrandar imagen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-sm bg-zinc-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <span className="font-semibold text-zinc-200">
                  Foto {currentIndex + 1} de {total}
                </span>
                <span className="text-xs text-kotai-300 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-kotai-400 animate-pulse" />
                  Clic para pantalla completa
                </span>
              </div>
            </div>

            {/* Information (5 cols) with friendly large text */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-auto lg:h-full space-y-5">
              <div className="space-y-3.5">
                <div className="text-xs uppercase font-bold text-kotai-800 tracking-wider">
                  Detalle de Instalación
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                  {currentPhoto.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                  {currentPhoto.description}
                </p>

                <div className="p-4 rounded-2xl bg-white border border-zinc-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-kotai-800 shrink-0" />
                    <span>Materiales certificados bajo norma chilena</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-kotai-800 shrink-0" />
                    <span>Acompañamiento y postulación ante el Serviu</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-base font-semibold text-zinc-700" aria-live="polite">Foto {currentIndex + 1} de {total}</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openLightboxAt(currentIndex)}
                    className="p-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700 shadow-sm transition-colors active:scale-95"
                    title="Agrandar foto actual"
                    aria-label="Agrandar foto actual"
                  >
                    <Maximize2 className="w-5 h-5 text-kotai-800" />
                  </button>
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700 shadow-sm transition-colors active:scale-95"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700 shadow-sm transition-colors active:scale-95"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-base text-zinc-600">Fotos {pageStart + 1} a {Math.min(pageStart + pageSize, total)} de {total}</p>
            <div className="flex gap-2">
              <button type="button" disabled={pageStart === 0} onClick={() => setCurrentIndex(pageStart - pageSize)} className="min-h-11 px-4 rounded-lg border border-zinc-300 font-semibold disabled:opacity-40">Fotos anteriores</button>
              <button type="button" disabled={pageStart + pageSize >= total} onClick={() => setCurrentIndex(pageStart + pageSize)} className="min-h-11 px-4 rounded-lg border border-zinc-300 font-semibold disabled:opacity-40">Más fotos</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {visiblePhotos.map((photo, offset) => {
              const index = pageStart + offset;
              return <button type="button" key={photo.id} onClick={() => setCurrentIndex(index)} aria-pressed={index === currentIndex} aria-label={`Seleccionar foto ${index + 1}: ${photo.title}`} className={`text-left rounded-xl overflow-hidden border-2 bg-white ${index === currentIndex ? 'border-kotai-800' : 'border-zinc-200 hover:border-kotai-300'}`}>
                <img src={photo.image} alt="" loading="lazy" className="w-full h-24 object-cover" />
                <span className="block px-3 py-2 text-sm font-semibold text-zinc-800">Foto {index + 1}</span>
              </button>;
            })}
          </div>
        </div>

      </div>

      {/* Modal de Imagen Agrandable (Lightbox) con navegación y descripciones */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => {
          setLightboxIndex(newIdx);
          setCurrentIndex(newIdx); // Sincronizar el carrusel principal
        }}
      />
    </section>
  );
};

export default RealWorksCarousel;
