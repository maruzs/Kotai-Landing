import React, { useEffect, useRef, useState } from 'react';
import { navigate } from '../utils/navigation';
import { Camera, ChevronDown, HeartHandshake, Maximize2 } from 'lucide-react';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

const pictures: LightboxItem[] = [
  { id: 'grupo', image: '/images/comunidad/7134df69-b6e0-4818-a383-969d1686718f.jpeg', title: 'Encuentro con la comunidad', description: 'Un momento compartido entre quienes participaron en el encuentro.' },
  { id: 'conversacion', image: '/images/comunidad/41fd5e0c-1a4c-43c9-a1f1-65acc7c527f3.jpeg', title: 'Conversación en torno a la mesa', description: 'Un espacio para reunirse y compartir con la comunidad.' },
  { id: 'equipo', image: '/images/comunidad/8c8356f1-a282-45f7-8606-cd261b66eb17.jpeg', title: 'Un encuentro para compartir', description: 'Personas participantes reunidas en la actividad.' },
  { id: 'mesa', image: '/images/comunidad/5d2ebcf0-2a71-4460-b4f1-26515af519f1.jpeg', title: 'Preparativos del encuentro', description: 'La mesa preparada para recibir a las personas participantes.' },
  { id: 'flores', image: '/images/comunidad/1ecfa94c-5c1f-4bba-bbac-9be48865c322.jpeg', title: 'Detalles de la mesa', description: 'Preparativos para compartir durante la actividad.' },
  { id: 'alimentos', image: '/images/comunidad/6a1e9665-73b4-4f42-88dd-6e5f22e7bb3e.jpeg', title: 'Una mesa para compartir', description: 'Detalles de la preparación del encuentro.' },
  { id: 'dulces', image: '/images/comunidad/7ebe7599-00f7-46e4-804c-70e69247e984.jpeg', title: 'Detalles del encuentro', description: 'Preparativos para recibir a la comunidad.' },
  { id: 'recepcion', image: '/images/comunidad/bc3f6934-f320-4936-ae80-5063af08347e.jpeg', title: 'Preparación de la mesa', description: 'Un detalle de la recepción de la actividad.' },
];

export const CommunitySection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [playerVisible, setPlayerVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => setPlayerVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  const photoButton = (photo: LightboxItem, index: number) => (
    <button key={photo.id} type="button" onClick={() => { setCurrent(index); setOpen(true); }}
      aria-label={`Ampliar fotografía: ${photo.title}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 text-left shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-kotai-800">
      <span className="block aspect-[4/3] overflow-hidden">
        <img src={photo.image} alt={photo.title} loading="lazy" className="h-full w-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-300" />
      </span>
      <span className="flex min-h-14 items-center justify-between gap-3 bg-white px-4 py-3 text-sm font-semibold text-zinc-900">
        {photo.title}<Maximize2 size={18} className="shrink-0 text-kotai-800" aria-hidden="true" />
      </span>
    </button>
  );
  return (
    <section id="vinculacion" aria-labelledby="vinculacion-title" data-player-visible={playerVisible} className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mb-10">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-sm font-bold uppercase tracking-wider"><HeartHandshake size={17} aria-hidden="true" /> Cercanía y comunidad</div>
            <h2 id="vinculacion-title" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950">Vinculación con el medio</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">Creemos que mejorar los hogares también comienza por encontrarnos y escucharnos. En Kotai valoramos el diálogo con las juntas de vecinos, dirigentes y familias, porque cada comunidad conoce de cerca sus propias necesidades.</p>
          </div>
          <div className="md:col-span-5 border-l-4 border-kotai-800 pl-5 py-1">
            <h3 className="text-xl font-bold text-zinc-900">Un encuentro para compartir</h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-600">Compartimos un espacio de conversación y cercanía con la comunidad. Estos momentos nos permiten fortalecer los vínculos y seguir avanzando juntos.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">{pictures.slice(0, 3).map((photo, index) => photoButton(photo, index))}</div>
        <details className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
          <summary className="min-h-11 cursor-pointer flex items-center gap-2 text-base font-bold text-kotai-800"><Camera size={20} aria-hidden="true" /> Ver más momentos del encuentro <ChevronDown size={20} className="ml-auto" aria-hidden="true" /></summary>
          <p className="mt-2 text-sm text-zinc-600">Imágenes y un breve video de los preparativos de la actividad.</p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">{pictures.slice(3).map((photo, index) => photoButton(photo, index + 3))}</div>
          <div className="mt-6 max-w-sm">
            <h3 className="mb-3 text-base font-bold text-zinc-900">Video de los preparativos</h3>
            <video ref={videoRef} controls playsInline preload="none" poster="/images/comunidad/1ecfa94c-5c1f-4bba-bbac-9be48865c322.jpeg" className="w-full max-h-[520px] rounded-xl bg-zinc-950 object-contain" aria-label="Video breve de la mesa preparada para el encuentro comunitario">
              <source src="/videos/encuentro-comunidad.mp4" type="video/mp4" /> Tu navegador no puede reproducir este video.
            </video>
          </div>
        </details>
        <a href="/#contacto" onClick={e => { e.preventDefault(); navigate('/#contacto'); }} className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-kotai-800 hover:bg-kotai-900 px-6 py-3 text-base font-bold text-white transition-colors">Conversemos sobre tu comunidad</a>
      </div>
      <ImageLightboxModal isOpen={open} onClose={() => setOpen(false)} items={pictures} currentIndex={current} onNavigate={setCurrent} />
    </section>
  );
};
