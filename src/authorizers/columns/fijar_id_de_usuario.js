module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.fijar_dia_de_creacion");
            const { operation, table } = request.params;
            if (operation === "update") {
                delete request.hql_data.item[columna_id];
                return;
            }
            if (operation !== "insert") {
                return;
            }
            const fecha = new Date();
            request.hql_data.item[columna_id] = request.hql_authentication.usuario.id;
        } catch (error) {
            console.error("Error en «src/authorizers/columns/fijar_dia_de_creacion.js»");
            console.error(error);
            throw error;
        }
    };
};