import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
export const WhatsAppButton: React.FC = () => <a
  className="whatsapp-float" href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent('Hola Kotai, quisiera orientación para postular al subsidio de mejoramiento de vivienda.')}`}
  target="_blank" rel="noopener noreferrer" aria-label="Escribir a Kotai por WhatsApp (abre otra pestaña)">
  <MessageCircle size={24} aria-hidden="true" /><span>WhatsApp</span>
</a>;
