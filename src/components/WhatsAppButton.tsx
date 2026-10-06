import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Número oficial de Kotai (+56 9 3101 8612)
  const phoneNumber = COMPANY_INFO.phoneClean;
  const defaultMessage = encodeURIComponent('Hola Kotai Constructora, me gustaría consultar por la postulación gratuita al subsidio de acondicionamiento térmico Serviu D.S. 27.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Botón Flotante de Facebook */}
      <div className="relative flex items-center group">
        <div
          className={`hidden sm:flex items-center mr-3 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold shadow-xl border border-zinc-700 transition-all duration-200 pointer-events-none whitespace-nowrap ${
            activeTooltip === 'facebook' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span>Síguenos en Facebook (Próximamente)</span>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          onMouseEnter={() => setActiveTooltip('facebook')}
          onMouseLeave={() => setActiveTooltip(null)}
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Facebook de Constructora Kotai"
          title="Facebook (Próximamente)"
        >
          {/* Facebook Official SVG */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* Botón Flotante de Instagram */}
      <div className="relative flex items-center group">
        <div
          className={`hidden sm:flex items-center mr-3 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold shadow-xl border border-zinc-700 transition-all duration-200 pointer-events-none whitespace-nowrap ${
            activeTooltip === 'instagram' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span>Síguenos en Instagram (Próximamente)</span>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          onMouseEnter={() => setActiveTooltip('instagram')}
          onMouseLeave={() => setActiveTooltip(null)}
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Instagram de Constructora Kotai"
          title="Instagram (Próximamente)"
        >
          {/* Instagram Official SVG */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Botón Flotante Principal de WhatsApp */}
      <div className="relative flex items-center group">
        <div
          className={`hidden sm:flex items-center mr-3 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-bold shadow-xl border border-zinc-700 transition-all duration-200 pointer-events-none whitespace-nowrap ${
            activeTooltip === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span>¿Dudas? Escríbenos por WhatsApp</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setActiveTooltip('whatsapp')}
          onMouseLeave={() => setActiveTooltip(null)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label={`Contactar a Kotai por WhatsApp (${COMPANY_INFO.phone})`}
          title="WhatsApp Oficial Kotai"
        >
          {/* Subtle breathing animation pulse */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {/* Official WhatsApp SVG Logo */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 fill-current relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.507 14.307l-.009.075c-.236 1.206-.99 2.05-2.247 2.512-.34.125-.705.188-1.077.188-.86 0-1.745-.306-2.584-.897-1.41-1.002-2.617-2.315-3.568-3.877-.455-.75-.769-1.545-.935-2.365-.138-.685-.02-1.339.351-1.928.32-.507.785-.892 1.34-1.114.24-.097.49-.146.745-.146.22 0 .44.037.647.112.443.16.8.69 1.05 1.57.17.6.35 1.22.53 1.83.13.43.03.88-.26 1.21l-.43.48c-.06.07-.06.16-.01.24.4.65.91 1.24 1.51 1.74.52.44 1.11.78 1.74 1.01.09.03.18.02.24-.03l.53-.45c.34-.29.8-.37 1.23-.21.62.23 1.24.46 1.86.68.86.31 1.37.71 1.5 1.16.03.1.05.21.05.32 0 .26-.06.51-.17.75zM12 2C6.477 2 2 6.477 2 12c0 1.96.565 3.79 1.54 5.337L2.16 21.84a.5.5 0 00.62.62l4.57-1.353A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.71 0-3.32-.486-4.697-1.332a.5.5 0 00-.37-.06l-3.344.99.998-3.32a.5.5 0 00-.062-.379A7.95 7.95 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
          </svg>
        </a>
      </div>

    </div>
  );
};

export default WhatsAppButton;
