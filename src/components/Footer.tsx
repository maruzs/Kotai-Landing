import React from 'react';
import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { NAV_LINKS } from './Navbar';
import { SiteLink } from './SiteLink';
import { scrollBehavior } from '../utils/navigation';
import VisitorCounter from './VisitorCounter';
export const Footer: React.FC = () => <footer className="site-footer">
  <div className="site-container">
    <div className="footer-grid">
      <div><SiteLink href="/" aria-label="Kotai: inicio"><img src="/Kotai_NoBG.png" alt="Kotai Constructora" width="110" height="58" /></SiteLink><p>Mejoramiento de viviendas en Ñuble y Biobío.<br />Asesoría y postulación gratuitas.</p><p>Grupo Alianza G5</p></div>
      <nav aria-label="Navegación del pie de página"><h2>Explora Kotai</h2>{NAV_LINKS.map(l => <SiteLink key={l.href} href={l.href}>{l.label}</SiteLink>)}<SiteLink href="/contacto">Contacto</SiteLink></nav>
      <div><h2>Conversemos</h2><a className="footer-phone" href={`tel:${COMPANY_INFO.phoneClean}`}>{COMPANY_INFO.phone}</a><a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a><p>{COMPANY_INFO.schedule}</p><p>{COMPANY_INFO.address}</p></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {COMPANY_INFO.name}</p><nav aria-label="Información legal"><SiteLink href="/privacidad">Privacidad</SiteLink><SiteLink href="/terminos">Términos</SiteLink><SiteLink href="/cookies">Cookies</SiteLink><SiteLink href="/arcop">Derechos sobre tus datos</SiteLink></nav><button className="button-secondary" onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}>Subir <ArrowUp size={18} /></button></div>
    <details className="visitor-details"><summary>Estadísticas de visitas</summary><VisitorCounter /></details>
  </div>
</footer>;
