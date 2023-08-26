module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            if ("select" === operation) {
                throw new Error("Operación no permitida por «no_seleccionable»");
            }
        } catch (error) {
            console.error("Error en «src/authorizers/no_seleccionable.js»");
            console.error(error);
            throw error;
        }
    };
};