import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  // Número oficial de Kotai (+56 9 3101 8612)
  const phoneNumber = COMPANY_INFO.phoneClean;
  const defaultMessage = encodeURIComponent('Hola Kotai Constructora, me gustaría consultar por la postulación gratuita al subsidio de acondicionamiento térmico Serviu D.S. 27.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip / Label */}
      <div
        className={`hidden sm:flex items-center mr-3 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-bold shadow-xl border border-zinc-700 transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>¿Dudas? Escríbenos por WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label={`Contactar a Kotai por WhatsApp (${COMPANY_INFO.phone})`}
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
  );
};

export default WhatsAppButton;
