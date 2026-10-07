# Auditoría de interfaz de Kotai, versión actualizada

## 1. Metadatos y alcance

- Fecha: 7 de octubre de 2026, America/Santiago.
- Proyecto: `C:/Users/maria/Desktop/Software/Kotai-Landing`.
- Rama: `master`.
- Commit: `1883e096e96c9342600cae414c943393911587af`.
- Último cambio: incorporación de Valey como fábrica/proveedor, medios de planta, contacto actualizado y cambios de contenido sobre ahorro.
- Entornos: código local y [web publicada](https://constructorakotai.cl/).
- Alcance solicitado: estética, interfaz, navegación, responsive, estados y accesibilidad de interacciones.
- Modo: solo lectura; el único archivo creado en el proyecto es este informe. Se conserva el directorio preexistente no rastreado `ignore/`.

La estructura de este documento adapta la plantilla de technical-audit al alcance de interfaz. No es una auditoría de seguridad, infraestructura, requisitos legales o elegibilidad de subsidios, y no certifica que el sistema completo esté listo para producción.

Tipos de evidencia: **Código** = observado directamente en archivos; **Prueba** = confirmado mediante navegación o medición segura; **Inferido** = criterio de diseño a validar con usuarios; **Pendiente** = no comprobado.

## 2. Conclusión ejecutiva

La actualización mejora el respaldo visual: ya existen proveedores identificables, logos y fotografías/vídeos de fabricación y despacho. El teléfono, correo y horario actualizados también aparecen en la web publicada.

Sin embargo, la interfaz aún requiere correcciones antes de considerarla terminada. El nuevo enlace del menú provoca que el CTA principal se recorte en tamaños de laptop. El formulario anuncia un envío que el código no confirma. Persisten enlaces de pie que no funcionan desde otras páginas, problemas de teclado y contradicciones internas en el aporte requerido.

Estéticamente, el problema central sigue siendo la acumulación: Valey tiene ahora una sección completa de más de tres mil píxeles en escritorio, además de volver a aparecer en aliados. Kotai gana evidencia, pero pierde foco como página dirigida a familias. La solución recomendable es editar y jerarquizar, no añadir más efectos.

**Clasificación dentro del alcance auditado:** 0 críticas, 2 altas, 10 medias, 3 bajas y 2 informativas. La severidad se refiere al impacto funcional/de accesibilidad de la interfaz; las propuestas de estilo se clasifican como informativas y no como vulnerabilidades.

Cinco prioridades:

1. Recuperar la visibilidad completa del CTA del encabezado en laptop.
2. Corregir “Solicitud enviada” por un estado que describa la preparación del mensaje de WhatsApp.
3. Unificar el contenido de ahorro y mostrar requisitos en un destino claro.
4. Dar prioridad al formulario móvil y reparar navegación de pie entre páginas.
5. Hacer que galerías, comparador y visor funcionen con teclado y capas coherentes.

No recomendaría rehacer la marca. Mantendría el rojo corporativo, Plus Jakarta Sans, el logo y los medios reales confirmados. Ajustaría arquitectura de contenido, estados, componentes y fotografía.

## 3. Inventario tecnológico relevante

| Capa | Observado | Implicación para la interfaz |
|---|---|---|
| Frontend | React 18, TypeScript, Vite 6, Tailwind 3 según `package.json` | Permite corregir componentes y estados sin cambiar de framework. |
| Iconos | `lucide-react` ya instalado como dependencia declarada | Conservar la familia actual; no introducir otra solo por preferencia estética. |
| Navegación | Utilidades propias con History API | El comportamiento depende de handlers repartidos entre componentes. |
| Datos comerciales | `src/data/mockData.ts` y textos embebidos en JSX | La duplicación favorece inconsistencias de contenido. |
| Contacto | Preparación de enlace `wa.me` | El formulario no acredita recepción ni registro formal de una solicitud. |
| Publicación | Configuración de assets de Cloudflare | No se auditó la configuración externa ni el despliegue completo. |

Las versiones son las declaradas en el manifiesto, no una evaluación de actualidad o vulnerabilidades. No había `node_modules` en la raíz ni servidor de desarrollo escuchando en los puertos habituales comprobados. No se instalaron dependencias ni se ejecutó el build.

## 4. Arquitectura de interfaz

[App.tsx](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/App.tsx:19) selecciona vistas según la ruta:

- Home: hero, proceso, vídeo, servicios, proveedor, evidencia, empresa, holding y contacto.
- `/obras` y `/evidencia`: vista de evidencia.
- Rutas documentales: `/legal`, `/terminos`, `/privacidad`, `/cookies`, `/arcop` y `/legal-compliance`.
- Navbar, pie y flotantes se comparten entre vistas.

La sección de Valey se monta en [App.tsx:58](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/App.tsx:58), antes de la evidencia de obras de Kotai. La tarjeta de proveedor vuelve a aparecer dentro de empresa/aliados, desde [AboutAndHistory.tsx:127](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/AboutAndHistory.tsx:127).

**Inferido:** este orden da mucho protagonismo al proveedor antes de demostrar el resultado del servicio de Kotai. Recomiendo una muestra breve del respaldo de Valey en home y una vista de detalle para catálogo audiovisual y logística, si se decide ampliar la arquitectura.

## 5. Límites de esta auditoría

No se enviaron datos personales, formularios, mensajes de WhatsApp ni solicitudes de derechos. No se probaron endpoints de forma destructiva.

La sección de seguridad y límites de confianza de la plantilla integral queda fuera del alcance. Solo se analizó qué promete y comunica la interfaz frente a lo que hacen sus handlers. Tampoco se validaron certificados de ventanas, identidades de fotografías, requisitos ministeriales o afirmaciones de ahorro energético.

## 6. Método

Se inspeccionaron `AGENTS.md`, estado de Git, último commit y comparación con `295adc7`, manifiesto, estilos, navegación, datos y componentes de las interacciones principales. Se revisó la web actual mediante navegador y lecturas del DOM.

Comprobaciones:

- Encabezado a 1024, 1280, 1366, 1440 y 1920 px.
- Home/contacto a 375 × 812.
- Medición de secciones, controles y contraste de un botón.
- Selector de vídeo de Valey y apertura del visor.
- `Shift+Tab` desde cerrar visor.
- Escape con menú móvil abierto.
- Filtro de obras sin resultados.
- Enlace de pie a requisitos desde `/obras`.

Se aplicaron ui-ux-pro-max, design-taste-frontend y design-system-vault como criterios contextuales, y technical-audit para trazabilidad. No se impusieron efectos del Vault ni cambios de marca por defecto.

## 7. Matriz de hallazgos

Todos están abiertos al cierre de la revisión.

| ID | Severidad | Hallazgo | Evidencia |
|---|---|---|---|
| UI-01 | Alta | CTA del encabezado fuera o parcialmente fuera de pantalla | Código + Prueba |
| UI-02 | Alta | Confirmación de envío que solo prepara WhatsApp | Código |
| UI-03 | Media | Aporte descrito como 3 UF, 3–5 UF y 1–3 UF | Código + Prueba parcial |
| UI-04 | Media | Anclas del pie no navegan a la home desde `/obras` | Código + Prueba |
| UI-05 | Media | Visor modal permite foco exterior y flotantes encima | Código + Prueba |
| UI-06 | Media | Fotos y comparador sin alternativa completa de teclado | Código + DOM |
| UI-07 | Media | Carruseles automáticos sin pausa del usuario ni movimiento reducido | Código |
| UI-08 | Informativa | Home y proveedor demasiado extensos y repetidos | Prueba + Inferido |
| UI-09 | Media | Formulario móvil después de una larga tarjeta de contacto | Código + Prueba |
| UI-10 | Media | Filtro de obras sin explicación cuando no tiene resultados | Código + Prueba |
| UI-11 | Media | Retratos externos todavía asociados a nombres del equipo | Código; identidad pendiente |
| UI-12 | Baja | Redes sociales visibles pero sin destino funcional | Código + Prueba previa/current DOM |
| UI-13 | Baja | Indicadores del hero con área táctil de 10 px de alto | Código + Prueba |
| UI-14 | Baja | Vídeo vertical en marco horizontal y títulos de playlist truncados | Código + Prueba |
| UI-15 | Informativa | Exceso de etiquetas, cajas, logos pequeños y títulos equivalentes | Código + Inferido visual |
| UI-16 | Media | “Requisitos” lleva al proceso; lista declarada no se renderiza | Código + Prueba |
| UI-17 | Media | Texto blanco del botón WhatsApp con contraste 1,98:1 | Código + Prueba/cálculo |

## 8. Detalle y correcciones propuestas

### UI-01. CTA principal recortado en laptop

**Código:** [Navbar.tsx:110](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/Navbar.tsx:110) muestra la navegación desde `lg`, con `gap-5 xl:gap-8 shrink-0`. [Navbar.tsx:131](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/Navbar.tsx:131) mantiene teléfono y CTA también sin encogerse. El nuevo enlace aumenta el ancho total.

**Prueba:** límites del botón “Postula Aquí”, en píxeles CSS:

| Viewport | Izquierda CTA | Derecha CTA | Resultado |
|---|---:|---:|---|
| 1024 | 1119 | 1271 | Totalmente fuera de pantalla |
| 1280 | 1256 | 1408 | Parcialmente fuera |
| 1440 | 1344 | 1496 | Parcialmente fuera |
| 1920 | 1588 | 1740 | Visible |

El ancho del documento no reveló esta colisión; medir solo `scrollWidth` habría ocultado el problema.

**Corrección:** priorizar logo y acción; reducir textos/gaps, ocultar el teléfono largo antes del punto de colisión o usar menú colapsado hasta un breakpoint donde quepa toda la navegación. La sección proveedor puede quedar dentro de empresa o un menú de respaldo. No comprimir texto hasta hacerlo ilegible.

**Cierre:** CTA completamente visible y accionable a 1024, 1280, 1366 y 1440 px, incluyendo texto ampliado. Revisar el encabezado antes y después de desplazarse.

### UI-02. “Solicitud enviada” no corresponde al flujo real

**Código:** [ContactSection.tsx:19](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ContactSection.tsx:19) prepara texto; en líneas 39–44 forma `wa.me`, marca `submitted=true` y abre WhatsApp. [ContactSection.tsx:195](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ContactSection.tsx:195) muestra “¡Solicitud de Postulación Enviada!”. No se espera confirmación del envío del mensaje.

**Condición:** el usuario pulsa el botón; aunque no envíe el mensaje o el navegador bloquee la pestaña, la interfaz presenta éxito.

**Impacto:** alguien puede creer que Kotai recibió su consulta y esperar una respuesta que no llegará. Este es un problema del estado de interfaz, no una afirmación sobre el backend general.

**Corrección:** botón “Continuar en WhatsApp”; resultado “Tu mensaje está preparado. Envíalo en WhatsApp para que podamos recibirlo”. Conservar un enlace visible para abrir WhatsApp manualmente y un botón “Editar mis datos”. Usar éxito de recepción únicamente si se implementa y verifica una recepción real.

**Cierre:** abrir y bloquear la nueva pestaña no deben producir un mensaje falso de recepción. Probar el flujo con datos ficticios en un entorno acordado, sin enviar una solicitud a producción durante la auditoría.

### UI-03. Tres descripciones distintas del aporte

**Código y prueba:** [HeroCarousel.tsx:132](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/HeroCarousel.tsx:132) conserva “3 a 5 UF”, visible en la web. [mockData.ts:373](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/data/mockData.ts:373) contiene 3 UF en la tabla actual. [ContactSection.tsx:290](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ContactSection.tsx:290) muestra 3 UF. [LegalPage.tsx:186](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/LegalPage.tsx:186) conserva “1 y 3 UF”.

**Corrección:** confirmar el texto vigente con el responsable del contenido y centralizar los valores y condiciones usados por todos los componentes. Registrar excepciones reales de forma explícita. No elegir un monto basándose en esta auditoría de interfaz.

**Cierre:** búsqueda de todas las menciones a UF, revisión de home, formulario y documentos; ninguna variación sin explicación de su contexto.

### UI-04. Navegación de pie incompleta entre páginas

**Código:** [Footer.tsx:12](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/Footer.tsx:12) cancela el clic y busca el destino únicamente en el documento actual. Enlaces a servicios, proveedor, requisitos y empresa usan ese handler desde [Footer.tsx:75](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/Footer.tsx:75).

**Prueba:** en `/obras`, al pulsar “Requisitos de Postulación”, la URL permaneció `/obras`; el ID `requisitos` no existe allí. No se produjo navegación a requisitos.

**Corrección:** compartir una utilidad de navegación a ruta y sección entre navbar y footer; enlazar realmente a `/#requisitos` y resolver el scroll después del montaje. Evitar depender de tiempos arbitrarios cuando se pueda observar el destino montado.

**Cierre:** los cuatro enlaces del pie llevan a su destino desde home, obras y documentos, con encabezado visible y comportamiento correcto al volver atrás.

### UI-05. Modal sin confinamiento del foco

**Código:** [ImageLightboxModal.tsx:44](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ImageLightboxModal.tsx:44) maneja Escape/flechas y bloquea scroll; no implementa foco inicial, ciclo de Tab ni restauración. El contenedor usa `role=dialog aria-modal=true` desde línea 96. Los flotantes y modal comparten `z-50`, pero [App.tsx:79](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/App.tsx:79) monta los flotantes después del contenido.

**Prueba:** con visor de Valey abierto, `Shift+Tab` desde “Cerrar modal” llevó el foco al enlace exterior “Postular con Kotai”. Las redes flotantes seguían visibles encima del visor. El menú móvil tampoco cerró al pulsar Escape; el botón permaneció con `aria-expanded=true`.

**Corrección:** usar un modal con foco inicial, ciclo interno de Tab, fondo inerte y devolución del foco al activador; establecer capas independientes para navegación, flotantes y modales. Ocultar flotantes durante la vista modal. Dar Escape al menú móvil y cambiar su nombre accesible a “Cerrar menú” cuando esté abierto.

**Referencia:** [patrón de diálogo modal W3C](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

**Cierre:** ningún Tab sale del visor; al cerrar se recupera el activador; WhatsApp no se superpone. Menú abierto/cerrado se anuncia y funciona con teclado.

### UI-06. Fotografías y comparador no operables completamente con teclado

**Código:** [ProviderShowcase.tsx:355](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ProviderShowcase.tsx:355) crea seis tarjetas con `div onClick`, sin rol, `tabIndex` ni teclado. [EvidenciaTeaser.tsx:61](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/EvidenciaTeaser.tsx:61) hace lo mismo para cambiar de ruta. [BeforeAfterSlider.tsx:108](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/BeforeAfterSlider.tsx:108) usa un `div` con eventos de puntero y `touch-none`, sin slider accesible.

**Prueba DOM:** las seis tarjetas de proveedor eran DIV, con rol y tabindex nulos.

**Corrección:** botón para ampliar una foto, enlace para ir a una página; slider nativo o control equivalente con etiqueta, valor y flechas/Home/End. Anunciar selección de filtros/playlist con estado semántico. No resolverlo con `tabIndex` aislado sin comportamiento de teclado.

**Cierre:** abrir cada foto y operar comparación sin mouse; la operación táctil de comparación no debe impedir innecesariamente el desplazamiento vertical fuera del control.

### UI-07. Movimiento continuo sin control del usuario

**Código:** [HeroCarousel.tsx:10](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/HeroCarousel.tsx:10) cambia cada 5 s; [ProjectsAutoCarousel.tsx:25](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ProjectsAutoCarousel.tsx:25) cada 5 s; [RealWorksCarousel.tsx:13](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/RealWorksCarousel.tsx:13) cada 4,5 s. Las galerías se pausan con modal abierto, pero no tienen pausa persistente elegida por el usuario. La búsqueda de `prefers-reduced-motion`, `motion-reduce`, `useReducedMotion` y `matchMedia` en `src` no encontró implementación.

**Corrección:** preferiblemente un hero estable y galerías manuales. Si se mantiene autoplay, añadir pausa/reanudar y detenerlo ante preferencia de movimiento reducido. Aplicar esa preferencia también a scroll suave y pulsos, por ejemplo el `animate-ping` en [WhatsAppButton.tsx:86](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/WhatsAppButton.tsx:86).

**Referencia:** [W3C, control de contenido automático](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

**Cierre:** se puede leer indefinidamente una foto/título sin que cambie; movimiento reducido produce una experiencia estable. No se probó una configuración de movimiento reducido del sistema durante esta revisión.

### UI-08. Una sección de proveedor ocupa casi una página independiente

**Prueba:** home de 16.699 px a 1366 × 768 y 33.628 px a 375 × 812. Alturas relevantes:

| Sección | Desktop 1366 px | Móvil 375 px |
|---|---:|---:|
| Servicios | 3767 | 8728 |
| Proveedor | 3261 | 6541 |
| Empresa/equipo/aliados | 2017 | 4980 |
| Holding | 1369 | 2674 |
| Contacto | 1317 | 2661 |

**Código:** [ProviderShowcase.tsx:45](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ProviderShowcase.tsx:45) contiene presentación, dos pilares, reproductor de seis vídeos, seis fotos y otro CTA. [AboutAndHistory.tsx:127](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/AboutAndHistory.tsx:127) vuelve a mostrar los aliados.

**Inferido:** se mezcla la orientación a familias con un catálogo dirigido a constructoras. El volumen de contenido puede restar foco y hacer más costoso encontrar qué hacer, aunque no demuestra una caída de conversión.

**Propuesta:** home con un bloque de respaldo: logos legibles, una foto/vídeo representativo y beneficio concreto para el beneficiario. Llevar el detalle audiovisual a “Cómo trabajamos” o una página de proveedor, manteniendo sus activos. No retirar contenido que el negocio necesite sin reorganizarlo.

**Cierre editorial:** pruebas con usuarios que identifiquen servicio, requisitos, obras y canal de consulta sin recorrer toda la home. No existe una altura universal que garantice conversión.

### UI-09. La acción elegida queda dos pantallas más abajo

**Código:** [ContactSection.tsx:65](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ContactSection.tsx:65) pone canales primero; el formulario se monta después desde línea 186.

**Prueba:** a 375 px, Nombre está 1655 px por debajo del inicio de contacto. Tras “Postula Aquí” se ven título, introducción y canales antes de los campos.

**Corrección:** en móvil, título breve, aviso de que se continuará en WhatsApp y formulario; canales compactos como alternativa. Dirección, horario y enlaces de apoyo después. Evitar duplicar título de sección y título del formulario con casi la misma promesa.

**Cierre:** desde el CTA se ve el comienzo del formulario y se entiende qué ocurrirá, sin atravesar una tarjeta corporativa extensa. Conservar toda la información de contacto en un lugar accesible.

### UI-10. Filtro sin resultados parece una sección vacía

**Código:** [ProjectsAutoCarousel.tsx:13](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ProjectsAutoCarousel.tsx:13) declara filtros; desde línea 103 solo renderiza contenido si existe `currentProject`. No hay alternativa textual para cero resultados.

**Prueba:** “Mejoramiento Eléctrico” dejó vacía la zona de proyectos en `/obras`.

**Corrección:** mensaje específico y botón “Ver todas las obras”; alternativamente publicar filtros únicamente cuando haya contenido. Anunciar el número de resultados tras filtrar.

**Cierre:** todos los filtros presentan resultados o un estado vacío comprensible, sin generar un hueco inexplicable.

### UI-11. La autenticidad del equipo sigue pendiente

**Código:** [mockData.ts:480](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/data/mockData.ts:480), 490, 500 y 510 usan URLs Unsplash para los cuatro integrantes/departamentos identificados. [AboutAndHistory.tsx:46](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/AboutAndHistory.tsx:46) usa una foto de construcción Unsplash con descripción de trabajo de Kotai.

**Hecho:** procedencia externa confirmada en código. **Pendiente:** identidad de las personas y relación real de las imágenes con la empresa. No se afirma que sus nombres sean falsos ni se identifican las personas de las fotografías.

**Corrección:** retratos de equipo confirmados y una foto propia de terreno. Mientras no estén disponibles, usar nombres/cargos sin atribuir retratos no verificados. Alinear encuadres, evitar cortar rostros y reducir biografías a una función y una explicación útil.

**Cierre:** cada retrato tiene identidad y autorización confirmadas por el responsable; no quedan imágenes ilustrativas presentadas como evidencia corporativa propia.

### UI-12. Redes “Próximamente” compiten con WhatsApp

**Código:** [WhatsAppButton.tsx:24](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/WhatsAppButton.tsx:24) y 49 enlazan a `#` y cancelan el evento. Hay tres controles flotantes de colores intensos permanentemente visibles.

**Corrección:** retirar del flotante los canales todavía no disponibles. Mantener solo WhatsApp y poner las redes activas en el pie cuando existan. No necesitan captar tanta atención como la consulta principal.

**Cierre:** toda red visible tiene destino real; ningún elemento flotante tapa texto o controles en móvil o visor.

### UI-13. Indicadores difíciles de tocar

**Código:** [HeroCarousel.tsx:169](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/HeroCarousel.tsx:169) utiliza indicadores `h-2.5`.

**Prueba:** 10 × 10 px en dos indicadores y 36 × 10 px en el activo. Las flechas sí medían 46 × 46 px.

**Corrección:** mantener la apariencia pequeña del punto dentro de un botón con área táctil mayor, idealmente 44 × 44 px, y foco/estado visible. No se declara un incumplimiento normativo automático, dado que existen controles equivalentes y excepciones según el patrón.

**Cierre:** los indicadores se accionan cómodamente sin precisión fina y sin solaparse.

### UI-14. Material vertical desaprovechado en marco 16:9

**Código:** [ProviderShowcase.tsx:250](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ProviderShowcase.tsx:250) usa `aspect-video object-contain`; los títulos de playlist se truncan desde línea 325 y los subtítulos se limitan a una línea desde 328.

**Prueba:** “Correderas Triple Riel” cargó un vídeo de 480 × 854, con grandes bandas negras en su marco horizontal. El selector actualizó correctamente el recurso y alcanzó `readyState=4`, sin error observado. No es un vídeo roto.

**Corrección:** marco vertical limitado en ancho cuando el medio es vertical, texto al lado en escritorio; marco proporcional en móvil. Mostrar títulos cortos de 2–4 palabras y la descripción completa al seleccionar. Por ejemplo, “Fabricación”, “Correderas”, “Perfiles PVC”, “Abastecimiento”, “Fachadas” y “Cerramientos”.

**Cierre:** se aprovecha el contenido sin deformarlo ni recortar evidencia importante; los seis títulos se pueden identificar.

### UI-15. Lenguaje gráfico repetitivo

**Código/visual:** [ProviderShowcase.tsx:54](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ProviderShowcase.tsx:54) y los bloques siguientes acumulan etiqueta, titular, párrafo, cajas, badges, listas y franja de confianza. El mismo patrón se repite en otras secciones. Los logos de ambas divisiones se renderizaron aproximadamente a 40 × 46 px dentro de cajas mucho más anchas.

**Inferido y recomendación:**

- Una idea principal por sección, con menos textos “oficial”, “certificado”, “recomendado” y “principal” compitiendo visualmente.
- Logos de proveedor más legibles, preferentemente con variantes horizontales confirmadas o una composición adecuada al símbolo vertical.
- Reservar tarjetas para conjuntos independientes; usar espacio y títulos para el resto.
- Mantener tema base claro y una regla coherente para bloques multimedia oscuros.
- Títulos centrados solo cuando convenga a la composición, no como plantilla universal.
- Conservar Plus Jakarta Sans; reducir dispersión de tamaño/peso antes de cambiar tipografía.
- Documentar radios: por ejemplo campos/botones 8–12 px, fotos/contenedores 16 px. No imponer una cifra sin probar los componentes.
- Quitar el contador de visitas de la vista comercial, conservándolo en una herramienta interna si se necesita. Se monta en [Footer.tsx:245](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/Footer.tsx:245).

**Cierre editorial:** revisar con contenido real y comparar la rapidez con la que se reconoce la información principal; no validar solo por “verse más premium”.

### UI-16. Requisitos no tiene el contenido que su nombre promete

**Código:** [Navbar.tsx:25](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/Navbar.tsx:25) enlaza `#requisitos`. [SimplicityBanner.tsx:22](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/SimplicityBanner.tsx:22) asigna ese ID al proceso de cuatro pasos. [mockData.ts:363](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/data/mockData.ts:363) declara `SUBSIDY_REQUIREMENTS`, pero la búsqueda en `src` solo encontró su declaración, sin consumo por componentes.

**Prueba:** el clic “Requisitos” terminó en “Acceder a tu Subsidio es Fácil con Kotai”, una explicación del proceso. Hay menciones dispersas a condiciones en otras secciones, pero no la lista completa declarada en ese destino.

**Corrección:** separar “Cómo funciona” de “Requisitos”. Mostrar en requisitos una lista breve, revisada por el responsable, y enlace al detalle vigente. Para la familia, saber si su caso puede evaluarse debe ser más directo que leer especificaciones de ventanas.

**Cierre:** el destino muestra condiciones de evaluación, no solo etapas. La redacción no debe prometer admisibilidad por un único dato como RSH.

### UI-17. Contraste bajo en CTA textual de WhatsApp

**Código:** [ContactSection.tsx:154](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/components/ContactSection.tsx:154) usa texto blanco sobre `#25D366`; lo repite en el estado preparado desde línea 207.

**Prueba DOM:** fondo `rgb(37,211,102)`, texto blanco, 14 px y peso 700. Cálculo sRGB: **1,98:1**, inferior a 4,5:1 para ese texto. En contraste, blanco sobre el rojo `#8b0b1d` da aproximadamente 9,71:1.

**Corrección:** texto oscuro sobre verde o un verde más oscuro con blanco, midiendo el resultado. Mantener el icono del canal no obliga a usar una combinación de texto ilegible.

**Cierre:** base, hover, foco y estado preparado alcanzan contraste suficiente. Este cálculo no es una auditoría de todos los contrastes del sitio. Referencia: [W3C, contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## 9. Candidatos descartados y mejoras reconocidas

- **“No tienen proveedores identificados”: corregido.** Ahora existen Vidriería y Ferretería Valey con logos y medios. El problema actual es volumen y repetición.
- **“Cambiar de vídeo está roto”: descartado.** El selector cambió la URL, cargó metadatos y llegó a estado disponible. La aparición momentánea de carga no demuestra error.
- **“Todo enlace a contacto desde obras está roto”: descartado para navbar.** El header maneja la navegación a home; el defecto confirmado se encuentra en el pie.
- **“El documento tiene scroll horizontal en móvil”: no reproducido a 375 px.** Esto no garantiza todos los anchos ni componentes.
- **“No existen controles de galería”: descartado.** Hay flechas, miniaturas, cerrar y Escape en el visor. Falta completar foco/semántica, no rehacer toda la interacción.
- **“La actualización de teléfono no se publicó”: descartado en las superficies revisadas.** Se observa `+56 9 5050 1231` y correo `contacto@constructorakotai.cl`.
- **“No hay foco visible”: no se generaliza.** [index.css:18](/C:/Users/maria/Desktop/Software/Kotai-Landing/src/index.css:18) define un estilo de foco global. Eso no resuelve componentes no enfocables ni foco que sale de un modal.

## 10. Pruebas y límites

| Comprobación | Resultado | Límite |
|---|---|---|
| Navbar multiancho | CTA recortado en laptop y visible a 1920 | No se probó cada ancho intermedio ni zoom real del sistema. |
| Home móvil | Sin overflow horizontal global a 375; 33.628 px de alto | Altura depende de fuentes, ancho y contenido. |
| Contacto | Nombre a 1655 px del inicio de sección | No se envió el formulario. |
| Playlist | Recurso correcto, 480 × 854, readyState 4 | No se revisó audio/transcripción ni todos los vídeos completos. |
| Visor | Shift+Tab escapó al enlace exterior | No se probó lector de pantalla. |
| Menú móvil | Escape no cerró | Se pudo cerrar con el botón. |
| Filtro eléctrico | Sin resultados ni mensaje | No demuestra inexistencia de obras reales fuera del catálogo. |
| Footer desde obras | Requisitos no navega | Navbar tiene otra implementación. |
| Contraste | Blanco/verde 1,98:1 | No se midieron textos sobre fotografías. |
| Build/test | No ejecutados | Sin dependencias locales; se evitó instalar o generar artefactos. |

No había scripts `test` o `lint` en `package.json`. No se identificó una suite de pruebas de la aplicación en las carpetas principales; las pruebas empaquetadas con skills no se cuentan como tests de Kotai.

## 11. Mensaje de interfaz frente a implementación

| Mensaje | Estado observado | Evidencia | Recomendación |
|---|---|---|---|
| Solicitud enviada | No confirmado; solo mensaje preparado | ContactSection:19–44 y 195 | Anunciar preparación y siguiente paso real. |
| Requisitos | Destino parcial: proceso y datos dispersos | SimplicityBanner:22; mockData:363 | Destino de requisitos específico y consistente. |
| 3 UF / 3–5 UF / 1–3 UF | Inconsistente | UI-03 | Aprobación de contenido y fuente compartida. |
| Fábrica/proveedor con medios | Interfaz implementada | ProviderShowcase | Resumir en home; detalle aparte si se aprueba. |
| Redes sociales | Elementos visibles sin destino | WhatsAppButton:24 y 49 | Mostrar solo canales disponibles. |
| Retratos de equipo | Fuentes externas presentes | mockData:480–510 | Confirmar identidad y sustituir por material propio. |
| Certificación/ahorro/recepción de obras | No verificable con esta revisión de UI | Textos comerciales | Validación documental por responsable del negocio. |

## 12. CI/CD

Fuera del alcance solicitado. No se declara cumplimiento de pruebas de publicación. Antes de implementar las correcciones, conviene disponer de una verificación responsive básica para evitar que un nuevo enlace vuelva a ocultar el CTA.

## 13. Operación, respaldos y resiliencia

Fuera de alcance. En términos de interfaz, los estados de vídeo cargando/error, filtros vacíos y pestaña de WhatsApp no abierta deben ofrecer recuperación clara. No se analizó infraestructura de backups ni disponibilidad del servicio.

## 14. Documentación legal y privacidad

No se realizó una evaluación normativa. Se revisó la interfaz documental únicamente como superficie compartida y como origen de una cifra distinta sobre ahorro. No se interpreta un aviso legal o comentario de código como prueba de cumplimiento. No se recopilaron ni enviaron datos en la auditoría.

## 15. Mantenibilidad de interfaz

Cambios recomendados sin sustituir el stack:

- Una fuente compartida de contacto, horario y contenido aprobado del programa. `COMPANY_INFO` ya es un buen inicio.
- Una utilidad única para navegar a página/sección y mantener URL, foco y historial.
- Primitivas reutilizables de botón, campo, pestaña/filtro, galería y modal con estados completos.
- Tokens de color, radios, espaciado y capas. La paleta de [tailwind.config.js:11](/C:/Users/maria/Desktop/Software/Kotai-Landing/tailwind.config.js:11) ya define el rojo; no hace falta reemplazarla.
- Diferenciar datos de contenido de elementos de presentación. No llamar “mock” al material comercial aprobado si será la fuente de producción.
- Gestionar movimiento reducido en un lugar común, sin perder la limpieza de efectos existente.

No se propone instalar librerías nuevas sin justificar su necesidad. El Vault debe aportar componentes adaptados al público, no obligar a usar efectos magnéticos o tarjetas 3D.

## 16. Plan de mejora

### Primera pasada: funcionamiento y claridad

1. UI-01: corregir ancho del menú.
2. UI-02: corregir el estado del formulario.
3. UI-03 y UI-16: contenido consistente y requisitos reales en su destino.
4. UI-04 y UI-09: navegación compartida y formulario primero en móvil.
5. UI-05/UI-06/UI-07/UI-17: teclado, capas, movimiento y contraste.

### Segunda pasada: edición visual

**Lectura de diseño:** constructora local que orienta a familias, con un lenguaje cercano, claro y confiable. Conservar marca, aumentar protagonismo de trabajos y reducir densidad.

**Diales propuestos:** variación 4/10, movimiento 2/10, densidad 3/10. Son dirección de diseño, no mediciones del sitio.

Home propuesta:

1. Cabecera compacta y CTA visible.
2. Hero estable con una promesa comprensible, fotografía clara y dos intenciones: consultar / ver obras.
3. Una obra antes/después con contexto.
4. Requisitos y aporte resumidos, con detalle aprobado accesible.
5. Qué mejoras realiza Kotai, con imágenes y beneficios breves.
6. Proceso compacto y vídeo opcional.
7. Respaldo de Valey: una muestra breve con acceso al material completo.
8. Equipo real y holding resumido.
9. Formulario, alternativas y pie sencillo.

En proveedor, conservar todos los medios útiles pero organizar por la pregunta que responden: fabricación, instalación y abastecimiento. Evitar repetir la recomendación de Valey en varias tarjetas. Aumentar la legibilidad de los logos y mostrar una buena foto antes de párrafos técnicos.

No mover información a nuevas rutas sin definir sus destinos y navegación. Si se conservan anclas, mantener scroll suave con compensación del header y excepción para movimiento reducido.

### Tercera pasada: comprobación

Revisar 375, 390, 768, 1024, 1280, 1366, 1440 y 1920 px; ampliación de texto; teclado completo; movimiento reducido; formularios con errores; imágenes/vídeos no disponibles y navegación atrás/adelante.

## 17. Intervención del responsable

- Confirmar aporte y requisitos vigentes antes de cambiar textos.
- Aportar o confirmar retratos del equipo y autoría de material presentado como propio.
- Decidir cuánto protagonismo comercial tendrá Valey frente a la captación de familias de Kotai.
- Confirmar si el formulario seguirá como preparación de WhatsApp o recibirá solicitudes en un sistema propio.

Son decisiones para una futura implementación; no impidieron completar esta revisión.

## 18. Decisiones de diseño pendientes

- El sitio atiende tanto familias como dirigentes/constructoras: conviene separar recorridos sin mezclar el primer mensaje.
- Proveedor/holding pueden mantener vistas detalladas sin ocupar tanto espacio de home.
- Determinar si se conservará autoplay; la recomendación inicial es hero estable y galerías manuales.
- Elegir una única etiqueta por intención: consultar, ver obras y continuar en WhatsApp.

## 19. Criterios de cierre

La auditoría está completada como diagnóstico. Los hallazgos no están corregidos.

Para cerrar la remediación:

- CTA visible en los tamaños donde antes se recortaba.
- Ningún estado anuncia recepción que no se puede confirmar.
- Anclas funcionan entre páginas y llevan al contenido que promete su texto.
- Modal contiene foco y oculta interacción exterior.
- Galerías y comparador operables con teclado.
- Pausa o ausencia de autoplay y soporte de movimiento reducido.
- Mensaje de filtro vacío y contraste corregido.
- Fotografías corporativas y textos comerciales verificados.
- Formulario móvil aparece primero cuando el usuario elige consultar.
- Build y pruebas pertinentes ejecutados en el entorno de implementación, sin inventar resultados de esta auditoría.

## 20. Archivos y fuentes

Archivos revisados, completos o mediante fragmentos/búsquedas relevantes al alcance:

- `AGENTS.md`, `.agentignore`, `package.json`, `tsconfig.json`, `tailwind.config.js`, `vite.config.ts`, `wrangler.jsonc`, `index.html` y `public/_redirects`.
- `src/App.tsx`, `src/index.css`, `src/utils/navigation.ts`, `src/data/mockData.ts`.
- `Navbar`, `HeroCarousel`, `SimplicityBanner`, `ServicesSection`, `ProviderShowcase`, `AboutAndHistory`, `ContactSection`, `Footer`, `WhatsAppButton`, `ImageLightboxModal`, `BeforeAfterSlider`, `ProjectsAutoCarousel`, `RealWorksCarousel`, `EvidenciaTeaser`, `EvidenciaPage`, `LegalPage`, `VideoSection` y referencias a `VisitorCounter`.
- Historial y estado de Git; no se accedió a datos privados de `ignore/` ni a credenciales.

Referencias primarias: [diálogos modales](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [control de contenido automático](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) y [tamaño de objetivos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

La web publicada contiene los elementos identificadores del commit revisado (proveedor y contacto actualizados), pero no se certificó equivalencia byte a byte entre el deploy y el repositorio. Las recomendaciones funcionales se sostienen en código y las pruebas indicadas; las propuestas visuales se etiquetan como criterio de diseño.
