module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            const token_de_sesion = deployer.utilities.obtener_parametro(request, "token_de_sesion");
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const consulta_de_sesiones = deployer.utilities.preparar_select("Sesion", {
                where: [
                    ["token_de_sesion", "=", token_de_sesion]
                ]
            });
            const sesiones_coincidentes = await conexion.ejecutar(consulta_de_sesiones);
            if (sesiones_coincidentes.length === 0) {
                throw new Error(`Sesión no reconocida por token: «${ token_de_sesion }»`);
            }
            const [ sesion_coincidente ] = sesiones_coincidentes;
            const consulta_de_eliminacion_de_sesion = deployer.utilities.preparar_delete("Sesion", {
                id: sesion_coincidente.id
            });
            await conexion.ejecutar(consulta_de_eliminacion_de_sesion);
            return response.json({
                sesion: "cancelada exitosamente"
            });
        } catch (error) {
            console.error("Error en «src/utilities/controlador_de_logout.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};