<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Tema_de_foro /*
  @tiene_autorizador: incluir: insert | update | delete: { "permisos": ["permiso de administración"] }
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255) NOT NULL UNIQUE,
  descripcion VARCHAR(255) NOT NULL,
  tags VARCHAR(255),
  seccion VARCHAR(255),
  orden INTEGER
);

CREATE TABLE Post_de_foro /*
  @tiene_autorizador: solo_modificable_por_mismo_usuario: id_de_autor
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255) NOT NULL UNIQUE,
  subtitulo VARCHAR(512),
  contenido TEXT NOT NULL,
  tags VARCHAR(255),
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: no_modificable
  */,
  id_de_tema INTEGER NOT NULL,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  FOREIGN KEY (id_de_tema) REFERENCES Tema_de_foro (id),
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_foro /*
  @tiene_autorizador: solo_modificable_por_mismo_usuario: id_de_autor
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  contenido TEXT,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: no_modificable
  */,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  id_de_post_de_foro INTEGER,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_post_de_foro) REFERENCES Post_de_foro (id)
);