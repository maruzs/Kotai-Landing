import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    comuna: '',
    tipoTrabajo: 'Vivienda o Casa Nueva',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-emerald-100 text-emerald-800 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider">
            Estamos para Ayudarte
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-950">
            Contáctanos y Cotiza sin Compromiso
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Puedes llamarnos, mandarnos un WhatsApp o dejar tus datos en el formulario. Te responderemos el mismo día hábil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border-2 border-emerald-500/80 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-8 h-8 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Vía Más Rápida
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                    WhatsApp Directo
                  </h3>
                </div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Chatea con nosotros ahora. Puedes escribirnos, enviarnos fotos de tu terreno o incluso un <strong>audio de voz</strong>.
              </p>

              <a
                href="https://wa.me/56987654321?text=Hola,%20quisiera%20pedir%20información%20o%20visita%20a%20Kotai%20Constructora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg py-4 px-6 rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Abrir WhatsApp (+56 9 8765 4321)</span>
              </a>
            </div>

            {/* Direct Phone & Email Information Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-stone-200 space-y-6">
              <h4 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
                Otros Medios de Contacto
              </h4>

              <div className="space-y-4">
                <a
                  href="tel:+56987654321"
                  className="flex items-start gap-3 text-stone-800 hover:text-kotai-800 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-kotai-800 flex items-center justify-center shrink-0 group-hover:bg-kotai-800 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-semibold block">Teléfono de Oficina y Terreno:</span>
                    <strong className="text-base text-stone-900">+56 9 8765 4321</strong>
                  </div>
                </a>

                <a
                  href="mailto:correo@alianzag5.cl"
                  className="flex items-start gap-3 text-stone-800 hover:text-kotai-800 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-kotai-800 flex items-center justify-center shrink-0 group-hover:bg-kotai-800 group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-semibold block">Correo Corporativo Holding:</span>
                    <strong className="text-base text-stone-900 font-mono">correo@alianzag5.cl</strong>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-stone-800">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-kotai-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-semibold block">Horario de Atención:</span>
                    <span className="text-sm font-medium text-stone-900">Lunes a Sábado de 08:30 a 19:30 hrs</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-800">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-kotai-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-semibold block">Cobertura de Obras:</span>
                    <span className="text-sm font-medium text-stone-900">Región Metropolitana y Regiones de Chile</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-3">
                  Síguenos en Redes Sociales:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                    aria-label="Facebook Kotai"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 hover:bg-pink-600 hover:text-white flex items-center justify-center transition"
                    aria-label="Instagram Kotai"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 hover:bg-red-600 hover:text-white flex items-center justify-center transition"
                    aria-label="YouTube Kotai"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-stone-200">
              <h3 className="text-2xl font-black text-stone-950 mb-2">
                Solicitud de Visita o Cotización
              </h3>
              <p className="text-stone-600 text-sm sm:text-base mb-6">
                Completa tus datos y un encargado técnico te llamará para coordinar la visita a tu terreno o casa.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-emerald-950">
                    ¡Mensaje Recibido con Éxito!
                  </h4>
                  <p className="text-emerald-800 text-base max-w-md mx-auto">
                    Gracias, <strong>{formData.nombre || 'Estimado/a'}</strong>. Hemos recibido tu solicitud. Nuestro equipo técnico revisará tus datos y te llamará a la brevedad al teléfono indicado.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nombre: '', telefono: '', comuna: '', tipoTrabajo: 'Vivienda o Casa Nueva', mensaje: '' });
                    }}
                    className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl transition text-sm"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-800 mb-1.5">
                      Tu Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez Morales"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-kotai-800 focus:ring-2 focus:ring-kotai-800/20 text-stone-900 bg-stone-50 focus:bg-white text-base transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-800 mb-1.5">
                        Teléfono o WhatsApp de Contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej: +56 9 1234 5678"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-kotai-800 focus:ring-2 focus:ring-kotai-800/20 text-stone-900 bg-stone-50 focus:bg-white text-base transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-800 mb-1.5">
                        Comuna o Ciudad del Proyecto *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Melipilla, San Bernardo, etc."
                        value={formData.comuna}
                        onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-kotai-800 focus:ring-2 focus:ring-kotai-800/20 text-stone-900 bg-stone-50 focus:bg-white text-base transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-800 mb-1.5">
                      ¿Qué tipo de trabajo necesitas?
                    </label>
                    <select
                      value={formData.tipoTrabajo}
                      onChange={(e) => setFormData({ ...formData, tipoTrabajo: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-kotai-800 focus:ring-2 focus:ring-kotai-800/20 text-stone-900 bg-stone-50 focus:bg-white text-base transition"
                    >
                      <option value="Montaje Estructural y Galpones">Montaje Estructural y Galpones</option>
                      <option value="Vivienda o Casa Nueva">Vivienda o Casa Nueva</option>
                      <option value="Ampliación o Segundo Piso">Ampliación o Segundo Piso</option>
                      <option value="Subsidio Serviu / Renac / Comité">Subsidio Serviu / Renac / Comité</option>
                      <option value="Techumbre y Reparación">Techumbre y Reparación</option>
                      <option value="Otro tipo de obra">Otro tipo de obra</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-800 mb-1.5">
                      Cuéntanos brevemente qué necesitas (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ej: Tengo un terreno y quiero construir una casa de 60m2 con radier..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-kotai-800 focus:ring-2 focus:ring-kotai-800/20 text-stone-900 bg-stone-50 focus:bg-white text-base transition"
                    />
                  </div>

                  <p className="text-xs text-stone-500 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Tus datos están protegidos bajo la Ley chilena N° 21.719 de Protección de Datos Personales.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-kotai-800 hover:bg-kotai-900 text-white font-extrabold text-lg py-4 px-6 rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Solicitud de Visita Gratuita</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
