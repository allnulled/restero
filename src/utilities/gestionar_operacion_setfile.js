module.exports = function (deployer) {
    const multer = require("multer");
    const path = require("path");
    return async function (request, response, table, operation) {
        try {
            await new Promise(function (ok, fail) {
                const uploader = multer({
                    storage: multer.diskStorage({
                        destination: function (request, file, done) {
                            const new_destination = path.resolve(__dirname + "/../uploads");
                            done(null, new_destination);
                        },
                        filename: function (request, file, done) {
                            const param_id = deployer.utilities.obtener_parametro(request, "id");
                            const param_columna = deployer.utilities.obtener_parametro(request, "columna");
                            const new_filename = table + "." + param_id + "." + param_columna + "." + file.originalname;
                            done(null, new_filename);
                        }
                    })
                });
                const controlador_de_uploader = uploader.fields([{
                    name: "fichero",
                    maxCount: 1
                }]);
                return controlador_de_uploader(request, response, (error, data) => {
                    if (error) {
                        return fail(error);
                    } else {
                        return ok(data);
                    }
                });
            });
            const param_id = deployer.utilities.obtener_parametro(request, "id");
            const param_columna = deployer.utilities.obtener_parametro(request, "columna");
            const nombre_original = request.files.fichero[0].originalname;
            const nombre_completo = table + "." + param_id + "." + param_columna + "." + nombre_original;
            const consulta_intermedia_file_1 = deployer.utilities.preparar_update(table, {
                id: param_id,
                item: {
                    [param_columna]: nombre_original
                }
            });
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const resultado_update = await conexion.ejecutar(consulta_intermedia_file_1);
            const consulta_intermedia_file_2 = deployer.utilities.preparar_select(table, { where: [["id", "=", request.hql_data.id]] });
            const resultado_select = await conexion.ejecutar(consulta_intermedia_file_2);
            request.hql_resultado = {
                file: "saved successfully",
                id: request.hql_data.id
            };
        } catch (error) {
            console.error("Error en «src/utilities/gestionar_operacion_setfile.js»");
            console.error(error);
            throw error;
        }
    };
};
