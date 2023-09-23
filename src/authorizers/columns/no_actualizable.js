module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.no_actualizable");
            const { operation, table } = request.params;
            if(operation !== "update") {
                return;
            }
            if(columna_id in request.hql_data.item) {
                request.hql_data.item[columna_id] = null;
            }
        } catch (error) {
            console.error("Error en «src/authorizers/columns/no_actualizable.js»");
            console.error(error);
            throw error;
        }
    };
};