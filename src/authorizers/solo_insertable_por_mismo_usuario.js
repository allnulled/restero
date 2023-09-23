module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.solo_insertable_por_mismo_usuario");
            const { operation, table } = request.params;
            if (operation !== "insert") {
                return;
            }
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if(typeof autentificacion !== "object") {
                throw new Error("Autentificación requerida por autorizador «solo_insertable_por_mismo_usuario»");
            }
            const id_usuario_de_peticion = autentificacion.usuario.id;
            const campo_de_usuario = parametro.trim();
            request.hql_data.item[campo_de_usuario] = id_usuario_de_peticion;
        } catch (error) {
            console.error("Error en «src/authorizers/solo_insertable_por_mismo_usuario.js»");
            console.error(error);
            throw error;
        }
    };
};