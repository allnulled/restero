module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.no_visibles_columnas");
            // @NOTHINGISOKAY
        } catch (error) {
            console.error("Error en «src/authorizers/no_visibles_columnas.js»");
            console.error(error);
            throw error;
        }
    };
};