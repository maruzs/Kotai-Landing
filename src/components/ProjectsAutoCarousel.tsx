import { navigate } from '../utils/navigation';
import React, { useState, useEffect } from 'react';
import { PROJECTS_GALLERY, ProjectSlide } from '../data/mockData';
import { MapPin, CheckCircle, Layers, ZoomIn, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

export const ProjectsAutoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['Todos', ...new Set(PROJECTS_GALLERY.map(project => project.category))];

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter((p) => p.category === selectedCategory);

  const total = filteredProjects.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(`/${href}`);
  };

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const currentProject: ProjectSlide = filteredProjects[currentIndex] || filteredProjects[0];

  // Adaptar proyectos para el modal Lightbox
  const lightboxItems: LightboxItem[] = filteredProjects.map((p) => ({
    id: p.id,
    image: p.image,
    title: p.title,
    description: p.description,
    category: p.category,
    location: p.location,
    specs: p.specs,
  }));

  return (
    <section id="proyectos" className="py-12 sm:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kotai-100 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-kotai-800" />
            <span>Obras Ejecutadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Proyectos de Acondicionamiento y Aislamiento Térmico
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Obras reales de mejoramiento habitacional y eficiencia energética ejecutadas bajo subsidios Serviu con garantía Kotai. Haz clic en las fotos para verlas en grande.
          </p>
        </div>

        {/* Filter Categories Pills with larger fonts */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentIndex(0); }}
              aria-pressed={selectedCategory === cat}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-kotai-800 text-white shadow-sm'
                  : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ficha de proyecto con altura adaptable */}
        {currentProject && (
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

              {/* Left / Image Half (7 cols) - Clickeable para agrandar */}
              <div
                onClick={() => openLightboxAt(currentIndex)}
                className="group lg:col-span-7 relative h-[280px] sm:h-[400px] lg:min-h-[460px] lg:h-full w-full overflow-hidden bg-zinc-950 cursor-pointer"
                title="Haz clic para agrandar la imagen del proyecto"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />

                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-2xl bg-zinc-900/90 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 text-kotai-400" />
                    <span>Clic para agrandar obra</span>
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900/90 text-white backdrop-blur-sm border border-white/20">
                    {currentProject.category}
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

                {/* Location Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs sm:text-sm bg-zinc-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 font-medium">
                    <MapPin className="w-4 h-4 text-kotai-400 shrink-0" />
                    <span className="truncate">{currentProject.location}</span>
                  </div>
                  <span className="font-semibold text-zinc-200 shrink-0 ml-2">
                    {currentIndex + 1} de {total}
                  </span>
                </div>
              </div>

              {/* Right / Information Half (5 cols) with Larger Text */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-auto lg:h-full space-y-4">
                <div className="space-y-3">
                  <div className="text-xs uppercase font-bold text-kotai-800 tracking-wider">
                    Proyecto Aprobado Serviu
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase text-zinc-400 mb-2">
                      Detalles de la Obra
                    </div>
                    <ul className="space-y-2">
                      {currentProject.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700">
                          <CheckCircle className="w-4 h-4 text-kotai-800 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-base font-semibold" aria-live="polite">Obra {currentIndex + 1} de {total}</span>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setCurrentIndex((currentIndex - 1 + total) % total)} className="w-11 h-11 grid place-items-center rounded-xl border border-zinc-300" aria-label="Obra anterior"><ChevronLeft className="w-5 h-5" /></button>
                      <button type="button" onClick={() => setCurrentIndex((currentIndex + 1) % total)} className="w-11 h-11 grid place-items-center rounded-xl border border-zinc-300" aria-label="Obra siguiente"><ChevronRight className="w-5 h-5" /></button>
                      <button type="button" onClick={() => openLightboxAt(currentIndex)} className="w-11 h-11 grid place-items-center rounded-xl border border-zinc-300" aria-label="Agrandar imagen de la obra"><Maximize2 className="w-5 h-5 text-kotai-800" /></button>
                    </div>
                  </div>
                  <a href="/#contacto" onClick={e => handleSoftScroll(e, '#contacto')} className="inline-flex items-center justify-center min-h-11 px-5 py-3 rounded-xl bg-kotai-800 hover:bg-kotai-700 text-white text-sm font-bold">Postular a este Programa</a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Thumbnail Preview Strip */}
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {filteredProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setCurrentIndex(idx);
                if (idx === currentIndex) {
                  openLightboxAt(idx);
                }
              }}
              title={`Ver obra: ${proj.title}`}
              className={`group relative rounded-xl overflow-hidden h-16 sm:h-20 border-2 transition-all duration-200 ${
                idx === currentIndex
                  ? 'border-kotai-800 ring-2 ring-kotai-800/30'
                  : 'border-transparent opacity-65 hover:opacity-100'
              }`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-1.5">
                <span className="text-[10px] sm:text-xs font-semibold text-white line-clamp-1 text-left leading-tight">
                  {proj.title}
                </span>
              </div>
              <div className="absolute inset-0 bg-zinc-950/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <ZoomIn className="w-4 h-4 text-white drop-shadow" />
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Modal de Imagen Agrandable (Lightbox) */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => {
          setLightboxIndex(newIdx);
          setCurrentIndex(newIdx);
        }}
      />
    </section>
  );
};

export default ProjectsAutoCarousel;
