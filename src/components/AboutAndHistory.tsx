import React from 'react';
import { TEAM_MEMBERS, STRATEGIC_ALLIES } from '../data/mockData';
import { Users, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutAndHistory: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE 1: NUESTRA HISTORIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-kotai-800" />
              <span>Nuestra Historia y Vocación</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              Nacidos para Construir con Verdad y Calidad
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Kotai nació con un propósito claro: permitir que las familias de esfuerzo accedan a viviendas dignas, abrigadas y eficientes a través de los programas y subsidios de acondicionamiento térmico del Serviu (MINVU).
            </p>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Sabemos lo difícil que es vivir con frío, goteras, hongos o pagar cuentas desmedidas de gas y leña. Por eso, nos encargamos de todo el proceso: formulamos el proyecto técnico, postulamos a las licitaciones estatales y ejecutamos el aislamiento EIFS, ventanas termopanel y colectores solares con cuadrillas especializadas. Como parte del <strong className="text-zinc-900 font-semibold">Grupo Alianza G5</strong>, entregamos cada obra con contrato por escrito, materiales certificados y garantía real.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-2xl font-black text-kotai-800 font-mono">100%</div>
                <div className="text-xs text-zinc-600 font-medium mt-1">Obras terminadas y entregadas a conformidad</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-2xl font-black text-kotai-800 font-mono">NCh433</div>
                <div className="text-xs text-zinc-600 font-medium mt-1">Cumplimiento estricto de norma chilena sísmica</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Maestros e ingenieros Kotai trabajando en faena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-kotai-300">
                    Compromiso en Terreno
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    Supervisión diaria y trato directo con nuestros clientes
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* PARTE 2: QUIÉNES SOMOS (INTEGRANTES) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-kotai-800" />
              <span>Equipo Humano</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Las Caras Detrás de Cada Obra
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Personas con experiencia real de vida y oficio que cuidarán tu inversión en cada detalle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-200 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/85 text-white text-[11px] font-semibold backdrop-blur-sm border border-white/20">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-kotai-800">
                      {member.specialty}
                    </span>
                    <h4 className="text-lg font-bold text-zinc-900 mt-0.5">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-500 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-200 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-kotai-800" />
                    <span>Personal de planta Kotai</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE 3: ALIADOS ESTRATÉGICOS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-kotai-800" />
              <span>Red de Confianza</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Nuestros Aliados y Proveedores Estratégicos
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Trabajamos únicamente con marcas líderes y laboratorios certificados en Chile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_ALLIES.map((ally, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-kotai-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-kotai-50 border border-kotai-100 flex items-center justify-center text-kotai-800 mb-4">
                    <ShieldCheck className="w-5 h-5 text-kotai-800" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 mb-1">
                    {ally.name}
                  </h4>
                  <div className="text-[11px] font-semibold text-kotai-800 mb-2">
                    {ally.category}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {ally.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  {ally.norma}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndHistory;
