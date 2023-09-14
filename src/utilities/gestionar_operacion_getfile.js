module.exports = function (deployer) {
    const path = require("path");
    return async function (request, response, table, operation) {
        try {
            const consulta_intermedia_file = deployer.utilities.preparar_select(table, { where: [["id", "=", request.hql_data.id]] });
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const resultado_select = await conexion.ejecutar(consulta_intermedia_file);
            if (resultado_select.length === 0) {
                throw new Error(`No se encontró instancia de «${table}» con id «${request.hql_data.id}»`);
            }
            if (!(request.hql_data.columna in resultado_select[0])) {
                throw new Error(`No se encontró campo «${request.hql_data.columna}» en instancia de «${table}»`);
            }
            const nombre_original = resultado_select[0][request.hql_data.columna];
            const nombre_del_fichero = table + "." + request.hql_data.id + "." + request.hql_data.columna + "." + nombre_original;
            const ruta_del_fichero = path.resolve(__dirname + "/../uploads", nombre_del_fichero);
            response.sendFile(ruta_del_fichero);
            return -1;
        } catch (error) {
            console.error("Error en «src/utilities/gestionar_operacion_getfile.js»");
            console.error(error);
            throw error;
        }
    };
};