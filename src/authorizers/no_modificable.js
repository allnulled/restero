module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            if(["insert", "update", "delete"].indexOf(operation) !== -1) {
                throw new Error(`Operación «${operation}» en «${table}» no permitida por autorizador «no_modificable»`);
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_modificable.js»");
            console.error(error);
            throw error;
        }
    };
};