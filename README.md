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

**Paso 2.** Revisa las configuraciones del *deployer* en el fichero `src/configurations/settings.json`.

**Paso 3.** Despliega la aplicación con el comando:

```sh
npm start
```

**Paso 4.** Ya puedes hacer todas las operaciones CRUD automáticamente mediante HTTP, por ejemplo:

  - `/api/v1/insert/Usuario?nombre=Alicia&domicilio=El país de las villas de Mara`
  - `/api/v1/update/Usuario?id=1&nombre=Bob`
  - `/api/v1/select/Usuario?`
  - `/api/v1/delete/Usuario?id=1`

Nótese que las operaciones de UPDATE y DELETE requieren siempre del campo `id`. De lo contrario, darán error.

## Versiones

**Versión `v0.0.1`.** *El 23 de agosto de 2023 a las 12:54pm.*

- Te hace la **REST automáticamente** desde el script [HQL](https://github.com/allnulled/h-query-language).
- No te hace login, ni autorizadores, ni nada especial. Solo REST automática abierta.



