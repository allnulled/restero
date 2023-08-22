module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            const { operation, table } = request.params;
            if(operation === "select") {
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                console.log(conexion);
                const resultado = await conexion.ejecutar("SELECT 100;");
                request.hql_data.resultado = resultado;
                // @TODO: montar query
                // @TODO: recoger conexión a base de datos
                // @TODO: lanzar query
                // @TODO: devolver datos de query
            } else if (operation === "insert") {
                // @TODO: montar query
                // @TODO: recoger conexión a base de datos
                // @TODO: lanzar query
                // @TODO: devolver datos de query
            } else if (operation === "update") {
                // @TODO: montar query
                // @TODO: recoger conexión a base de datos
                // @TODO: lanzar query
                // @TODO: devolver datos de query
            } else if (operation === "delete") {
                // @TODO: montar query
                // @TODO: recoger conexión a base de datos
                // @TODO: lanzar query
                // @TODO: devolver datos de query
            }
            response.json({
                operation,
                table,
                datos: request.hql_data
            })
        } catch (error) {
            console.error("Error en «src/utilities/controlador_de_operacion.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};