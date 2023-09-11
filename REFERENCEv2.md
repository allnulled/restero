# Referencia oficial del HQL-Deployer

[HQL](https://github.com/allnulled/h-query-language) es un subconjunto del lenguaje SQL. *Deployer* significa *desplegador*. Este proyecto consiste en un **desplegador de aplicaciones basadas en script HQL**.

## Introducción

**Idea:** minimizar y optimizar el desarrollo y despliegue de REST HTTP APIs basadas en bases de datos SQL.

**Modo:** se añaden unas notaciones con comentarios en el script de creación de bases de datos, el deployer lo parsea y lo tiene en cuenta para incorporar funcionalidades automáticamente.

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
  - `src/configurations/db.migracion.sql`
  - `src/configurations/db.migracion.test.sql`

El fichero de la aplicación estática y sus componentes son:

  - `src/www/files/index.1.calo`
  - `src/www/files/components/*`

## El proceso de configuración manual

El **proceso de configuración manual** del `hql-deployer` está pensado para ser rápido, sencillo pero potente, y consiste en:

  - `src/configurations/db.sql`: diseñar la base de datos que queremos desplegar.
  - `src/configurations/db.migracion.sql`: elaborar la migración inicial en todos los entornos.
  - `src/configurations/db.migracion.test.sql`: elaborar la migración inicial en el entorno de test.
  - `src/configurations/settings.json`: establecer los valores de configuración global preferidos.

Si nos faltan controladores o autorizadores para completar nuestra aplicación, deberemos programarlos en:

  - `src/controllers`: para los nuevos controladores
  - `src/authorizers`: para los nuevos autorizadores

Después, utilizarlos en la aplicación, sea vía el script `db.sql` y sus hiper-atributos, o sea vía editando el fichero de `src/utilities/desplegar_servidor.js`.

Situar los ficheros en estas carpetas nos permitirá acceder a ellos tal que: `deployer.controllers.mi_controlador` y `deployer.authorizers.mi_autorizador`, y los autorizadores funcionarán correctamente si son llamados desde el script `db.sql`.

## El proceso de despliegue

El **proceso de despliegue** del `hql-deployer` se inicia tan rápidamente como:

```sh
npm start
```

O también serviría, por equivalencia:

```sh
node src/deployer.js
```


El **proceso de despliegue** del `hql-deployer` está programado en el `src/deployer.js` y consiste, por este orden, en:

  - *Cargar configuraciones*: carga los ficheros de `src/configurations`
  - *Cargar utilidades*: carga los ficheros de `src/utilities`
  - *Cargar controladores*: carga los ficheros de `src/controllers`
  - *Cargar autorizadores*: carga los ficheros de `src/authorizers`
  - *Desplegar base de datos*: carga una primera conexión, y luego resetea y migra la base de datos, si escaese.
  - *Desplegar servidor*: carga la aplicación y s (en Linux)us rutas, y luego la pone a escuchar peticiones.

## El proceso de tests

El **proceso de tests** del `hql-deployer` se inicia tan rápidamente como:

```sh
npm test
```

O también serviría, por equivalencia (puedes usar «bat» en lugar de «bash» en Windows):

```sh
cd test/unit && bash test.sh
```

Pasará los tests en 1 por proceso, y finalmente listará los resultados obtenidos por pantalla en colores y en una tabla.

## Peticiones disponibles

A continuación se listan las principales acciones que se pueden hacer vía petición HTTP con el servidor desplegado por `hql-deployer`.

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
    - `item`: `«Object»` con el ítem a insertar

#### Ejemplo de **«update»**
  - `[POST] /api/v1/update/Usuario?id=1&item={"nombre":"Pepito de los Palotes"}`
    - `id`: `«Number»` con el identificador del ítem a actualizar
    - `item`: `«Object»` con los campos del ítem a actualizar

#### Ejemplo de **«delete»**
  - `[POST] /api/v1/delete/Usuario?id=1`
    - `id`: `«Number»` con el identificador del ítem a actualizar

