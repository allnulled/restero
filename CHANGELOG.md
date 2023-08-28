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
  - [✖] tiene_padre.js // que no tiene que hacer nada
  - [✖] solo_insertable_por_mismo_usuario.js
- [✖] No te hace clave_multiple
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
  - [✖] solo_insertable_por_mismo_usuario.js
- [✖] No te hace clave_multiple
- [✖] No te hace los tests de todos los autorizadores (y convendría severamente)
  - [✖] no_actualizable.js
  - [✖] no_eliminable.js
  - [✖] no_insertable.js
  - [✖] no_modificable.js
  - [✖] no_seleccionable.js
  - [✖] no_usable.js
  - [✖] solo_seleccionable_por_mismo_usuario.js

