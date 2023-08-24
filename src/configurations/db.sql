CREATE TABLE Usuario (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(256) UNIQUE NOT NULL,
  domicilio VARCHAR(1024),
  correo VARCHAR (512),
  contrasenya VARCHAR(512)
);

CREATE TABLE Sesion (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER NOT NULL UNIQUE,
  token_de_sesion VARCHAR(128),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Voto (
  id INTEGER,
  id_usuario INTEGER,
  id_votacion INTEGER,
  sentido VARCHAR(32),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_votacion) REFERENCES Votacion (id)
);

CREATE TABLE Comentario (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  id_votacion INTEGER,
  id_comentario_padre INTEGER,
  comentario VARCHAR(2048),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
  FOREIGN KEY (id_comentario_padre) REFERENCES Comentario (id)
);

CREATE TABLE Votacion (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  estado VARCHAR(32),
  resultado TEXT
);

CREATE TABLE Problema (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_usuario_creador INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id)
);

CREATE TABLE Problema_destacado (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_problema_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_problema_original) REFERENCES Problema (id)
);

CREATE TABLE Solucion (
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

CREATE TABLE Solucion_destacada (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_solucion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_solucion_original) REFERENCES Solucion (id)
);

CREATE TABLE Implementacion (
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

CREATE TABLE Implementacion_destacada (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  descripcion TEXT,
  id_implementacion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion (id)
);

CREATE TABLE Ley (
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

CREATE TABLE Modificacion_de_ley (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(2048),
  uuid VARCHAR(128),
  descripcion TEXT,
  id_implementacion_original INTEGER,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id),
  FOREIGN KEY (id_implementacion_original) REFERENCES Implementacion_destacada (id)
);

CREATE TABLE Ciclo_democratico (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha_de_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  etapa_de_ciclo_actual INTEGER DEFAULT 1,
  descripcion TEXT,
  id_usuario_creador INTEGER,
  FOREIGN KEY (id_usuario_creador) REFERENCES Usuario (id)
);

CREATE TABLE Pulsion_democratica (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  especificacion TEXT,
  descripcion TEXT,
  id_ciclo_democratico INTEGER,
  FOREIGN KEY (id_ciclo_democratico) REFERENCES Ciclo_democratico (id)
);