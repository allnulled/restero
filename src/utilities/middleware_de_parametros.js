module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            const { operation, table } = request.params;
            if(["select","insert","update","delete"].indexOf(operation) === -1) {
                throw new Error("Operación no reconocida");
            }
            const tablas_coincidentes = deployer.db.schema.filter(function() {
                return datos_de_tabla.tabla === table;
            });
            if(tablas_coincidentes.length !== 1) {
                throw new Error("Tipo de dato no reconocido");
            }
            request.hql_data = {};
            if(operation === "select") {
                request.hql_data.where = deployer.utilities.obtener_parametro(request, "where", []);
                request.hql_data.order = deployer.utilities.obtener_parametro(request, "order", ["id"]);
                request.hql_data.page = deployer.utilities.obtener_parametro(request, "page", 1);
                request.hql_data.items = deployer.utilities.obtener_parametro(request, "items", 20);
            }
            if(operation === "insert") {
                // @TODO.... del schema
                // @TODO....
                // @TODO....
            }
            if(operation === "update") {
                request.hql_data.id = deployer.utilities.obtener_parametro(request, "id", []);
                // @TODO.... del schema
                // @TODO....
                // @TODO....
            }
            if(operation === "delete") {
                request.hql_data.id = deployer.utilities.obtener_parametro(request, "id", []);
            }
            next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_parametros.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};