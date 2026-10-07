# Kotai-Landing

Sitio de Constructora Kotai en React 18, TypeScript, Vite y Tailwind.

## Desarrollo y compilación

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

La compilación se genera en `dist/`. El proyecto conserva las redirecciones de webmail y las funciones de visitas existentes.

## Navegación

- `/`: portada breve, proceso de acompañamiento y acceso a orientación.
- `/servicios`: mejoras de vivienda y video explicativo.
- `/requisitos`: requisitos, documentos y guía imprimible.
- `/obras`: comparación antes/después, filtros y fotografías ampliables.
- `/proveedor`: Vidriería y Ferretería Valey, fotografías y videos.
- `/nosotros`: equipo y organización Alianza G5.
- `/contacto`: llamada directa y preparación de consulta por WhatsApp.
- Se conservan las páginas legales y el alias `/evidencia`.

Los enlaces anteriores a secciones principales se resuelven a las páginas correspondientes. El servidor que publique el sitio debe admitir las rutas de la SPA; Cloudflare Pages ofrece ese comportamiento cuando no se agrega un `404.html` personalizado.

## Contenido

Usar únicamente el material de `Notas/`, `Images/` y `video_assets/` para nuevos contenidos. Las notas más recientes tienen prioridad para teléfono, correo, horario y RSH. Los recursos en `public/` son las copias y derivados ya existentes que utiliza la web.

Las fotografías actuales del equipo se conservan por instrucción del propietario. El teléfono de la cabecera conserva 20 px en todos los tamaños.

El ahorro requerido está pendiente de confirmación. No reemplazarlo por una cifra definitiva hasta recibir confirmación del propietario. El video anterior no fue reeditado y muestra un aviso sobre los montos pendientes.

## Validación de interfaz

Ver [detalle de mejoras](MEJORAS_INTERFAZ.md) y [resultados de navegador](revision-interfaz-2026-10-07/pruebas-interfaz.json). Las capturas de notebook, móvil, contacto y proveedor están en esa misma carpeta.

La consulta se prepara en el navegador. El usuario debe abrir WhatsApp y enviar el mensaje; el formulario no confirma recepción ni postulación ante SERVIU.
