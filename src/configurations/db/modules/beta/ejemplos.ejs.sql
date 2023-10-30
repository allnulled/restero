<%
const autoincrement_word = deployer.settings.DB_DRIVER === "sqlite" ? "AUTOINCREMENT" : deployer.settings.DB_DRIVER === "mysql" ? "AUTO_INCREMENT" : "undefined";
%>

CREATE TABLE Multiples_autorizadores /*
  @tiene_autorizables:
    - tiene_autorizador: es_administrador
    - tiene_autorizador: incluir : insert | update | delete : { "permisos": [ "permiso de administración" ] }
*/ (
    id INTEGER PRIMARY KEY <%=autoincrement_word%>,
    nombre VARCHAR(512)
);