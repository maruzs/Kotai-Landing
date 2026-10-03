import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t-4 border-kotai-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/kotai-logo.png"
                alt="Kotai Constructora"
                className="h-12 w-auto bg-white p-1.5 rounded-lg shadow-sm"
              />
              <div>
                <span className="block text-sm font-bold text-white uppercase tracking-wider">
                  Kotai Constructora y Montaje
                </span>
                <span className="block text-xs text-amber-400 font-semibold">
                  Grupo Alianza G5
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Empresa chilena especializada en obras civiles, edificación habitacional, subsidios Serviu y montaje de estructuras pesadas con altos estándares de calidad y seguridad sísmica.
            </p>

            <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Contratos formales y garantía legal en todas las obras.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo('#inicio')} className="hover:text-amber-400 transition text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#proyectos')} className="hover:text-amber-400 transition text-left">
                  Antes y Después (Obras)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#servicios')} className="hover:text-amber-400 transition text-left">
                  Nuestros Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#quienes-somos')} className="hover:text-amber-400 transition text-left">
                  Quiénes Somos y Aliados
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#holding')} className="hover:text-amber-400 transition text-left">
                  Grupo Alianza G5
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contacto')} className="hover:text-amber-400 transition text-left">
                  Contacto y Cotizaciones
                </button>
              </li>
            </ul>
          </div>

          {/* Grupo Alianza G5 Brands */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Holding Alianza G5
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-kotai-500"></span>
                <strong>Kotai</strong>: Constructora y Montaje
              </li>
              <li><strong>Secuoia</strong>: Ingeniería y Construcción</li>
              <li><strong>Paulina</strong>: Comercializadora</li>
              <li><strong>RF</strong>: Construcción de Vivienda</li>
              <li><strong>Los Aromos</strong>: Constructora</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto Directo
            </h4>
            <div className="space-y-2 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+56987654321" className="hover:text-white transition">+56 9 8765 4321</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:correo@alianzag5.cl" className="hover:text-white transition font-mono text-xs">
                  correo@alianzag5.cl
                </a>
              </p>
              <p className="flex items-start gap-2 text-xs text-stone-400 mt-2">
                <MapPin className="w-4 h-4 text-kotai-400 shrink-0 mt-0.5" />
                <span>Atención y visitas en terreno en Santiago y Regiones de Chile</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar with legal & APDP compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Kotai Constructora y Montaje SpA. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Cumplimiento Ley N° 21.719 APDP (Chile)</span>
            <span>•</span>
            <span>Respaldo Grupo Alianza G5</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
