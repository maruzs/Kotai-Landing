import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, Volume2 } from 'lucide-react';
import { SIMPLE_STEPS } from '../data/mockData';

export const SimplicityBanner: React.FC = () => {
  return (
    <section className="bg-amber-50 border-y border-amber-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-amber-200 text-amber-900 font-extrabold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
            Fácil, Rápido y Seguro para Todos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            ¿Cómo te ayudamos en Kotai? En solo 4 pasos sencillos
          </h2>
          <p className="mt-2 text-stone-700 text-base sm:text-lg">
            No necesitas saber de construcción ni trámites difíciles. Nosotros te guiamos con paciencia y claridad.
          </p>

          {/* Voice message accessibility reminder */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-amber-300 text-stone-800 text-sm font-semibold">
            <Volume2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>¿Te complica escribir? <strong>¡Mándanos un audio por WhatsApp y te responderemos de inmediato!</strong></span>
          </div>
        </div>

        {/* 4 Clear Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIMPLE_STEPS.map((item) => (
            <div 
              key={item.step}
              className="bg-white rounded-2xl p-6 shadow-soft border border-amber-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-2 right-3 text-5xl font-black text-amber-100 select-none pointer-events-none">
                {item.step}
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-kotai-100 text-kotai-800 flex items-center justify-center font-black text-xl mb-4 border border-kotai-200">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-kotai-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Atención con respeto y paciencia</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Banner for phone or WhatsApp */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-stone-200 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              ¿Quieres hacer una pregunta ahora mismo?
            </h3>
            <p className="text-stone-600 text-base">
              Atendemos de lunes a sábado de 8:30 a 19:30 hrs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            <a
              href="https://wa.me/56987654321?text=Hola,%20quisiera%20hacer%20una%20consulta%20a%20Kotai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enviar WhatsApp Directo</span>
            </a>

            <a
              href="tel:+56987654321"
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-xl transition text-base"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              <span>Llamar al +56 9 8765 4321</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
