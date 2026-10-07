import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { SiteLink } from './SiteLink';

const programs = ['Acondicionamiento térmico', 'Sistema solar térmico', 'Mejoramiento eléctrico', 'Postulación colectiva', 'No sé todavía'];
export const ContactSection: React.FC = () => {
  const [data, setData] = useState({ nombre: '', telefono: '', comuna: '', tramoRsh: 'No sé mi porcentaje', tipoProyecto: programs[0], mensaje: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationAttempt, setValidationAttempt] = useState(0);
  const [consent, setConsent] = useState(false);
  const [link, setLink] = useState('');
  const [prepared, setPrepared] = useState(false);
  const summary = useRef<HTMLDivElement>(null);
  const result = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (prepared) result.current?.focus(); }, [prepared]);
  useEffect(() => { if (validationAttempt > 0) summary.current?.focus(); }, [validationAttempt]);
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => { const next = { ...prev }; delete next[e.target.name]; return next; });
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (data.nombre.trim().length < 2) next.nombre = 'Escribe tu nombre para que podamos dirigirnos a ti.';
    if (!/^[+\d\s().-]+$/.test(data.telefono) || data.telefono.replace(/\D/g, '').length < 9 || data.telefono.replace(/\D/g, '').length > 15) next.telefono = 'Escribe un teléfono válido, por ejemplo 9 5050 1231.';
    if (!consent) next.consentimiento = 'Marca la autorización para continuar con tus datos.';
    setErrors(next);
    if (Object.keys(next).length) { setValidationAttempt(attempt => attempt + 1); return; }
    const message = ['Hola Kotai, quisiera orientación para postular al subsidio D.S. 27.', '',
      `Nombre: ${data.nombre.trim()}`, `Teléfono: ${data.telefono.trim()}`,
      `Comuna: ${data.comuna.trim() || 'No indicada'}`, `RSH: ${data.tramoRsh}`,
      `Programa: ${data.tipoProyecto}`, data.mensaje.trim() ? `Consulta: ${data.mensaje.trim()}` : ''].filter(Boolean).join('\n');
    setLink(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(message)}`);
    setPrepared(true);
  };
  const fieldProps = (name: string) => ({ name, id: name, onChange: update, 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-error` : undefined });
  return <section id="contacto" className="section-space">
    <div className="site-container">
      <div className="section-heading">
        <p className="eyebrow">Te acompañamos paso a paso</p>
        <h1 tabIndex={-1}>Conversemos sobre tu vivienda</h1>
        <p className="intro">La orientación es gratuita. Puedes llamarnos directamente o preparar tu consulta para enviarla por WhatsApp.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-form panel">
          {prepared ? <div className="prepared-message">
            <MessageCircle size={40} aria-hidden="true" />
            <h3 ref={result} tabIndex={-1}>Tu mensaje está preparado</h3>
            <p>Todavía no se ha enviado. Abre WhatsApp y presiona Enviar para que el equipo de Kotai reciba tu consulta.</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="button-whatsapp">Abrir WhatsApp <ExternalLink size={20} aria-hidden="true" /></a>
            <p className="field-hint">Si WhatsApp no abre, puedes llamar al {COMPANY_INFO.phone}.</p>
            <button className="button-secondary" onClick={() => { setPrepared(false); requestAnimationFrame(() => document.getElementById('nombre')?.focus()); }}>Volver y corregir mis datos</button>
          </div> : <form onSubmit={submit} noValidate>
            <h3>Prepara tu consulta</h3>
            <p className="field-hint">Solo el nombre y el teléfono son obligatorios.</p>
            {!!Object.keys(errors).length && <div className="error-summary" ref={summary} tabIndex={-1} role="alert">
              <strong>Revisa estos datos:</strong><ul>{Object.entries(errors).map(([key, error]) => <li key={key}><a href={`#${key}`} onClick={e => { e.preventDefault(); document.getElementById(key)?.focus(); }}>{error}</a></li>)}</ul>
            </div>}
            <div className="form-grid">
              <div><label htmlFor="nombre">Nombre completo <span>(obligatorio)</span></label><input {...fieldProps('nombre')} value={data.nombre} autoComplete="name" maxLength={100} required />{errors.nombre && <p id="nombre-error" className="field-error">{errors.nombre}</p>}</div>
              <div><label htmlFor="telefono">Teléfono <span>(obligatorio)</span></label><input {...fieldProps('telefono')} type="tel" inputMode="tel" value={data.telefono} autoComplete="tel" placeholder="Ej. 9 5050 1231" maxLength={25} required />{errors.telefono && <p id="telefono-error" className="field-error">{errors.telefono}</p>}</div>
              <div><label htmlFor="comuna">Comuna o localidad</label><input {...fieldProps('comuna')} value={data.comuna} autoComplete="address-level2" maxLength={100} /></div>
              <div><label htmlFor="tramoRsh">Registro Social de Hogares</label><select {...fieldProps('tramoRsh')} value={data.tramoRsh}><option>No sé mi porcentaje</option><option>Hasta el 70%</option><option>Sobre el 70%</option></select></div>
            </div>
            <label htmlFor="tipoProyecto">¿En qué necesitas ayuda?</label><select {...fieldProps('tipoProyecto')} value={data.tipoProyecto}>{programs.map(p => <option key={p}>{p}</option>)}</select>
            <label htmlFor="mensaje">Tu consulta <span>(opcional)</span></label><textarea {...fieldProps('mensaje')} rows={3} value={data.mensaje} maxLength={1000} placeholder="Cuéntanos qué necesitas mejorar o qué dudas tienes." />
            <div className="consent-row">
              <input id="consentimiento" type="checkbox" checked={consent} onChange={e => { setConsent(e.target.checked); setErrors(prev => { const next = { ...prev }; delete next.consentimiento; return next; }); }} aria-invalid={!!errors.consentimiento} aria-describedby={errors.consentimiento ? 'consentimiento-error' : undefined} />
              <label htmlFor="consentimiento">Autorizo a Kotai a utilizar estos datos para atender mi consulta. <SiteLink href="/privacidad" target="_blank">Leer Política de Privacidad (otra pestaña)</SiteLink>.</label>
            </div>
            {errors.consentimiento && <p id="consentimiento-error" className="field-error">{errors.consentimiento}</p>}
            <button type="submit" className="button-primary form-submit">Preparar mensaje para WhatsApp <ArrowRight size={20} aria-hidden="true" /></button>
            <p className="field-hint">Revisarás el mensaje antes de enviarlo. Este formulario no confirma una postulación ante SERVIU.</p>
          </form>}
        </div>
        <aside className="contact-options">
          <div className="panel">
            <h3>¿Prefieres hablar con nosotros?</h3>
            <a className="contact-phone" href={`tel:${COMPANY_INFO.phoneClean}`}><Phone size={24} aria-hidden="true" />{COMPANY_INFO.phone}</a>
            <p><Clock size={20} aria-hidden="true" />{COMPANY_INFO.schedule}</p>
            <a className="button-whatsapp" href={`https://wa.me/${COMPANY_INFO.phoneClean}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true" />Escribir por WhatsApp</a>
          </div>
          <div className="panel contact-details">
            <h3>Contacto y ubicación</h3>
            <a href={`mailto:${COMPANY_INFO.email}`}><Mail size={20} aria-hidden="true" /><span>{COMPANY_INFO.email}</span></a>
            <p><MapPin size={20} aria-hidden="true" /><span>{COMPANY_INFO.address}</span></p>
            <p>Atendemos en Ñuble y Biobío.</p>
            <a className="text-link" href={COMPANY_INFO.rshUrl} target="_blank" rel="noopener noreferrer">Consultar mi RSH <ExternalLink size={18} aria-hidden="true" /></a>
          </div>
        </aside>
      </div>
    </div>
  </section>;
};
