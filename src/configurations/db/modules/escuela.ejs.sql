<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Curso_de_escuela /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  titulo VARCHAR(1024) NOT NULL UNIQUE,
  descripcion TEXT,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */
);

CREATE TABLE Leccion_de_curso_de_escuela /*
  @tiene_autorizador: incluir: insert | update | delete: {"permisos":["permiso de administración"]}
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  titulo VARCHAR(1024) NOT NULL,
  descripcion TEXT,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  id_de_curso INTEGER,
  contenido_html TEXT,
  FOREIGN KEY (id_de_curso) REFERENCES Curso_de_escuela (id)
);