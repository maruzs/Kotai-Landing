import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Video', href: '#video-explicativo' },
    { label: 'Subsidio D.S. 27', href: '#servicios' },
    { label: 'Obras y Fotos', href: '#proyectos' },
    { label: 'Antes y Después', href: '#antes-despues' },
    { label: 'Requisitos', href: '#requisitos' },
    { label: 'Quiénes Somos', href: '#nosotros' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Banner: Chillán, Ñuble & Biobío, D.S. 27, Asesoría Gratuita y Link RSH */}
      <div className="bg-zinc-900 text-white text-xs border-b border-zinc-800 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-zinc-300 font-medium text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span>Sede Chillán · Cobertura <strong>Regiones de Ñuble y Biobío</strong></span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-300">Norma <strong>D.S. N° 27 (CS27)</strong></span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-emerald-400 font-bold">Asesoría 100% Gratuita</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.rshUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-sky-300 hover:text-white transition-colors"
              title="Ir al portal oficial del Registro Social de Hogares"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Consultar Registro Social (RSH)</span>
              <ExternalLink className="w-3 h-3 text-sky-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Kotai_NoBG.png */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-kotai-800 rounded-lg p-0.5"
            >
              <img
                src="/Kotai_NoBG.png"
                alt="Kotai Constructora y Acondicionamiento Térmico D.S. 27"
                className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-bold text-zinc-700 hover:text-kotai-800 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-kotai-800 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Header Actions: TELÉFONO AL DOBLE DE TAMAÑO & Postula Aquí CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-zinc-100 transition-colors group"
                title="Llamar directamente a Kotai Constructora"
              >
                <div className="w-10 h-10 rounded-full bg-kotai-50 border border-kotai-200 flex items-center justify-center shrink-0 group-hover:bg-kotai-100 transition-colors">
                  <Phone className="w-5 h-5 text-kotai-800" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none">
                    Llámanos Directo
                  </span>
                  <span className="text-xl xl:text-2xl font-black text-zinc-950 group-hover:text-kotai-800 tracking-tight leading-tight">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-kotai-800 hover:bg-kotai-900 text-white text-sm font-bold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
              >
                <span>Postula Aquí</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="sm:hidden px-3.5 py-2 rounded-lg bg-kotai-800 text-white text-xs font-bold"
              >
                Postula Aquí
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-kotai-800"
                aria-label="Abrir menú"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3.5 text-lg font-bold text-zinc-800 hover:text-kotai-800 hover:bg-kotai-50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-5 h-5 text-zinc-400" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3">
            {/* Teléfono grande en móvil */}
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl border-2 border-kotai-200 text-zinc-950 font-black text-xl bg-kotai-50/70"
            >
              <Phone className="w-5 h-5 text-kotai-800" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Link al RSH en móvil */}
            <a
              href={COMPANY_INFO.rshUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-sky-200 text-sky-900 font-bold text-sm bg-sky-50"
            >
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Consultar Registro Social de Hogares</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="w-full text-center py-3.5 rounded-xl bg-kotai-800 text-white font-bold text-base shadow-sm"
            >
              Postula con Nosotros
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
