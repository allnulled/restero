<%# Quitar los otros # para armar la base de datos vía plantilla y módulos %>
<%- include("/db/modules/autorizacion.ejs.sql", { deployer }); %>
<%- include("/db/modules/ficheros.ejs.sql", { deployer }); %>
<%- include("/db/modules/blog.ejs.sql", { deployer }); %>
<%- include("/db/modules/foro.ejs.sql", { deployer }); %>
<%- include("/db/modules/mensajeria.ejs.sql", { deployer }); %>