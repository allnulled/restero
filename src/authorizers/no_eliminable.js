module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            if("delete" === operation) {
                throw new Error("Operación no permitida por «no_eliminable»");
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_eliminable.js»");
            console.error(error);
            throw error;
        }
    };
};