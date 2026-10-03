import React from 'react';
import { TEAM_MEMBERS, STRATEGIC_ALLIES } from '../data/mockData';
import { Users, HeartHandshake, History, CheckCircle2 } from 'lucide-react';

export const AboutAndHistory: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-kotai-100 text-kotai-900 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider">
              <History className="w-4 h-4 text-kotai-700" />
              <span>Nuestra Historia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 leading-tight">
              Construimos con la firmeza del primer día
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Kotai nació en terreno, con el casco puesto y las botas en el barro. Vimos que muchas familias y pequeños empresarios sufrían por constructoras que cobraban de más, dejaban obras botadas o hablaban con tecnicismos que nadie entendía.
            </p>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Decidimos hacer las cosas de otra forma: <strong>hablar con la verdad, fijar presupuestos transparentes y trabajar con maestros de oficio probados</strong>. Hoy, respaldados por la solidez del <strong>Grupo Alianza G5</strong>, ejecutamos obras de vivienda social, montajes de estructuras y remodelaciones con la misma dedicación que si fuera nuestra propia casa.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-black text-kotai-800">+15</span>
                <span className="text-xs text-stone-600 font-semibold">Años de oficio en terreno</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-black text-kotai-800">100%</span>
                <span className="text-xs text-stone-600 font-semibold">Obras entregadas con recepción</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-black text-kotai-800">0</span>
                <span className="text-xs text-stone-600 font-semibold">Letras chicas o cobros ocultos</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Maestros y constructores de Kotai en obra"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-amber-400 text-stone-950 font-black text-xs px-2.5 py-1 rounded-md uppercase">
                  Compromiso Kotai
                </span>
                <p className="mt-2 text-lg font-bold">
                  "Un trabajo bien hecho no solo resiste sismos: le da paz mental a toda una familia."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members ("Quiénes Somos") */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-stone-200 text-stone-800 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
              <Users className="w-4 h-4 text-kotai-800" />
              <span>Quiénes Somos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              Las Personas Detrás de Cada Obra
            </h3>
            <p className="text-stone-600 text-base mt-2">
              Gente de trabajo, con nombres y apellidos, que responde ante ti en todo momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-stone-200 hover:-translate-y-1 transition duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {member.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-stone-900">{member.name}</h4>
                    <p className="text-xs font-bold text-kotai-800 uppercase tracking-wide mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Disponible para visitas en terreno</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Allies ("Nuestros Aliados") */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-stone-200 text-stone-800 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
              <HeartHandshake className="w-4 h-4 text-kotai-800" />
              <span>Nuestros Aliados</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              Red de Proveedores y Calidad Certificada
            </h3>
            <p className="text-stone-600 text-base mt-2">
              Para garantizar que los cimientos, techos y soldaduras no fallen jamás, trabajamos con los mejores de la industria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_ALLIES.map((ally, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-soft hover:border-kotai-300 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center font-black text-stone-800 text-xs mb-4 border border-stone-200">
                  {ally.logoText}
                </div>
                <h4 className="font-bold text-stone-900 text-base">{ally.name}</h4>
                <p className="text-xs font-bold text-kotai-800 mt-0.5 mb-2">{ally.type}</p>
                <p className="text-xs text-stone-600 leading-relaxed">{ally.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
