import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { SiteLink } from './SiteLink';
export const HomeOverview: React.FC = () => <>
  <section className="section-space"><div className="site-container">
    <div className="section-heading"><p className="eyebrow">Conoce las mejoras</p><h2>Más abrigo, mejor ventilación</h2><p className="intro">Aislación de muros, ventanas termopanel, puertas exteriores y mejoras de techumbre para tu vivienda.</p></div>
    <div className="home-proof">
      <img src="/images/despues.jpg" alt="Vivienda después de las mejoras" width="700" height="460" loading="lazy" />
      <div><h3>Conoce el trabajo en terreno</h3><p>Revisa fotografías de instalaciones y compara el antes y después de las viviendas.</p><div className="button-group"><SiteLink href="/obras" className="button-primary">Ver fotografías de obras <ArrowRight size={20} aria-hidden="true" /></SiteLink><SiteLink href="/servicios" className="text-link">Conocer los servicios</SiteLink></div></div>
    </div>
  </div></section>
  <section className="provider-preview"><div className="site-container"><div><p className="eyebrow">Nuestro proveedor principal</p><h2>Ventanas y materiales de Grupo Valey</h2><p>Conoce la fábrica de ventanas certificadas y los materiales con los que trabajamos.</p><SiteLink href="/proveedor" className="text-link">Ver fábrica, fotos y videos →</SiteLink></div><img src="/images/proveedor/valey_ventanas_certificadas_dvh.jpg" alt="Ventanas termopanel del proveedor Valey" width="400" height="300" loading="lazy" /></div></section>
  <section className="section-space home-contact"><div className="site-container"><div><p className="eyebrow">Orientación gratuita</p><h2>No tienes que resolverlo todo solo</h2><p>Conversemos sobre tu vivienda y revisemos juntos los próximos pasos.</p></div><div className="button-group"><a href={`tel:${COMPANY_INFO.phoneClean}`} className="button-secondary"><Phone size={20} aria-hidden="true" />{COMPANY_INFO.phone}</a><SiteLink href="/contacto" className="button-primary">Consultar con Kotai</SiteLink></div></div></section>
</>;
