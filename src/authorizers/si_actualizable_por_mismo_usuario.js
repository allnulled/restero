module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            if(operation !== "update") {
                return;
            }
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if (typeof autentificacion !== "object") {
                throw new Error("Autentificación requerida por autorizador «si_actualizable_por_mismo_usuario»");
            }
            const id_usuario_de_peticion = autentificacion.usuario.id;
            const conexion = await deployer.utilities.obtener_conexion();
            const campo_de_usuario = parametro.trim();
            const id = deployer.utilities.obtener_parametro("id");
            const consulta_de_objeto = deployer.utilities.preparar_select(table, {
                where: [
                    ["id", "=", id]
                ]
            });
            const objetos_coincidentes = await conexion.ejecutar(consulta_de_objeto);
            if(objetos_coincidentes.length === 0) {
                throw new Error("Objeto de tabla no reconocido según identificador: «" + id + "»");
            }
            const [objeto_coincidente] = objetos_coincidentes;
            const es_mismo_usuario = objeto_coincidente[campo_de_usuario] === id_usuario_de_peticion;
            if(!es_mismo_usuario) {
                throw new Error("Operación no permitida por «si_actualizable_por_mismo_usuario»");
            }
        } catch (error) {
            console.error("Error en «src/authorizers/si_actualizable_por_mismo_usuario.js»");
            console.error(error);
            throw error;
        }
    };
};