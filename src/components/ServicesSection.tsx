import React from 'react';
import { Hammer, Building2, Home, Wrench, Shield, CheckCircle } from 'lucide-react';

const SERVICES = [
  {
    title: "Montaje y Estructuras Metálicas",
    badge: "Especialidad Fuerte Kotai",
    desc: "Montaje de vigas, cerchas, galpones industriales, cobertizos y techumbres de alta resistencia estructural.",
    icon: Building2,
    features: ["Cálculo estructural sísmico", "Soldadores calificados", "Montaje rápido y seguro"],
    highlight: true,
  },
  {
    title: "Construcción de Viviendas y Casas",
    badge: "Llave en Mano",
    desc: "Edificación desde cero en radier, albañilería o tabiquería reforzada. Casas firmes, abrigadas y terminadas con cariño.",
    icon: Home,
    features: ["Cimientos profundos certificados", "Aislación térmica y acústica", "Planos y regularización municipal"],
    highlight: false,
  },
  {
    title: "Ampliaciones y Segundo Nivel",
    badge: "Familias & Hogares",
    desc: "¿Creció la familia? Ampliamos tu living, dormitorios, cocina o construimos un segundo piso sin desarmar tu rutina.",
    icon: Hammer,
    features: ["Refuerzo de vigas existentes", "Materiales ligeros y térmicos", "Protección contra lluvia en obra"],
    highlight: false,
  },
  {
    title: "Subsidios Serviu y Mejoramiento",
    badge: "Apoyo Social Serviu",
    desc: "Acompañamiento a comités de vivienda y juntas de vecinos para obras del Serviu Renac, DS49, DS19 y mejoramiento.",
    icon: Shield,
    features: ["Asesoría en documentación", "Respeto a los montos asignados", "Recepción conforme garantizada"],
    highlight: false,
  },
  {
    title: "Obras Civiles y Terminaciones",
    badge: "Solidez Técnica",
    desc: "Radieres de alto tránsito, pavimentos, muros de contención, instalaciones sanitarias, gas y electricidad certificada.",
    icon: Wrench,
    features: ["Pruebas de hermeticidad", "Superficies niveladas", "Materiales con sello SEC"],
    highlight: false,
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-kotai-100 text-kotai-800 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider">
            ¿En qué podemos trabajar contigo?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-950">
            Nuestros Servicios de Construcción y Montaje
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Todo trabajo se realiza con contrato formal, garantía por escrito y supervisión técnica permanente en terreno.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  serv.highlight
                    ? 'bg-kotai-900 text-white shadow-xl ring-2 ring-kotai-700 transform md:-translate-y-2'
                    : 'bg-stone-50 border border-stone-200 text-stone-900 hover:shadow-card hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      serv.highlight ? 'bg-kotai-800 text-amber-400' : 'bg-kotai-100 text-kotai-800'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      serv.highlight ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {serv.badge}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${serv.highlight ? 'text-white' : 'text-stone-900'}`}>
                    {serv.title}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    serv.highlight ? 'text-stone-200' : 'text-stone-600'
                  }`}>
                    {serv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/40">
                  <div className="space-y-2 mb-6">
                    {serv.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                        <CheckCircle className={`w-4 h-4 shrink-0 ${serv.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span className={serv.highlight ? 'text-stone-100' : 'text-stone-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/56987654321?text=Hola,%20me%20interesa%20consultar%20por%20el%20servicio%20de%20"${encodeURIComponent(serv.title)}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-4 rounded-xl font-bold text-sm transition ${
                      serv.highlight
                        ? 'bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-md'
                        : 'bg-kotai-800 hover:bg-kotai-900 text-white'
                    }`}
                  >
                    Cotizar este servicio
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
