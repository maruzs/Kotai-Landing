import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { NEW_WORKS } from '../data/newWorks';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

const photos: LightboxItem[] = NEW_WORKS.flatMap(work => work.photos.map(photo => ({
  id: photo.src,
  image: photo.src,
  title: `${work.title}: ${photo.view.toLowerCase()}, ${photo.label.toLowerCase()}`,
  description: work.description,
})));

export const NewWorksGallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <section id="nuevas-obras" aria-labelledby="nuevas-obras-title" className="py-16 sm:py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-sm font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" aria-hidden="true" /> Nuevas fotografías
          </div>
          <h2 id="nuevas-obras-title" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">Transformaciones de viviendas</h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">Conoce tres viviendas antes y después de los trabajos. Selecciona cualquier foto para verla ampliada.</p>
        </div>

        <div className="space-y-6">
          {NEW_WORKS.map(work => (
            <article key={work.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900">{work.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{work.description}</p>
              <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 ${work.photos.length > 2 ? 'lg:grid-cols-4' : ''}`}>
                {work.photos.map(photo => (
                  <figure key={photo.src}>
                    <button type="button" onClick={() => { setCurrent(photos.findIndex(item => item.image === photo.src)); setOpen(true); }}
                      aria-label={`Ampliar ${work.title}, ${photo.view.toLowerCase()}, ${photo.label.toLowerCase()}`}
                      className="group relative block w-full aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kotai-800">
                      <img src={photo.src} alt={`${work.title}, ${photo.view.toLowerCase()}, ${photo.label.toLowerCase()}`} loading="lazy" className="w-full h-full object-contain" />
                      <span className="absolute top-3 left-3 rounded-lg bg-zinc-950/90 px-3 py-1.5 text-xs font-bold uppercase text-white">{photo.label}</span>
                      <span className="absolute bottom-3 right-3 rounded-full bg-zinc-950/80 p-2 text-white" aria-hidden="true"><Maximize2 size={18} /></span>
                    </button>
                    <figcaption className="mt-2 text-sm font-semibold text-zinc-600">{photo.view} · {photo.label}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <ImageLightboxModal isOpen={open} onClose={() => setOpen(false)} items={photos} currentIndex={current} onNavigate={setCurrent} />
    </section>
  );
};
