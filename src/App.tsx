import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { SimplicityBanner } from './components/SimplicityBanner';
import { VideoSection } from './components/VideoSection';
import { ServicesSection } from './components/ServicesSection';
import { ProviderShowcase } from './components/ProviderShowcase';
import { EvidenciaPage } from './components/EvidenciaPage';
import { LegalPage } from './components/LegalPage';
import { AboutAndHistory } from './components/AboutAndHistory';
import { HoldingG5 } from './components/HoldingG5';
import { ContactSection } from './components/ContactSection';
import { RequirementsPage } from './components/RequirementsPage';
import { HomeOverview } from './components/HomeOverview';
import { SiteLink } from './components/SiteLink';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useCurrentPath, navigate, SECTION_ROUTES, scrollBehavior } from './utils/navigation';

const pageNames: Record<string, string> = { '/servicios': 'Servicios', '/proveedor': 'Nuestro proveedor', '/requisitos': 'Requisitos para postular', '/nosotros': 'Quiénes somos', '/contacto': 'Orientación gratuita', '/obras': 'Obras y fotografías', '/evidencia': 'Obras y fotografías', '/terminos': 'Términos', '/privacidad': 'Privacidad', '/cookies': 'Cookies', '/arcop': 'Derechos sobre tus datos', '/legal': 'Información legal', '/legal-compliance': 'Información legal' };
export const App: React.FC = () => {
  const path = useCurrentPath();
  const legal = ['/legal', '/terminos', '/privacidad', '/cookies', '/arcop', '/legal-compliance'].includes(path);
  const works = path === '/obras' || path === '/evidencia';
  const known = path === '/' || !!pageNames[path];
  useEffect(() => {
    const handleLocation = () => {
      const route = SECTION_ROUTES[window.location.hash.slice(1)];
      if (route) { navigate(route); return; }
      requestAnimationFrame(() => {
        const id = window.location.hash.slice(1);
        if (id) { document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' }); return; }
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true });
      });
    };
    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => { window.removeEventListener('popstate', handleLocation); window.removeEventListener('hashchange', handleLocation); };
  }, [path]);
  useEffect(() => {
    const name = path === '/' ? 'Mejoramiento de viviendas' : pageNames[path] || 'Página no encontrada';
    document.title = `${name} | Kotai Constructora`;
    const url = `https://constructorakotai.cl${path}`;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
  }, [path]);
  let content: React.ReactNode;
  if (path === '/') content = <><HeroCarousel /><SimplicityBanner /><HomeOverview /></>;
  else if (works) content = <EvidenciaPage />;
  else if (legal) content = <LegalPage />;
  else {
    const sections: Record<string, React.ReactNode> = {
      '/servicios': <><ServicesSection /><VideoSection /></>, '/proveedor': <ProviderShowcase />,
      '/requisitos': <RequirementsPage />, '/nosotros': <><AboutAndHistory /><HoldingG5 /></>,
      '/contacto': <ContactSection />,
    };
    content = <><div className={`page-heading site-container ${path === '/contacto' ? 'contact-breadcrumb' : ''}`}><SiteLink href="/" className="text-link">← Volver al inicio</SiteLink>{path !== '/contacto' && <h1 tabIndex={-1}>{known ? pageNames[path] : 'No encontramos esta página'}</h1>}</div>{known ? sections[path] : <div className="site-container section-space"><p>Usa el menú para encontrar la información que necesitas.</p><SiteLink href="/" className="button-primary">Volver al inicio</SiteLink></div>}</>;
  }
  return <div className="min-h-screen flex flex-col font-sans text-zinc-900">
    <a href="#contenido" className="skip-link" onClick={e => { e.preventDefault(); document.getElementById('contenido')?.focus(); }}>Saltar al contenido</a>
    <Navbar /><main id="contenido" tabIndex={-1} className="flex-1">{content}</main><Footer /><WhatsAppButton />
  </div>;
};
export default App;
