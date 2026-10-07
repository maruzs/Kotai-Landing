import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Shield, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    comuna: '',
    tramoRsh: 'No sé mi porcentaje aún (Kotai te orienta sin costo)',
    tipoProyecto: 'Acondicionamiento Térmico (Aislamiento)',
    mensaje: '',
  });

  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textLines = [
      '📋 *SOLICITUD DE POSTULACIÓN SUBSIDIO SERVIU D.S. 27 - KOTAI*',
      '',
      `👤 *Nombre:* ${formData.nombre.trim()}`,
      `📞 *Teléfono:* ${formData.telefono.trim()}`,
      `📍 *Comuna:* ${formData.comuna.trim() || 'No especificada'}`,
      `📊 *Tramo RSH:* ${formData.tramoRsh}`,
      `🛠️ *Programa:* ${formData.tipoProyecto}`,
    ];

    if (formData.mensaje.trim()) {
      textLines.push(`💬 *Mensaje:* ${formData.mensaje.trim()}`);
    }

    textLines.push('', 'Agradezco su orientación para verificar mis requisitos y postular con asesoría gratuita.');

    const message = encodeURIComponent(textLines.join('\n'));
    const url = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${message}`;
    setWhatsappLink(url);
    setSubmitted(true);


  };

  useEffect(() => {
    if (submitted) document.getElementById('prepared-message')?.focus();
  }, [submitted]);

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Larger Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kotai-50 border border-kotai-200 text-kotai-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4 text-kotai-800" />
            <span>Postula con Nosotros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Inicia tu Postulación al Subsidio Térmico D.S. 27
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Déjanos tus datos o comunícate con nosotros. Revisamos tu Registro Social de Hogares y te orientamos paso a paso con amabilidad, cercanía y <strong>100% libre de costo</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Direct Contact Info from Official Presentations (5 cols) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">

            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-7 sm:p-9 space-y-7">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-zinc-900">
                  Canales Oficiales Kotai
                </h3>
                <span className="text-xs font-bold text-kotai-800 bg-kotai-50 px-2.5 py-1 rounded-full border border-kotai-200">
                  Asesoría Gratuita
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kotai-50 border border-kotai-100 flex items-center justify-center shrink-0 text-kotai-800">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Teléfono Oficial de Contacto
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-xl sm:text-2xl font-black text-zinc-900 hover:text-kotai-800 transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1">Llamadas directas y orientación personalizada a vecinos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kotai-50 border border-kotai-100 flex items-center justify-center shrink-0 text-kotai-800">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Correo Electrónico Oficial
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-base font-bold text-zinc-900 hover:text-kotai-800 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1">Envío formal de antecedentes y cartolas RSH</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kotai-50 border border-kotai-100 flex items-center justify-center shrink-0 text-kotai-800">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Sede Oficial y Cobertura
                    </div>
                    <span className="text-base font-bold text-zinc-900 block mt-0.5">
                      {COMPANY_INFO.address}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-kotai-800 mt-1">
                      Cobertura en toda la Región de Ñuble y Región del Biobío
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">Visitas a terreno y atención presencial a dirigentes y comités</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kotai-50 border border-kotai-100 flex items-center justify-center shrink-0 text-kotai-800">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Horario de Atención
                    </div>
                    <span className="text-base font-bold text-zinc-900">
                      Lunes a Viernes: 08:30 a 17:30 hrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Official WhatsApp Button */}
              <div className="pt-4 border-t border-zinc-200">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Kotai,%20quisiera%20consultar%20por%20la%20postulacion%20gratuita%20al%20subsidio%20termico%20Serviu%20D.S.%2027`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl bg-[#146c40] hover:bg-[#0e512e] text-white text-sm font-bold transition-colors duration-200 shadow-sm"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Escribir por WhatsApp ({COMPANY_INFO.phone})</span>
                </a>
              </div>

              {/* Registro Social de Hogares Link */}
              <div className="p-4 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-zinc-900">Link Oficial RSH</div>
                  <div className="text-[11px] text-zinc-600">Consulta tu tramo con tu ClaveÚnica</div>
                </div>
                <a
                  href={COMPANY_INFO.rshUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-kotai-800 hover:bg-kotai-700 text-white text-xs font-bold transition-colors"
                >
                  <span>Ir al RSH</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 justify-center">
                <Shield className="w-4 h-4 text-kotai-800" />
                <span>Tus datos son tratados con estricta confidencialidad bajo Ley 21.719</span>
              </div>
            </div>

          </div>

          {/* Right Column: Postulación Form (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-7 sm:p-9 shadow-sm">

              {submitted ? (
                <div className="py-14 text-center space-y-5">
                  <div className="w-20 h-20 rounded-full bg-kotai-50 text-kotai-800 border border-kotai-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-kotai-800" />
                  </div>
                  <h3 id="prepared-message" tabIndex={-1} className="text-2xl sm:text-3xl font-bold text-zinc-900">
                    Tu mensaje está preparado
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-600 max-w-lg mx-auto leading-relaxed">
                    Todavía no se ha enviado. Abre WhatsApp, revisa tus datos y presiona Enviar para comunicarte con el equipo de Kotai.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {whatsappLink && (
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#146c40] hover:bg-[#0e512e] text-white text-sm sm:text-base font-bold shadow-md transition-colors"
                        style={{ backgroundColor: '#146c40' }}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span>Abrir WhatsApp Ahora</span>
                      </a>
                    )}
                    <button
                      onClick={() => { setSubmitted(false); requestAnimationFrame(() => document.getElementById('nombre')?.focus()); }}
                      className="px-6 py-3.5 rounded-2xl bg-zinc-200 text-zinc-800 text-sm font-bold hover:bg-zinc-300 transition-colors"
                    >
                      Volver y corregir mis datos
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-200 pb-4 mb-2">
                    <h3 className="text-2xl font-bold text-zinc-900">
                      Formulario de Postulación a Subsidio Serviu
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-500 mt-1 font-normal">
                      Completa tus datos para saber si tu hogar califica al subsidio de aislamiento térmico.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Nombre Completo *
                      </label>
                      <input
                        id="nombre"
                        autoComplete="name"
                        maxLength={120}
                        type="text"
                        required
                        placeholder="Ej. María González"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-kotai-800 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Teléfono o WhatsApp *
                      </label>
                      <input
                        id="telefono"
                        autoComplete="tel"
                        maxLength={30}
                        type="tel"
                        required
                        placeholder="Ej. +56 9 9876 5432"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-kotai-800 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="comuna" className="block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Comuna o Localidad (Ñuble y Biobío)
                      </label>
                      <input
                        id="comuna"
                        type="text"
                        placeholder="Ej. Chillán, San Carlos, Concepción, etc."
                        value={formData.comuna}
                        onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-kotai-800 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="tramoRsh" className="block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Tramo Registro Social (RSH)
                      </label>
                      <select
                        id="tramoRsh"
                        value={formData.tramoRsh}
                        onChange={(e) => setFormData({ ...formData, tramoRsh: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-kotai-800 focus:border-transparent transition-all"
                      >
                        <option value="Familias hasta el 70% RSH">Hasta el 70% RSH</option>
                        <option value="Sobre 70% RSH (Revisar caso especial con Kotai)">Sobre 70% RSH (Revisar caso especial con Kotai)</option>
                        <option value="No sé mi porcentaje aún (Kotai te orienta sin costo)">No sé mi porcentaje aún (Kotai te orienta sin costo)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tipoProyecto" className="block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Programa al que Deseas Postular
                    </label>
                    <select
                      id="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-kotai-800 focus:border-transparent transition-all"
                    >
                      <option value="Acondicionamiento Térmico (Aislamiento)">Acondicionamiento Térmico (Muros EIFS, Ventanas Termopanel, Techo)</option>
                      <option value="Sistema Solar Térmico (Agua Caliente Solar)">Sistema Solar Térmico (Panel Solar para Agua Caliente)</option>
                      <option value="Mejoramiento Eléctrico y Seguridad SEC">Mejoramiento Eléctrico y Seguridad SEC</option>
                      <option value="Postulación Colectiva (Comité de Vivienda)">Postulación Colectiva (Comité o Junta de Vecinos)</option>
                      <option value="Otro / Consulta General">Otro / Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Cuéntanos sobre tu casa o dudas que tengas
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      placeholder="Ej. Mi casa es muy fría en invierno y los vidrios transpiran mucho. Quisiera saber si califico..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-kotai-800 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Cláusula de Privacidad y Consentimiento Expreso (Ley 21.719 APDP) */}
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-kotai-800 shrink-0 mt-0.5" />
                    <label className="flex gap-3">
                      <input type="checkbox" required aria-label="Autorizo el uso de mis datos para recibir orientación" className="mt-1 w-5 h-5 shrink-0 accent-kotai-800" />
                      <span>Autorizo a Constructora Kotai SpA al tratamiento de mis datos exclusivamente para fines de evaluación sociohabitacional ante SERVIU conforme a nuestra{' '}
                      <a
                        href="/privacidad"
                        target="_blank" rel="noopener noreferrer"
                        className="font-bold text-kotai-800 hover:underline"
                      >
                        Política de Privacidad
                      </a>{' '}
                      y los{' '}
                      <a
                        href="/terminos"
                        target="_blank" rel="noopener noreferrer"
                        className="font-bold text-kotai-800 hover:underline"
                      >
                        Términos de Postulación
                      </a>{' '}
                      .
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-kotai-800 hover:bg-kotai-700 text-white font-bold text-base shadow-crimson transition-all duration-200 active:scale-[0.98]"
                    >
                      <Send className="w-5 h-5" />
                      <span>Preparar mensaje para WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
