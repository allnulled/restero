# Documentación oficial del HQL-Deployer

El `hql-deployer` es un desplegador de aplicaciones basadas en [HQL](https://github.com/allnulled/h-query-language).

## ¿Para qué sirve?

Para desplegar aplicaciones REST HTTP API en base a scripts de un subconjunto sintáctico del SQL, el [HQL](https://github.com/allnulled/h-query-language). Por lo tanto, lo primero para entender cómo funciona es conocer los detalles de este lenguaje, el [HQL](https://github.com/allnulled/h-query-language).

## ¿Qué ventajas aporta?

Un despliegue automático y rápido de aplicaciones REST HTTP API completas: **operaciones SIUD** *(Select, Insert, Update, Delete)*, **autentificación** y **autorización**. Además de **personalización** y, ante todo, **simplicidad**.

## ¿Cómo empiezo?

Primero tienes que poder levantar una instancia del deployer. Esto se explica en el [README](./README.md) de este proyecto. A partir de ahí, seguimos.

## ¿Cómo está distribuido el proyecto?

- Bajo la carpeta `src` encontrarás todo el código que hace correr la aplicación.

- Bajo la carpeta `src/authorizers`, vacía a propósito, encontrarás los autorizadores, que son funciones que pueden usarse para interceptar el ciclo normal de las operaciones SIUD.

- Bajo la carpeta `src/configurations` encontrarás varios ficheros interesantes para la configuración del despliegue, como por ejemplo el `src/configurations/db.sql`, fichero principal de la aplicación, escrito en [HQL](https://github.com/allnulled/h-query-language).

- Bajo la carpeta `src/controllers`, vacía a propósito, encontrarás los controladores, que son funciones que pueden usarse para responder peticiones HTTP directamente, compatibles con la API de `express`.

- Bajo la carpeta `src/parsers` encontrarás el parser del lenguaje [HQL](https://github.com/allnulled/h-query-language). Puedes poner ahí otros.

- Bajo la carpeta `src/utilities` encontrarás las funciones de la API propias. También algún fichero que puede interesarte especialmente, como `src/utilities/desplegar_servidor.js` donde se acoplan todas las rutas con sus controladores a la aplicación: por si quieres personalizar nuevas rutas y controladores.

Pero en principio, está pensado para que te centres en el fichero:

  - `src/configurations/db.sql` donde escribirás la parte más importante de la aplicación.

Y luego puedas incluir más ficheros en la carpeta:

  - `src/authorizers` donde incluirás nuevos ficheros para la denominada *lógica de negocio* del servidor. Con ellos, adquirirás nuevas piezas de código que puedes luego acoplar a modelos concretos de la aplicación, usando el fichero anterior mediante el hiperatributo `tiene_autorizador: {nombre}: {parametro}`, que puedes usar repetidamente.

## ¿Qué hago, entonces, para empezar una nueva aplicación?

Lo primero es el fichero de la base de datos, `src/configurations/db.sql`. En él puedes centrar toda la atención inicial.

En él, puedes encontrar cachos de código que :

## ¿Qué otras cosas debo saber?

El deployer viene ya con unas rutas y controladores asociados. En el fichero `src/utilities/desplegar_servidor.js` verás los detalles. Pero son estos:

```js
module.exports = function (deployer) {
    return async function () {
        try {
            const path = require("path");
            const express = require("express");
            deployer.server = require("http").createServer();
            deployer.app = express(deployer.server);
            deployer.app.use("/api/v1/login", deployer.utilities.controlador_de_login);
            deployer.app.use("/api/v1/logout", deployer.utilities.controlador_de_logout);
            deployer.app.use("/api/v1/:operation/:table", [
                deployer.utilities.middleware_de_parametros,
                deployer.utilities.middleware_de_autentificacion,
                deployer.utilities.middleware_de_autorizadores,
                deployer.utilities.controlador_de_operacion
            ]);
            deployer.app.use("/", express.static(path.resolve(__dirname + "/../www/files")));
            deployer.app.listen(deployer.settings.APP_PORT, function() {
                console.log("[*] Servidor escuchando en:");
                console.log("[*]     http://127.0.0.1:" + deployer.settings.APP_PORT);
            });
        } catch (error) {
            console.error("Error en «src/utilities/desplegar_servidor.js»");
            console.error(error);
            throw error;
        }
    };
};
```

Es importante entender sobre todo el funcionamiento de las rutas relacionadas con las operaciones: `"/api/v1/:operation/:table"`. Esta ruta tiene asociados 3 middlewares antes de 1 controlador final, que realmente despachará los datos. A continuación se explican estos ficheros:

  - `deployer.utilities.middleware_de_parametros`: buscará en el `body` y en el `query` de la `request` los parámetros relacionados. Vale la pena echarle un ojo al fichero en sí, para saber en cada operación qué parámetro se espera. Esto lo colocará, es importante, en `request.hql_data`.
  - `deployer.utilities.middleware_de_autentificacion`: buscará el `authorization` en el `body`, el `query` y el `headers` de la `request`. Esto lo colocará, es importante, en `request.hql_authentication`.
  - `deployer.utilities.middleware_de_autorizadores`: se encargará de aplicar todos los autorizadores (que deben ser válidos o saltará un error en la petición) especificados en el fichero de la base de datos, mediante los hiperatributos de tabla `@tiene_autorizador: {nombre}: {parametro}`. El parámetro que se permite es únicamente un string, y por especificidades sintácticas del lenguaje: uno sin saltos de línea. Los autorizadores son funciones asíncronas, de esta forma se pueden hacer consultas.

Conviene echar un ojo a algunos ficheros especialmente, para hacerse una idea de cómo se programa con la API:

  - `controlador_de_login` y `controlador_de_logout`: dará una idea de cómo crear controladores.
  - `controlador_de_operacion`: dará una idea de la simplicidad de la lógica de negocio base, que es la propia de una HTTP REST API simple.
  - `desplegar_base_de_datos`: este fichero crea la base de datos si no existe, y además le pasaría la migración inicial, emplazada en la carpeta `src/configurations`.
  - `obtener_conexion_de_base_de_datos`: devuelve un objeto, asíncronamente, que contiene un método `ejecutar`, el cual permite operaciones SQL contra la base de datos. Sigue un patrón `singleton`, por lo cual se usa siempre la misma conexión. Además, está pensado para SQLite, no todavía para MySQL ni PostgreSQL.

Principalmente, estos son los ficheros que más te interesa entender. Luego, los `preparar_{select | insert | update | delete}` son funciones que se encargan de montar de manera estándar las consultas SQL, en función de parámetros de tipo objeto y array. Pero son más opcionales, excepto cuando usas las operaciones de la HTTP REST API propias, que debes conocer los parámetros que aceptan.

Y principalmente, esto es todo. Conviene leerse el código, porque es poco, pero muy efectivo, y está concentrado en estos ficheros, principalmente, cubriendo cada uno de estos aspectos del despliegue.

Buena suerte, o mejor: no dependas de la suerte para que vaya bien.

Si te supo a poco esta documentación, puedes probar con [REFERENCEv2.md](./REFERENCEv2.md).
