import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
export interface LightboxItem { id?: string; image: string; title: string; description?: string; tag?: string; category?: string; location?: string; specs?: string[]; }
export interface ImageLightboxModalProps { isOpen: boolean; onClose: () => void; items: LightboxItem[]; currentIndex: number; onNavigate: (index: number) => void; }
export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ isOpen, onClose, items, currentIndex, onNavigate }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const current = items[currentIndex] || items[0];
  useEffect(() => {
    const element = dialog.current;
    if (!isOpen || !element) return;
    const opener = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element.showModal();
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = overflow; opener?.focus({ preventScroll: true }); };
  }, [isOpen]);
  if (!isOpen || !current) return null;
  const move = (delta: number) => onNavigate((currentIndex + delta + items.length) % items.length);
  return createPortal(<dialog ref={dialog} className="image-dialog" aria-modal="true" aria-labelledby="lightbox-title"
    onCancel={e => { e.preventDefault(); onClose(); }}
    onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    onKeyDown={e => {
      if (e.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
      if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
    }}>
    <div className="lightbox-content">
      <div className="lightbox-top"><span aria-live="polite">Fotografía {currentIndex + 1} de {items.length}</span><button ref={closeButton} onClick={onClose}><X size={22} aria-hidden="true" />Cerrar</button></div>
      <div className="lightbox-image"><img src={current.image} alt={current.title} /><div className="lightbox-arrows"><button onClick={() => move(-1)} aria-label="Ver imagen anterior"><ChevronLeft size={24} /></button><button onClick={() => move(1)} aria-label="Ver imagen siguiente"><ChevronRight size={24} /></button></div></div>
      <div className="lightbox-info"><h2 id="lightbox-title">{current.title}</h2>{current.description && <p>{current.description}</p>}{current.location && <p>{current.location}</p>}
        <div className="lightbox-thumbnails">{items.map((item, i) => <button key={item.id || i} aria-label={`Ver foto ${i + 1}: ${item.title}`} aria-pressed={i === currentIndex} onClick={() => onNavigate(i)}><img src={item.image} alt="" loading="lazy" /></button>)}</div>
      </div>
    </div>
  </dialog>, document.body);
};
