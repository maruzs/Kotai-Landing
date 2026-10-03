import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, HardHat, Camera, Pause, Play } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  note: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Montaje de Cerchas y Techumbre Metálica",
    category: "Montaje Industrial",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    note: "Estructuras soldadas y apernadas de alta resistencia",
  },
  {
    id: 2,
    title: "Habilitación y Cimientos Sólidos",
    category: "Obra Gruesa",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    note: "Radieres con malla acma y hormigón certificado",
  },
  {
    id: 3,
    title: "Ampliación de Segundo Piso en Metalcon",
    category: "Vivienda Familiar",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    note: "Construcción ligera y aislada acústicamente",
  },
  {
    id: 4,
    title: "Terminaciones Interiores y Carpintería",
    category: "Terminaciones",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    note: "Pisos flotantes, cerámicos y pintura lavable",
  },
  {
    id: 5,
    title: "Instalación de Cubiertas de Zinc y Drenaje",
    category: "Techumbres",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    note: "Cero goteras, canaletas de hojalatería continua",
  },
  {
    id: 6,
    title: "Vivienda Social Terminada Llave en Mano",
    category: "Subsidios Serviu",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    note: "Entregada a tiempo y lista para habitar",
  }
];

export const ProjectsAutoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section className="py-14 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with play/pause accessibility control */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-kotai-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Camera className="w-4 h-4" />
              <span>Galería en Terreno</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Registro Visual de Trabajos en Ejecución
            </h3>
            <p className="text-stone-400 text-sm sm:text-base mt-1">
              Fotografías tomadas directamente en nuestras obras a lo largo de Chile.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-700 transition"
              aria-label={isPlaying ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
            </button>

            <button
              onClick={prev}
              className="p-2.5 rounded-lg bg-stone-800 hover:bg-kotai-800 text-white transition border border-stone-700"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="p-2.5 rounded-lg bg-stone-800 hover:bg-kotai-800 text-white transition border border-stone-700"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div 
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Grid view on desktop, single slide on mobile, dynamically animated */}
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1))}%)`
            }}
          >
            {GALLERY_ITEMS.concat(GALLERY_ITEMS).map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2.5"
              >
                <div className="group relative rounded-xl overflow-hidden bg-stone-800 border border-stone-700/60 aspect-[4/3] shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="bg-kotai-800/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="font-bold text-white text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-300 mt-1 flex items-center gap-1">
                      <HardHat className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item.note}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {GALLERY_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-6 bg-kotai-500' : 'w-2 bg-stone-700 hover:bg-stone-500'
              }`}
              aria-label={`Ver foto ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
