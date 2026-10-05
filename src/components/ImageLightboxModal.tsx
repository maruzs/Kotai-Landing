import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';

export interface LightboxItem {
  id?: string;
  image: string;
  title: string;
  description?: string;
  tag?: string;
  category?: string;
  location?: string;
  specs?: string[];
}

export interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = items.length;
  const currentItem = items[currentIndex] || items[0];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Teclado: Escape para cerrar, Flechas para navegar
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Bloquear scroll de la página mientras el modal está abierto
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Gestos táctiles para móviles (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diffX > minSwipeDistance) {
      handleNext();
    } else if (diffX < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-md text-white transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador de imagen: ${currentItem.title}`}
    >
      {/* Barra superior de controles */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-800 bg-zinc-950/80 z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-kotai-800 text-white text-xs font-bold uppercase tracking-wider">
            {currentItem.tag || currentItem.category || 'Galería'}
          </span>
          <span className="text-xs sm:text-sm text-zinc-400 font-medium">
            {currentIndex + 1} de {total}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-xs text-zinc-400 font-normal">
            Presiona <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px]">Esc</kbd> o clic afuera para cerrar
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors duration-150 active:scale-95"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
            <span className="text-xs font-semibold sm:inline">Cerrar</span>
          </button>
        </div>
      </div>

      {/* Área Principal: Imagen + Flechas Navegación */}
      <div
        className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none"
        onClick={(e) => {
          // Si el clic es en el fondo (no en la imagen ni en los botones), cerrar
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botón Anterior */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-zinc-900/80 hover:bg-kotai-800 text-white border border-white/10 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
          aria-label="Ver imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Contenedor de la Imagen con zoom interactivo */}
        <div className="relative max-h-[58vh] sm:max-h-[66vh] max-w-5xl w-full flex items-center justify-center">
          <img
            key={currentItem.image}
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[58vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 transition-transform duration-300"
          />
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-zinc-900/80 hover:bg-kotai-800 text-white border border-white/10 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
          aria-label="Ver imagen siguiente"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Panel Inferior: Información Detallada y Miniaturas */}
      <div className="border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md px-4 sm:px-6 py-4 z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Título y Descripción con alta legibilidad */}
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                {currentItem.title}
              </h4>
              {currentItem.location && (
                <div className="flex items-center gap-1 text-xs text-kotai-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentItem.location}</span>
                </div>
              )}
            </div>

            {currentItem.description && (
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {currentItem.description}
              </p>
            )}

            {currentItem.specs && currentItem.specs.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {currentItem.specs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-300"
                  >
                    <CheckCircle className="w-3 h-3 text-kotai-400" />
                    {spec}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Carrusel de Miniaturas Interactivas (como tienda online) */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-zinc-700">
            {items.map((item, idx) => (
              <button
                key={item.id || idx}
                onClick={() => onNavigate(idx)}
                className={`relative shrink-0 rounded-lg overflow-hidden h-12 w-16 sm:h-14 sm:w-20 border-2 transition-all duration-200 ${
                  idx === currentIndex
                    ? 'border-kotai-500 ring-2 ring-kotai-500/40 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`Ver foto ${idx + 1}: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImageLightboxModal;
