module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.no_eliminable");
            const { operation, table } = request.params;
            if("delete" === operation) {
                throw new Error(`Operación «${operation}» en «${table}» no permitida por autorizador «no_eliminable»`);
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_eliminable.js»");
            console.error(error);
            throw error;
        }
    };
};