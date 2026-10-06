// Cloudflare Pages Function Middleware
// Intercepta solicitudes a nivel Edge antes de servir la SPA
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Redirigir accesos a webmail directo a la interfaz del hosting cPanel / Roundcube
  if (url.pathname === '/webmail' || url.pathname.startsWith('/webmail/')) {
    return Response.redirect('https://webmail.constructorakotai.cl', 301);
  }

  return context.next();
}
