import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Redirección inmediata por si el navegador tenía la SPA en caché
if (typeof window !== 'undefined' && (window.location.pathname === '/webmail' || window.location.pathname.startsWith('/webmail/'))) {
  window.location.replace('https://webmail.constructorakotai.cl');
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
