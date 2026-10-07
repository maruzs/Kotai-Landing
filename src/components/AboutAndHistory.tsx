import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { SiteLink } from './SiteLink';
export const AboutAndHistory: React.FC = () => <section id="nosotros" className="section-space">
  <div className="site-container">
    <div className="section-heading"><p className="eyebrow">Personas que te acompañan</p><h2>El equipo de Kotai</h2><p className="intro">Desde la revisión de antecedentes hasta la ejecución del proyecto, el equipo social, técnico y de operaciones trabaja en cada etapa junto a las familias.</p></div>
    <div className="team-grid">{TEAM_MEMBERS.map(m => <article className="team-member" key={m.id}><img src={m.image} alt={m.name} width="480" height="400" loading="lazy" /><div><p className="eyebrow">{m.department}</p><h3>{m.name}</h3><p>{m.bio}</p></div></article>)}</div>
    <SiteLink href="/contacto" className="text-link mt-8">Conversa con nuestro equipo →</SiteLink>
  </div>
</section>;
