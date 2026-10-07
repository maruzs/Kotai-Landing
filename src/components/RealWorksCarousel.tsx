import React, { useState } from 'react';
import { REAL_WORKS_GALLERY } from '../data/mockData';
import { ImageLightboxModal } from './ImageLightboxModal';
export const RealWorksCarousel: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null);
  const [count, setCount] = useState(6);
  return <section className="section-space bg-white"><div className="site-container">
    <div className="section-heading"><h2>Detalles de instalaciones y terminaciones</h2><p className="intro">Ventanas, puertas, revestimientos y otros trabajos en terreno.</p></div>
    <div className="provider-photo-grid">{REAL_WORKS_GALLERY.slice(0, count).map((p, i) => <button className="photo-button" key={p.id} onClick={() => setIndex(i)} aria-label={`Ampliar: ${p.title}`}><img src={p.image} alt={p.title} width="440" height="320" loading="lazy" /><span>{p.title}</span></button>)}</div>
    {count < REAL_WORKS_GALLERY.length && <button className="button-secondary mt-8" onClick={() => setCount(count + 6)}>Ver más fotografías ({REAL_WORKS_GALLERY.length - count} restantes)</button>}
  </div><ImageLightboxModal isOpen={index !== null} items={REAL_WORKS_GALLERY.map(p => ({ id: p.id, image: p.image, title: p.title }))} currentIndex={index ?? 0} onClose={() => setIndex(null)} onNavigate={setIndex} /></section>;
};
