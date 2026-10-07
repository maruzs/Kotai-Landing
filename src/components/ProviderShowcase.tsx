import React, { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink, Maximize2 } from 'lucide-react';
import { PROVIDER_VIDEOS, PROVIDER_PHOTOS } from '../data/mockData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { SiteLink } from './SiteLink';
const videoNames = ['De la medición a la instalación', 'Correderas de triple riel', 'Ventanas PVC Winhouse', 'Materiales de ferretería', 'Ventanales instalados', 'Cerramientos de oficinas'];
const photoNames = ['Instalaciones y vehículos', 'Transporte de ventanas', 'Ventanas termopanel', 'Puertas con termopanel', 'Puertas y ventanales instalados', 'Despacho en terreno'];
export const ProviderShowcase: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [portrait, setPortrait] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const active = PROVIDER_VIDEOS[selected];
  useEffect(() => { setFailed(false); setLoading(true); setPortrait(false); }, [selected]);
  return <section id="proveedor" className="section-space">
    <div className="site-container">
      <div className="section-heading"><p className="eyebrow">Fábrica de ventanas y proveedor principal</p><h2>Trabajamos con Grupo Valey</h2><p className="intro">Kotai recomienda a Vidriería y Ferretería Valey para las constructoras del sector. Aquí puedes conocer su fábrica de ventanas, materiales y trabajo en terreno.</p></div>
      <div className="provider-partners">
        <article><img src="/images/valey/logo_vidrieria_valey.png" alt="Vidriería Valey" width="100" height="114" /><div><h3>Vidriería Valey</h3><p>Fábrica de ventanas certificadas. Desde la medición hasta la instalación de ventanas termopanel.</p></div></article>
        <article><img src="/images/valey/logo_ferreteria_valey.png" alt="Ferretería Valey" width="100" height="114" /><div><h3>Ferretería Valey</h3><p>Proveedor principal de materiales para las obras de Kotai.</p></div></article>
      </div>
      <div className="provider-video">
        <div className={`provider-player ${portrait ? 'portrait' : ''}`}>
          <video key={active.videoSrc} ref={video} src={active.videoSrc} poster={active.posterSrc} controls playsInline preload="metadata"
            onLoadedMetadata={e => { setPortrait(e.currentTarget.videoHeight > e.currentTarget.videoWidth); setLoading(false); }}
            onError={() => { setFailed(true); setLoading(false); }}>
            Tu navegador no puede reproducir este video. <a href={active.videoSrc}>Abrir el video</a>.
          </video>
          {loading && !failed && <p className="media-notice" role="status">Preparando video…</p>}
          {failed && <div className="media-error" role="alert"><p>No pudimos cargar el video.</p><button className="button-secondary" onClick={() => { setFailed(false); setLoading(true); video.current?.load(); }}>Volver a intentar</button><a href={active.videoSrc} className="text-link">Abrir video directamente <ExternalLink size={18} /></a></div>}
        </div>
        <div className="provider-playlist"><h3>Conoce el trabajo de Valey</h3><p>Elige un video y presiona reproducir. Puedes ampliar el reproductor con sus controles.</p>
          <ol>{PROVIDER_VIDEOS.map((v, i) => <li key={v.id}><button aria-pressed={i === selected} onClick={() => setSelected(i)}><Play size={18} aria-hidden="true" /><span>{videoNames[i]}<small>{i === selected ? 'Seleccionado' : `Video ${i + 1}`}</small></span></button></li>)}</ol>
        </div>
      </div>
      <div className="section-heading"><h3>Fotografías de fábrica y montaje</h3><p>Selecciona una fotografía para verla ampliada.</p></div>
      <div className="provider-photo-grid">{PROVIDER_PHOTOS.map((p, i) => <button className="photo-button" key={p.id} onClick={() => setLightbox(i)} aria-label={`Ampliar: ${photoNames[i]}`}><img src={p.image} alt={photoNames[i]} loading="lazy" width="440" height="320" /><span>{photoNames[i]}<Maximize2 size={18} aria-hidden="true" /></span></button>)}</div>
      <div className="guidance-callout"><h3>¿Tienes preguntas sobre las mejoras de tu vivienda?</h3><p>El equipo de Kotai puede orientarte sin costo.</p><SiteLink href="/contacto" className="button-primary">Consultar con Kotai</SiteLink></div>
    </div>
    <ImageLightboxModal isOpen={lightbox !== null} onClose={() => setLightbox(null)} items={PROVIDER_PHOTOS.map((p, i) => ({ id: p.id, image: p.image, title: photoNames[i] }))} currentIndex={lightbox ?? 0} onNavigate={setLightbox} />
  </section>;
};
