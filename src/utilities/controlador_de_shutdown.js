module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.gestor_de_shutdown();
        } catch (error) {
            console.error("Error en «src/controllers/shutdown.js»");
            console.error(error);
            throw error;
        }
    };
};