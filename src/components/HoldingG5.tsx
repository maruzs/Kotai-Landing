import React from 'react';
import { HOLDING_COMPANIES, HOLDING_DEPARTMENTS } from '../data/mockData';
export const HoldingG5: React.FC = () => <section id="holding" className="section-space bg-white border-t border-zinc-200">
  <div className="site-container">
    <div className="section-heading"><p className="eyebrow">Nuestra organización</p><h2>Grupo Empresarial Alianza G5</h2><p className="intro">Kotai forma parte de Alianza G5. La organización cuenta con áreas sociales, técnicas, administrativas y de operaciones que participan en el desarrollo de los proyectos.</p></div>
    <ul className="holding-list">{HOLDING_COMPANIES.map(company => <li key={company.id}><h3>{company.name}</h3><p>RUT {company.rut}</p></li>)}</ul>
    <details className="holding-departments"><summary>Conocer los departamentos y sus funciones</summary><div>{HOLDING_DEPARTMENTS.map(d => <article key={d.name}><h3>{d.name}</h3><ul>{d.functions.map(f => <li key={f}>{f}</li>)}</ul></article>)}</div></details>
  </div>
</section>;
