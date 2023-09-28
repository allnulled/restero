
CREATE TABLE Usuario /*
  @tiene_autorizador: no_usable
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
  @tiene_autorizador: no_usable
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

CREATE TABLE Fichero_de_problema_propuesto /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_fichero INTEGER,
  id_problema_propuesto INTEGER,
  id_usuario INTEGER,
  FOREIGN KEY (id_fichero) REFERENCES Fichero (id),
  FOREIGN KEY (id_problema_propuesto) REFERENCES Problema_propuesto (id),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Voto /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
  @tiene_autorizadores:
    - incluir: insert | update | delete: { "permisos": ["permiso de administración"] }
    - es_administrador
  @no_visibles_columnas: declaracion, notas
  @mientras_clave_multiple: un_usuario_por_votacion = id_usuario + id_votacion
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  id_votacion INTEGER,
  sentido VARCHAR(32) /*
    @es_opcion: Afirmativo | Negativo
  */,
  declaracion VARCHAR(256) /*
    @nombre_humano: Declaración
  */,
  notas VARCHAR(256),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_votacion) REFERENCES Votacion (id)
);

CREATE TABLE Comentario /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
  @tiene_padre: id_comentario_padre
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER ,
  id_votacion INTEGER,
  id_comentario_padre INTEGER,
  comentario VARCHAR(2048),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
  FOREIGN KEY (id_comentario_padre) REFERENCES Comentario (id)
);

CREATE TABLE Votacion /*
  @nombre_humano: Votación
  @tiene_autorizador: no_modificable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  estado VARCHAR(32),
  resultado TEXT
);

CREATE TABLE Problema_propuesto /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario_creador
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  notas_del_administrador TEXT /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  id_usuario_creador INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id)
);

CREATE TABLE Problema_destacado /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario_creador
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_usuario_creador INTEGER,
  id_problema_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_problema_original) REFERENCES Problema (id)
);

CREATE TABLE Solucion_propuesta /*
  @nombre_humano: Solución propuesta
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario_creador
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_usuario_creador INTEGER,
  id_problema_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id),
  FOREIGN KEY (id_problema_original) REFERENCES Problema (id)
);

CREATE TABLE Solucion_destacada /*
  @nombre_humano: Solución destacada
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_usuario_creador INTEGER,
  id_solucion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_solucion_original) REFERENCES Solucion (id)
);

CREATE TABLE Implementacion_propuesta /*
  @nombre_humano: Implementación propuesta
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario_creador
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_usuario_creador INTEGER,
  id_solucion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id),
  FOREIGN KEY (id_solucion_original) REFERENCES Solucion_destacada (id)
);

CREATE TABLE Implementacion_destacada /*
  @nombre_humano: Implementación destacada
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario_creador
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_usuario_creador INTEGER,
  id_implementacion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion (id)
);

CREATE TABLE Ley /*
  @tiene_autorizador: no_modificable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  uuid VARCHAR(128),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_modificacion_de_ley_original INTEGER,
  id_implementacion_original INTEGER,
  id_ley_padre INTEGER,
  FOREIGN KEY (id_modificacion_de_ley_original) REFERENCES Modificacion_de_ley (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion_destacada (id),
  FOREIGN KEY (id_ley_padre) REFERENCES Ley (id)
);

CREATE TABLE Modificacion_de_ley /*
  @nombre_humano: Modificación de ley
  @tiene_autorizador: no_modificable
*/  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  uuid VARCHAR(128),
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_implementacion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion_destacada (id)
);

CREATE TABLE Ciclo_democratico /*
  @nombre_humano: Ciclo democrático
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario_creador
  @tiene_autorizador: incluir: insert | update | delete | getfile | setfile: {"permisos":["permiso de administración"]}
*/  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha_de_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  nombre VARCHAR(128),
  etapa_de_ciclo_actual INTEGER DEFAULT 1,
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  id_usuario_creador INTEGER /*
    @nombre_humano: Id de usuario creador
  */,
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id)
);

CREATE TABLE Pulsion_democratica /*
  @nombre_humano: Pulsión democrática
  @tiene_autorizador: incluir: insert | update | delete | getfile | setfile: {"permisos":["permiso de administración"]}
*/  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  especificacion TEXT /*
    @nombre_humano: Especificación
  */,
  descripcion TEXT /*
    @nombre_humano: Descripción
  */,
  notas_especificas TEXT /*
    @tiene_autorizador: no_insertable
    @tiene_autorizador: no_actualizable
  */,
  id_ciclo_democratico INTEGER /*
    @nombre_humano: Id de ciclo democrático
  */,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id)
);