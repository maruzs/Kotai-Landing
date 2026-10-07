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

## Navegación actual

La portada conserva el diseño anterior y reúne la información principal. El menú usa anchors:

- `/#servicios`: programas y mejoras de vivienda.
- `/#requisitos`: condiciones y documentos para preparar.
- `/#proveedor`: Valey, fotografías y videos.
- `/#nosotros`: equipo; Alianza G5 también aparece en inicio.
- `/#contacto`: formulario, llamada y otros canales de contacto.

Solo la galería completa (`/obras`, alias `/evidencia`) y las páginas legales conservan rutas independientes. Las rutas del rediseño descartado (`/servicios`, `/requisitos`, `/proveedor`, `/nosotros`, `/contacto`) redirigen en la SPA a las secciones correspondientes. El hosting debe admitir las rutas de la SPA.

## Contenido y funcionalidad

Usar únicamente `Notas/`, `Images/` y `video_assets/` para nuevo contenido. Se incorporan las tres fotografías reales y las reseñas de `Images/Integrantes empresa/`. El teléfono de cabecera conserva 20 px. El ahorro requerido es de entre 1 y 3 UF, según lo indicado por el propietario. El video anterior incluye un aviso del rango actualizado.

El formulario prepara el mensaje localmente. El visitante revisa los datos, abre WhatsApp y presiona Enviar. La web no confirma recepción ni postulación ante SERVIU.

Los carruseles se controlan manualmente. La ampliación de fotografías mantiene el diálogo accesible con Escape y restauración de foco. El comparador tiene un control nativo para teclado. Los enlaces de secciones funcionan también desde Obras.

## Verificación

La decisión actual se documenta en `MEJORAS_INTERFAZ.md`. Las capturas y resultados de esta corrección están en `revision-interfaz-2026-10-07/` con nombres `portada-restaurada-*` y `pruebas-anchors.json`. Los archivos anteriores de esa carpeta corresponden al rediseño descartado.
