# Kotai-Landing

Sitio de Constructora Kotai en React, TypeScript, Vite y Tailwind.

## Desarrollo

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

La compilación se genera en `dist/`.

## Video «Mejorando juntos»

La nueva pieza promocional y su proyecto editable están en [`videos/kotai-mejorando-juntos/`](videos/kotai-mejorando-juntos/README.md). Utiliza la canción y el material de `Images/newContent/`, junto con fotografías reales de las obras de Kotai. Exporta un MP4 horizontal Full HD de 1:58,8 con animaciones, transiciones, antes/después y contacto. Los comandos de reconstrucción y verificación están en el README del video.

La entrega liviana, con cobertura de toda la región del Biobío y Ñuble, se conserva en `videos/kotai-mejorando-juntos/renders/Kotai-Mejorando-juntos-1080p-liviano.mp4`. El máster de alta calidad se genera localmente y se excluye de Git.

La landing presenta este video inmediatamente después de la portada, antes de los pasos para postular. La portada incluye el acceso «Ver video: Mejorando juntos», con desplazamiento suave a `/#video-explicativo`. El reproductor muestra una imagen de portada y descarga el MP4 únicamente cuando el visitante lo reproduce (`preload="none"`), conserva la imagen completa en 16:9 y ofrece controles nativos, pantalla completa, reproducción inline en móvil y descarga. Incluye estados de carga y error con reintento, una alternativa de lectura y enlaces a orientación y WhatsApp.

Los archivos públicos son `public/videos/kotai-mejorando-juntos.mp4` (13,09 MB) y `public/videos/posters/kotai-mejorando-juntos.jpg`. Si se vuelve a generar la entrega, copiar el MP4 liviano y su portada a estas rutas antes de compilar. El video informativo anterior permanece como archivo, pero el reproductor de la landing presenta «Mejorando juntos».

Los accesos flotantes de redes sociales se ocultan mientras el reproductor está a la vista para evitar superposiciones. QA de esta integración: reproducción real mediante teclado en 1440 y 390 px, pausa y búsqueda, ausencia de descarga previa al clic, desplazamiento hasta contacto y simulación de fallo de red con reintento exitoso. Los resultados y capturas locales están en `videos/kotai-mejorando-juntos/review/landing-video/`.

## Navegación actual

La portada conserva el diseño anterior y reúne la información principal. El menú usa anchors:

- `/#servicios`: programas y mejoras de vivienda.
- `/#requisitos`: condiciones y documentos para preparar.
- `/#proveedor`: Valey, fotografías y videos.
- `/#nosotros`: equipo; Alianza G5 también aparece en inicio.
- `/#contacto`: formulario, llamada y otros canales de contacto.

Solo la galería completa (`/obras`, alias `/evidencia`) y las páginas legales conservan rutas independientes. Las rutas del rediseño descartado (`/servicios`, `/requisitos`, `/proveedor`, `/nosotros`, `/contacto`) redirigen en la SPA a las secciones correspondientes. El hosting debe admitir las rutas de la SPA.

## Contenido y funcionalidad

Usar únicamente `Notas/`, `Images/` y `video_assets/` para nuevo contenido. Se incorporan las tres fotografías reales y las reseñas de `Images/Integrantes empresa/`. El teléfono de cabecera conserva 20 px. El ahorro requerido es de entre 1 y 3 UF, según lo indicado por el propietario.

El formulario prepara el mensaje localmente. El visitante revisa los datos, abre WhatsApp y presiona Enviar. La web no confirma recepción ni postulación ante SERVIU.

Los carruseles se controlan manualmente. La ampliación de fotografías mantiene el diálogo accesible con Escape y restauración de foco. El comparador tiene un control nativo para teclado. Los enlaces de secciones funcionan también desde Obras.

La galería fotográfica de la sección Proveedor muestra ahora seis fotografías reales del equipo y las oficinas de Kotai, con títulos y descripciones acordes. Los videos y las fichas de los proveedores conservan su contenido. Las imágenes WebP se reconstruyen con `python scripts/prepare-team-photos.py` (Pillow). La galería usa una columna bajo 768 px; el diálogo permite ampliar, navegar con flechas y cerrar con Escape. Su prueba E2E está en `scripts/test-team-gallery.cjs` y usa Playwright instalado en el entorno de pruebas.

## Contador de visitas y despliegue

`wrangler.jsonc` despliega un Worker con `worker/index.js` como entrada. Las rutas `/api/*` y `/webmail` pasan por el Worker antes de los archivos estáticos. La API reutiliza `functions/api/visits.js` y el enlace `KOTAI_KV`; mantener este namespace al desplegar para conservar sus datos.

Se cuenta una visita por navegador al día, sin duplicar recargas. El contador se consulta al abrir el sitio y no registra pruebas en localhost. Si la API o KV fallan, la interfaz muestra «Visitas no disponibles» y no inventa cifras. Las visitas anteriores que no llegaron a registrarse no se pueden reconstruir con este contador.

Prueba de regresión: `node scripts/test-visits.mjs`. Esta prueba ejecuta el Worker con almacenamiento de prueba; no escribe visitas de prueba en producción.

## Verificación

La decisión actual se documenta en `MEJORAS_INTERFAZ.md`. Las capturas y resultados de esta corrección están en `revision-interfaz-2026-10-07/` con nombres `portada-restaurada-*` y `pruebas-anchors.json`. Los archivos anteriores de esa carpeta corresponden al rediseño descartado.
