const bodyParser = require("body-parser");

module.exports = function (deployer) {
    return async function () {
        try {
            deployer.utilities.tracear("deployer.utilities.desplegar_servidor");
            const path = require("path");
            const express = require("express");
            const body_parser = require("body-parser");
            deployer.server = require("http").createServer();
            deployer.app = express(deployer.server);
            deployer.app.use(deployer.utilities.middleware_de_log);
            deployer.app.use(body_parser.urlencoded({ extended: true }));
            deployer.app.use(body_parser.json({ extended: true }));
            deployer.app.use("/api/v1/login", deployer.utilities.controlador_de_login);
            deployer.app.use("/api/v1/logout", deployer.utilities.controlador_de_logout);
            deployer.app.use("/api/v1/db/schema", deployer.utilities.controlador_de_esquema);
            deployer.app.use("/api/v1/shutdown", [deployer.utilities.middleware_de_solo_administradores], deployer.utilities.controlador_de_shutdown);
            deployer.app.use("/api/v1/db/import/excel", [deployer.utilities.middleware_de_solo_administradores], deployer.utilities.controlador_de_import_xlsx);
            deployer.app.use("/api/v1/db/export/excel", [deployer.utilities.middleware_de_solo_administradores], deployer.utilities.controlador_de_export_xlsx);
            deployer.app.use("/api/v1/:operation/:table", [
                deployer.utilities.middleware_de_parametros,
                deployer.utilities.middleware_de_autentificacion,
                deployer.utilities.middleware_de_autorizadores,
                deployer.utilities.controlador_de_operacion
            ]);
            deployer.app.use("/", express.static(path.resolve(__dirname + "/../www/files")));
            await new Promise((ok, fail) => {
                deployer.app.listen(deployer.settings.APP_PORT, function() {
                    console.log("[*] Servidor escuchando en:");
                    console.log("[*]     http://127.0.0.1:" + deployer.settings.APP_PORT + "/index.1.html");
                    return ok();
                });
            })
        } catch (error) {
            console.error("Error en «src/utilities/desplegar_servidor.js»");
            console.error(error);
            throw error;
        }
    };
};