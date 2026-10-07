import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { useCurrentPath } from '../utils/navigation';
import { SiteLink } from './SiteLink';
export const NAV_LINKS = [
  { label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' },
  { label: 'Requisitos', href: '/requisitos' }, { label: 'Obras', href: '/obras' },
  { label: 'Proveedor', href: '/proveedor' }, { label: 'Nosotros', href: '/nosotros' },
];
// Adaptación de floating-navbar del vault: menú responsive, acción persistente
// y estados activos. Sin efectos cinemáticos para facilitar la lectura.
export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const path = useCurrentPath();
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    const outside = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header ref={header} className="site-header">
    <div className="site-container header-row">
      <SiteLink href="/" aria-label="Kotai: inicio" className="brand-link" onClick={() => setOpen(false)}>
        <img src="/Kotai_NoBG.png" alt="Kotai Constructora" width="110" height="58" />
      </SiteLink>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {NAV_LINKS.map(link => <SiteLink key={link.href} href={link.href} aria-current={path === link.href ? 'page' : undefined}>{link.label}</SiteLink>)}
      </nav>
      <a href={`tel:${COMPANY_INFO.phoneClean}`} className="header-phone" aria-label={`Llamar a Kotai: ${COMPANY_INFO.phone}`}>
        <span className="phone-icon"><Phone size={20} aria-hidden="true" /></span>
        <span><span className="phone-caption">Llámanos directo</span><span className="phone-number">{COMPANY_INFO.phone}</span></span>
      </a>
      <SiteLink href="/contacto" className="button-primary header-cta">Postula aquí</SiteLink>
      <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}<span>{open ? 'Cerrar' : 'Menú'}</span>
      </button>
    </div>
    {open && <nav id="site-menu" className="mobile-nav site-container" aria-label="Menú principal">
      {NAV_LINKS.map(link => <SiteLink href={link.href} key={link.href} aria-current={path === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}<ChevronRight size={18} aria-hidden="true" /></SiteLink>)}
      <SiteLink href="/contacto" className="button-primary" onClick={() => setOpen(false)}>Solicitar orientación gratuita</SiteLink>
    </nav>}
  </header>;
};
