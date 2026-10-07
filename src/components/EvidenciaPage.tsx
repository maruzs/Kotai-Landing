import React, { useEffect } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ProjectsAutoCarousel } from './ProjectsAutoCarousel';
import { RealWorksCarousel } from './RealWorksCarousel';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, MapPin, Phone } from 'lucide-react';
import { navigate } from '../utils/navigation';
import { COMPANY_INFO } from '../data/mockData';

export const EvidenciaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Evidencia en Terreno | Obras Reales D.S. 27 · Kotai Constructora';
    return () => {
      document.title = 'Kotai Constructora | Subsidio de Acondicionamiento Térmico D.S. 27 Serviu';
    };
  }, []);

  return (
    <div className="pt-20 sm:pt-24 bg-[#FAFAFA]">

      {/* Header Hero de la Página de Evidencia */}
      <section className="bg-zinc-950 text-white py-10 sm:py-12 border-b border-zinc-800 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-kotai-800/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb / Back Navigation */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white text-xs sm:text-sm font-bold backdrop-blur-sm border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Inicio</span>
            </button>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-900 border border-kotai-700/60 text-kotai-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-kotai-400" />
              <span>Registro Fotográfico Oficial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Evidencia en Terreno: Obras y Transformaciones Reales
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Aquí puedes ver en detalle el trabajo ejecutado por Kotai en las regiones de <strong>Ñuble y Biobío</strong>. Casas aisladas bajo el <strong>Decreto Supremo N° 27 de 2016 (CS27)</strong> con termopaneles certificados, sistemas EIFS, siding y sellos térmicos.
            </p>

            {/* Badges strip */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-kotai-400" />
                <span>Chillán, San Carlos, Concepción y comunas</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
                <ShieldCheck className="w-3.5 h-3.5 text-kotai-400" />
                <span>Norma D.S. N° 27 Serviu</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-kotai-400" />
                <span>100% Fotografías Propias</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      <nav aria-label="Secciones de Obras" className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-3">
          {[['#antes-despues', 'Antes y después'], ['#proyectos', 'Proyectos destacados'], ['#fotos-obras', 'Fotos en terreno']].map(([href, label]) => <a key={href} href={href} className="min-h-11 inline-flex items-center px-4 py-2 rounded-lg border border-zinc-300 text-base font-semibold text-zinc-800 hover:bg-zinc-100">{label}</a>)}
        </div>
      </nav>

      {/* 1. ANTES Y DESPUÉS INTERACTIVO */}
      <BeforeAfterSlider />

      {/* 2. PROYECTOS DESTACADOS Y FICHAS TÉCNICAS */}
      <ProjectsAutoCarousel />

      {/* 3. GALERÍA FOTOGRÁFICA DETALLADA */}
      <RealWorksCarousel />

      {/* Call to Action Final de Evidencia */}
      <section className="py-16 sm:py-20 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-950 border border-kotai-800 text-kotai-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-kotai-400" />
            <span>Asesoría 100% Gratuita para Beneficiarios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Quieres que tu casa sea la próxima en ser aislada?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Revisamos tu Registro Social de Hogares sin ningún costo. Ni Kotai ni la entidad patrocinante te cobrarán nada.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                navigate('/#contacto');
              }}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-kotai-800 hover:bg-kotai-700 text-white font-bold text-base shadow-crimson transition-all duration-200 active:scale-95"
            >
              <span>Ir al Formulario de Postulación</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-base border border-zinc-700 transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-kotai-400" />
              <span>Llamar al {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EvidenciaPage;
