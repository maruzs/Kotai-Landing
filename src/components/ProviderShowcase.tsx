import React, { useState } from 'react';
import { navigate } from '../utils/navigation';
import { Building2, Maximize2, ShieldCheck } from 'lucide-react';
import { KOTAI_TEAM_PHOTOS } from '../data/mockData';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

export const ProviderShowcase: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightboxAt = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };
  const lightboxItems: LightboxItem[] = KOTAI_TEAM_PHOTOS.map(p => ({
    id: p.id, image: p.image, title: p.title, description: p.description, tag: p.tag,
  }));

  return (
    <section id="proveedor" aria-labelledby="ventanas-title" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-sm font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" /> Calidad para tu hogar
            </div>
            <h2 id="ventanas-title" className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">Ventanas termopanel certificadas</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">La calidad de las ventanas es parte importante del bienestar en el hogar. En Kotai trabajamos con ventanas termopanel certificadas, pensadas para aportar confort y protección a tu vivienda.</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">Nuestro equipo puede orientarte sobre las alternativas para el mejoramiento de tu casa.</p>
            <a href="/#contacto" onClick={e => { e.preventDefault(); navigate('/#contacto'); }} className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-kotai-800 hover:bg-kotai-900 px-5 py-3 font-bold text-white transition-colors">Solicitar orientación</a>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-sm border border-zinc-200">
            <img src="/images/Termopanel5.jpg" alt="Ventana termopanel instalada en una vivienda" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div role="region" aria-labelledby="equipo-galeria-titulo">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5 text-kotai-800" />
              <span>Las Personas detrás de Kotai</span>
            </div>
            <h3 id="equipo-galeria-titulo" className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Nuestro Equipo, Siempre Junto a Ti
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Conoce a nuestro equipo y los espacios donde trabajamos por tu hogar. Haz clic en una fotografía para ampliarla.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KOTAI_TEAM_PHOTOS.map((photo, pIdx) => (
              <button
                type="button"
                key={photo.id}
                onClick={() => openLightboxAt(pIdx)}
                className="text-left group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md hover:border-kotai-300 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div className="h-48 sm:h-52 w-full overflow-hidden bg-zinc-950 relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center motion-safe:group-hover:scale-105 transition-transform duration-300"
                    width={1280}
                    height={720}
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-900/90 text-white backdrop-blur-sm border border-white/20">
                      {photo.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center shadow-md">
                      <Maximize2 className="w-5 h-5 text-kotai-800" />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900 mb-1 leading-snug group-hover:text-kotai-800 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {photo.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-semibold text-kotai-800">
                    <span>Ver detalle ampliado</span>
                    <span>→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
      <ImageLightboxModal isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} items={lightboxItems} currentIndex={lightboxIndex} onNavigate={setLightboxIndex} />
    </section>
  );
};
export default ProviderShowcase;
