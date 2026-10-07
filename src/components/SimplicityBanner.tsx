import React from 'react';
import { SiteLink } from './SiteLink';
const steps = [
  ['Conversamos contigo', 'Revisamos tu Registro Social de Hogares y resolvemos tus dudas.'],
  ['Visitamos tu vivienda', 'El equipo técnico revisa las mejoras que necesita tu casa.'],
  ['Reunimos los documentos', 'Te acompañamos a preparar los antecedentes para SERVIU.'],
  ['Ejecutamos las mejoras', 'Si el proyecto es aprobado, comienza el mejoramiento de tu vivienda.'],
];
export const SimplicityBanner: React.FC = () => <section id="proceso" className="section-space bg-white border-y border-zinc-200">
  <div className="site-container">
    <div className="section-heading"><p className="eyebrow">Cómo te ayudamos</p><h2>Un paso a la vez, con orientación gratuita</h2></div>
    <ol className="steps-list">{steps.map(([title, desc], i) => <li key={title}><span className="step-number" aria-hidden="true">{i + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></li>)}</ol>
    <SiteLink href="/requisitos" className="text-link mt-8">Revisar requisitos y documentos →</SiteLink>
  </div>
</section>;
