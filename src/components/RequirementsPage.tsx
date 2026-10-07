import React from 'react';
import { REQUIRED_DOCUMENTS, SUBSIDY_REQUIREMENTS, COMPANY_INFO } from '../data/mockData';
import { SiteLink } from './SiteLink';
export const RequirementsPage: React.FC = () => <section id="requisitos" className="section-space">
  <div className="site-container narrow-content">
    <div className="section-heading"><p className="eyebrow">Antes de postular</p><h2>Requisitos y documentos</h2><p className="intro">Esta guía reúne los antecedentes de la presentación PDA 2026. El equipo de Kotai revisará contigo las condiciones del llamado y de tu vivienda.</p></div>
    <div className="guidance-callout"><h3>¿No sabes si cumples los requisitos?</h3><p>Puedes consultar sin tener todos los documentos reunidos. Te orientamos de forma gratuita.</p><SiteLink href="/contacto" className="button-primary">Pedir orientación</SiteLink></div>
    <h3 className="list-heading">Requisitos para revisar con el equipo</h3>
    <ul className="requirements-list">{SUBSIDY_REQUIREMENTS.map(r => <li key={r}>{r}</li>)}</ul>
    <div className="saving-note"><h3>Ahorro para la vivienda</h3><p>El monto requerido está pendiente de confirmación. Consulta con Kotai cuánto debes tener en tu libreta de ahorro para el llamado correspondiente.</p><p>Este ahorro permanece en tu cuenta y es distinto de la asesoría gratuita.</p></div>
    <h3 className="list-heading">Documentos para preparar</h3>
    <p>Reúne estos antecedentes con la orientación del equipo. La credencial de discapacidad corresponde solo cuando aplica.</p>
    <ol className="document-list">{REQUIRED_DOCUMENTS.map((d, i) => <li key={d.doc}><span aria-hidden="true">{i + 1}</span><div><h4>{d.doc}</h4><p>{d.detail}</p></div></li>)}</ol>
    <div className="button-group"><a className="button-secondary" href={COMPANY_INFO.rshUrl} target="_blank" rel="noopener noreferrer">Consultar mi RSH ↗</a><SiteLink href="/contacto" className="button-primary">Consultar con Kotai</SiteLink><button className="button-secondary print-button" onClick={() => window.print()}>Imprimir esta guía</button></div>
  </div>
</section>;
