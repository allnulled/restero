module.exports = function (deployer) {
    return async function (request) {
        try {
            if(request.hql_authentication) {
                return request.hql_authentication;
            }
            const token_de_sesion = deployer.utilities.obtener_parametro(request, "authorization", request.headers.authorization || undefined);
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const consulta_de_sesion = deployer.utilities.preparar_select("Sesion", {
                where: [
                    ["token_de_sesion", "=", token_de_sesion]
                ]
            });
            const sesiones_coincidentes = await conexion.ejecutar(consulta_de_sesion);
            if (sesiones_coincidentes.length === 0) {
                return undefined;
            }
            const [sesion_coincidente] = sesiones_coincidentes;
            const consulta_de_usuario = deployer.utilities.preparar_select("Usuario", {
                where: [
                    ["id", "=", sesion_coincidente.id_usuario]
                ]
            });
            const usuarios_coincidentes = await conexion.ejecutar(consulta_de_usuario);
            const [usuario_coincidente] = usuarios_coincidentes;
            const authentication = {
                sesion: sesion_coincidente,
                usuario: usuario_coincidente
            };
            request.hql_authentication = authentication;
            return authentication;
        } catch (error) {
            console.error("Error en «src/utilities/obtener_parametro.js»");
            console.error(error);
            throw error;
        }
    };
};