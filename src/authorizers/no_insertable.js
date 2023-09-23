module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.no_insertable");
            const { operation, table } = request.params;
            if("insert" === operation) {
                throw new Error(`Operación «${operation}» en «${table}» no permitida por autorizador «no_insertable»`);
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_insertable.js»");
            console.error(error);
            throw error;
        }
    };
};