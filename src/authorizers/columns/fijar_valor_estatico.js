module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.fijar_valor_estatico");
            const { operation, table } = request.params;
            if (operation === "update") {
                delete request.hql_data.item[columna_id];
                return;
            }
            if (operation !== "insert") {
                return;
            }
            request.hql_data.item[columna_id] = parametro;
        } catch (error) {
            console.error("Error en «src/authorizers/columns/fijar_valor_estatico.js»");
            console.error(error);
            throw error;
        }
    };
};