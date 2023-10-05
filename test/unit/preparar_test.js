const fs = require("fs");
const path = require("path");

const db_file = path.resolve(__dirname, "../../src/configurations/db.sql");
const db_ejs_file = path.resolve(__dirname, "../../src/configurations/db/db.ejs.sql");

const db_file_copy = path.resolve(__dirname, "preparation/db.sql");
const db_ejs_file_copy = path.resolve(__dirname, "preparation/db.ejs.sql");

fs.copyFileSync(db_file, db_file_copy);
fs.copyFileSync(db_ejs_file, db_ejs_file_copy);

fs.writeFileSync(db_ejs_file, `
<%# Quitar los otros # para armar la base de datos vía plantilla y módulos %>
<%- include("/db/modules/autorizacion.ejs.sql", { deployer }); %>

<%- include("/db/modules/ficheros.ejs.sql", { deployer }); %>

<%- include("/db/modules/asamblea.ejs.sql", { deployer }); %>
`, "utf8");
