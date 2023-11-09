module.exports = function (deployer) {
    return async function (request, response, next) {
        deployer.utilities.tracear("deployer.controllers.controlador_de_agregar_votacion_de_asamblea");
        try {
            const sqlstring = require("sqlstring");
            let conexion = undefined;
            let autentificacion = undefined;
            const resultados = [];
            obtener_conexion_y_autentificacion: {
                conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                autentificacion = await deployer.utilities.obtener_autentificacion(request);
            }
            comprobar_permisos: {
                if (typeof autentificacion !== "object") {
                    throw new Error("Se requiere autentificación para «*_*»");
                }
                const permisos_coincidentes = autentificacion.permisos.filter(permiso => permiso.nombre === "permiso de administración");
                if (!permisos_coincidentes.length) {
                    throw new Error(`Operación «agregar_votacion_de_asamblea» requiere de permiso «permiso de administración»`);
                }
            }
            procedimiento_en_bloque: {
                let sql = "";
                construccion_de_query_inicial: {
                    const fecha_de_finalizacion = new Date();
                    fecha_de_finalizacion.setMonth(fecha_de_finalizacion.getMonth() + 1);
                    const fecha_de_creacion_sql = sqlstring.escape(deployer.utilities.obtener_date_como_string_formateado(new Date(), "YYYY-MM-DD HH:mm:ss"));
                    const fecha_de_finalizacion_sql = sqlstring.escape(deployer.utilities.obtener_date_como_string_formateado(fecha_de_finalizacion, "YYYY-MM-DD HH:mm:ss"));
                    sql += "INSERT INTO ";
                    sql += sqlstring.escapeId("Votacion_de_asamblea");
                    sql += " (";
                    sql += sqlstring.escapeId("fecha_de_creacion");
                    sql += ", ";
                    sql += sqlstring.escapeId("fecha_de_finalizacion");
                    sql += ", ";
                    sql += sqlstring.escapeId("estado");
                    sql += ") ";
                    sql += " VALUES ";
                    sql += "(";
                    sql += fecha_de_creacion_sql;
                    sql += ", ";
                    sql += fecha_de_finalizacion_sql;
                    sql += ", ";
                    sql += 'Inactivo';
                    sql += ");";
                }
                ejecucion_de_query: {
                    await conexion.ejecutar(sql);
                }
            }
            return response.json({
                operation: "agregar_votacion_de_asamblea",
                table: ["Votacion_de_asamblea"],
                query: {},
                body: {},
                resultado: resultados
            });
        } catch (error) {
            console.error("Error en «src/controllers/controlador_de_agregar_votacion_de_asamblea.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};