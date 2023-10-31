module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            deployer.utilities.tracear("deployer.utilities.controlador_de_login");
            const nombre = deployer.utilities.obtener_parametro(request, "nombre");
            const contrasenya = deployer.utilities.obtener_parametro(request, "contrasenya");
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const consulta_de_usuarios = deployer.utilities.preparar_select("Usuario", {
                where: [
                    ["nombre", "=", nombre],
                    ["contrasenya", "=", contrasenya]
                ]
            }, true);
            const usuarios_coincidentes = await conexion.ejecutar(consulta_de_usuarios);
            if(!usuarios_coincidentes.length) {
                throw new Error(`Usuario no reconocido por nombre «${nombre}» y contraseña «${contrasenya}»`)
            }
            const [ usuario_coincidente ] = usuarios_coincidentes;
            const consulta_de_sesiones = deployer.utilities.preparar_select("Sesion", {
                where: [
                    ["id_usuario", "=", usuario_coincidente.id]
                ]
            }, true);
            const sesiones_coincidentes = await conexion.ejecutar(consulta_de_sesiones);
            let token_de_sesion_activo = undefined;
            if (sesiones_coincidentes.length !== 0) {
                token_de_sesion_activo = sesiones_coincidentes[0].token_de_sesion;
            } else {
                const nuevo_token = deployer.utilities.obtener_string_aleatorio(100);
                const consulta_de_insercion_de_sesion = deployer.utilities.preparar_insert("Sesion", {
                    item: {
                        id_usuario: usuario_coincidente.id,
                        token_de_sesion: nuevo_token
                    }
                }, true);
                await conexion.ejecutar(consulta_de_insercion_de_sesion);
                token_de_sesion_activo = nuevo_token;
            }
            request.headers.authorization = token_de_sesion_activo;
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            return response.json({
                token_de_sesion_activo,
                autentificacion
            });
        } catch (error) {
            console.error("Error en «src/utilities/controlador_de_login.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};