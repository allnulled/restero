CREATE TABLE Multiples_autorizadores /*
  @tiene_autorizables:
    - tiene_autorizador: es_administrador
    - tiene_autorizador: incluir : insert | update | delete : { "permisos": [ "permiso de administración" ] }
*/ (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(512)
);