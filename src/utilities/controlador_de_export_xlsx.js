module.exports = function (deployer) {
    const path = require("path");
    const xlsx = require("xlsx");
    const sqlstring = require("sqlstring");
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.utilities.controlador_de_export_xlsx");
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const tablas_a_exportar_json = deployer.utilities.obtener_parametro(request, "tablas");
            const tablas_a_exportar = JSON.parse(tablas_a_exportar_json);
            const workbook = xlsx.utils.book_new();
            for(let index_tabla = 0; index_tabla < tablas_a_exportar.length; index_tabla++) {
                const tabla_a_exportar = tablas_a_exportar[index_tabla];
                const consulta_tabla = `SELECT * FROM ${sqlstring.escapeId(tabla_a_exportar)};`;
                const resultados = await conexion.ejecutar(consulta_tabla);
                const worksheet = xlsx.utils.json_to_sheet(resultados);
                xlsx.utils.book_append_sheet(workbook, worksheet, tabla_a_exportar);
            }
            const fichero_a_exportar = path.resolve(__dirname, "../uploads/exportaciones." + (new Date()).getTime() + ".xlsx");
            xlsx.writeFile(workbook, fichero_a_exportar);
            return response.download(fichero_a_exportar);
        } catch (error) {
            console.error("Error en «src/controllers/controlador_de_export_xlsx.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};