import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Friendly Tooltip for seniors/users */}
      {showTooltip && (
        <div className="bg-white border-2 border-emerald-500 text-stone-900 rounded-2xl p-3.5 shadow-2xl max-w-xs text-xs sm:text-sm flex items-start gap-2.5 animate-bounce-subtle">
          <div className="flex-1">
            <span className="font-black text-emerald-800 block text-xs uppercase tracking-wide">
              ¡Estamos en línea! 💬
            </span>
            <span className="text-stone-700">
              ¿Tienes dudas sobre una ampliación, montaje o subsidio? Haz clic aquí y hablemos por WhatsApp.
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-1"
            aria-label="Cerrar mensaje"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href="https://wa.me/56987654321?text=Hola,%20quisiera%20hacer%20una%20consulta%20a%20Kotai%20Constructora"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-4 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ring-4 ring-emerald-300/40"
        aria-label="Contactar a Kotai por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6 fill-white" />
        <span className="hidden sm:inline-block font-extrabold text-sm tracking-wide">
          WhatsApp Directo
        </span>
      </a>
    </div>
  );
};
