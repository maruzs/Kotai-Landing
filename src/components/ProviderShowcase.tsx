import { navigate } from '../utils/navigation';
import React, { useState, useRef } from 'react';
import {
  Building2,
  ShieldCheck,
  Play,
  Sparkles,
  Truck,
  Maximize2,
  Check,
  ThumbsUp,
  Award
} from 'lucide-react';
import { PROVIDER_VIDEOS, PROVIDER_PHOTOS, ProviderVideoItem } from '../data/mockData';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

export const ProviderShowcase: React.FC = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo: ProviderVideoItem = PROVIDER_VIDEOS[selectedVideoIndex] || PROVIDER_VIDEOS[0];

  const handleVideoSelect = (index: number) => {
    setSelectedVideoIndex(index);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxItems: LightboxItem[] = PROVIDER_PHOTOS.map((p) => ({
    id: p.id,
    image: p.image,
    title: p.title,
    description: p.description,
    tag: p.tag,
  }));

  return (
    <section id="proveedor" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-zinc-200 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-kotai-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-zinc-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kotai-100 border border-kotai-200 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="w-4 h-4 text-kotai-800" />
            <span>Fábrica de Ventanas Certificada & Proveedor Principal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Garantía Directa de Fábrica y Materiales Certificados
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            En <strong>Constructora Kotai</strong> trabajamos directamente con los proveedores y fabricantes líderes de las regiones de Ñuble y Biobío: aliados estratégicos <strong className="text-zinc-900">altamente recomendados para todas las constructoras del sector</strong>, asegurando ventanas de termopanel 100% certificadas, logística propia y cumplimiento estricto de la norma D.S. 27 del MINVU.
          </p>
        </div>

        {/* 2 PILARES ESTRATÉGICOS: VIDRIERÍA VALEY & FERRETERÍA VALEY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Pilar 1: Vidriería Valey (Fábrica Oficial de Ventanas) */}
          <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-kotai-50 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header con Logo y Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="h-14 sm:h-16 w-36 sm:w-44 bg-white rounded-2xl border border-zinc-200/80 p-2 flex items-center justify-center shadow-2xs">
                  <img
                    src="/images/valey/logo_vidrieria_valey.png"
                    alt="Logo Vidriería Valey"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs font-bold uppercase tracking-wider">
                  <ThumbsUp className="w-3.5 h-3.5 text-kotai-800" />
                  <span>Fábrica Altamente Recomendada</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 mb-2">
                Vidriería Valey · Fábrica Oficial de Ventanas
              </h3>

              <div className="inline-block text-xs font-bold uppercase tracking-wider text-kotai-800 bg-kotai-50 px-2.5 py-1 rounded-md mb-4 border border-kotai-100">
                Termopaneles DVH & Perfiles PVC Winhouse Certificados
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                Planta especializada en corte automatizado, termofusión y ensamblaje de ventanas de alta estanqueidad. Es una fábrica de ventanas <strong className="text-zinc-900">altamente recomendada para todas las constructoras del sector</strong> por su precisión milimétrica y cumplimiento con la norma térmica de viviendas.
              </p>

              {/* Puntos Clave */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-kotai-900" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-zinc-950 font-semibold">Proceso Integral de Medición a Instalación:</strong> Toma de medidas técnica en terreno, fabricación en maestranza y montaje final con sellado perimetral hermético.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-kotai-900" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-zinc-950 font-semibold">Doble Vidriado Hermético (DVH):</strong> Sellado doble con Butilo y sales deshidratantes, eliminando por completo la condensación y el frío invernal.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-kotai-900" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-zinc-950 font-semibold">Correderas Triple Riel y Puertas Térmicas:</strong> Soluciones de gran apertura con cierre estanco que impiden filtraciones de viento y polvo.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-semibold">
              <span className="flex items-center gap-1.5 text-kotai-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-kotai-800" />
                Certificación Térmica MINVU / SERVIU
              </span>
              <span>Zona Térmica Sur</span>
            </div>
          </div>

          {/* Pilar 2: Ferretería Valey (Proveedor Principal de Materiales) */}
          <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header con Logo y Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="h-14 sm:h-16 w-36 sm:w-44 bg-white rounded-2xl border border-zinc-200/80 p-2 flex items-center justify-center shadow-2xs">
                  <img
                    src="/images/valey/logo_ferreteria_valey.png"
                    alt="Logo Ferretería Valey"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  <ThumbsUp className="w-3.5 h-3.5 text-kotai-800" />
                  <span>Proveedor Principal Recomendado</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 mb-2">
                Ferretería Valey · Proveedor Principal de Materiales
              </h3>

              <div className="inline-block text-xs font-bold uppercase tracking-wider text-kotai-800 bg-kotai-50 px-2.5 py-1 rounded-md mb-4 border border-kotai-100">
                Materiales de Construcción & Envolvente Térmica Certificada
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                Centro de abastecimiento técnico integral de Grupo Valey. Es el <strong className="text-zinc-900">proveedor principal y altamente recomendado para todas las empresas constructoras</strong> de la región, proporcionando los insumos homologados para licitaciones y obras Serviu D.S. 27.
              </p>

              {/* Puntos Clave */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-kotai-900" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-zinc-950 font-semibold">Todo en un Solo Lugar:</strong> Placas aislantes EIFS de alta densidad, lana de vidrio para techumbre, perfiles metálicos, fibrocemento y siding.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-kotai-900" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-zinc-950 font-semibold">Logística Especializada con Caballete:</strong> Flota de camiones acondicionados para traslado seguro de cristales y materiales sin roturas hasta el domicilio del beneficiario.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-kotai-900" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-zinc-950 font-semibold">Respaldo a Constructoras:</strong> Stock continuo y precios directos de distribuidor para garantizar que las obras no se detengan por falta de suministros.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-semibold">
              <span className="flex items-center gap-1.5 text-zinc-900 font-bold">
                <Truck className="w-4 h-4 text-kotai-800" />
                Despacho Regional Ñuble y Biobío
              </span>
              <span>Flota Propia de Transporte</span>
            </div>
          </div>

        </div>

        {/* REPRODUCTOR INTERACTIVO DE VIDEOS DE FÁBRICA Y PROCESOS */}
        <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-xl mb-16">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-900/90 text-kotai-300 text-xs font-bold uppercase tracking-wider mb-2 border border-kotai-700/50">
                <Sparkles className="w-3.5 h-3.5 text-kotai-400" />
                <span>Registro Audiovisual de Planta y Terreno</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Procesos Reales de Fabricación e Instalación
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Selecciona cualquiera de los videos para ver cómo se elaboran y montan las ventanas y materiales certificados.
              </p>
            </div>

            {/* Video Active Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300">
                Video {selectedVideoIndex + 1} de {PROVIDER_VIDEOS.length}
              </span>
            </div>
          </div>

          {/* Main Video Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Player (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
              <video
                key={activeVideo.videoSrc}
                ref={videoRef}
                src={activeVideo.videoSrc}
                poster={activeVideo.posterSrc}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-contain bg-black"
              />
            </div>

            {/* Description & Video Selector Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-kotai-800 text-white border border-kotai-700">
                    {activeVideo.badge}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">
                    {activeVideo.tag}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeVideo.title}
                </h4>

                <p className="text-sm font-semibold text-kotai-300 leading-normal">
                  {activeVideo.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {activeVideo.description}
                </p>
              </div>

              {/* Endorsement Note */}
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-kotai-400" />
                  <span>Estándar Constructivo Recomendado</span>
                </div>
                <div>
                  Todas las obras de Constructora Kotai incorporan componentes provistos por Vidriería y Ferretería Valey, garantizando durabilidad y cero observaciones técnicas en la recepción de SERVIU.
                </div>
              </div>
            </div>

          </div>

          {/* Video Playlist Pills */}
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
              Catálogo de Videos Disponibles:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROVIDER_VIDEOS.map((vid, idx) => {
                const isSelected = selectedVideoIndex === idx;
                return (
                  <button
                    key={vid.id}
                    onClick={() => handleVideoSelect(idx)}
                    aria-pressed={isSelected}
                    className={`text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-kotai-900/60 border-kotai-500 ring-1 ring-kotai-500/40 text-white shadow-sm'
                        : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-kotai-700 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold line-clamp-2">
                        {vid.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">
                        {vid.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* FOTOGRAFÍAS REALES DE PLANTA, TALLER Y LOGÍSTICA */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5 text-kotai-800" />
              <span>Evidencia Fotográfica de la Fábrica</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Instalaciones, Despacho y Montaje en Obra
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Haz clic en cualquier imagen para verla en alta resolución con sus especificaciones de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROVIDER_PHOTOS.map((photo, pIdx) => (
              <button
                type="button"
                key={photo.id}
                onClick={() => openLightboxAt(pIdx)}
                className="text-left group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md hover:border-kotai-300 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div className="h-48 sm:h-52 w-full overflow-hidden bg-zinc-950 relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
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

        {/* TRUST BANNER RESUMEN */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-kotai-950 text-white border border-kotai-800/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-kotai-300">
              Alianza Estratégica con Fábrica de Ventanas y Ferretería Líder
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              ¿Eres dirigente o constructor? Exige materiales y ventanas certificadas
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Contar con el respaldo de Vidriería y Ferretería Valey asegura que cada termopanel cumple con los índices de transmitancia térmica exigidos por el Plan de Descontaminación Atmosférica (PDA 2026).
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="/#contacto"
              onClick={(e) => {
                e.preventDefault();
                navigate('/#contacto');
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-kotai-800 hover:bg-kotai-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              <span>Postular con Kotai</span>
            </a>
          </div>
        </div>

      </div>

      {/* Modal Lightbox para fotos de taller */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default ProviderShowcase;
