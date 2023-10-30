<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Mensaje (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  contenido TEXT,
  fecha_de_creacion DATETIME,
  id_usuario_origen INTEGER,
  id_usuario_destino INTEGER,
  id_mensaje_respondido INTEGER,
  FOREIGN KEY (id_usuario_origen) REFERENCES Usuario (id),
  FOREIGN KEY (id_usuario_destino) REFERENCES Usuario (id),
  FOREIGN KEY (id_mensaje_respondido) REFERENCES Mensaje (id)
);