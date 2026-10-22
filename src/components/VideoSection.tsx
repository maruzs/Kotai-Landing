import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, LoaderCircle, MessageSquare, Play, RotateCcw } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { navigate } from '../utils/navigation';

const VIDEO_SRC = '/videos/kotai-mejorando-juntos.mp4';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => setPlayerVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const play = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (failed) video.load();
    setFailed(false);
    setLoading(true);
    try {
      await video.play();
    } catch {
      setFailed(true);
      setLoading(false);
    }
  };

  return (
    <section id="video-explicativo" aria-labelledby="video-kotai-title" data-player-visible={playerVisible} className="py-14 md:py-20 bg-brand-sand border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-7 md:mb-9">
          <p className="text-sm font-bold uppercase tracking-wider text-kotai-800 mb-3">Conoce a Constructora Kotai · 1:59 min</p>
          <h2 id="video-kotai-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">Mejorando juntos</h2>
          <p id="video-kotai-description" className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed">
            Nuestro equipo, nuestras obras y una misma motivación: el bienestar de tu hogar.
            Descubre cómo te acompañamos en toda la región del Biobío y Ñuble.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-soft">
          <video ref={videoRef} src={VIDEO_SRC} poster="/videos/posters/kotai-mejorando-juntos.jpg"
            aria-label="Video de Constructora Kotai: Mejorando juntos" aria-describedby="video-kotai-description"
            controls={started} playsInline preload="none" width={1920} height={1080} className="block w-full h-full object-contain"
            onPlay={() => setStarted(true)} onPlaying={() => setLoading(false)} onWaiting={() => setLoading(true)}
            onCanPlay={() => setLoading(false)} onError={() => { setFailed(true); setLoading(false); }} />
          {!started && !failed && (
            <button type="button" onClick={play} aria-label="Reproducir video Mejorando juntos"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-3 rounded-full bg-kotai-800 text-white border border-white/50 px-5 py-3 md:px-7 md:py-4 font-bold text-sm md:text-lg shadow-lg hover:bg-kotai-900 transition-colors min-h-12 whitespace-nowrap">
              <Play className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true" /> Ver video
            </button>
          )}
          {loading && !failed && (
            <div role="status" className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-lg bg-zinc-950/90 px-3 py-2 text-sm text-white">
              <LoaderCircle className="h-4 w-4 motion-safe:animate-spin" aria-hidden="true" /> Cargando video…
            </div>
          )}
          {failed && (
            <div role="alert" className="absolute inset-0 bg-zinc-950/95 flex flex-col items-center justify-center gap-3 p-4 text-center text-white">
              <p className="font-semibold text-sm md:text-lg">No pudimos reproducir el video.</p>
              <p className="hidden md:block text-sm text-zinc-300">Comprueba tu conexión e inténtalo de nuevo.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button type="button" onClick={play} className="inline-flex items-center gap-2 rounded-lg bg-white text-zinc-900 px-4 py-3 min-h-11 font-bold text-sm">
                  <RotateCcw size={18} aria-hidden="true" /> Reintentar
                </button>
                <a href={VIDEO_SRC} download className="inline-flex items-center rounded-lg border border-zinc-500 px-4 py-3 min-h-11 font-semibold text-sm">Descargar video</a>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-zinc-600">Activa el sonido para escuchar nuestra canción. Puedes ampliar el video a pantalla completa.</p>
          <a href={VIDEO_SRC} download className="text-sm font-semibold text-kotai-800 underline underline-offset-4 inline-flex items-center min-h-11 shrink-0">Descargar video · 13 MB</a>
        </div>
        <div className="mt-6 pt-6 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold text-zinc-950">El primer paso es conversar.</h3>
            <p className="mt-1 text-base text-zinc-600">Te orientamos sin costo sobre las mejoras para tu vivienda.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 shrink-0">
            <a href="/#contacto" onClick={e => { e.preventDefault(); navigate('/#contacto'); }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-12 rounded-xl bg-kotai-800 hover:bg-kotai-900 text-white font-bold text-base transition-colors">
              Quiero orientación <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent('Hola Kotai, vi el video Mejorando juntos y quisiera orientación para mejorar mi vivienda.')}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-12 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-base transition-colors">
              <MessageSquare size={20} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
        <details className="mt-6 text-base text-zinc-600">
          <summary className="cursor-pointer font-semibold text-zinc-800 min-h-11 py-3">Prefiero leer la información</summary>
          <p className="mt-2 leading-relaxed max-w-4xl">
            Constructora Kotai te acompaña paso a paso para mejorar tu hogar, con orientación gratuita sobre mejoramiento térmico,
            instalaciones eléctricas y colectores solares. Nuestro equipo trabaja junto a las familias y sus comunidades en
            Los Ángeles, Concepción, Hualpén, Lota y toda la región del Biobío y Ñuble.
            Llámanos o escríbenos al {COMPANY_INFO.phone} para comenzar.
          </p>
        </details>
      </div>
    </section>
  );
};
export default VideoSection;
