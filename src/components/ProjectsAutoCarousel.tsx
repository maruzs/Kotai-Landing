import React, { useState } from 'react';
import { PROJECTS_GALLERY } from '../data/mockData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { SiteLink } from './SiteLink';
export const ProjectsAutoCarousel: React.FC = () => {
  const [category, setCategory] = useState('Todos');
  const [index, setIndex] = useState<number | null>(null);
  const categories = ['Todos', ...new Set(PROJECTS_GALLERY.map(p => p.category))];
  const projects = category === 'Todos' ? PROJECTS_GALLERY : PROJECTS_GALLERY.filter(p => p.category === category);
  return <section id="proyectos" className="section-space"><div className="site-container">
    <div className="section-heading"><h2>Mejoras de viviendas</h2><p className="intro">Selecciona una fotografía para verla en detalle.</p></div>
    <div className="button-group mb-6" aria-label="Filtrar fotografías">{categories.map(c => <button key={c} className={category === c ? 'button-primary' : 'button-secondary'} aria-pressed={category === c} onClick={() => { setCategory(c); setIndex(null); }}>{c}</button>)}</div>
    <p className="field-hint mb-6" role="status">{projects.length} fotografías disponibles</p>
    {projects.length ? <div className="provider-photo-grid">{projects.map((p, i) => <button className="photo-button" key={p.id} onClick={() => setIndex(i)} aria-label={`Ampliar: ${p.title}`}><img src={p.image} alt={p.title} width="440" height="320" loading="lazy" /><span>{p.title}</span></button>)}</div> : <div className="panel"><h3>No hay fotografías en esta categoría</h3><button className="button-secondary" onClick={() => setCategory('Todos')}>Ver todas las fotografías</button></div>}
    <SiteLink href="/contacto" className="text-link mt-6">Consultar por las mejoras de mi vivienda →</SiteLink>
  </div><ImageLightboxModal isOpen={index !== null} items={projects.map(p => ({ id: p.id, image: p.image, title: p.title }))} currentIndex={index ?? 0} onClose={() => setIndex(null)} onNavigate={setIndex} /></section>;
};
