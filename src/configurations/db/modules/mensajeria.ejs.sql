<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Mensaje_de_mensajeria /*
  @tiene_autorizador: no_actualizable
  @tiene_autorizador: solo_seleccionable_por_mismo_usuario: id_de_usuario_destino
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_de_usuario_destino
*/ (
  id INTEGER PRIMARY KEY <%- autoincrement_word %>,
  asunto VARCHAR(512),
  contenido TEXT,
  fecha_de_creacion DATETIME /*
    @tiene_autorizador: fijar_momento_de_creacion
  */,
  id_de_usuario_origen INTEGER /*
    @tiene_autorizador: fijar_id_de_usuario
  */,
  id_de_usuario_destino INTEGER,
  FOREIGN KEY (id_de_usuario_origen) REFERENCES Usuario (id),
  FOREIGN KEY (id_de_usuario_destino) REFERENCES Usuario (id)
);