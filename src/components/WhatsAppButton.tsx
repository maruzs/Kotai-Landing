import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { scrollBehavior } from '../utils/navigation';

const shortcutClass = 'flex h-[52px] w-[52px] items-center justify-center rounded-full text-white shadow-md transition-colors';

export const WhatsAppButton: React.FC = () => (
  <nav className="contact-shortcuts" aria-label="Accesos rápidos">
    <a href="https://www.instagram.com/constructora.kotai.cl/" target="_blank" rel="noopener noreferrer"
      className={`${shortcutClass} bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90`}
      aria-label="Abrir Instagram de Constructora Kotai (otra pestaña)" title="Instagram">
      <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>
    <a className={`${shortcutClass} bg-[#146c40] hover:bg-[#0e512e]`}
      href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent('Hola Kotai, quisiera orientación para postular al subsidio de mejoramiento de vivienda.')}`}
      target="_blank" rel="noopener noreferrer" aria-label="Escribir a Kotai por WhatsApp (abre otra pestaña)" title="WhatsApp">
      <MessageCircle size={24} aria-hidden="true" />
    </a>
    <button type="button" className={`${shortcutClass} bg-kotai-800 hover:bg-kotai-900`}
      onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}
      aria-label="Volver arriba" title="Volver arriba">
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  </nav>
);
