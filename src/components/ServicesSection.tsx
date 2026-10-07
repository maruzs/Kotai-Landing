import React from 'react';
import { SiteLink } from './SiteLink';
const services = [
  { title: 'Acondicionamiento térmico', image: '/images/siding_Casa.jpg', desc: 'Aislación de muros, ventanas termopanel, puertas exteriores, techumbre y ventilación.', details: ['Revestimientos con aislación térmica y sistema EIFS.', 'Ventanas de doble vidriado hermético para disminuir el paso del calor y el ruido.', 'Extractores y aireadores para mejorar la ventilación.', 'Cambio de cubierta y mejoramiento de piso cuando corresponde.'] },
  { title: 'Sistema solar térmico', image: '/images/PuertaYPanel2.jpg', desc: 'Soluciones de agua caliente sanitaria con energía solar.', details: ['Consulta con el equipo las condiciones del programa y las soluciones disponibles para tu vivienda.'] },
  { title: 'Mejoramiento eléctrico', image: '/images/despues.jpg', desc: 'Orientación sobre mejoras de la instalación eléctrica de tu hogar.', details: ['El equipo revisa contigo los antecedentes y las necesidades del proyecto.'] },
];
export const ServicesSection: React.FC = () => <section id="servicios" className="section-space">
  <div className="site-container"><div className="section-heading"><p className="eyebrow">D.S. N° 27 de 2016 · Ñuble y Biobío</p><h2>Mejoras para tu vivienda</h2><p className="intro">Trabajamos en el Programa de Mejoramiento de Viviendas y Barrios. Te orientamos para revisar qué solución corresponde a tu caso.</p></div>
    <div className="service-list">{services.map((service, i) => <article className="service-row" key={service.title}>
      {i < 2 && <img src={service.image} alt={service.title} loading="lazy" width="460" height="340" />}
      <div><h3>{service.title}</h3><p>{service.desc}</p><details><summary>Ver qué incluye</summary><ul>{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul></details><SiteLink href="/contacto" className="text-link">Consultar por esta mejora →</SiteLink></div>
    </article>)}</div>
    <div className="guidance-callout"><h3>La asesoría y postulación son gratuitas</h3><p>Kotai y la entidad patrocinante no cobran honorarios al beneficiario. El ahorro para la vivienda es un requisito distinto; confirmaremos contigo el monto que corresponda.</p><SiteLink href="/requisitos" className="button-secondary">Revisar requisitos</SiteLink></div>
  </div>
</section>;
