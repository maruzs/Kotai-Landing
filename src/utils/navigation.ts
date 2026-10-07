import { useState, useEffect } from 'react';
export const SECTION_ROUTES: Record<string, string> = {
  contacto: '/contacto', servicios: '/servicios', proveedor: '/proveedor',
  requisitos: '/requisitos', nosotros: '/nosotros', inicio: '/',
};
export const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
export const navigate = (path: string) => {
  const resolved = path.startsWith('#') ? SECTION_ROUTES[path.slice(1)] || `/${path}` : path;
  const url = new URL(resolved, window.location.origin);
  if (url.origin !== window.location.origin) return;
  if (window.location.pathname + window.location.hash !== url.pathname + url.hash) {
    window.history.pushState({}, '', url.pathname + url.search + url.hash);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
};
export const useCurrentPath = (): string => {
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  return pathname;
};
