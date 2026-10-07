import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, HOLDING_COMPANIES } from '../data/mockData';
import { navigate } from '../utils/navigation';
import VisitorCounter from './VisitorCounter';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    navigate('/');
  };

  const handleSoftScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(`/${href}`);
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Brand & Corporate (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/#inicio"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="inline-block focus:outline-none"
            >
              <img
                src="/Kotai_NoBG.png"
                alt="Kotai Constructora y Acondicionamiento Térmico D.S. 27"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-2xl p-2"
              />
            </a>

            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              Empresa constructora especialista en licitaciones y ejecución de proyectos de acondicionamiento térmico Serviu bajo la norma <strong>D.S. N° 27 de 2016 (DS27)</strong>. Perteneciente al Grupo Empresarial Alianza G5.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-xs">
              <span className="inline-block px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold">
                Norma D.S. N° 27 / DS27 · Serviu MINVU
              </span>
              <span className="inline-block px-3 py-1 rounded-lg bg-kotai-950/80 border border-kotai-800/60 text-kotai-300 font-semibold">
                Asesoría 100% Gratuita
              </span>
            </div>
          </div>

          {/* Navigation Links with Soft-Scroll & /obras route (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    navigate('/');
                  }}
                  className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#servicios"
                  onClick={(e) => handleSoftScroll(e, '#servicios')}
                  className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                >
                  Subsidio D.S. 27
                </a>
              </li>
              <li>
                <a
                  href="/obras"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/obras');
                  }}
                  className="hover:text-white text-kotai-400 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Evidencia en Terreno</span>
                </a>
              </li>
              <li>
                <a
                  href="/#proveedor"
                  onClick={(e) => handleSoftScroll(e, '#proveedor')}
                  className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                >
                  Fábrica & Proveedor
                </a>
              </li>
              <li>
                <a
                  href="/#requisitos"
                  onClick={(e) => handleSoftScroll(e, '#requisitos')}
                  className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                >
                  Requisitos de Postulación
                </a>
              </li>
              <li>
                <a
                  href="/#nosotros"
                  onClick={(e) => handleSoftScroll(e, '#nosotros')}
                  className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                >
                  Quiénes Somos
                </a>
              </li>
            </ul>
          </div>

          {/* Holding Companies without RUTs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Grupo Alianza G5
            </h4>
            <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm">
              <li className="font-bold text-white">
                Kotai SpA
              </li>
              {HOLDING_COMPANIES.filter(c => !c.isMain).map(c => (
                <li key={c.id}>
                  {c.name.replace('Constructora ', '').replace('Ingeniería, Construcción y Comercializadora ', '').replace('Ingeniería y Construcción ', '')}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.rshUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-kotai-400 hover:text-kotai-300 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-kotai-400" />
                <span>Portal Oficial RSH</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact Details from Official Presentation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto Oficial
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-kotai-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white font-black text-base text-zinc-100 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-kotai-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white text-zinc-300 transition-colors whitespace-nowrap text-xs xl:text-sm">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kotai-500 shrink-0 mt-0.5" />
                <div className="text-zinc-300 leading-snug">
                  <div>{COMPANY_INFO.address}</div>
                  <div className="text-xs text-kotai-400 font-semibold mt-0.5">{COMPANY_INFO.regions}</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-kotai-500 shrink-0" />
                <span className="text-zinc-300 text-xs sm:text-sm">
                  {COMPANY_INFO.schedule}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar con Enlaces Legales y Cumplimiento Normativo Ley 21.719 */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} {COMPANY_INFO.name} (RUT: {COMPANY_INFO.rut}) · Chillán, Chile.
            </span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 font-medium text-zinc-400">
              <a
                href="/terminos"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terminos');
                }}
                className="inline-flex min-h-11 items-center hover:text-white transition-colors"
              >
                Términos de Postulación
              </a>
              <span>·</span>
              <a
                href="/privacidad"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/privacidad');
                }}
                className="inline-flex min-h-11 items-center hover:text-white transition-colors"
              >
                Privacidad (Ley 21.719)
              </a>
              <span>·</span>
              <a
                href="/cookies"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/cookies');
                }}
                className="inline-flex min-h-11 items-center hover:text-white transition-colors"
              >
                Cookies
              </a>
              <span>·</span>
              <a
                href="/arcop"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/arcop');
                }}
                className="text-zinc-300 hover:text-kotai-400 font-semibold transition-colors"
              >
                Derechos ARCOP-B
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <VisitorCounter />
            <button
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
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
