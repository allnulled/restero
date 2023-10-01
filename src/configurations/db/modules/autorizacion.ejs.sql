CREATE TABLE Usuario /*
  @tiene_autorizador: es_administrador
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(256) UNIQUE NOT NULL,
  domicilio VARCHAR(1024),
  correo VARCHAR (512),
  contrasenya VARCHAR(512)
);

CREATE TABLE Grupo /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(256) UNIQUE NOT NULL,
  descripcion TEXT
);

CREATE TABLE Permiso /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(256) UNIQUE NOT NULL,
  descripcion TEXT
);

CREATE TABLE Permiso_de_grupo /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_permiso INTEGER,
  id_grupo INTEGER,
  FOREIGN KEY (id_grupo) REFERENCES Grupo (id),
  FOREIGN KEY (id_permiso) REFERENCES Permiso (id)
);

CREATE TABLE Permiso_de_usuario /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_permiso INTEGER,
  id_usuario INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_permiso) REFERENCES Permiso (id)
);

CREATE TABLE Grupo_de_usuario /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  id_grupo INTEGER,
  FOREIGN KEY (id_grupo) REFERENCES Grupo (id),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Sesion /*
  @tiene_autorizador: es_administrador
  @nombre_humano: Sesión
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER NOT NULL UNIQUE /*
    @nombre_humano: ID de usuario
  */,
  token_de_sesion VARCHAR(128) /*
    @nombre_humano: Token de sesión
  */,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);