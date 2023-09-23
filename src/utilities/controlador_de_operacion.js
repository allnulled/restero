const path = require("path");
const multer = require("multer");

module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            deployer.utilities.tracear("deployer.utilities.controlador_de_operacion");
            const { operation, table } = request.params;
            // console.log(request.hql_authentication);
            if (operation === "select") {
                const consulta_select = deployer.utilities.preparar_select(table, request.hql_data);
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                const resultado = await conexion.ejecutar(consulta_select);
                request.hql_resultado = resultado;
            } else if (operation === "insert") {
                const consulta_insert = deployer.utilities.preparar_insert(table, request.hql_data);
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                const resultado = await conexion.ejecutar(consulta_insert);
                request.hql_resultado = resultado;
            } else if (operation === "update") {
                const consulta_update = deployer.utilities.preparar_update(table, request.hql_data);
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                const resultado = await conexion.ejecutar(consulta_update);
                request.hql_resultado = resultado;
            } else if (operation === "delete") {
                const consulta_delete = deployer.utilities.preparar_delete(table, request.hql_data);
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                const resultado = await conexion.ejecutar(consulta_delete);
                request.hql_resultado = resultado;
            } else if (operation === "getfile") {
                const resultado = await deployer.utilities.gestionar_operacion_getfile(request, response, table, operation);
                if(resultado === -1) {
                    return;
                }
            } else if (operation === "setfile") {
                const resultado = await deployer.utilities.gestionar_operacion_setfile(request, response, table, operation);
                if (resultado === -1) {
                    return;
                }
            }
            return response.json({
                operation,
                table,
                query: request.query,
                body: request.body,
                resultado: request.hql_resultado
            })
        } catch (error) {
            console.error("Error en «src/utilities/controlador_de_operacion.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};