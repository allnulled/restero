CREATE TABLE Multiples_autorizadores /*
  @tiene_autorizadores:
    - es_administrador
    - incluir : insert | update | delete : { "permisos": [ "permiso de administración" ] }
*/ (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(512)
);