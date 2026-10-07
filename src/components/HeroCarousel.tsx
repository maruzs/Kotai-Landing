import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { HERO_CAROUSEL_SLIDES, COMPANY_INFO } from '../data/mockData';
import { SiteLink } from './SiteLink';
export const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const slides = HERO_CAROUSEL_SLIDES;
  return <section id="inicio" className="home-hero">
    <div className="site-container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">Constructora Kotai · Ñuble y Biobío</p>
        <h1 tabIndex={-1}>Una casa más abrigada para tu familia</h1>
        <p className="intro">Te ayudamos a postular al subsidio D.S. 27 para mejorar tu vivienda en Ñuble y Biobío.</p>
        <p className="hero-assurance">Asesoría y postulación gratuitas.</p>
        <div className="button-group">
          <SiteLink href="/contacto" className="button-primary">Quiero orientación <ArrowRight size={20} aria-hidden="true" /></SiteLink>
          <a href={`tel:${COMPANY_INFO.phoneClean}`} className="button-secondary"><Phone size={20} aria-hidden="true" />Llamar a Kotai</a>
        </div>
        <SiteLink href="/requisitos" className="text-link">¿Qué necesito para postular?</SiteLink>
      </div>
      <div className="hero-gallery" role="region" aria-label="Fotografías de mejoramiento de viviendas">
        <img src={slides[index].image} alt={slides[index].title} width="720" height="600" {...{ fetchpriority: 'high' }} />
        <div className="hero-photo-caption">
          <p aria-live="polite">{slides[index].title}</p>
          <div className="gallery-controls">
            <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Fotografía anterior"><ChevronLeft size={22} /></button>
            <span>{index + 1} / {slides.length}</span>
            <button onClick={() => setIndex((index + 1) % slides.length)} aria-label="Fotografía siguiente"><ChevronRight size={22} /></button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
