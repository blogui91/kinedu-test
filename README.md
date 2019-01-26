# Kinedu Test

Este proyecto se ha realizado usando Webpack 4 y React 16.7, usando otras librerías como Redux para manejar de manera más centralizada nuestros estados y acciones globales, separandolos por módulos. Y bien, este es un pequeño proyecto donde pude no haber usado Redux, pero lo hice para poner en práctica lo que sé de React.

#### Usage
```
yarn start // Opens browser in port 3333

yarn build // Builds the application
```

Mi principal reto fue configurar webpack para que funcionara correctamente el proyecto, siempre acostumbrado a usar generadores o CLI, no había visto que tanto hay "behind the scenes" al final no resultó ser tan complicado, al menos quedó bien configurado para trabajar sin problemas en el proyecto.
Otra cosa fueron las animaciones, francamente, siento que estoy un poco verde, me hubiera gustado hacer una animación más fancy al momento de hacer next en los días.

En cuanto a la arquitectura y al acomodo de cada uno de los archivos y carpetas es porque así me ha resultado trabajar,he tomado cosas prestadas de laravel como los helpers de env(), config() así como la clase base de Services (simulando modelos)

#### Assets
En esta carpeta estarán todas nuestras imagenes y recursos que la aplicación necesita.

#### Components
En esta carpeta estarán todos los components de nuestra aplicación.

#### Config
Está conformado por archivos que contienen información algunas veces sensible, por ejemplo nuestro client_id, api_secret, keys de firebase push notifications, etc. Es por eso que este modulo utiliza el helper env() que tiene contacto directo con nuestro archivo .env, en teoría solo esta carpeta debería usar el helper env()

#### Helpers
Por ahora son solo dos helpers, config() y env(); estas son funciones que nos facilitan obtener datos de la manera más fácil.
por ejemplo, si estámos usando una clase para llevar a cabo la autenticación, esta clase se encarga tanto del login, register, logout, etc. pudieramos hacer un helper auth(), de esta manera podríamos usarlo desde cualquiera componente o store.
auth().login(username, password)
auth().getUser()
auth().logout()

#### Pages
En esta sección estárian todas nuestras vistas, aunque no se está usando react-router está bien separar nuestras vistas.

#### Plugins
No son mas que implementaciones de librerías que no necesariamente pueden cargarse al momento de correr nuestra aplicación, por ejemplo Axios, Bootstrap, Materialize, etc.

#### Services
Son clases que se encargarían de hacer las peticiones a nuestro servidor o cualquier otro recurso, consta de servicio base que se puede extender fácilmente y así poder hacer un CRUD de servicios rápidamente.

#### Store
Aquí se implementa la libreria Redux

#### Theme
Se definen todos los estilos CSS y así como las variables de color de nuestra app.

#### Util
Posibles funciones que podrían ayudarnos, por ejemplo obtener un valor aleatorio.
