module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if (!autentificacion) {
                throw new Error(`Operación «${operation}» en «${table}» requiere de autentificación por autorizador «es_administrador»`);
            }
            const permisos_coincidentes = autentificacion.permisos.filter(permiso => permiso.nombre === "permiso de administración")
            if(!permisos_coincidentes.length) {
                throw new Error(`Operación «${operation}» en «${table}» requiere de permisos de administrador por «es_administrador»`);
            }
        } catch (error) {
            console.error("Error en «src/authorizers/espera_segundos.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};