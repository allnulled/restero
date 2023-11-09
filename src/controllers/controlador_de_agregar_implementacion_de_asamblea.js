module.exports = function(deployer) {
    return async function(request, response, next) {
        deployer.utilities.tracear("deployer.controllers.controlador_de_*_*");
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
                if(typeof autentificacion !== "object") {
                    throw new Error("Se requiere autentificación para «*_*»");
                }
            }
            procedimiento_en_bloque: {

            }
            return response.json({
                operation: "",
                table: [],
                query: {},
                body: {},
                resultado: resultados
            });
        } catch (error) {
            console.error("Error en «src/controllers/controlador_de_*_*.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};