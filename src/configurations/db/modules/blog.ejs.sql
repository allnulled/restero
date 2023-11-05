<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Post_de_blog /*
  @tiene_fichero: imagen
  @tiene_autorizador: incluir: insert | update | delete: { "permisos": ["permiso de administración"] }
*/ (
  id INTEGER PRIMARY KEY <%=autoincrement_word%>,
  titulo VARCHAR(255) UNIQUE NOT NULL,
  subtitulo VARCHAR(255),
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: no_modificable
  */,
  imagen VARCHAR(255),
  tags VARCHAR(1024),
  contenido TEXT NOT NULL,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_blog /*
  @tiene_autorizador: solo_modificable_por_mismo_usuario: id_de_autor
*/ (
  id INTEGER PRIMARY KEY <%=autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: no_modificable
  */,
  tags VARCHAR(1024),
  contenido TEXT NOT NULL,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  id_de_post_de_blog INTEGER,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_post_de_blog) REFERENCES Post_de_blog (id)
);