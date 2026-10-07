import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  FileText,
  Lock,
  Cookie,
  ArrowLeft,
  Scale,
  CheckCircle2,
  Mail,
  Phone,
  ExternalLink,
  Clock,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { navigate, useCurrentPath } from '../utils/navigation';

type LegalTab = 'terminos' | 'privacidad' | 'cookies' | 'arcop';

export const LegalPage: React.FC = () => {
  const currentPath = useCurrentPath();

  // Determinar pestaña según la ruta URL
  const getInitialTab = (): LegalTab => {
    if (currentPath.includes('privacidad')) return 'privacidad';
    if (currentPath.includes('cookie')) return 'cookies';
    if (currentPath.includes('arcop') || currentPath.includes('legal')) return 'arcop';
    return 'terminos';
  };

  const [activeTab, setActiveTab] = useState<LegalTab>(getInitialTab());

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [currentPath]);

  const handleTabChange = (tab: LegalTab) => {
    setActiveTab(tab);
    if (tab === 'terminos') navigate('/terminos');
    else if (tab === 'privacidad') navigate('/privacidad');
    else if (tab === 'cookies') navigate('/cookies');
    else if (tab === 'arcop') navigate('/arcop');
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 sm:pt-36 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navegación y Encabezado Superior */}
        <div className="mb-10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-kotai-800 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver al Inicio</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Scale className="w-3.5 h-3.5 text-kotai-800" />
                <span>Marco Regulatorio y Transparencia Legal</span>
              </div>
              <h1 tabIndex={-1} className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Documentación y Cumplimiento Legal
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 mt-1">
                Constructora Kotai SpA · Ley N° 21.719 (APDP) · Norma D.S. N° 27 de 2016 (MINVU) · Chillán, Chile
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-kotai-50 border border-kotai-100 flex items-center justify-center text-kotai-800 shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-zinc-900">{COMPANY_INFO.name}</div>
                <div className="text-zinc-500 font-mono">RUT: {COMPANY_INFO.rut}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Selector de Pestañas Interactivo */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-200/70 rounded-2xl mb-10">
          <button
            onClick={() => handleTabChange('terminos')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'terminos'
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
            }`}
          >
            <FileText className="w-4 h-4 text-kotai-800" />
            <span>Términos y Postulación</span>
          </button>

          <button
            onClick={() => handleTabChange('privacidad')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'privacidad'
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
            }`}
          >
            <Lock className="w-4 h-4 text-kotai-800" />
            <span>Política de Privacidad</span>
          </button>

          <button
            onClick={() => handleTabChange('cookies')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'cookies'
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
            }`}
          >
            <Cookie className="w-4 h-4 text-kotai-800" />
            <span>Cookies y Almacenamiento</span>
          </button>

          <button
            onClick={() => handleTabChange('arcop')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'arcop'
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-kotai-800" />
            <span>Derechos ARCOP-B (Ley 21.719)</span>
          </button>
        </div>

        {/* Contenedor Principal de Lectura */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm text-zinc-700 leading-relaxed space-y-8">

          {/* ========================================================================= */}
          {/* 1. TÉRMINOS Y CONDICIONES DEL SERVICIO Y POSTULACIÓN D.S. 27             */}
          {/* ========================================================================= */}
          {activeTab === 'terminos' && (
            <div className="space-y-6">
              <div className="border-b border-zinc-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-kotai-800">
                  Condiciones Generales del Servicio
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">
                  Términos y Condiciones de Postulación a Subsidios MINVU
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Última actualización: Octubre 2026 · Válido para Región de Ñuble y Región del Biobío.
                </p>
              </div>

              {/* Banner de Asesoría Gratuita Innegociable */}
              <div className="p-4 sm:p-5 rounded-2xl bg-kotai-50 border border-kotai-200 flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-kotai-800 shrink-0 mt-0.5" />
                <div className="text-sm text-kotai-950">
                  <strong className="font-bold">Principio de Asesoría 100% Gratuita:</strong> Constructora Kotai SpA y sus entidades patrocinantes aliadas del Grupo Alianza G5 <strong>NO cobran honorarios, comisiones ni cobros directos al beneficiario</strong> por orientaciones técnicas, diagnósticos en terreno ni confección de carpetas de postulación.
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">1. Identificación de la Constructora</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  El presente sitio web y sus servicios de postulación son operados por <strong>Constructora Kotai SpA</strong>, Rol Único Tributario <strong>{COMPANY_INFO.rut}</strong>, representada legalmente por don <strong>{COMPANY_INFO.representative}</strong>, con domicilio legal en <strong>{COMPANY_INFO.address}</strong>. Correo electrónico oficial de contacto: <a href={`mailto:${COMPANY_INFO.email}`} className="text-kotai-800 font-semibold hover:underline">{COMPANY_INFO.email}</a>, teléfono <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-kotai-800 font-semibold hover:underline">{COMPANY_INFO.phone}</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">2. Naturaleza del Servicio y Marco Técnico</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Kotai SpA actúa como entidad constructora y prestadora de servicios de asistencia técnica y postulación habitacional bajo el <strong>Decreto Supremo N° 27 de 2016 (DS27)</strong> del Ministerio de Vivienda y Urbanismo (MINVU), enfocado en el Mejoramiento de Viviendas y Planes de Descontaminación Atmosférica (PDA), incluyendo acondicionamiento térmico (envolvente EIFS, ventanas de doble vidriado hermético y aislamiento de techumbre), sistemas solares térmicos y obras de seguridad habitacional.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">3. Aporte Familiar y Ahorro Previo Exigido por SERVIU</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  El postulante reconoce y declara comprender que:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-zinc-600">
                  <li>El Estado de Chile financia el costo mayoritario de las obras mediante subsidio fiscal no reembolsable.</li>
                  <li>El beneficiario solo debe aportar el ahorro previo obligatorio normado por el MINVU (<strong>entre 1 y 3 UF</strong> según las condiciones del llamado correspondiente).</li>
                  <li>Dicho ahorro debe permanecer en la cuenta de ahorro para la vivienda propia del postulante (en BancoEstado u otra entidad habilitada) y no es transferido a Kotai SpA sino hasta la asignación formal del subsidio y autorización expresa de los organismos públicos competentes.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">4. Requisitos de Admisibilidad y Documentación</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Para que Kotai pueda evaluar e ingresar un expediente ante SERVIU, el postulante debe cumplir con los requisitos establecidos en las bases vigentes del llamado ministerial, tales como:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    'Estar inscrito en el Registro Social de Hogares (RSH).',
                    'Ser propietario o cónyuge del propietario de la vivienda.',
                    'No ser propietario de otra propiedad habitacional.',
                    'Vivienda regularizada o susceptible de regularizar.',
                    'Ahorro mínimo exigido depositado en libreta de vivienda.',
                    'Firma de carta de autorización y mandato de postulación.'
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm bg-zinc-50 p-2.5 rounded-xl border border-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-kotai-800 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">5. Atribución Exclusiva del SERVIU / MINVU sobre Adjudicaciones</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Constructora Kotai SpA se compromete a elaborar los proyectos con la máxima rigurosidad técnica y reglamentaria exigida por los estándares vigentes. No obstante, la aprobación técnica de los proyectos, la calificación de elegibilidad y la adjudicación final de los recursos del subsidio es una facultad privativa y discrecional del Servicio de Vivienda y Urbanización (SERVIU) y del Ministerio de Vivienda y Urbanismo, sujeta a disponibilidad presupuestaria y puntajes de postulación de cada llamado público.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">6. Garantías y Estándares Constructivos</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Todas las obras de acondicionamiento térmico y mejoras ejecutadas por Kotai cuentan con las garantías legales estipuladas en la Ley General de Urbanismo y Construcciones (LGUC), cumpliendo con los ensayos térmicos, espesores reglamentarios de lana de vidrio o poliestireno expandido, sellos de infiltraciones y normativas de la Superintendencia de Electricidad y Combustibles (SEC) cuando aplique.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 2. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS (LEY 21.719 APDP)         */}
          {/* ========================================================================= */}
          {activeTab === 'privacidad' && (
            <div className="space-y-6">
              <div className="border-b border-zinc-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-kotai-800">
                  Protección de Datos Personales
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">
                  Política de Privacidad y Tratamiento de Datos Personales
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Conforme a la Ley N° 21.719 sobre Protección de Datos Personales de la República de Chile (APDP) y Ley N° 19.628.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-kotai-800 shrink-0 mt-0.5" />
                <div className="text-sm text-zinc-700">
                  <strong className="font-bold text-zinc-900">Compromiso de Privacidad:</strong> En Constructora Kotai SpA tratamos sus datos personales con absoluta reserva y bajo estrictos principios de licitud, finalidad, proporcionalidad y seguridad. No comercializamos sus datos bajo ninguna circunstancia.
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">1. Responsable del Tratamiento</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  El responsable del tratamiento de sus datos personales es <strong>Constructora Kotai SpA</strong> (RUT {COMPANY_INFO.rut}), domiciliada en {COMPANY_INFO.address}. Canal de contacto y atención del delegado de privacidad: <a href={`mailto:${COMPANY_INFO.email}`} className="text-kotai-800 font-semibold hover:underline">{COMPANY_INFO.email}</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">2. Datos Personales que Recopilamos</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  A través de los formularios de postulación y contacto en este sitio web, recopilamos únicamente los datos necesarios para verificar su elegibilidad ante el SERVIU:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-zinc-600">
                  <li><strong>Datos de Identificación y Contacto:</strong> Nombre y apellidos, número de teléfono/WhatsApp y correo electrónico.</li>
                  <li><strong>Datos de Localización del Inmueble:</strong> Dirección de la vivienda y comuna de residencia (Región de Ñuble o Biobío).</li>
                  <li><strong>Datos Sociohabitacionales:</strong> Tramo porcentual del Registro Social de Hogares (RSH) y tipo de solución requerida (Aislamiento Térmico, Colector Solar, etc.).</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">3. Finalidad del Tratamiento de Datos</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Sus antecedentes son recolectados y procesados exclusivamente para los siguientes fines:
                </p>
                <div className="space-y-2 text-sm sm:text-base text-zinc-600">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</div>
                    <span>Verificar la admisibilidad de su hogar respecto a las bases del llamado D.S. N° 27 de SERVIU.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</div>
                    <span>Coordinar visitas técnicas presenciales de diagnóstico constructivo y toma de medidas en su vivienda.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</div>
                    <span>Confeccionar y tramitar la carpeta del expediente técnico y social ante el SERVIU Región de Ñuble o SERVIU Región del Biobío.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-kotai-100 text-kotai-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</div>
                    <span>Comunicar fechas de cierre, estado de avance de la postulación y resultados oficiales del proceso.</span>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">4. Destinatarios y Transferencia de Datos</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Sus datos personales <strong>NO serán comercializados, cedidos ni transferidos a empresas de publicidad ni a bases de datos de terceros</strong>. Los únicos destinatarios de su información son los organismos públicos encargados por ley de la asignación y fiscalización del subsidio:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-zinc-600">
                  <li>Servicio de Vivienda y Urbanización (SERVIU Región de Ñuble y Biobío).</li>
                  <li>Ministerio de Vivienda y Urbanismo (MINVU).</li>
                  <li>Dirección de Obras Municipales (DOM) correspondiente a la comuna del proyecto.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">5. Medidas de Seguridad y Conservación</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Implementamos salvaguardas técnicas y organizativas para proteger sus datos personales contra accesos no autorizados, pérdidas o alteraciones. El tráfico web se encuentra protegido mediante cifrado TLS/HTTPS de última generación (Cloudflare Edge). Los expedientes postulados se conservan durante el período legal exigido por el SERVIU para auditorías de obra y rendición de cuentas públicas.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 3. POLÍTICA DE COOKIES Y ALMACENAMIENTO LOCAL                             */}
          {/* ========================================================================= */}
          {activeTab === 'cookies' && (
            <div className="space-y-6">
              <div className="border-b border-zinc-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-kotai-800">
                  Transparencia Tecnológica
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">
                  Política de Cookies y Almacenamiento Local
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Transparencia sobre el uso de tecnologías de sesión y analítica técnica en constructorakotai.cl.
                </p>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">1. ¿Qué son las Cookies y Tecnologías Similares?</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Las cookies y las memorias de sesión (`localStorage` y `sessionStorage`) son pequeños fragmentos de datos que el navegador almacena en su dispositivo para permitir el funcionamiento fluido del sitio web, recordar preferencias técnicas o mantener sesiones temporales.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">2. Tecnologías Utilizadas en este Sitio</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Constructora Kotai SpA opera bajo una política estricta de <strong>mínima recolección y cero rastreo invasivo</strong>:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-zinc-200 rounded-xl overflow-hidden">
                    <thead className="bg-zinc-100 text-zinc-800 font-bold">
                      <tr>
                        <th className="p-3">Tecnología / Llave</th>
                        <th className="p-3">Tipo</th>
                        <th className="p-3">Duración</th>
                        <th className="p-3">Finalidad</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-600">
                      <tr>
                        <td className="p-3 font-mono font-bold text-zinc-900">sessionStorage (kotai_session_active)</td>
                        <td className="p-3">Técnica Esencial</td>
                        <td className="p-3">Sesión (se borra al cerrar la pestaña)</td>
                        <td className="p-3">Previene que recargar la página (F5) duplique el conteo de visitas del sitio.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-zinc-900">localStorage (kotai_vid)</td>
                        <td className="p-3">Analítica Anónima</td>
                        <td className="p-3">Persistente local</td>
                        <td className="p-3">Identificador aleatorio anónimo para deduplicar visitas diarias sin vincular datos personales.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-zinc-900">Cloudflare Edge (KV)</td>
                        <td className="p-3">Infraestructura</td>
                        <td className="p-3">24 horas</td>
                        <td className="p-3">Cómputo en el servidor de métricas agregadas globales (visitas por día/mes).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">3. Cero Cookies Publicitarias de Terceros</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Declaramos explícitamente que <strong>este sitio no incorpora píxeles de seguimiento publicitario (como Meta Pixel o Google Ads Remarketing)</strong> ni redes de anuncios que compartan su historial de navegación con corredores de datos comerciales.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">4. Cómo Desactivar o Borrar estas Tecnologías</h3>
                <p className="text-sm sm:text-base text-zinc-600">
                  Usted puede configurar en cualquier momento su navegador (Chrome, Safari, Firefox, Edge) para bloquear o eliminar los datos locales almacenados desde la opción "Borrar datos de navegación" o "Configuración de Privacidad". El sitio web continuará funcionando con normalidad.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 4. DERECHOS ARCOP-B (LEY N° 21.719 CHILE)                                */}
          {/* ========================================================================= */}
          {activeTab === 'arcop' && (
            <div className="space-y-6">
              <div className="border-b border-zinc-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-kotai-800">
                  Garantía de Derechos del Titular
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">
                  Ejercicio de Derechos ARCOP-B (Ley N° 21.719 APDP)
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Procedimiento oficial y canal formal para ejercer sus derechos de protección de datos en Chile.
                </p>
              </div>

              {/* Plazo legal fatal */}
              <div className="p-4 sm:p-5 rounded-2xl bg-kotai-50 border border-kotai-200 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-kotai-800 shrink-0 mt-0.5" />
                <div className="text-sm text-kotai-950">
                  <strong className="font-bold">Plazo Legal Fatal de 15 Días Corridos:</strong> Conforme al artículo 11 de la Ley N° 21.719 de Chile, Constructora Kotai SpA responderá formalmente a cualquier solicitud de derechos ARCOP-B en un plazo máximo e improrrogable de <strong>15 días corridos</strong> contados desde su recepción.
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">Catálogo de Derechos Reconocidos por Ley</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <div className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-kotai-800 text-white text-xs flex items-center justify-center font-bold">A</span>
                      <span>Acceso</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                      Derecho a solicitar y obtener confirmación de si sus datos personales están siendo tratados por Kotai y acceder a sus antecedentes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <div className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-kotai-800 text-white text-xs flex items-center justify-center font-bold">R</span>
                      <span>Rectificación</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                      Derecho a corregir o actualizar datos que resulten inexactos, desactualizados, incompletos o erróneos en su carpeta.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <div className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-kotai-800 text-white text-xs flex items-center justify-center font-bold">C</span>
                      <span>Cancelación (Supresión)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                      Derecho a solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines de la postulación habitacional.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <div className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-kotai-800 text-white text-xs flex items-center justify-center font-bold">O</span>
                      <span>Oposición</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                      Derecho a oponerse al tratamiento de sus datos personales cuando existan motivos legítimos relativos a su situación particular.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <div className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-kotai-800 text-white text-xs flex items-center justify-center font-bold">P</span>
                      <span>Portabilidad</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                      Derecho a recibir sus datos personales en un formato estructurado, genérico y de uso común para transmitirlos a otra entidad.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <div className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-kotai-800 text-white text-xs flex items-center justify-center font-bold">B</span>
                      <span>Bloqueo</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                      Derecho a solicitar la suspensión temporal del uso de sus datos personales mientras se verifica su exactitud o se tramita un reclamo.
                    </p>
                  </div>
                </div>
              </section>

              {/* Canal de Ejercicio */}
              <section className="bg-kotai-50 border border-kotai-200 rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-kotai-950 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-kotai-800" />
                  <span>Canal Oficial para Ejercer sus Derechos</span>
                </h3>
                <p className="text-sm sm:text-base text-kotai-900">
                  Para ejercer cualquiera de sus derechos ARCOP-B, debe remitir una solicitud por escrito al correo oficial del delegado de datos:
                </p>
                <div className="bg-white p-4 rounded-2xl border border-kotai-200 text-sm sm:text-base font-mono font-bold text-kotai-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>{COMPANY_INFO.email}</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Solicitud%20Derechos%20ARCOP-B%20Ley%2021719`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-kotai-800 hover:underline"
                  >
                    <span>Enviar Correo Formal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="text-xs text-kotai-900 space-y-1">
                  <p><strong>Requisitos de la solicitud:</strong> 1) Nombre completo del titular y RUT, 2) Teléfono de contacto, 3) Derecho específico que desea ejercer (Acceso, Rectificación, Cancelación, Oposición, Portabilidad o Bloqueo) y 4) Antecedentes o fundamentos que respaldan la petición.</p>
                </div>
              </section>
            </div>
          )}

        </div>

        {/* Respaldo Institucional y Contacto Legal */}
        <div className="mt-10 p-6 rounded-3xl bg-zinc-100 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-600">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-kotai-800 shrink-0" />
            <span>
              Cumplimiento normativo auditado bajo <strong>Ley N° 21.719 de la República de Chile</strong> y directivas del <strong>MINVU</strong>.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-semibold text-zinc-800">
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-kotai-800 transition-colors flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-kotai-800" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span>·</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-kotai-800 transition-colors flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-kotai-800" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalPage;
