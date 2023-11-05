<%# Quitar los otros # para armar la base de datos vía plantilla y módulos %>
<%- include("/db/modules/autorizacion.ejs.sql", { deployer }); %>
<%- include("/db/modules/ficheros.ejs.sql", { deployer }); %>

<% if(deployer.settings.HAS_BLOG) { %>
<%- include("/db/modules/blog.ejs.sql", { deployer }); %>
<% } %>

<% if(deployer.settings.HAS_FORO) { %>
<%- include("/db/modules/foro.ejs.sql", { deployer }); %>
<% } %>

<% if(deployer.settings.HAS_MENSAJERIA) { %>
<%- include("/db/modules/mensajeria.ejs.sql", { deployer }); %>
<% } %>

<% if(deployer.settings.HAS_ESCUELA) { %>
<%- include("/db/modules/escuela.ejs.sql", { deployer }); %>
<% } %>