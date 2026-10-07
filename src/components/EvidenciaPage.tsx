import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ProjectsAutoCarousel } from './ProjectsAutoCarousel';
import { RealWorksCarousel } from './RealWorksCarousel';
import { SiteLink } from './SiteLink';
export const EvidenciaPage: React.FC = () => <>
  <div className="page-heading site-container"><SiteLink href="/" className="text-link">← Volver al inicio</SiteLink><h1 tabIndex={-1}>Obras y fotografías</h1><p className="intro mt-4">Conoce las mejoras de viviendas, las instalaciones y sus terminaciones.</p></div>
  <BeforeAfterSlider /><ProjectsAutoCarousel /><RealWorksCarousel />
  <section className="section-space"><div className="site-container guidance-callout"><h2 className="text-3xl font-bold">¿Qué necesita mejorar tu vivienda?</h2><p>Conversemos y revisemos los antecedentes de tu caso.</p><SiteLink href="/contacto" className="button-primary">Pedir orientación gratuita</SiteLink></div></section>
</>;
