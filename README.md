# Disney API app - Grupo Iglesias-Bronc-Gioda

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La página se recargará automáticamente cuando realices cambios.\
También podrás ver errores de lint en la consola.

### `npm test`
Inicia el runner de pruebas en modo interactivo.

### `npm run build`
Compila la aplicación para producción en la carpeta build.
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minifica y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para implementarse!

## Instalacion

Comprueba que estas utilizando Node 19.x.x y NPM 9.x.x en tu ambiente de desarrollo

```properties
$ node -v
$ npm -v
```

### Clonar el repositorio de GitHub

```properties
$ git clone https://github.com/Adroda/rias-disney-api.git
```

### Instalar librerias 

Ejecutar:
```properties
$ npm i
```
Para instalar las librerias/modulos necesarios para correr la aplicacion!

### Servidor local

```properties
# http://localhost:3000
$ npm start
```

## Diseño del sistema

La arquitectura de este proyecto esta basada en componentes.\
Consiste de una capa de servicios con la cual nos conectamos a la API Rest publica 'DisneyAPI', \
en donde usamos comunicacion asincrónica con la misma (uso de `async` y `await`), \
y una interfaz de usuario, en la cual tenemos multiples vistas.\
La navegacion de las mismas fue lograda utilizando `react-router-dom`,\
una libreria de enrutamiento. Los estilos y diseños de la aplicacion\
fueron realizados con el pre-procesador de CSS conocido como SCSS (Sassy Cascading Style Sheets).\


## Descripcion de tecnologias

- Framework: React
  
- Lenguaje: JavaScript

- Web Service: RESTful API

- Herramientas de desarrollo: Visual Studio Code, SonarLint, Git, GitHub
  
- Despliegue: Docker



## Mock ups y mapa de navegacion

[Archivo FIGMA](https://www.figma.com/file/azS8MEjsSMHse86ayRf7JT/RIASLAB?type=design&node-id=0%3A1&mode=design&t=648OzV1zeETHKO57-1)

## Descripcion del servicio rest utilizado:


Hemos decidido usar [disneyapi.dev](http://disneyapi.dev/) una API de disney ya que contiene \
un gran volumen de datos, conteniendo en ella 7438 personajes. Las opciones que ofrece son: \
- Obtener todos los personajes
- Obtener un personaje por su id
- Obtener un personaje por un parámetro en especifico ej: nombre, entre otras opciones.


## Historias de usuario 

| Buscar personaje por nombre |
| --------------------------- |
| Como usuario quiero poder buscar un personaje por su nombre para obtener mas informacion del mismo |

| Obtener informacion basica |
| --------------------------- |
| Como usuario  quiero ver la información básica del personaje aleatorio, como su nombre, una imagen y si participó en películas o series |

| Juego |
| --------------------------- |
| Como usuario, quiero iniciar el juego haciendo clic en el botón correspondiente, para que se muestre un personaje con una imagen borrosa. |
| Como usuario, quiero recibir retroalimentación inmediata después de adivinar el nombre del personaje, para saber si mi respuesta fue correcta o incorrecta. |
| Como usuario, quiero poder reiniciar el juego después de adivinar el personaje o cambiar de personaje durante el juego |

## Elecciones de usabilidad

- Diseño intuitivo: Hicimos uso de un diseño simple dado el numero de paginas que contiene la aplicacion.
- Facilidad de navegacion: Hacemos uso de componentes de react los cuales nos permiten navegar entre paginas sin necesidad de recargarlas.
- Accesibilidad: Nuestros campos para ingresar texto, admiten el uso del teclado.
- Uso adecuado de colores: Nuestra paleta de colores cumple con los requisitos para alcanzar AAA.
- Retroalimentacion Visual: A la hora de jugar en nuestra aplicacion, tanto en caso de error como en caso de acierto mostramos un mensaje!

