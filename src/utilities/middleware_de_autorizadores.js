module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_autorizadores.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};