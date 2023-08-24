module.exports = function (deployer) {
    return async function () {
        try {
            deployer.server = require("http").createServer();
            deployer.app = require("express")(deployer.server);
            deployer.app.use("/api/v1/login", deployer.utilities.controlador_de_login);
            deployer.app.use("/api/v1/logout", deployer.utilities.controlador_de_logout);
            deployer.app.use("/api/v1/:operation/:table", [
                deployer.utilities.middleware_de_parametros,
                deployer.utilities.middleware_de_autentificacion,
                deployer.utilities.middleware_de_autorizadores,
                deployer.utilities.controlador_de_operacion
            ]);
            deployer.app.listen(deployer.settings.APP_PORT, function() {
                console.log("[*] Servidor escuchando en:");
                console.log("[*]     http://127.0.0.1:" + deployer.settings.APP_PORT);
            });
        } catch (error) {
            console.error("Error en «src/utilities/desplegar_servidor.js»");
            console.error(error);
            throw error;
        }
    };
};