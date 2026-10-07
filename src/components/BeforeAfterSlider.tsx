import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/mockData';
export const BeforeAfterSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const active = BEFORE_AFTER_CASES[index];
  return <section id="antes-despues" className="section-space bg-white border-b border-zinc-200">
    <div className="site-container narrow-content">
      <div className="section-heading"><h2>Antes y después de las mejoras</h2><p className="intro">Mueve el control para comparar las fotografías. También puedes usar los botones Antes y Después.</p></div>
      <div className="button-group mb-6">{BEFORE_AFTER_CASES.map((item, i) => <button key={item.id} aria-pressed={index === i} className={index === i ? 'button-primary' : 'button-secondary'} onClick={() => { setIndex(i); setPosition(50); }}>{item.category}</button>)}</div>
      <div className="comparison-image">
        <img src={active.afterImage} alt="Vivienda después del mejoramiento" width="880" height="540" loading="lazy" />
        <div className="comparison-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><img src={active.beforeImage} alt="Vivienda antes del mejoramiento" width="880" height="540" loading="lazy" /></div>
        <span className="comparison-label before">Antes</span><span className="comparison-label after">Después</span><span className="comparison-line" style={{ left: `${position}%` }} aria-hidden="true" />
      </div>
      <label htmlFor="comparison-control" className="block text-base font-bold mt-4">Comparar antes y después</label>
      <input id="comparison-control" className="comparison-range" type="range" min="0" max="100" value={position} onChange={e => setPosition(Number(e.target.value))} aria-valuetext={`${position}% de la fotografía anterior visible`} />
      <div className="button-group"><button className="button-secondary" onClick={() => setPosition(100)}>Ver antes</button><button className="button-secondary" onClick={() => setPosition(0)}>Ver después</button><button className="button-secondary" onClick={() => setPosition(50)}>Comparar ambas</button></div>
    </div>
  </section>;
};
