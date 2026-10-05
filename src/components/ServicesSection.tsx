import React from 'react';
import { Flame, Sun, Zap, FileText, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { REQUIRED_DOCUMENTS } from '../data/mockData';

export const ServicesSection: React.FC = () => {
  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const programs = [
    {
      title: 'Acondicionamiento Térmico',
      subtitle: 'Aislamiento continuo para proteger tu hogar',
      icon: <Flame className="w-7 h-7 text-kotai-800" />,
      tag: 'Programa Principal Serviu',
      description: 'Mejoramiento exterior integral de muros (EIFS y siding), cambio a ventanas termopanel herméticas, cambio de puertas y aislación en techumbres con sistema de ventilación.',
      items: [
        'Mejoramiento térmico de muros exteriores (Sistema EIFS / Siding)',
        'Cambio a ventanas termopanel y puertas herméticas',
        'Aislación de techumbre con lana mineral certificada',
        'Sistema de ventilación pasiva/activa contra hongos y humedad'
      ]
    },
    {
      title: 'Sistema Solar Térmico',
      subtitle: 'Agua caliente sanitaria con energía solar',
      icon: <Sun className="w-7 h-7 text-kotai-800" />,
      tag: 'Ahorro Energético',
      description: 'Instalación de paneles solares térmicos para temperar el agua del consumo diario. Reduce drásticamente el consumo de gas y los costos del hogar.',
      items: [
        'Panel solar térmico de alto rendimiento sobre cubierta',
        'Estanque acumulador térmico con serpentín integrado',
        'Ahorro de hasta un 80% en la cuenta mensual de gas',
        'Válvulas termostáticas de seguridad y certificación SEC'
      ]
    },
    {
      title: 'Mejoramiento Eléctrico y Seguridad',
      subtitle: 'Renovación completa de la red eléctrica',
      icon: <Zap className="w-7 h-7 text-kotai-800" />,
      tag: 'Seguridad Familiar',
      description: 'Renovación integral del sistema eléctrico del hogar, protegiendo a tu familia y tu patrimonio contra sobrecargas, cortocircuitos e incendios.',
      items: [
        'Renovación total de conductores con cables libres de halógenos',
        'Nuevo tablero general con protecciones automáticas y diferenciales',
        'Puesta a tierra reglamentaria certificada',
        'Instalación bajo estricta normativa de la Superintendencia SEC'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kotai-100 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Subsidios Minvu / Serviu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Subsidios de Mejoramiento de la Vivienda
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Le ayudamos a acceder a los subsidios del gobierno para mejorar su hogar con eficiencia energética, confort y seguridad.
          </p>
        </div>

        {/* 3 Core Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm hover:shadow-md hover:border-kotai-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-kotai-50 border border-kotai-100 flex items-center justify-center">
                    {prog.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 leading-snug mb-1">
                  {prog.title}
                </h3>
                <p className="text-sm font-bold text-kotai-800 mb-3">
                  {prog.subtitle}
                </p>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  {prog.description}
                </p>

                <ul className="space-y-3 pt-4 border-t border-zinc-100">
                  {prog.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-kotai-50 text-kotai-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-kotai-800" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  Subsidio cubre casi todo
                </span>
                <a
                  href="#contacto"
                  onClick={(e) => handleSoftScroll(e, '#contacto')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-kotai-800 hover:text-kotai-900 group"
                >
                  <span>Postular</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing / Aporte Mínimo Banner (from Flyer) */}
        <div className="bg-gradient-to-r from-kotai-900 via-kotai-850 to-kotai-950 text-white rounded-3xl p-8 sm:p-12 border border-kotai-700/60 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs uppercase font-bold text-kotai-200 tracking-wider bg-kotai-800/80 px-3.5 py-1.5 rounded-full border border-kotai-500/40">
                Aporte Mínimo Familiar en UF
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                ¿Cuánto cuesta para usted?
              </h3>
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
                El subsidio estatal del Serviu cubre la mayor parte de la obra y materiales. Su ahorro previo exigido en libreta es solo:
              </p>
              <div className="flex flex-wrap items-baseline gap-3 pt-2">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  Desde 1 UF a 3 UF
                </span>
                <span className="text-sm sm:text-base text-kotai-200 font-medium">
                  (Aprox. $41.500 a $124.500 según % del RSH)
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/35 backdrop-blur-md rounded-2xl p-7 border border-white/15 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-kotai-300">
                Requisito General
              </div>
              <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <span>Tramo HASTA el 60% RSH</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Según el Registro Social de Hogares. Todo hogar con 60% o menos califica al programa. Kotai te acompaña en la verificación de tu cartola y en todo el trámite.
              </p>
              <a
                href="#contacto"
                onClick={(e) => handleSoftScroll(e, '#contacto')}
                className="block text-center mt-4 py-3 rounded-xl bg-white text-zinc-950 text-sm font-bold hover:bg-zinc-100 transition-colors"
              >
                Postula con tu Registro Social
              </a>
            </div>
          </div>
        </div>

        {/* Required Documents Checklist (from Flyer) */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-kotai-800 mb-2">
              <FileText className="w-4 h-4 text-kotai-800" />
              <span>Documentación para Postular</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              ¿Qué documentos necesitas tener a mano?
            </h4>
            <p className="text-sm sm:text-base text-zinc-500 mt-2 font-normal">
              Reúne estos documentos básicos; nosotros nos encargamos de armar el proyecto técnico ante el Serviu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {REQUIRED_DOCUMENTS.map((docItem, dIdx) => (
              <div key={dIdx} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-kotai-50 text-kotai-800 flex items-center justify-center text-sm font-bold mb-3">
                    {dIdx + 1}
                  </div>
                  <h5 className="text-sm font-bold text-zinc-900 mb-1.5">
                    {docItem.doc}
                  </h5>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {docItem.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
