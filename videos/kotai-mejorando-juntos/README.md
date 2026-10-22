# Kotai · Mejorando juntos

Pieza promocional de **1:58,8**, horizontal **1920 × 1080**, **30 fps**, MP4 H.264 con audio AAC.

El video conserva la canción completa entregada en `Images/newContent/Constructora Kotai - Mejorando Juntos.mp3.mpeg`. La edición usa fotografías y fragmentos de las oficinas y del equipo de esa misma carpeta, junto con obras reales del repositorio. El slogan es **Mejorando juntos**.

## Entregables locales

- `renders/Kotai-Mejorando-juntos-1080p.mp4`: video final.
- `renders/Kotai-Mejorando-juntos-1080p-liviano.mp4`: entrega Full HD comprimida, apta para compartir y versionada en Git.
- `renders/portada.jpg`: imagen de portada.
- `renders/vista-general.jpg`: 18 escenas tomadas del MP4 exportado.
- `renders/verificacion.json`: resultado de la verificación técnica.

El máster de alta calidad, los cachés y las copias de los originales se excluyen de Git. La entrega liviana, portada, vista general e informes se versionan. Los archivos fuente y el lockfile permiten reconstruirlos. La landing presenta la entrega liviana justo después de la portada principal; sus archivos públicos están en `public/videos/kotai-mejorando-juntos.mp4` y `public/videos/posters/kotai-mejorando-juntos.jpg` (rutas desde la raíz del repositorio).

## Reconstrucción

Desde esta carpeta, con Node 22 y Python 3.12:

```powershell
npm ci
python -m pip install -r requirements.txt
python prepare.py
npm run check
npm run review
npm run render
python compress.py
python verify.py renders/Kotai-Mejorando-juntos-1080p-liviano.mp4
```

`render.mjs` reutiliza Chrome Headless Shell del caché de Puppeteer si está disponible; en otro equipo Remotion puede descargar su navegador. `prepare.py` requiere conexión solo la primera vez que descarga Plus Jakarta Sans. Los medios se copian desde el repositorio. `npm run studio` abre el proyecto editable de Remotion.

## Dirección y guion

Burdeos `#8b0b1d`, blanco cálido `#fafaf9` y grafito `#18181b`; tipografía Plus Jakarta Sans y logo original del sitio. Revelados de texto, acercamientos suaves, fundidos, barridos diagonales inspirados en el techo del logo y trazado vectorial para electricidad y energía solar. Los dibujos ilustran servicios; las fotografías son originales del repositorio.

| Tiempo | Contenido |
| --- | --- |
| 0:00–0:10,5 | Kotai, slogan y bienestar del hogar |
| 0:10,5–0:24,8 | Equipo y pregunta inicial |
| 0:24,8–0:40,6 | Oficinas y estribillo «Mejorando juntos» |
| 0:40,6–0:47,8 | Acompañamiento del equipo |
| 0:47,8–1:04,4 | Mejoramiento térmico, eléctrico y colectores solares |
| 1:04,4–1:16,5 | Orientación gratuita y pasos para empezar |
| 1:16,5–1:27,5 | Comunas y equipo cercano |
| 1:27,5–1:40,5 | Antes/después real y comunidad |
| 1:40,5–1:58,8 | Contacto, slogan y cierre |

La edición sigue las entradas vocales de la canción: pregunta alrededor de 0:18, estribillo en 0:32,8, servicios en 0:48, orientación en 1:04,6 y comunas en 1:16,4. El texto promocional se basa en el material entregado y los datos de `src/data/mockData.ts`: **+56 9 5050 1231** y **constructorakotai.cl**.

La escena de comunas y el cierre añaden **«Y además toda la región del Biobío y Ñuble»**, con eñe. La entrega comprimida conserva 1920 × 1080 y 30 fps, con H.264 CRF 26, máximo de 1200 kbit/s y audio AAC de 96 kbit/s. `compresion.json` registra el tamaño real y la reducción frente al máster; `verify.py` acepta la ruta del MP4 que se quiera comprobar.

La entrega verificada pesa **13,09 MB**, frente a **64,65 MB** del máster: una reducción del **79,8 %**. La verificación completa confirma 3564 fotogramas, audio AAC sin saturación y ausencia de pantallas negras sostenidas.

## Verificación

TypeScript, revisión visual de 18 escenas y fotogramas a ambos lados de los 17 cambios de escena. `verify.py` decodifica la exportación completa, comprueba los 3564 fotogramas, formato y audio, detecta pantallas negras sostenidas y extrae la vista general desde el MP4 final.

## Procedencia

`prepare.py` contiene el mapa completo entre medios de origen y nombres de edición. Las fotos del antes/después corresponden a `Images/antes.jpg` e `Images/despues.jpg`. La música se entrega sin locución adicional; los sonidos originales de los clips se silencian. El audio tiene una entrada breve y una salida de dos segundos. La fuente Plus Jakarta Sans se distribuye bajo OFL; licencia adjunta en `FONT-LICENSE.txt`.

Git se sincronizó mediante fetch y fast-forward de `master` a `origin/master`, commit base `00c8e1a`. La actualización de la galería y la entrega liviana se publican en `master` para activar Workers Builds de Cloudflare.
