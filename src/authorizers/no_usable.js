module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.no_usable");
            const { operation, table } = request.params;
            throw new Error(`Operación «${operation}» en «${table}» no permitida por autorizador «no_usable»`);
        } catch (error) {
            console.error("Error en «src/authorizers/no_usable.js»");
            console.error(error);
            throw error;
        }
    };
};