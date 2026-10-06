## Reunion 1 - 06/10/2026

### Tema 1 - Correo

Ocupan un sistema web para ver el correo.
La pagina https://constructorakotai.cl/webmail
Agregar el siguiente codigo al inicio de la landing para manejar la redireccion:

```js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Redirigir accesos a webmail directo a la interfaz del hosting
    if (url.pathname === "/webmail" || url.pathname.startsWith("/webmail/")) {
      return Response.redirect("https://webmail.constructorakotai.cl", 301);
    }

    // ...resto del codigo de tu landing page
  },
};
```

Ya que https://constructorakotai.cl/webmail muestra la landing page y deberia mostrar lo de https://webmail.constructorakotai.cl/

### Tema 2 - Sugerencias
Utilizar la informacion de los PDF/pptx de la carpeta Documentos/ (Presentacion Oficina y PRESENTACION PDA 2026)
Link de interes -> Al registro social de hogares directamente
Trabajan bajo el CS27 -> Ponerlo en la pagina para mostrar que trabajan bajo ciertas normas.
Cambiar el correo electronico al real
Domicilio -> Nuble y BioBio
Agrandar fuente al doble del numero telefonico de la navbar (Al lado de 'Postula Aqui')
Contador de vistas a la pagina.
Agregar 'Asesoria gratuita', el beneficiario no paga absolutamente nada, a menos que el SERVIU diga que deben tener ahorrada entre 1 y 3 UF, ni la constructora ni el patrocinante cobran absolutamente nada.

### Tema 3 - Implementacion de CRM (Client Relationship Management)

La idea es convertir el excel que tienen actualmente a un software web propio para poder llevar registro de los clientes, sus datos, su situacion socioeconomica, etc.
(Por ahora no, es un proyecto futuro)
### Tema 4 - Videos
(Por ahora no cambiar nada, esperaremos las nuevas fotos)
Mas fotos, Mas dinamico, que el texto no este quieto por tanto rato.

#### Otros videos recomendados:
(Por ahora ignorar, faltan el contenido)
Video de como fabricar las ventanas.
Ficha tecnica de los colectores, tema electrico y el PDA para que pueda sacar imagenes y cosas tecnicas.

Donde ponerlos? -> Separarlo por tipo de subsidios, poner un video en el carrusel de cada cosa con el video especifico.

### Tema 5 - Dominio alianzag5.cl
(Lo hare yo por mi lado)
Comprar dominio y configurar correos

### Tema 6 - Contador de visitas a la pagina
(Implementar, pero ver como hacer la version basica sin CRM o sistema de administracion)
Quieren saber cuantas personas visitaron mi pagina.
No solo la cantidad de personas que envian el formulario.
Con dashboard y graficos de la cantidad de personas que ingresan por mes, anio y dia.
Contador basico y sencillo en el frontend para poder ver cuantos se meten a la pagina, a futuro en el CRM tener todo eso tambien, que no sea solo algo de clientes, si no una herramienta de administracion y estadisticas.
