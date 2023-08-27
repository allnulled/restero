CREATE TABLE Usuario /*
  @tiene_autorizador: no_usable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(256) UNIQUE NOT NULL,
  domicilio VARCHAR(1024),
  correo VARCHAR (512),
  contrasenya VARCHAR(512)
);

CREATE TABLE Sesion /*
  @tiene_autorizador: no_usable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER NOT NULL UNIQUE,
  token_de_sesion VARCHAR(128),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Voto /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  id_votacion INTEGER,
  sentido VARCHAR(32),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_votacion) REFERENCES Votacion (id)
);

CREATE TABLE Comentario /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  id_votacion INTEGER,
  id_comentario_padre INTEGER,
  comentario VARCHAR(2048),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
  FOREIGN KEY (id_comentario_padre) REFERENCES Comentario (id)
);

CREATE TABLE Votacion /*
  @tiene_autorizador: no_modificable
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  estado VARCHAR(32),
  resultado TEXT
);

CREATE TABLE Problema /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_usuario_creador INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id)
);

CREATE TABLE Problema_destacado /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_problema_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_problema_original) REFERENCES Problema (id)
);

CREATE TABLE Solucion /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_usuario_creador INTEGER,
  id_problema_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id),
  FOREIGN KEY (id_problema_original) REFERENCES Problema (id)
);

CREATE TABLE Solucion_destacada /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_solucion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_solucion_original) REFERENCES Solucion (id)
);

CREATE TABLE Implementacion /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_usuario_creador INTEGER,
  id_solucion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id),
  FOREIGN KEY (id_solucion_original) REFERENCES Solucion_destacada (id)
);

CREATE TABLE Implementacion_destacada /*
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
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
  descripcion TEXT,
  id_modificacion_de_ley_original INTEGER,
  id_implementacion_original INTEGER,
  id_ley_padre INTEGER,
  FOREIGN KEY (id_modificacion_de_ley_original) REFERENCES Modificacion_de_ley (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion_destacada (id),
  FOREIGN KEY (id_ley_padre) REFERENCES Ley (id)
);

CREATE TABLE Modificacion_de_ley /*
  @tiene_autorizador: no_modificable
*/  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  uuid VARCHAR(128),
  descripcion TEXT,
  id_implementacion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion_destacada (id)
);

CREATE TABLE Ciclo_democratico /*
  @tiene_autorizador: no_modificable
*/  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha_de_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  etapa_de_ciclo_actual INTEGER DEFAULT 1,
  descripcion TEXT,
  id_usuario_creador INTEGER,
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id)
);

CREATE TABLE Pulsion_democratica /*
  @tiene_autorizador: no_modificable
*/  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  especificacion TEXT,
  descripcion TEXT,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id)
);