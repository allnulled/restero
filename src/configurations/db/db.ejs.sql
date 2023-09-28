<%# Quitar los otros # para armar la base de datos vía plantilla y módulos %>
<%- include("/db/modules/autorizacion.ejs.sql"); %>

<%- include("/db/modules/ficheros.ejs.sql"); %>

<%- include("/db/modules/asamblea.ejs.sql"); %>