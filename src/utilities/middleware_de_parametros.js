module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            const { operation, table } = request.params;
            if(["select","insert","update","delete"].indexOf(operation) === -1) {
                throw new Error("Operación no reconocida");
            }
            const tablas_coincidentes = deployer.db.schema.filter(function(datos_de_tabla) {
                return datos_de_tabla.tabla === table;
            });
            if(tablas_coincidentes.length === 0) {
                throw new Error("Tipo de dato no reconocido");
            }
            request.hql_data = {};
            if(operation === "select") {
                Obtenemos_parametros_de_select: {
                    const parametros_de_select = {};
                    parametros_de_select.where = deployer.utilities.obtener_parametro(request, "where", "[]");
                    parametros_de_select.order = deployer.utilities.obtener_parametro(request, "order", '[["id","asc"]]');
                    parametros_de_select.page = deployer.utilities.obtener_parametro(request, "page", "1");
                    parametros_de_select.items = deployer.utilities.obtener_parametro(request, "items", "20");
                    const search = deployer.utilities.obtener_parametro(request, "search", "");
                    const { where, order, page, items } = deployer.utilities.parsear_propiedades_como_json(parametros_de_select);
                    if(!Array.isArray(where)) {
                        throw new Error("Parámetro «where» debe ser un array de arrays [943612789]");
                    }
                    if(!Array.isArray(order)) {
                        throw new Error("Parámetro «order» debe ser un array de arrays [943612788]");
                    }
                    if(typeof page !== "number") {
                        throw new Error("Parámetro «page» debe ser un número [943612787]");
                    }
                    if(typeof items !== "number") {
                        throw new Error("Parámetro «items» debe ser un número [943612786]");
                    }
                    Object.assign(request.hql_data, { where, order, page, items, search });
                }
            }
            if(operation === "insert") {
                Obtenemos_item: {
                    const datos_de_tabla = tablas_coincidentes[0];
                    const columnas = {};
                    for(let index_composicion = 0; index_composicion < datos_de_tabla.composicion.length; index_composicion++) {
                        const sentencia = datos_de_tabla.composicion[index_composicion];
                        if(sentencia.sentencia === "columna") {
                            columnas[sentencia.columna] = sentencia;
                        }
                    }
                    const datos_de_columnas = {};
                    for(let columna_id in columnas) {
                        datos_de_columnas[columna_id] = deployer.utilities.obtener_parametro(request, columna_id, null);
                    }
                    request.hql_data.item = datos_de_columnas;
                }
            }
            if(operation === "update") {
                Obtenemos_item_e_id: {
                    const datos_de_tabla = tablas_coincidentes[0];
                    const columnas = {};
                    for (let index_composicion = 0; index_composicion < datos_de_tabla.composicion.length; index_composicion++) {
                        const sentencia = datos_de_tabla.composicion[index_composicion];
                        if (sentencia.sentencia === "columna") {
                            columnas[sentencia.columna] = sentencia;
                        }
                    }
                    const datos_de_columnas = {};
                    for (let columna_id in columnas) {
                        datos_de_columnas[columna_id] = deployer.utilities.obtener_parametro(request, columna_id, null);
                    }
                    request.hql_data.item = datos_de_columnas;
                    request.hql_data.id = datos_de_columnas.id;
                }
            }
            if(operation === "delete") {
                Obtenemos_id: {
                    request.hql_data.id = deployer.utilities.obtener_parametro(request, "id", []);
                }
            }
            if(operation === "getfile") {
                // @TODO: obtener parámetros para «getfile»
                request.hql_data.id = deployer.utilities.obtener_parametro(request, "id", []);
                request.hql_data.columna = deployer.utilities.obtener_parametro(request, "columna", []);
            }
            if (operation === "setfile") {
                // @TODO: obtener parámetros para «setfile»
                request.hql_data.id = deployer.utilities.obtener_parametro(request, "id", []);
                request.hql_data.columna = deployer.utilities.obtener_parametro(request, "columna", []);
            }
            next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_parametros.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};