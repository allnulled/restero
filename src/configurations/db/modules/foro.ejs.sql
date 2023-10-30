<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Tema_de_foro (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255),
  descripcion VARCHAR(255),
  tags VARCHAR(255),
  id_tema_padre INTEGER,
  FOREIGN KEY (id_tema_padre) REFERENCES Tema_de_foro (id)
);

CREATE TABLE Post_de_foro (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  titulo VARCHAR(255),
  contenido TEXT,
  fecha_de_creacion DATETIME,
  tags VARCHAR(255),
  id_autor INTEGER,
  FOREIGN KEY (id_autor) REFERENCES Usuario (id)
);

CREATE TABLE Comentario_de_post_de_foro (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  contenido TEXT,
  fecha_de_creacion DATETIME,
  id_autor INTEGER,
  id_post_padre INTEGER,
  id_comentario_padre INTEGER,
  FOREIGN KEY (id_autor) REFERENCES Usuario (id),
  FOREIGN KEY (id_post_padre) REFERENCES Post_de_foro (id),
  FOREIGN KEY (id_comentario_padre) REFERENCES Comentario_de_post_de_foro (id)
);