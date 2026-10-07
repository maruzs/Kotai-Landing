import React from 'react';
import { TEAM_MEMBERS, STRATEGIC_ALLIES, REAL_WORKS_GALLERY } from '../data/mockData';
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
              <span>Trayectoria y compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              Nuestra Historia
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Constructora Kotai nace hace aproximadamente dos años con el propósito de acercar a las familias a los distintos beneficios y programas de mejoramiento de viviendas, especialmente aquellos orientados al mejoramiento térmico y eficiencia energética.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed">
              Desde nuestros inicios, hemos trabajado para acompañar y orientar a las personas que desean postular a estos beneficios, entregando una atención cercana, profesional y comprometida durante cada etapa del proceso.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed">
              En estos dos años de trayectoria, Constructora Kotai ha logrado posicionarse exitosamente en el mercado, destacándose por la seriedad de su trabajo, el profesionalismo de su equipo y el compromiso permanente con las familias y comunidades.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed">
              Nuestro crecimiento se sustenta en la confianza de nuestros beneficiarios, en la calidad de nuestras obras y en la convicción de que mejorar una vivienda también significa mejorar la calidad de vida de quienes la habitan.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-2xl font-black text-kotai-800 font-mono">D.S. 27</div>
                <div className="text-xs text-zinc-600 font-medium mt-1">Cumplimiento estricto de norma térmica Serviu</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-2xl font-black text-kotai-800">2 años</div>
                <div className="text-xs text-zinc-600 font-medium mt-1">Aproximadamente, acompañando a familias y comunidades</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200 aspect-[4/3]">
              <img
                src={REAL_WORKS_GALLERY[0].image}
                alt={REAL_WORKS_GALLERY[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-kotai-300">
                    Compromiso en Terreno · Chillán y Biobío
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    Supervisión diaria y trato directo con nuestros vecinos
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
              <span>Equipo y Departamentos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Las Caras Detrás de Cada Obra Kotai
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Estructura profesional de planta que acompaña a familias y comités desde la visita técnica hasta la entrega final.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-200 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      width={900}
                      height={1600}
                      className="w-full h-full object-cover object-[50%_43%]"
                    />
                    <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-zinc-900/85 text-white text-[10px] font-semibold backdrop-blur-sm border border-white/20">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-kotai-800 bg-kotai-100/70 px-2 py-0.5 rounded">
                        {member.department}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-zinc-900">
                      {member.name}
                    </h4>
                    <p className="text-base font-semibold text-kotai-800">
                      {member.role}
                    </p>
                    {member.academicTitle && <p className="text-base font-semibold text-zinc-700">{member.academicTitle}</p>}
                    <p className="text-base text-zinc-600 leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
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
                className={`p-5 rounded-2xl bg-white border shadow-sm transition-all duration-200 flex flex-col justify-between ${
                  ally.highlight
                    ? 'border-kotai-300 ring-1 ring-kotai-100 hover:shadow-md'
                    : 'border-zinc-200 hover:border-kotai-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {ally.logo ? (
                      <div className="h-12 w-28 bg-white rounded-xl border border-zinc-100 p-1 flex items-center justify-center overflow-hidden shadow-xs">
                        <img
                          src={ally.logo}
                          alt={ally.name}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-kotai-50 border border-kotai-100 flex items-center justify-center text-kotai-800">
                        <ShieldCheck className="w-5 h-5 text-kotai-800" />
                      </div>
                    )}

                    {ally.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-kotai-50 text-kotai-900 border border-kotai-200 text-right">
                        {ally.badge}
                      </span>
                    )}
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
