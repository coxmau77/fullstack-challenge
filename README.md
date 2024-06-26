# Fullstack challenge

[![](./public/img/img-repository-fullstack-challenge(1).png)](https://coxmau77.github.io/fullstack-challenge/public/)

[gitHub repository](https://github.com/coxmau77/fullstack-challenge)

Proyecto basico desarrollado utilizando las tecnologias:
- HTML
- CSS
- javaScript
- Node js
- Express
- Axios
- Mongo DB

En este proyecto podremos registrar usuarios en la plataforma y lograr hacer un CRUD con este usuario.

[Documentacion grafica](https://www.figma.com/file/Qqy8RI4BIAt7HVGlSMgu2H/fullstack-challenge?type=design&node-id=0-1&mode=design&t=0Ilho6AltuAmwFqA-0)

## Proceso

### 00. **Prework de nuestro entorno de trabajo**

- Instalación de VSC _Visual Studio Code_
- Instalación de Git
- Creación de cuenta en GitHub
- Creación de cuenta en Figma
- Creación de cuenta en MongoAtlas
- Creación de cuenta en RENDER



### 01. **Estructura basica del challenge**

Iniciamos desde gitHub, por lo que en principio deberemos tener una cuenta creada, comandos basicos con git, clonar, comprender **main** y **master**, `git add .`, que es `.gitignore`, pull y push

Primeros comandos por consola. 

Estructura y definicion de la arquitectura del proyecto en `HTML`, `MVC`, `HTML semantic` _(nav, section, article, header, aside)_, `favicon`. 

Primeros pasos en `Figma`. 

Aplicamos estilos CSS utilizando `selectores avanzados`, `CSS Nesting`, `Variables CSS`, Pseudo elementos como `:root`, `:after`, `:before`, Concepto mobile First, rem, em. 

Creacion y vinculacion con los primeros documentos en un ***lenguaje de programacion***, javaScript `script.js` `server.js`

Primeros conceptos del Modelo `Cliente >< Servidor` - parte I

``` 
public
├─css
│ └─style.css
├─img
│ └─icon.svg
├─js
  └─script.js
```

### 02. **Documentos HTML**

Creacion de los documentos `HTML`, `form`, `label`, `submit`, `etiquetas semanticas HTML`.

Implementacion de [Bootstrap icons](https://icons.getbootstrap.com/) `CDN`

CSS _(`Google Fonts con CSS Import`, `reset CSS`, `root`, `box-sizing`)_

HTML _(required, placeholder, autofocus, submit, autocomplete)_

Github (GitHub Pages, portada Repository, add, commit, push)

### 03. **CSS flexbox, advanced selectors**

Estilo y alineacion `header` , Flexbox, 

Dar proporciones a los contenedores y dar formato a los formularios

### 04. **CSS grid, responsive**

Grid, Grid templates, @media responsive site y adaptacion a los distintas resoluciones

### 05. **[Tailwind](https://tailwindcss.com/) + [Flowbite](https://flowbite.com)**

Instalacion de Tailwind mediante CDN + integraciones de Flowbite componentes, y estilos en [`public/home.html`](https://coxmau77.github.io/fullstack-challenge/public/home.html)

### 06. **JavaScript**

Revision de conceptos e implementacion de variables y constantes, tipos de datos, `string`, `int`, `Boolean`, utilizacion de `console.log`, `console.info`, `console.warn`, `console.error`, `alert` y `prompt`

Etiqueta form, input(text, password, button, submit)

``document.querySelector()`` para almacenar en una variable y acceder a su valor con el Metodo `.value`

Consola del navegador(cliente) como herramienta de desarrollo

Primeros conceptos del Modelo `Cliente >< Servidor` - parte II

Crear en una actividad donde se pueda utilizar la informacion que se captura en un input de un formulario (login o signin)

