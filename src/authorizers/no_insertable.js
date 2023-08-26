module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            if("insert" === operation) {
                throw new Error("Operación no permitida por «no_insertable»");
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_insertable.js»");
            console.error(error);
            throw error;
        }
    };
};