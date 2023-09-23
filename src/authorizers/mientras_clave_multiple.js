module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.mientras_clave_multiple");

        } catch (error) {
            console.error("Error en «src/authorizers/mientras_clave_multiple.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};