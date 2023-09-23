module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            deployer.utilities.tracear("deployer.utilities.middleware_de_solo_administradores");
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if(!autentificacion) {
                throw new Error("Operación requiere de autentificación por «middleware_de_solo_administradores»");
            }
            const permisos_coincidentes = autentificacion.permisos.filter(permiso => permiso.nombre === "permiso de administración")
            if(permisos_coincidentes.length === 0) {
                throw new Error("Operación no permitida por «middleware_de_solo_administradores»");
            }
            return next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_autorizadores.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};