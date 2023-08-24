# hql-deployer

## Instalación

**Paso 1.** Descárgate el proyecto entero con:

```sh
git clone https://github.com/allnulled/hql-deployer.git .
```

**Paso 2.** Instala las dependencias automáticamente con el comando:

```sh
npm install
```


## Uso 

**Paso 1.** Crea y coloca el script en [HQL](https://github.com/allnulled/h-query-language) en el fichero `src/configurations/db.sql`.

**Paso 2.** Revisa las configuraciones del *deployer* en el fichero `src/configurations/settings.json`. Modifica también el fichero de migracion inicial si escaece, en `src/configurations/db.migracion.sql`, que se ejecutará en caso que la base de datos deba crearse.

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

## Documentación

Para ver la documentación oficial, ir a [REFERENCE.md](./REFERENCE.md).



