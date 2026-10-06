import { useState, useEffect } from 'react';

// Navegación SPA instantánea sin dependencias externas
export const navigate = (path: string) => {
  if (typeof window === 'undefined') return;
  if (window.location.pathname === path && !window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Hook reactivo para la ruta actual
export const useCurrentPath = (): string => {
  const [pathname, setPathname] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return pathname;
};
