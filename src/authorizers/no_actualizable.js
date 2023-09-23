module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.no_actualizable");
            const { operation, table } = request.params;
            if("update" === operation) {
                throw new Error(`Operación «${operation}» en «${table}» no permitida por autorizador «no_actualizable»`);
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_actualizable.js»");
            console.error(error);
            throw error;
        }
    };
};