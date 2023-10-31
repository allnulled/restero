


CREATE TABLE Usuario /*
  @tiene_autorizador: no_visibles_columnas: contrasenya,correo
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


CREATE TABLE Fichero /*
  @tiene_fichero: fichero
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  fichero VARCHAR(512),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);


CREATE TABLE Post_de_blog /*
  @tiene_fichero: imagen
  @tiene_autorizables:
    - @tiene_autorizador: no_actualizable
    - @tiene_autorizador: no_eliminable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(255) UNIQUE,
  subtitulo VARCHAR(255),
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  imagen VARCHAR(255),
  tags VARCHAR(1024) /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  contenido TEXT /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_blog /*
  @tiene_autorizables:
    - @tiene_autorizador: no_actualizable
    - @tiene_autorizador: no_eliminable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  tags VARCHAR(1024) /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  contenido TEXT /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  id_de_comentario INTEGER,
  id_de_post_de_blog INTEGER,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_comentario) REFERENCES Comentario_de_post_de_blog (id),
  FOREIGN KEY (id_de_post_de_blog) REFERENCES Post_de_blog (id)
);


CREATE TABLE Tema_de_foro (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(255),
  descripcion VARCHAR(255),
  tags VARCHAR(255),
  id_tema_padre INTEGER,
  FOREIGN KEY (id_tema_padre) REFERENCES Tema_de_foro (id)
);

CREATE TABLE Post_de_foro (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(255),
  contenido TEXT,
  fecha_de_creacion DATETIME,
  tags VARCHAR(255),
  id_autor INTEGER,
  FOREIGN KEY (id_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_foro (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contenido TEXT,
  fecha_de_creacion DATETIME,
  id_autor INTEGER,
  id_post_padre INTEGER,
  id_comentario_padre INTEGER,
  FOREIGN KEY (id_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_post_padre) REFERENCES Post_de_foro (id),
  FOREIGN KEY (id_comentario_padre) REFERENCES Comentario_de_post_de_foro (id)
);


CREATE TABLE Mensaje (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contenido TEXT,
  fecha_de_creacion DATETIME,
  id_usuario_origen INTEGER,
  id_usuario_destino INTEGER,
  id_mensaje_respondido INTEGER,
  FOREIGN KEY (id_usuario_origen) REFERENCES Usuario (id),
  FOREIGN KEY (id_usuario_destino) REFERENCES Usuario (id),
  FOREIGN KEY (id_mensaje_respondido) REFERENCES Mensaje (id)
);