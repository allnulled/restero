<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Post_de_blog /*
  @tiene_fichero: imagen
  @tiene_autorizables:
    - @tiene_autorizador: incluir: insert | update | delete: { "permisos": ["permiso de administración"] }
*/ (
  id INTEGER PRIMARY KEY <%=autoincrement_word%>,
  titulo VARCHAR(255) UNIQUE NOT NULL,
  subtitulo VARCHAR(255),
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  imagen VARCHAR(255),
  tags VARCHAR(1024) /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  contenido TEXT NOT NULL /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  id_de_autor INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  FOREIGN KEY (id_de_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_blog /*
  @tiene_autorizables:
    - @tiene_autorizador: incluir: insert | update | delete: { "permisos": ["permiso de administración"] }
*/ (
  id INTEGER PRIMARY KEY <%=autoincrement_word%>,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  tags VARCHAR(1024) /*
    @tiene_autorizador: solo_modificable_por: {"permisos":["permiso de administración"]}
  */,
  contenido TEXT NOT NULL /*
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