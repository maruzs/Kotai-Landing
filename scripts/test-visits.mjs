import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
const values = new Map();
const env = {
  KOTAI_KV: { get: async key => values.get(key) ?? null, put: async (key, value) => values.set(key, value) },
  ASSETS: { fetch: async () => new Response('<html>SPA</html>', { headers: { 'Content-Type': 'text/html' } }) },
};
const worker = config.main ? (await import(new URL('../' + config.main, import.meta.url).href)).default : env.ASSETS;
const request = (method = 'GET') => new Request('https://constructorakotai.cl/api/visits', { method, headers: { 'X-Visitor-Id': 'test-visitor' } });
const response = await worker.fetch(request(), env);
assert.match(response.headers.get('Content-Type') || '', /application\/json/, 'La API debe devolver JSON, no el HTML de la SPA');
assert.equal((await response.json()).total, 0);
assert.equal((await (await worker.fetch(request('POST'), env)).json()).total, 1);
assert.equal((await (await worker.fetch(request('POST'), env)).json()).total, 1, 'Una recarga no duplica la visita diaria');
const stats = await (await worker.fetch(request(), env)).json();
assert.equal(stats.today, 1);
assert.equal(stats.month, 1);
assert.equal(stats.history.slice(0, -1).every(day => day.visits === 0), true, 'No inventar visitas históricas');
assert.equal((await worker.fetch(request(), { ASSETS: env.ASSETS })).status, 503);
assert.equal((await worker.fetch(request(), { ...env, KOTAI_KV: { get: async () => { throw new Error('storage unavailable'); } } })).status, 503);
assert.equal((await worker.fetch(new Request('https://constructorakotai.cl/webmail'), env)).headers.get('Location'), 'https://webmail.constructorakotai.cl/');
assert.match(await (await worker.fetch(new Request('https://constructorakotai.cl/obras'), env)).text(), /SPA/);
console.log('PASS: API JSON, conteo, deduplicación, historial real, fallos de KV, webmail y SPA');
