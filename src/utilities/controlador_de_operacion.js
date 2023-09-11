const path = require("path");
const multer = require("multer");

module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
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
                const consulta_intermedia_file = deployer.utilities.preparar_select(table, { where: [["id", "=", request.hql_data.id]] });
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                const resultado_select = await conexion.ejecutar(consulta_intermedia_file);
                if(resultado_select.length === 0) {
                    throw new Error(`No se encontró instancia de «${table}» con id «${request.hql_data.id}»`);
                }
                if (!(request.hql_data.columna in resultado_select[0])) {
                    throw new Error(`No se encontró campo «${request.hql_data.columna}» en instancia de «${table}»`);
                }
                const nombre_especifico = resultado_select[0][request.hql_data.columna];
                const nombre_del_fichero = request.hql_data.id + "." + request.hql_data.columna + "." + nombre_especifico;
                const ruta_del_fichero = path.resolve(__dirname + "/../uploads", nombre_del_fichero);
                return response.sendFile(ruta_del_fichero);
            } else if (operation === "setfile") {
                const param_id = deployer.obtener_parametro(request, "id");
                const param_columna = deployer.obtener_parametro(request, "columna");
                await new Promise(function (ok, fail) {
                    const uploader = multer({
                        storage: multer.diskStorage({
                            destination: function (request, file, done) {
                                const new_destination = path.resolve(__dirname + "/../uploads");
                                done(null, new_destination);
                            },
                            filename: function (request, file, done) {
                                const new_filename = param_id + "." + param_columna + "." + file.originalname;
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
                request.hql_data.id = param_id;
                const nombre_original = request.files[param_columna][0].originalname;
                const nombre_completo = param_id + "." + param_columna + "." + nombre_original;
                const consulta_intermedia_file_1 = deployer.utilities.preparar_update(table, {
                    id: request.hql_data.id,
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