import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

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
    { label: 'Subsidios', href: '#servicios' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4'
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
              alt="Kotai Constructora y Acondicionamiento Térmico"
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Clean Desktop Navigation Links with LARGER readable text */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
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

          {/* Right Header Actions: Official Flyer Phone & Postula Aquí CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+56950501231"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-kotai-800 px-3 py-2 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-kotai-800" />
              <span>+56 9 5050 1231</span>
            </a>

            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-kotai-800 hover:bg-kotai-900 text-white text-sm font-bold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
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
            <a
              href="tel:+56950501231"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-200 text-zinc-800 font-bold text-sm bg-zinc-50"
            >
              <Phone className="w-4 h-4 text-kotai-800" />
              <span>Llamar al +56 9 5050 1231</span>
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
