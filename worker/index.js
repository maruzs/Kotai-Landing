import { onRequest as visits } from '../functions/api/visits.js';
import { onRequest as middleware } from '../functions/_middleware.js';

export default {
  async fetch(request, env) {
    return middleware({ request, env, next: () => {
      const path = new URL(request.url).pathname;
      if (path === '/api/visits' || path === '/api/visits/') return visits({ request, env });
      if (path.startsWith('/api/')) return new Response(JSON.stringify({ error: 'API no encontrada' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      return env.ASSETS.fetch(request);
    } });
  },
};
