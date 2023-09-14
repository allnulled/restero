module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            const { operation, table } = request.params;

        } catch (error) {
            console.error("Error en «src/authorizers/columns/solo_modificable_por.js»");
            console.error(error);
            throw error;
        }
    };
};