import { useState, useEffect } from 'react';
const LEGACY_SECTIONS: Record<string, string> = {
 '/contacto': 'contacto', '/servicios': 'servicios', '/proveedor': 'proveedor',
 '/requisitos': 'requisitos', '/nosotros': 'nosotros',
};
export const scrollBehavior = (): ScrollBehavior =>
 window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
const scrollToLocation = () => {
 requestAnimationFrame(() => {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (id) document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  else window.scrollTo({ top: 0, behavior: scrollBehavior() });
 });
};
export const navigate = (path: string) => {
 const url = new URL(path.startsWith('#') ? `/${path}` : path, window.location.origin);
 if (url.origin !== window.location.origin) return;
 if (LEGACY_SECTIONS[url.pathname]) {
  url.hash = LEGACY_SECTIONS[url.pathname]; url.pathname = '/';
 }
 if (window.location.pathname + window.location.hash !== url.pathname + url.hash)
  window.history.pushState({}, '', url.pathname + url.search + url.hash);
 window.dispatchEvent(new PopStateEvent('popstate'));
};
export const useCurrentPath = (): string => {
 const [pathname, setPathname] = useState(window.location.pathname);
 useEffect(() => {
  const update = () => {
   const legacy = LEGACY_SECTIONS[window.location.pathname];
   if (legacy) window.history.replaceState({}, '', `/#${legacy}`);
   setPathname(window.location.pathname);
   scrollToLocation();
  };
  update();
  window.addEventListener('popstate', update);
  window.addEventListener('hashchange', update);
  return () => { window.removeEventListener('popstate', update); window.removeEventListener('hashchange', update); };
 }, []);
 return pathname;
};
