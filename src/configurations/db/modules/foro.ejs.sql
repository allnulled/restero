<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Tema_de_foro /*
  @tiene_autorizables:
    - @tiene_autorizador: no_actualizable
    - @tiene_autorizador: no_eliminable
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  tags VARCHAR(255),
  seccion VARCHAR(255),
  orden INTEGER
);

CREATE TABLE Post_de_foro /*
  @tiene_autorizables:
    - @tiene_autorizador: no_actualizable
    - @tiene_autorizador: no_eliminable
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255) NOT NULL,
  subtitulo VARCHAR(512),
  contenido TEXT NOT NULL,
  tags VARCHAR(255),
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  id_de_tema INTEGER,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  FOREIGN KEY (id_de_tema) REFERENCES Tema_de_foro (id),
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_foro (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  contenido TEXT,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  id_de_post_de_foro INTEGER,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_post_de_foro) REFERENCES Post_de_foro (id)
);