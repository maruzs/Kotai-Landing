import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ZoomIn, ZoomOut } from 'lucide-react';

interface NavbarProps {
  textSize: 'normal' | 'lg' | 'xl';
  setTextSize: (size: 'normal' | 'lg' | 'xl') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ textSize, setTextSize }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cycleTextSize = () => {
    if (textSize === 'normal') setTextSize('lg');
    else if (textSize === 'lg') setTextSize('xl');
    else setTextSize('normal');
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Antes y Después', href: '#proyectos' },
    { name: 'Nuestros Servicios', href: '#servicios' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Grupo Alianza G5', href: '#holding' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
      {/* Top emergency / quick access bar */}
      <div className="bg-stone-900 text-stone-100 text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Atención Directa y Visitas a Terreno en Todo Chile</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Senior font size helper */}
            <button
              onClick={cycleTextSize}
              className="flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-white px-2.5 py-0.5 rounded-full text-xs transition border border-stone-700"
              title="Agrandar letra para leer mejor"
              aria-label="Agrandar letra de la página"
            >
              {textSize === 'normal' ? <ZoomIn className="w-3.5 h-3.5 text-amber-400" /> : <ZoomOut className="w-3.5 h-3.5 text-amber-400" />}
              <span>Letra: <strong>{textSize === 'normal' ? 'Normal' : textSize === 'lg' ? 'Grande (A+)' : 'Muy Grande (A++)'}</strong></span>
            </button>

            <a
              href="tel:+56987654321"
              className="hidden sm:flex items-center gap-1 text-stone-300 hover:text-white transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-kotai-400" />
              <span>+56 9 8765 4321</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a 
            href="#inicio" 
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img 
              src="/kotai-logo.png" 
              alt="Logo Kotai Constructora y Montaje" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="hidden min-[420px]:block">
              <span className="block text-xs font-bold tracking-wider text-kotai-800 uppercase">
                Constructora y Montaje
              </span>
              <span className="block text-[11px] text-stone-500">
                Respaldo Grupo Alianza G5
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-stone-700 hover:text-kotai-800 font-semibold text-sm xl:text-base transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-kotai-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/56987654321?text=Hola,%20quisiera%20pedir%20información%20o%20presupuesto%20a%20Kotai%20Constructora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Directo</span>
            </a>

            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="flex items-center gap-2 bg-kotai-800 hover:bg-kotai-900 text-white font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition"
            >
              <span>Pedir Visita</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/56987654321?text=Hola,%20quisiera%20pedir%20información%20a%20Kotai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-emerald-600 text-white rounded-lg"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-kotai-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="p-3 bg-stone-100 rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium text-stone-700">Tamaño del texto:</span>
            <button
              onClick={cycleTextSize}
              className="bg-kotai-800 text-white px-3 py-1.5 rounded-md text-xs font-bold"
            >
              Cambiar letra ({textSize === 'normal' ? 'Normal' : textSize === 'lg' ? 'Grande' : 'Muy Grande'})
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-stone-800 hover:text-kotai-800 font-bold text-lg py-2.5 px-3 rounded-md hover:bg-kotai-50 transition border-b border-stone-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/56987654321?text=Hola,%20quisiera%20pedir%20información%20a%20Kotai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg text-center shadow"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Contactar por WhatsApp</span>
            </a>

            <a
              href="tel:+56987654321"
              className="w-full flex items-center justify-center gap-2 bg-stone-800 text-white font-bold py-3 rounded-lg text-center"
            >
              <Phone className="w-5 h-5" />
              <span>Llamar por Teléfono</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
