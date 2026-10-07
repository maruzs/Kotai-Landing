# Mejoras de interfaz de Kotai
Fecha: 7 de octubre de 2026.

## Criterio de diseño
Evolución de la identidad existente: rojo Kotai, tipografía Plus Jakarta Sans, superficies claras, textos legibles y controles con nombres visibles. Variación 3/10, movimiento 1/10 y densidad 3/10. Se adaptaron la navegación responsive y el enfoque de tokens del Design System Vault; se evitaron animaciones decorativas y nuevas dependencias.

Se priorizó a personas mayores y visitantes con poca familiaridad digital. Se conservaron las cuatro fotografías del equipo y el tamaño del número de teléfono de la cabecera: **20 px**. En móvil el teléfono ocupa una fila propia.

## Fuentes
- `Notas/Reuniones/Reunion1.md`: asesoría gratuita, ubicación, organización y necesidad de contacto destacado.
- `Notas/Reuniones/Reunion2.md`: teléfono, correo, horario actualizados, RSH hasta el 70% y presentación del proveedor Valey.
- `Notas/Documentos/PRESENTACION PDA 2026.pdf`: requisitos, documentos y soluciones de mejoramiento térmico.
- `Notas/Documentos/Presentacion Oficina.pdf`: integrantes, departamentos y empresas del grupo.
- `Notas/Documentos/copia de logos.pdf`, `Notas/newContent/`, `Images/` y `video_assets/`: recursos gráficos y audiovisuales. Se reutilizaron sus copias y derivados ya disponibles en `public/`.

No se incorporaron nuevas imágenes externas, cifras comerciales, testimonios, fechas de postulación ni información obtenida de otras webs. Las imágenes del equipo son la excepción existente solicitada expresamente por el propietario. Se conservaron las páginas legales; no se realizó una revisión normativa de sus textos.

## Cambios
1. Portada más breve con orientación y llamada directa como acciones principales. El detalle se encuentra en rutas dedicadas.
2. Menú completo desde 1200 px y menú desplegable en tamaños inferiores. Botón de cierre, Escape, cierre al navegar y estados activos.
3. Rutas para servicios, requisitos, proveedor, nosotros y contacto. Enlaces del pie funcionales desde todas las páginas. Historial del navegador, recarga y enlaces anteriores a secciones principales.
4. Mensaje claro para una dirección inexistente. Es un estado de interfaz; no se añadió una respuesta HTTP 404 del servidor.
5. Formulario antes de los canales secundarios en móvil. Nombre y teléfono obligatorios; RSH desconocido como opción inicial.
6. Validación con resumen enlazado, errores junto a los campos, foco al enviar y conservación de valores al volver a editar.
7. Preparación de WhatsApp en dos pasos. No se abre ni se envía automáticamente el mensaje. El usuario puede revisar, corregir y continuar.
8. Autorización explícita para atender la consulta y política en otra pestaña, para conservar el formulario.
9. Carruseles automáticos reemplazados por fotografías seleccionables. Sin movimiento que obligue a leer deprisa.
10. Galerías con botones accesibles, ampliación mediante diálogo nativo, recorrido de foco, Escape y devolución de foco al control que abrió la fotografía.
11. Comparador antes/después con control nativo de rango y botones alternativos. Funciona con teclado.
12. Filtros limitados a categorías con fotografías; estado vacío defensivo. Más fotografías mediante un botón, para reducir el contenido inicial.
13. Proveedor con logos legibles, textos breves, seis videos seleccionables, encuadre vertical cuando corresponde y fotografías ampliables.
14. Controles de video sin reproducción automática, mensajes de error y reintento. Video explicativo existente trasladado a Servicios.
15. Contraste de los botones WhatsApp mejorado. Se retiraron los accesos flotantes a redes sociales que no tenían destino.
16. WhatsApp flotante oculto en Contacto y durante los diálogos, evitando cubrir campos y controles.
17. Equipo y Alianza G5 organizados en una página propia; funciones departamentales desplegables. Se mantuvo el contador de visitas en un desplegable del pie y se evita llamar a su API desde localhost.
18. Título y canonical por ruta, sitemap con las páginas públicas, enlace para saltar al contenido y respeto a movimiento reducido mediante CSS.

## Ahorro pendiente
Se reemplazaron las afirmaciones definitivas de ahorro de los textos visibles por una indicación de confirmación. No se publicó 1–3 UF como monto aprobado. El requisito de avalúo fiscal de 1.375 UF corresponde a un concepto distinto y se conserva según el PDF.

El video anterior y sus recursos originales no se modificaron: el aviso bajo el reproductor aclara que sus cifras están pendientes de confirmación. Cuando el propietario confirme las condiciones del llamado, deberán actualizarse los textos y, si corresponde, ese material audiovisual.

## Verificación
- `npm run build`: TypeScript y compilación Vite correctos.
- Pruebas en navegador real mediante Playwright del navegador integrado, con resultados en `revision-interfaz-2026-10-07/pruebas-interfaz.json`.
- Cabecera comprobada a 320, 375, 768, 1024, 1200, 1280, 1366, 1440 y 1920 px: controles dentro de pantalla, sin desbordamiento horizontal y teléfono de 20 px.
- Menú móvil y Escape; rutas desde el pie; historial atrás/adelante; recarga de rutas; enlaces antiguos y página inexistente.
- Formulario vacío, validación, escritura sin pérdida de foco, preparación de mensaje, edición conservando valores y versión compilada. Solo se usaron datos ficticios; no se abrió el enlace de envío a WhatsApp.
- Diálogo: navegación entre fotos, Shift+Tab, Escape, retorno de foco y ocultación del botón flotante.
- Comparador con flechas de teclado, alternativas Antes/Después, filtros y carga de más fotografías.
- Selección de video vertical y encuadre adaptado.
- Recursos locales referenciados: archivos presentes. Sin caracteres de reemplazo en el código fuente. `git diff --check` correcto.
- La regla de movimiento reducido se inspeccionó en el código; no se emuló una configuración de sistema en esta sesión.
- Capturas: portada notebook y móvil, contacto móvil y proveedor notebook.

La portada móvil anterior medía 33.628 px en 375 × 812 según la auditoría. La nueva se midió aproximadamente en 5.300 px con ese mismo tamaño; no representa una medición de conversión ni de velocidad.

## Entrega
Cambios locales, sin commit, push ni despliegue. No se modificaron las carpetas fuente de notas, imágenes y videos, el archivo de auditoría anterior ni la carpeta `ignore/`. Se instalaron las dependencias existentes con `npm ci`; los manifiestos y el lockfile se conservaron.
