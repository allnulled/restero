module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            const { operation, table } = request.params;
            if(operation !== "update") {
                return;
            }
            
        } catch (error) {
            console.error("Error en «src/authorizers/columns/no_actualizable.js»");
            console.error(error);
            throw error;
        }
    };
};