# Contador de visitas — 7 de octubre de 2026

## Causa reproducida

`GET https://constructorakotai.cl/api/visits` devolvía `200 text/html` con la portada de la SPA, en vez de estadísticas JSON. El despliegue de Workers solo incluía archivos estáticos: `wrangler.jsonc` no tenía `main`. La función existente estaba en `functions/api/visits.js`, una ubicación de Pages Functions que ese despliegue no ejecutaba.

El cliente conservaba ceros cuando fallaba el JSON y marcaba la sesión antes de confirmar el registro. Además, el backend contenía cifras ficticias para días sin datos y respuestas de error.

## Corrección

- Entrada `worker/index.js`, binding `ASSETS` y ejecución prioritaria de `/api/*` y `/webmail`. Se reutilizan las funciones existentes y el mismo namespace `KOTAI_KV`.
- Sesión marcada después de una respuesta válida; actualización del marcador por día. La API deduplica el navegador por día.
- Estado «Visitas no disponibles» si falla la API; «Visitas: —» en localhost. Sin cifras ficticias ni caché local que simule una respuesta actual.
- Historial sin datos igual a cero. Falta de KV o error del almacenamiento devuelve 503, sin estadísticas inventadas.

La configuración de enrutamiento sigue la [documentación oficial de Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/binding/).

## Validación

1. Reproducción pública antes del cambio: `200 text/html`, fallo del requisito de JSON.
2. `node scripts/test-visits.mjs`: prueba inicialmente fallida; luego correcta. Comprueba JSON, registro, deduplicación, historial real, errores de KV, webmail y SPA. Usa almacenamiento de prueba y no inserta visitas de prueba en producción.
3. `npm run build`: correcto.
4. `npx wrangler@4 deploy --dry-run`: Worker empaquetado con bindings `ASSETS` y `KOTAI_KV`.
5. Tras el push y despliegue automático: la API pública devuelve `200 application/json` y `configured: true`.
6. Al abrir la web publicada para verificarla, el contador pasó de cero a una visita; al recargar permaneció en una visita. Evidencia: `revision-interfaz-2026-10-07/contador-produccion.jpg`.

## Alcance

El contador empieza a registrar con la API operativa. No puede reconstruir visitas anteriores que no se guardaron. Usa KV y deduplicación por navegador, no identifica personas ni sustituye una plataforma de analítica; las actualizaciones de KV no son transacciones atómicas y el conteo es orientativo bajo tráfico simultáneo.
