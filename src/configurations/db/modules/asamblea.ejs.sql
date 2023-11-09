<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Votacion_de_asamblea /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  fecha_de_finalizacion DATETIME,
  estado VARCHAR /*
    @es_opcion: Inactivo|Problemas|Soluciones|Implementaciones|Histórico
    @tiene_autorizador: fijar_valor_estatico_inicial: Inactivo
  */
);

CREATE TABLE Problema_de_asamblea /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  titulo VARCHAR(1024),
  descripcion TEXT,
  contenido TEXT,
  estado VARCHAR NOT NULL /*
    @es_opcion: Propuesto|Clasificado|Aprobado|Desestimado
  */,
  id_de_votacion INTEGER,
  FOREIGN KEY (id_de_votacion) REFERENCES Votacion_de_asamblea (id)
);

CREATE TABLE Solucion_de_asamblea /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  titulo VARCHAR(1024),
  descripcion TEXT,
  contenido TEXT,
  estado VARCHAR NOT NULL /*
    @es_opcion: Propuesto|Clasificado|Aprobado|Desestimado
  */,
  id_de_problema INTEGER,
  id_de_votacion INTEGER,
  FOREIGN KEY (id_de_problema) REFERENCES Solucion_de_asamblea (id),
  FOREIGN KEY (id_de_votacion) REFERENCES Votacion_de_asamblea (id)
);

CREATE TABLE Implementacion_de_asamblea /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  titulo VARCHAR(1024),
  descripcion TEXT,
  contenido TEXT,
  estado VARCHAR NOT NULL /*
    @es_opcion: Propuesto|Clasificado|Aprobado|Desestimado
  */,
  id_de_solucion INTEGER,
  id_de_votacion INTEGER,
  FOREIGN KEY (id_de_solucion) REFERENCES Solucion_de_asamblea (id),
  FOREIGN KEY (id_de_votacion) REFERENCES Votacion_de_asamblea (id)
);

CREATE TABLE Voto_de_asamblea /*
  @tiene_autorizador: solo_modificable_por_mismo_usuario: id_de_usuario
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  id_de_usuario INTEGER,
  id_de_problema INTEGER,
  id_de_solucion INTEGER,
  id_de_implementacion INTEGER,
  id_de_votacion INTEGER,
  FOREIGN KEY (id_de_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_problema) REFERENCES Problema_de_asamblea (id),
  FOREIGN KEY (id_de_solucion) REFERENCES Solucion_de_asamblea (id),
  FOREIGN KEY (id_de_implementacion) REFERENCES Implementacion_de_asamblea (id),
  FOREIGN KEY (id_de_votacion) REFERENCES Votacion_de_asamblea (id)
);