import React from 'react';
import { Camera, ArrowRight, ShieldCheck } from 'lucide-react';
import { navigate } from '../utils/navigation';

export const EvidenciaTeaser: React.FC = () => {
  const previews = [
    {
      title: 'Aislamiento Térmico EIFS y Siding',
      location: 'Chillán, Región de Ñuble',
      image: '/images/siding_Casa.jpg',
      badge: 'Muros Exteriores',
      desc: 'Revestimiento continuo con placas de alta densidad que corta el frío y elimina la humedad.'
    },
    {
      title: 'Ventanas Termopanel DVH',
      location: 'San Carlos, Región de Ñuble',
      image: '/images/Termopanel3.jpg',
      badge: 'Doble Vidriado Hermético',
      desc: 'Corte inmediato del viento helado, menor ruido exterior y cero gotas de condensación.'
    },
    {
      title: 'Puertas Herméticas y Colectores Solares',
      location: 'Concepción, Región del Biobío',
      image: '/images/PuertaYPanel3.jpg',
      badge: 'Accesos y Energía Solar',
      desc: 'Sellos de estanqueidad perimetrales y agua caliente sanitaria con energía solar.'
    }
  ];

  return (
    <section id="evidencia-resumen" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Camera className="w-4 h-4 text-kotai-800" />
              <span>Obras Reales Ejecutadas · D.S. 27</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Evidencia en Terreno
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Comprueba con tus propios ojos las casas reales intervenidas por Kotai en Ñuble y Biobío. Separamos toda la evidencia fotográfica y casos de antes y después en una galería detallada.
            </p>
          </div>

          <button
            onClick={() => navigate('/obras')}
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-zinc-900 hover:bg-kotai-800 text-white font-bold text-sm sm:text-base shadow-sm transition-all duration-200 shrink-0 self-start md:self-auto group"
          >
            <span>Ver Galería Completa de Obras</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {previews.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/obras')}
              className="group cursor-pointer rounded-3xl bg-zinc-50 border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md hover:border-kotai-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-zinc-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-sm text-white text-[11px] font-bold border border-white/10">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-kotai-800 mb-1">
                    {item.location}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-kotai-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-bold text-kotai-800 group-hover:text-kotai-900">
                  <span>Ver detalles en Galería</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-700">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-kotai-800 shrink-0" />
            <span>Todas las fotografías corresponden a proyectos reales ejecutados bajo norma <strong>D.S. N° 27 de 2016 (CS27)</strong>.</span>
          </div>

          <button
            onClick={() => navigate('/obras')}
            className="inline-flex items-center gap-1.5 font-bold text-kotai-800 hover:text-kotai-900 underline whitespace-nowrap"
          >
            <span>Explorar Fotos y Antes/Después</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default EvidenciaTeaser;
