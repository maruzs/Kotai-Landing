import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Corporate (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#inicio"
              onClick={scrollToTop}
              className="inline-block focus:outline-none"
            >
              <img
                src="/Kotai_NoBG.png"
                alt="Kotai Constructora y Acondicionamiento"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-2xl p-2"
              />
            </a>

            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              Empresa especialista en licitaciones y ejecución de proyectos de acondicionamiento térmico y mejoramiento habitacional a través de subsidios Serviu. Perteneciente al Grupo Alianza G5.
            </p>

            <div className="pt-2 text-xs text-zinc-400">
              <span className="inline-block px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold">
                Subsidios MINVU / Serviu · Eficiencia Energética
              </span>
            </div>
          </div>

          {/* Navigation Links with Soft-Scroll */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleSoftScroll(e, '#inicio')}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleSoftScroll(e, '#servicios')}
                  className="hover:text-white transition-colors"
                >
                  Subsidios y Programas
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  onClick={(e) => handleSoftScroll(e, '#proyectos')}
                  className="hover:text-white transition-colors"
                >
                  Proyectos Térmicos
                </a>
              </li>
              <li>
                <a
                  href="#antes-despues"
                  onClick={(e) => handleSoftScroll(e, '#antes-despues')}
                  className="hover:text-white transition-colors"
                >
                  Antes y Después
                </a>
              </li>
              <li>
                <a
                  href="#requisitos"
                  onClick={(e) => handleSoftScroll(e, '#requisitos')}
                  className="hover:text-white transition-colors"
                >
                  Requisitos de Postulación
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => handleSoftScroll(e, '#nosotros')}
                  className="hover:text-white transition-colors"
                >
                  Quiénes Somos
                </a>
              </li>
            </ul>
          </div>

          {/* Holding Companies */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Grupo Alianza G5
            </h4>
            <ul className="space-y-2.5 text-zinc-300">
              <li className="font-bold text-white">Kotai (Acondicionamiento y Obras)</li>
              <li>Secuoia (Ingeniería)</li>
              <li>Paulina (Comercializadora)</li>
              <li>RF (Vivienda)</li>
              <li>Los Aromos (Constructora)</li>
            </ul>
          </div>

          {/* Contact Details from Flyers */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto Oficial
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-kotai-500 shrink-0" />
                <a href="tel:+56950501231" className="hover:text-white font-semibold text-zinc-200 transition-colors">
                  +56 9 5050 1231
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-kotai-500 shrink-0" />
                <a href="tel:+56975762347" className="hover:text-white font-semibold text-zinc-200 transition-colors">
                  +56 9 7576 2347
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-kotai-500 shrink-0" />
                <a href="mailto:contacto@kotaiconstructora.cl" className="hover:text-white transition-colors">
                  contacto@kotaiconstructora.cl
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kotai-500 shrink-0 mt-0.5" />
                <span>Región Metropolitana y Zona Central, Chile</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400">
          <div>
            © {new Date().getFullYear()} Kotai Constructora · Especialistas en Acondicionamiento Térmico Serviu · Grupo Alianza G5.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold transition-colors"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
