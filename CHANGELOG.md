**Versión `v0.0.1`.** *El 23 de agosto de 2023 a las 12:54pm.*

- [✔] Te hace la **REST automáticamente** desde el script [HQL](https://github.com/allnulled/h-query-language).
- [✖] No te hace login, ni autorizadores, ni nada especial. Solo REST automática abierta.

**Versión `v0.0.2`.** *El 23 de agosto de 2023 a las 16:18pm.*

- [✔] Te hace login y logout.
- [✖] No te hace ni autorizadores, ni nada especial (rest+auth). Solo login y logout de sesiones. Tienes que tener la tabla «Sesion».

**Versión `v0.0.3`.** *El 23 de agosto de 2023 a las 16:35pm.*

- [✔] Extendido README y CHANGELOG para explicar login y logout.

**Versión `v0.0.4`.** *El 24 de agosto de 2023 a las 12:08pm.*

- [✔] Te hace autentificación por cada operación (usando body, query o headers.authorization).
- [✖] No te hace ni autorizadores, ni nada especial (rest+auth).

**Versión `v0.0.5`.** *El 24 de agosto de 2023 a las 12:54pm.*

- [✔] Te hace autorizadores (rest+auth).

**Versión `v0.0.6`.** *El 26 de agosto de 2023 a las 19:05pm.*

- [✔] Test unitarios por feature e2e
  - [✔] Que rearranca y resetea la aplicación por cada test
  - [✔] Que reporta los cambios al final
- [✔] Tests de algunos features
  - [✔] Test para login
  - [✔] Test para logout
- [✔] Autorizadores más básicos
  - [✔] no_actualizable.js
  - [✔] no_eliminable.js
  - [✔] no_insertable.js
  - [✔] no_modificable.js
  - [✔] no_seleccionable.js
  - [✔] no_usable.js
  - [✔] solo_actualizable_por_mismo_usuario.js
  - [✔] solo_eliminable_por_mismo_usuario.js
  - [✔] solo_insertable_por_mismo_usuario.js
  - [✔] solo_seleccionable_por_mismo_usuario.js
- [✖] No te hace los tests de todos los autorizadores (y convendría severamente)

**Versión `v0.0.7`.** *El 26 de agosto de 2023 a las 19:05pm.*

- [✔] Te hace los tests de algunos de los principales autorizadores:
  - [✔] solo_actualizable_por_mismo_usuario.js
  - [✔] solo_eliminable_por_mismo_usuario.js
  - [✔] solo_insertable_por_mismo_usuario.js
- [✖] No te hace los tests de todos los autorizadores (y convendría severamente)
  - [✖] no_actualizable.js
  - [✖] no_eliminable.js
  - [✖] no_insertable.js
  - [✖] no_modificable.js
  - [✖] no_seleccionable.js
  - [✖] no_usable.js
  - [✖] solo_seleccionable_por_mismo_usuario.js


**Versión `v0.0.8`.** *El 27 de agosto de 2023 a las 17:44pm.*

- [✔] Te hace del **where** del **select**:
  - [✔] Te hace `search` en el **select**
- [✔] Te hace un autorizador y su test de:
  - [✔] no_visibles_columnas.js

Pero todavía...

- [✖] No te hace el **where** del **select** completo:
  - [✖] No te hace `order` en el **select**
  - [✖] No te hace `page` e `items` en el **select**
- [✖] No te hace un autorizador y su test de:
  - [✖] mientras_clave_multiple.js
- [✖] No te hace los tests de todos los autorizadores (y convendría severamente)
  - [✖] no_actualizable.js
  - [✖] no_eliminable.js
  - [✖] no_insertable.js
  - [✖] no_modificable.js
  - [✖] no_seleccionable.js
  - [✖] no_usable.js
  - [✖] solo_seleccionable_por_mismo_usuario.js

**Versión `v0.0.9`.** *El 27 de agosto de 2023 a las 17:44pm.*

- [✔] Te hace el **where** del **select** completo:
  - [✔] Te hace `order` en el **select**
  - [✔] Te hace `page` e `items` en el **select**
  - [✔] Sus tests

Pero todavía...

- [✖] No te hace un autorizador y su test de:
  - [✖] mientras_clave_multiple.js
  - [✖] tiene_padre.js // que no tiene que hacer nada
- [✖] No te hace los tests de todos los autorizadores (y convendría severamente)
  - [✖] no_actualizable.js
  - [✖] no_eliminable.js
  - [✖] no_insertable.js
  - [✖] no_modificable.js
  - [✖] no_seleccionable.js
  - [✖] no_usable.js
  - [✖] solo_seleccionable_por_mismo_usuario.js

**Versión `v0.0.10`.** *El 5 de septiembre de 2023 a las 10:32am.*

- [✔] Interfaz de usuario (muchas cosas)

**Versión `v0.0.11`.** *El 8 de septiembre de 2023 a las 13:26pm.*
- [✔] Mejoras en la interfaz de usuario
  - [✔] [BUG] crear instancia de «Ciclo democrático» permite poner «nombre» al crear
    - [✔] no tener que ir a actualizar luego.
  - [✔] [BUG] última página no omite paginación
    - [✔] el "no se obtuvieron resultados" irá acompañado de un «Volver a página anterior» y un «volver al principio» .
    - [✔] siempre que la página no sea "1"
  - [✔] [BUG] cuando al crear no puede, lanza un error el ajax pero no la interfaz, y además te transporta a otro punto de la UI igualmente
    - [✔] que el error le aparezca al usuario por las notificaciones
    - [✔] que si hay error, no te traslade a otro punto de la UI
  - [✔] [BUG] id aparece como campo de texto en formulario de crear
    - [✔] que id no aparezca para nada en formulario de crear
  - [✔] Operaciones «getfile» y «setfile»
    - [✔] que el input type text aparezca cuando el atributo de tabla «tiene fichero: { columna }» se indique
    - [✔] que cuando hay imágenes, reaparezca la imagen cargada cuando se actualiza
    - [✔] que el campo de ficheros no aparezca en los formularios de crear y sí en los de editar
    - [✔] que al clicar la imagen, se recargue del servidor

**Versión `v0.0.12`.** *El 11 de septiembre de 2023 a las 20:29pm.*
- [✔] [BUG] antes no aparecía la imagen porque no se ponían de acuerdo con el nombre porque uno no cogía bien los parámetros
  - [✔] ahora aparece la imagen al momento de subirla automáticamente.
  
**Versión `v0.0.13`.** *El 12 de septiembre de 2023 a las 02:02am.*
- [✔] Tiene Grupo y Permiso y tablas intermedias
- [✔] Hace la autentificación con JOINs para Grupo y Permiso
- [✔] Te ordena los grupos y permisos (por grupo y por usuario).
- [✔] Te devuelve los grupos y permisos totales en la autentificación del login.

**Versión `v0.0.14`.** *El 12 de septiembre de 2023 a las 12:54pm.*
- [✔] Ampliada documentación REFv2
- [✔] Tiene incluir y excluir como autorizadores de tabla
  - [✔] Tcambién están documentados
- [✔] [BUG] no se estaban cambiando los datos de columnas externas de fila_nueva en formulario crear, ni fila en editar.
  - [✔] ahora hay un evento que al cambiar el valor de la columna externa, se lanza
    - [✔] y está programado para que cambie al valor de fila o de fila_nueva
    - [✔] por lo cual, ahora sí se cambia en ambos formularios.

**Versión `v0.0.15`.** *El 13 de septiembre de 2023 a las 14:55pm.*
- [✔] [BUG] al no autentificarse, el autorizador «incluir» lanzaba un error de que no se podía acceder a una variable
  - [✔] ahora lanza un error de que se requiere autentificación
  - [✔] igual con «excluir»

**Versión `v0.0.16`.** *El 14 de septiembre de 2023 a las 14:55pm.*
- [✔] autorizadores de columna funcionando:
  - [✔] no_actualizable
  - [✔] no_insertable
  - [✔] no_modificable
  - [✔] solo_modificable_por
- [✔] autorizadores documentados en REFv2.
- [✔] mejorado panel de notificaciones del front
- [✔] preparando la versión `v0.1.0` como branca.
- [✔] controlador de shutdown protegido para solo administradores.

**Versión `v0.0.17`.** *El 14 de septiembre de 2023 a las 20:17pm.*

- [✔] binario de línea de comandos que permite crear proyectos desde 0 rápidamente.
- [✔] cambiado nombre a `restero`
- [✔] cambiada versión del parser a v0.0.5 para pasar siempre arrays (vacíos o no) como atributos, no nulls.

**Versión `v0.0.18`.** *El 15 de septiembre de 2023 a las 10:35am.*

- [✔] links del explorador hechos botón
- [✔] botones de crear, guardar, cargar, eliminar del formulario, a la derecha.
- [✔] package.json con la info de git también
- [✔] preparado para subir a NPM.

**Versión `v0.0.19`.** *El 15 de septiembre de 2023 a las 11:30am.*

- [✔] Cambiado nombre del readme.
- [✔] Unificada la información del readme + reference

**Versión `v0.0.21`.** *El 15 de septiembre de 2023 a las 18:39pm.*

- [✔] existe operación de importar ficheros Excel
  - [✔] en el back:
    - [✔] persiste el fichero
    - [✔] lee el fichero
    - [✔] importa datos
  - [✔] en el front:
    - [✔] se permite un fileinput
    - [✔] se envían los datos
- [✔] existe operación de exportar ficheros Excel
  - [✔] en el back
  - [✔] en el front

**Versión `v0.0.22`.** *El 16 de septiembre de 2023 a las 16:19pm.*

- [✔] configuraciones » datos de sesión mejor presentado

**Versión `v0.0.23`.** *El 16 de septiembre de 2023 a las 17:10pm.*

- [✔] [BUG] arreglado bug en la documentación sobre los autorizadores

**Versión `v0.0.24`.** *El 16 de septiembre de 2023 a las 17:13pm.*

- [✔] [BUG] arreglado bug en la documentación en el índice

**Versión `v0.0.25`.** *El 16 de septiembre de 2023 a las 17:16pm.*

- [✔] Titulo introductorio en el readme

**Versión `v0.0.26`.** *El 17 de septiembre de 2023 a las 08:48pm.*

- [✔] La base de datos se puede montar vía plantilla ejs y sus módulos en lugar de un script sql en crudo, opcionalmente.
  - [✔] Si imprimes algo por el fichero de plantilla ejs de configurations/db/db.ejs.sql entonces se sobreescribe configurations/db.sql
    - [✔] Que es la semilla de su json y de la estructura de la base de datos final
- [✔] Las migraciones se han deslocalizado para dejar sólo el script de la base de datos final en configurations. A configurations/migrations

**Versión `v0.0.27`.** *El 17 de septiembre de 2023 a las 09:11pm.*

- [✔] Corregido README de varias cosas
  - [✔] Actualizado la deslocalización de las migraciones en el README
  - [✔] Eliminado el fichero de REFERENCE

**Versión `v0.0.28`.** *El 17 de septiembre de 2023 a las 09:35pm.*

- [✔] Corregido README de varias cosas
  - [✔] Separados pasos de creación y de migración
  - [✔] Otros matices

**Versión `v0.0.29`.** *El 18 de septiembre de 2023 a las 09:19am.*

- [✔] Ampliado README
  - [✔] Añadido tree.txt y comando `npm run build-tree`

**Versión `v0.0.30`.** *El 18 de septiembre de 2023 a las 19:44am.*

- [✔] Extendido `hooks`:
  - [✔] vía a) `deployer.dependencies.generar_gestor_de_hooks`
  - [✔] vía b) `deployer.utilities.gestor_de_hooks.agregar_hook`
  - [✔] vía c) `deployer.utilities.gestor_de_hooks.usar_hook`
  - [✔] vía d) `hooks/hooks.js`
