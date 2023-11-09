module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.fijar_valor_estatico_inicial");
            const { operation, table } = request.params;
            if (operation === "update") {
                // OK
            } else if (operation === "insert") {
                request.hql_data.item[columna_id] = parametro;
                return;
            } else {
                // OK
            }
        } catch (error) {
            console.error("Error en «src/authorizers/columns/fijar_valor_estatico_inicial.js»");
            console.error(error);
            throw error;
        }
    };
};