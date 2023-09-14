module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            const { operation, table } = request.params;
            if (["insert", "update"].indexOf(operation) === -1) {
                return;
            }
            if (columna_id in request.hql_data.item) {
                request.hql_data.item[columna_id] = null;
            }
        } catch (error) {
            console.error("Error en «src/authorizers/columns/no_modificable.js»");
            console.error(error);
            throw error;
        }
    };
};