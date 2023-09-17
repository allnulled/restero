# restero

Despliega aplicaciones REST basadas en ficheros HQL (Hyper Query Language). 

## Índice

1. [Instalación](#instalación)
1. [Uso](#uso)
1. [Versiones](#versiones)
1. [Objetivo](#objetivo)
1. [Carpetas y ficheros](#introducción)
1. [El proceso de configuración manual](#el-proceso-de-configuración-manual)
1. [El proceso de despliegue](#el-proceso-de-despliegue)
1. [El proceso de tests](#el-proceso-de-tests)
1. [Peticiones disponibles](#peticiones-disponibles)
   1. Ejemplo de `login`
   1. Ejemplo de `logout`
   1. Ejemplo de `select`
   1. Ejemplo de `insert`
   1. Ejemplo de `update`
   1. Ejemplo de `delete`
   1. Ejemplo de `getfile`
   1. Ejemplo de `setfile`
1. [Los hiperatributos](#los-hiperatributos)
1. [Los autorizadores](#los-autorizadores)
   1. Autorizador de tabla: `no_actualizable`
   1. Autorizador de tabla: `no_eliminable`
   1. Autorizador de tabla: `no_insertable`
   1. Autorizador de tabla: `no_modificable`
   1. Autorizador de tabla: `no_seleccionable`
   1. Autorizador de tabla: `no_usable`
   1. Autorizador de tabla: `no_visibles_columnas`
   1. Autorizador de tabla: `solo_actualizable_por_mismo_usuario`
   1. Autorizador de tabla: `solo_eliminable_por_mismo_usuario`
   1. Autorizador de tabla: `solo_insertable_por_mismo_usuario`
   1. Autorizador de tabla: `solo_seleccionable_por_mismo_usuario`
   1. Autorizador de tabla: `incluir`
   1. Autorizador de tabla: `excluir`
   1. Autorizador de columna: `no_actualizable`
   1. Autorizador de columna: `no_insertable`
   1. Autorizador de columna: `no_modificable`
   1. Autorizador de columna: `solo_modificable_por`
1. [Interfaz de línea de comandos](#interfaz-de-línea-de-comandos)
   1. Comando `restero generar`


## Instalación

**Paso 1.** Descárgate el proyecto entero con:

```sh
git clone https://github.com/allnulled/restero.git .
```

**Paso 2.** Instala las dependencias automáticamente con el comando:

```sh
npm install
```

Alternativamente, puedes usar la línea de comandos para generar un proyecto automáticamente. Para esto, te tendrías que descargar este paquete de NPM:

  - [https://www.npmjs.com/package/restero](https://www.npmjs.com/package/restero)

Para usar la línea de comandos para generar el proyecto, puedes consultar la sección de [Interfaz de línea de comandos](#interfaz-de-línea-de-comandos) de este documento.


## Uso 

**Paso 1.** Crea y coloca el script en [HQL](https://github.com/allnulled/h-query-language) en el fichero `src/configurations/db.sql`.

**Paso 2.** Revisa las configuraciones del *deployer* en el fichero `src/configurations/settings.json`. Modifica también el fichero de migracion inicial si escaece, en `src/configurations/db/migrations/migracion.sql`, que se ejecutará en caso que la base de datos deba crearse.

**Paso 3.** Despliega la aplicación con el comando:

```sh
npm start
```

Este comando creará la base de datos si la primera tabla del script no existe, y aplicará la migración inicial. De lo contrario, obviará estos pasos, y continuará la ejecución del despliegue del servidor.

**Paso 4.** Ya puedes hacer todas las operaciones CRUD automáticamente mediante HTTP, por ejemplo:

  - `/api/v1/insert/Usuario?nombre=Alicia&domicilio=El país de las villas de Mara`
  - `/api/v1/update/Usuario?id=1&nombre=Bob`
  - `/api/v1/select/Usuario?`
  - `/api/v1/delete/Usuario?id=1`

Nótese que las operaciones de UPDATE y DELETE requieren siempre del campo `id`. De lo contrario, darán error. Esto invalida poder usar múltiples `PRIMARY KEY` en una tabla, de momento.

También puedes usar `login` y `logout` así:

  - `/api/v1/login?nombre=admin&contrasenya=admin`
  - `/api/v1/logout?token_de_sesion=43U3TIQA7J8F8GKOVK1Q0E4XMTXEWZVK0IUA5S163QLDJ...`

## Versiones

Ir al [CHANGELOG](./CHANGELOG.md) para ver especificidades de cada versión.

## Objetivo

El objetivo de este software es *minimizar y optimizar el desarrollo y despliegue de REST HTTP APIs* basadas en bases de datos SQL.

El modo en que esto se consigue es añadiendo unas notaciones con comentarios en el script de creación de bases de datos, el deployer lo parsea y lo tiene en cuenta para incorporar funcionalidades automáticamente.

## Carpetas y ficheros

Las carpetas originales son:

  - `src`: donde reside el código fuente del desplegador.
  - `test`: donde residen los tests de la aplicación.

Las carpetas internas originales son:

  - `src/authorizers/`: donde residen los autorizadores.
  - `src/configurations/`: donde residen ficheros considerados «de configuraciones».
  - `src/controllers/`: donde residen los controladores nuevos.
  - `src/parsers/`: donde residen los parsers.
  - `src/uploads/`: donde residen los ficheros subidos por los usuarios.
  - `src/utilities/`: donde residen los ficheros utilizados por el servidor.
  - `src/www/files/`: donde residen los ficheros estáticos, incluída la aplicación de usuario y dependencias.

Los ficheros que cargan carpetas son:

  - `src/authorizers/index.js`
  - `src/configurations/index.js`
  - `src/controllers/index.js`
  - `src/utilities/index.js`

El fichero que carga la aplicación es:

  - `src/deployer.js`

El fichero que carga la base de datos y el servidor son:

  - `src/utilities/desplegar_base_de_datos.js`
  - `src/utilities/desplegar_servidor.js`

Los ficheros relacionados con la base de datos son:

  - `src/configurations/db.sql`
  - `src/configurations/db.sql.json`
  - `src/configurations/db/migrations/migracion.sql`
  - `src/configurations/db/migrations/migracion.test.sql`

El fichero de la aplicación estática y sus componentes son:

  - `src/www/files/index.1.calo`
  - `src/www/files/components/*`

## El proceso de configuración manual

El **proceso de configuración manual** del `restero` está pensado para ser rápido, sencillo pero potente, y consiste en:

  - `src/configurations/db.sql`: diseñar la base de datos que finalmente queremos desplegar.
  - `src/configurations/db/migrations/migracion.sql`: elaborar la migración inicial en todos los entornos.
  - `src/configurations/db/migrations/migracion.test.sql`: elaborar la migración inicial en el entorno de test.
  - `src/configurations/settings.json`: establecer los valores de configuración global preferidos.
  - `src/configurations/db/db.ejs.sql`: diseñar la base de datos que queremos desplegar, pero a través de plantillas. Si escribes algo en este fichero a través de la plantilla ejs, el siguiente fichero `db.sql` se sobreescribirá con ello. Si no escribes nada, en cambio, valdrá lo que haya escrito en el `db.sql` directamente. Por defecto, no escribe nada. Este fichero permite desplegar la base de datos como si fueran módulos, y así componer la base de datos, pero su uso es opcional y por defecto está desactivado, solo hay comentarios de plantilla pero no imprime nada.

Si nos faltan controladores o autorizadores para completar nuestra aplicación, deberemos programarlos en:

  - `src/controllers`: para los nuevos controladores
  - `src/authorizers`: para los nuevos autorizadores
  - `src/authorizers/columns`: para los nuevos autorizadores, pero referidos a las columnas

Después, utilizarlos en la aplicación, sea vía el script `db.sql` y sus hiper-atributos, o sea vía editando el fichero de `src/utilities/desplegar_servidor.js`.

Situar los ficheros en estas carpetas nos permitirá acceder a ellos tal que: `deployer.controllers.mi_controlador` y `deployer.authorizers.mi_autorizador`, o `deployer.authorizers.columns.mi_otro_autorizador`, y así los autorizadores funcionarán correctamente si son llamados desde el script `db.sql`.

## El proceso de despliegue

El **proceso de despliegue** del `restero` se inicia tan rápidamente como:

```sh
npm start
```

O también serviría, por equivalencia:

```sh
node src/deployer.js
```


El **proceso de despliegue** del `restero` está programado en el `src/deployer.js` y consiste, por este orden, en:

  - *Cargar configuraciones*: carga los ficheros de `src/configurations`
  - *Cargar utilidades*: carga los ficheros de `src/utilities`
  - *Cargar controladores*: carga los ficheros de `src/controllers`
  - *Cargar autorizadores*: carga los ficheros de `src/authorizers`
  - *Desplegar base de datos*: carga una primera conexión, y luego resetea y migra la base de datos, si escaese.
  - *Desplegar servidor*: carga la aplicación y sus rutas, y luego la pone a escuchar peticiones.

## El proceso de tests

El **proceso de tests** del `restero` se inicia tan rápidamente como:

```sh
npm test
```

O también serviría, por equivalencia (puedes usar «bat» en lugar de «bash» en Windows):

```sh
cd test/unit && bash test.sh
```

Pasará los tests en 1 por proceso, y finalmente listará los resultados obtenidos por pantalla en colores y en una tabla.

## Peticiones disponibles

Las peticiones generalmente aceptan un `HTTP header` con el que se le facilita el token de sesión al servidor: el clásico `authorization`. De esta forma, el servidor puede autentificar la petición, y pasar los filtros especificados correspondientemente.

A continuación se listan las principales acciones que se pueden hacer vía petición HTTP con el servidor desplegado por `restero`.

#### Ejemplo de **«login»**
  - `[POST] /api/v1/login?nombre=admin&contrasenya=admin`
    - `nombre`: `«String»` con el nombre del usuario.
    - `contrasenya`: `«String»` con la contraseña del usuario.

#### Ejemplo de **«logout»**
  - `[POST] /api/v1/logout?token_de_sesion=J45ID21FAS23KLN...`
    - `token_de_sesion`: `«String»` con el token de sesión a cerrar.

#### Ejemplo de **«select»**
  - `[POST] /api/v1/select/Usuario?where=[["id","=",1]]`
    - `search`: `«String»` con el texto a buscar
    - `where`: `«Array{Array{String,String,String}}»` con las reglas de filtración.
      - `String_1`: columna sujeto.
      - `String_2`: operación: `=, !=, <, >, <=, >=, IS NULL, IS NOT NULL, LIKE, NOT LIKE, IN, NOT IN`
      - `String_3`: valor comparativo.
    - `order`: `«Array{Array{String,String}}»` con las reglas de ordenación
    - `page`: `«Number»` con el número de página
    - `items`: `«Number»` con el número de ítems

#### Ejemplo de **«insert»**
  - `[POST] /api/v1/insert/Usuario?item={"nombre":"Pepito de los Palotes"}`
    - `...item`: `«Object»` con el ítem a insertar. Se pasan como parámetros directos, no como un objeto.

#### Ejemplo de **«update»**
  - `[POST] /api/v1/update/Usuario?id=1&item={"nombre":"Pepito de los Palotes"}`
    - `id`: `«Number»` con el identificador del ítem a actualizar
    - `...item`: `«Object»` con los campos del ítem a actualizar. Se pasan como parámetros directos, no como un objeto.

#### Ejemplo de **«delete»**
  - `[POST] /api/v1/delete/Usuario?id=1`
    - `id`: `«Number»` con el identificador del ítem a actualizar

#### Ejemplo de **«getfile»**
  - `[POST] /api/v1/getfile/Fichero?id=1&columna=fichero`
    - `id`: `«Number»` con el identificador del ítem a acceder
    - `columna`: `«String»` con la columna que apunta al fichero

#### Ejemplo de **«setfile»**
  - `[POST] /api/v1/setfile/Usuario?id=1&columna=fichero`
    - `id`: `«Number»` con el identificador del ítem a actualizar
    - `columna`: `«String»` con la columna que apunta al fichero
    - `fichero`: `«File»` con el fichero en sí
    - *Nota: esta petición se realiza codificada mediante `multipart/form-data` y por eso se permiten ficheros en la petición*

## Los hiperatributos

Los **hiperatributos** son parámetros que se asocian a tablas o columnas dentro del script de creación de base de datos, siguiendo la sintaxis del [**HQL** o Hyper Query Language](https://github.com/allnulled/h-query-language). Estos hiperatributos permiten decirle al desplegador cómo quiere gestionar partes del esquema de datos en distintos aspectos.

## Los autorizadores

Los **autorizadores** o *authorizers* son un conjunto de hiperatributos que nos permiten determinarle al desplegador cómo gestionar los servicios web que van a poner a disposición de los usuarios la información de la base de datos, basándonos en el esquema de datos, vía HTTP. Hay un correlato entre los nombres de los autorizadores y los ficheros bajo la carpeta `src/autorhizers`. Del mismo modo, para crear nuevos solo tienes que añadir nuevos ficheros en esta carpeta, porque se cargarán automáticamente por `src/authorizers/index.js`.

#### Autorizador de tabla: `no_actualizable`

Función:

> No permite **actualizar datos** (UPDATE) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_actualizable
*/ ( ... );
```


#### Autorizador de tabla: `no_eliminable`

Función:

> No permite **eliminar datos** (DELETE) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_eliminable
*/ ( ... );
```


#### Autorizador de tabla: `no_insertable`

Función:

> No permite **insertar datos** (INSERT) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_insertable
*/ ( ... );
```


#### Autorizador de tabla: `no_modificable`

Función:

> No permite **insertar, actualizar ni eliminar datos** (INSERT UPDATE DELETE) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_modificable
*/ ( ... );
```


#### Autorizador de tabla: `no_seleccionable`

Función:

> No permite **seleccionar datos** (SELECT) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_seleccionable
*/ ( ... );
```

#### Autorizador de tabla: `no_usable`

Función:

> No permite **seleccionar, insertar, actualizar ni eliminar datos** (SELECT INSERT UPDATE DELETE) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_usable
*/ ( ... );
```

#### Autorizador de tabla: `no_visibles_columnas`

Función:

> No permite **seleccionar ciertas columnas** (SELECT) de dicha tabla **a nadie**.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: no_visibles_columnas: columna1, columna2, columna3
*/ ( ... );
```

#### Autorizador de tabla: `solo_actualizable_por_mismo_usuario`

Función:

> Solo permite **actualizar un dato** (UPDATE) de dicha tabla cuando el valor de la columna especificada como parámetro del dato (o fila) en cuestión coincide con el **id del usuario** que está operando.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
*/ ( ... );
```

#### Autorizador de tabla: `solo_eliminable_por_mismo_usuario`

Función:

> Solo permite **eliminar un dato** (DELETE) de dicha tabla cuando el valor de la columna especificada como parámetro del dato (o fila) en cuestión coincide con el **id del usuario** que está operando.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ ( ... );
```

#### Autorizador de tabla: `solo_insertable_por_mismo_usuario`

Función:

> Solo permite **insertar un dato** (INSERT) de dicha tabla cuando el valor de la columna especificada como parámetro del dato (o fila) en cuestión coincide con el **id del usuario** que está operando.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
*/ ( ... );
```

#### Autorizador de tabla: `solo_seleccionable_por_mismo_usuario`

Función:

> Solo permite **seleccionar un dato** (SELECT) de dicha tabla cuando el valor de la columna especificada como parámetro del dato (o fila) en cuestión coincide con el **id del usuario** que está operando.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: solo_seleccionable_por_mismo_usuario: id_usuario
*/ ( ... );
```

#### Autorizador de tabla: `incluir`

Función:

> Permite escoger qué **operaciones** (`select`, `insert`, `update`, `delete`, `getfile`, `setfile`) y qué **objetos de autorización** (`usuarios`, `grupos` y `privilegios`) pueden emparejarse. Esto provocará que los usuarios que no reúnan alguno de estos objetos de autorización en las operaciones especificadas, no podrán llevar a cabo la operación.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: incluir: insert | update | delete | setfile: { "permiso" : "permiso de administrar" }
*/ ( ... );
```

#### Autorizador de tabla: `excluir`

Función:

> Permite escoger qué **operaciones** (`select`, `insert`, `update`, `delete`, `getfile`, `setfile`) y qué **objetos de autorización** (`usuarios`, `grupos` y `privilegios`) pueden emparejarse. Esto provocará que los usuarios que sí reúnan alguno de estos objetos de autorización en las operaciones especificadas, no podrán llevar a cabo la operación.

Ejemplo:

```sql
CREATE TABLE x /*
  @tiene_autorizador: excluir: insert | update | delete | setfile: { "permiso" : "permiso de no molestar" }
*/ ( ... );
```

#### Autorizador de columna: `no_actualizable`

Función:

> No permite **actualizar datos** (UPDATE) de dicha columna **a nadie**.

Ejemplo:

```sql
CREATE TABLE x (
  x2 INTEGER /*
    @tiene_autorizador: no_actualizable
  */
);
```

#### Autorizador de columna: `no_insertable`

Función:

> No permite **insertar datos** (INSERT) en dicha columna **a nadie**.

Ejemplo:

```sql
CREATE TABLE x (
  x2 INTEGER /*
    @tiene_autorizador: no_insertable
  */
);
```

#### Autorizador de columna: `no_modificable`

Función:

> No permite **insertar ni actualizar datos** (INSERT UPDATE) de dicha columna **a nadie**.

Ejemplo:

```sql
CREATE TABLE x (
  x2 INTEGER /*
    @tiene_autorizador: no_modificable
  */
);
```

#### Autorizador de columna: `solo_modificable_por`

Función:

> Permite **insertar y actualizar datos** (INSERT UPDATE) de dicha columna solo a los usuarios que reúnan alguno de los `permisos`, `grupos` o `usuarios` especificados como parámetro.

Ejemplo:

```sql
CREATE TABLE x (
  x2 INTEGER /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */
);
```

## Interfaz de línea de comandos

La interfaz de línea de comandos se llama `restero` y puede usarse una vez se ha ejecutado el comando `npm link` en el proyecto.

A continuación se explican los comandos que permite la interfaz.

#### Comando `restero generar`

- Argumento `salida`:
   - `--salida {ruta}`: **Opcional**. Por defecto: `.`. Especifica el directorio en el que se copiará el proyecto inicial del `restero`.

Ejemplo:

```sh
restero generar --salida .
restero generar --salida ../otro_directorio
```

----

- Argumento `fichero`:
   - `--fichero {fichero}`: **Opcional**. Por defecto: `undefined`. Especifica el fichero `db.sql` de la aplicación.

Ejemplo:

```sh
restero generar --fichero mydb.sql
```

----

- Argumento `directorio`:
   - `--directorio {directorio}`: **Opcional**. Por defecto: `undefined`. Especifica las carpetas y ficheros que van a sobreescribir al proyecto original.

Ejemplo:

```sh
restero generar --directorio app
```

