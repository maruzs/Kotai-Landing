import { navigate } from '../utils/navigation';
import React from 'react';
import { Flame, Sun, Zap, FileText, Check, ArrowRight, ShieldCheck, ExternalLink, HelpCircle, Sparkles } from 'lucide-react';
import { REQUIRED_DOCUMENTS, MEJORAS_PDA_DS27, AHORRO_RSH_TABLE, COMPANY_INFO, SUBSIDY_REQUIREMENTS } from '../data/mockData';

export const ServicesSection: React.FC = () => {
  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(`/${href}`);
  };

  const programs = [
    {
      title: 'Acondicionamiento Térmico (D.S. 27)',
      subtitle: 'Envolvente térmica y hermeticidad total',
      icon: <Flame className="w-7 h-7 text-kotai-800" />,
      tag: 'Norma D.S. N° 27 de 2016',
      description: 'Mejoramiento exterior continuo de muros (EIFS y siding), recambio integral a ventanas termopanel DVH, puertas herméticas, aislación de techumbre con lana de vidrio y ventilación pasiva/activa.',
      items: [
        'Aislación de muros: EIFS en albañilería / Siding madera con poliestireno de alta densidad',
        'Ventanas Termopanel DVH con doble sello de Butilo (corte térmico y acústico)',
        'Techumbre hermética con lana de vidrio y recambio de cubierta',
        'Extractores mecánicos en baño/cocina y aireadores en dormitorios y living'
      ]
    },
    {
      title: 'Sistema Solar Térmico',
      subtitle: 'Agua caliente sanitaria con energía solar',
      icon: <Sun className="w-7 h-7 text-kotai-800" />,
      tag: 'Eficiencia Energética',
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
            <ShieldCheck className="w-4 h-4 text-kotai-800" />
            <span>Normativa Oficial MINVU · Serviu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Programa de Mejoramiento de Viviendas y Barrios
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-kotai-800">
            Decreto Supremo N° 27 de 2016 (CS27) · Eficiencia Energética e Hídrica (PDA)
          </p>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Kotai ejecuta obras bajo la reglamentación oficial del Estado en las regiones de <strong>Ñuble y Biobío</strong>, mejorando la envolvente de las viviendas para reducir el frío, la condensación y las fugas térmicas.
          </p>
        </div>

        {/* Banner Destacado: Asesoría 100% Gratuita */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-kotai-950 via-kotai-900 to-zinc-950 text-white p-7 sm:p-9 shadow-lg border border-kotai-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotai-800/80 text-kotai-200 text-xs font-bold uppercase tracking-wider border border-kotai-600/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Garantía de Transparencia Kotai</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Asesoría y Postulación 100% Gratuita
            </h3>
            <p className="text-sm sm:text-base text-zinc-200 max-w-3xl leading-relaxed">
              El beneficiario <strong>no paga absolutamente nada</strong> por la asesoría, visita técnica ni formulación del proyecto. Ni la constructora ni la entidad patrocinante cobran honorarios. El único desembolso requerido corresponde al ahorro reglamentario exigido por SERVIU en tu propia libreta de ahorro de BancoEstado.
            </p>
          </div>

          <a
            href="/#contacto"
            onClick={(e) => handleSoftScroll(e, '#contacto')}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-kotai-950 font-black text-sm sm:text-base shadow hover:bg-zinc-100 transition-colors"
          >
            <span>Postula Gratis Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
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
                <span className="text-xs font-bold text-kotai-800 bg-kotai-50 px-2.5 py-1 rounded-lg">
                  Subsidio cubre la obra
                </span>
                <a
                  href="/#contacto"
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

        {/* Mejoras Concretas a las que Acceden las Familias (PDF PDA 2026) */}
        <div className="mb-16 bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-kotai-50 text-kotai-800 border border-kotai-200">
              Solución Constructiva Integral · D.S. 27
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-3">
              ¿A qué mejoras acceden las familias beneficiadas?
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 mt-2">
              Proyectos ejecutados conforme a las especificaciones técnicas del Ministerio de Vivienda y Urbanismo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MEJORAS_PDA_DS27.map((mejora, mIdx) => (
              <div key={mIdx} className="rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-kotai-300 hover:shadow-md transition-all duration-200">
                {mejora.image && (
                  <div className="h-32 sm:h-36 w-full overflow-hidden bg-zinc-900 relative">
                    <img
                      src={mejora.image}
                      alt={mejora.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-900/90 text-white backdrop-blur-sm border border-white/20">
                        {mejora.tag}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1.5 leading-snug">
                      {mejora.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {mejora.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing / Aporte Mínimo Banner (from Presentation PDA 2026) */}
        <div className="bg-gradient-to-r from-kotai-900 via-kotai-850 to-kotai-950 text-white rounded-3xl p-8 sm:p-12 border border-kotai-700/60 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs uppercase font-bold text-kotai-200 tracking-wider bg-kotai-800/80 px-3.5 py-1.5 rounded-full border border-kotai-500/40">
                Ahorro Exigido por SERVIU en BancoEstado
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                ¿Cuánto ahorro previo necesitas en tu libreta?
              </h3>
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
                El subsidio cubre casi la totalidad del costo de materiales y mano de obra. El único aporte exigido por el Estado es tu propio ahorro en libreta para la vivienda:
              </p>

              {/* Tabla de Ahorro RSH */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {AHORRO_RSH_TABLE.map((item, aIdx) => (
                  <div key={aIdx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
                    <div className="text-xs font-bold uppercase text-kotai-300">{item.tramo}</div>
                    <div className="text-3xl font-black text-white mt-1">{item.ahorroUF}</div>
                    <div className="text-sm font-semibold text-zinc-100">{item.ahorroPesos}</div>
                    <div className="text-[11px] text-zinc-300 mt-1">{item.descripcion}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/40 backdrop-blur-md rounded-2xl p-7 border border-white/15 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-kotai-300">
                Consulta Oficial de Vulnerabilidad
              </div>
              <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-kotai-400 shrink-0" />
                <span>Hasta el 70% en el RSH</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Califican familias con Registro Social de Hogares de hasta el 70%. Kotai te orienta sin costo para revisar tu porcentaje y obtener tu cartola oficial.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={COMPANY_INFO.rshUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-kotai-800 hover:bg-kotai-700 text-white text-sm font-bold transition-colors shadow-sm"
                >
                  <span>Revisar mi Cartola en registrosocial.gob.cl</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="/#contacto"
                  onClick={(e) => handleSoftScroll(e, '#contacto')}
                  className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-zinc-950 text-sm font-bold hover:bg-zinc-100 transition-colors"
                >
                  <span>Postula con tu Registro Social</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="requisitos" className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Requisitos para postular</h2>
          <p className="text-lg text-zinc-600 mb-6">Kotai te orienta gratuitamente y revisa contigo las condiciones del llamado.</p>
          <ul className="space-y-4 text-lg text-zinc-800">{SUBSIDY_REQUIREMENTS.map(requirement => <li key={requirement} className="flex gap-3"><Check className="w-6 h-6 text-kotai-800 shrink-0" /><span>{requirement}</span></li>)}</ul>
        </div>
        {/* 7 Documentos Oficiales para Postular (Presentación PDA 2026) */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-kotai-800 mb-2">
              <FileText className="w-4 h-4 text-kotai-800" />
              <span>Carpeta de Postulación Oficial</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Los 7 Documentos Requeridos para Postular
            </h4>
            <p className="text-sm sm:text-base text-zinc-500 mt-2 font-normal">
              Reúne estos documentos básicos; Kotai se encarga de la planimetría, confección de planos y expediente técnico ante el Serviu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

            {/* Tarjeta de ayuda RSH directa */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-kotai-50 text-kotai-800 flex items-center justify-center text-sm font-bold mb-3">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-zinc-900 mb-1.5">
                  ¿No tienes tu Cartola RSH?
                </h5>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  Puedes descargarla gratis en línea con tu ClaveÚnica o solicitarla en la DIDECO de tu municipio.
                </p>
              </div>
              <a
                href={COMPANY_INFO.rshUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-kotai-800 hover:text-kotai-950 underline"
              >
                <span>Descargar en registrosocial.gob.cl</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
