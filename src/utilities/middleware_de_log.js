module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            deployer.utilities.tracear("deployer.utilities.middleware_de_log");
            if (deployer.settings.APP_LOGS) {
                await deployer.utilities.gestionar_log_de_peticion(request);
            }
            return next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_autorizadores.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};