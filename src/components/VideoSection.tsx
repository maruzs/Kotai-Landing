import React, { useState, useRef } from 'react';
import { SiteLink } from './SiteLink';
export const VideoSection: React.FC = () => {
  const [error, setError] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  return <section id="video-explicativo" className="section-space bg-white border-t border-zinc-200"><div className="site-container narrow-content">
    <div className="section-heading"><h2>Conoce el mejoramiento térmico</h2><p className="intro">Un video explicativo sobre las mejoras y el acompañamiento de Kotai.</p></div>
    <video ref={video} src="/video_kotai_oficial.mp4" poster="/video_poster.jpg" controls playsInline preload="none" className="w-full aspect-video rounded-xl bg-zinc-900" onError={() => setError(true)} />
    {error && <div role="alert" className="media-error"><p>No pudimos cargar el video.</p><button className="button-secondary" onClick={() => { setError(false); video.current?.load(); }}>Volver a intentar</button></div>}
    <p className="field-hint mt-4">El material fue preparado anteriormente. Los montos de ahorro que aparecen en el video están pendientes de confirmación. Consulta las condiciones de tu caso con el equipo.</p>
    <SiteLink href="/contacto" className="text-link mt-4">Resolver mis dudas con Kotai →</SiteLink>
  </div></section>;
};
