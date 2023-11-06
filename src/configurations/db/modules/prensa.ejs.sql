<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Noticia_de_prensa /*
  @tiene_autorizador: solo_modificable_por_mismo_usuario: id_de_autor
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255) NOT NULL,
  subtitulo VARCHAR(512),
  contenido TEXT NOT NULL /*
    @tiene_autorizador: solo_html_seguro
  */,
  tags VARCHAR(512),
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: no_modificable
  */,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_noticia_de_prensa /*
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_de_autor
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
  id_de_noticia INTEGER,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_noticia) REFERENCES Noticia_de_prensa (id)
);