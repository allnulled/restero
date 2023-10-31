module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.solo_modificable_por");
            const { operation, table } = request.params;
            if (["insert", "update"].indexOf(operation) === -1) {
                return;
            }
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if (columna_id in request.hql_data.item) {
                const objeto_parametrico = JSON.parse(parametro);
                const { usuarios, grupos, permisos } = objeto_parametrico;
                let autorizado = false;
                if (Array.isArray(usuarios)) {
                    autorizado = autorizado || (usuarios.indexOf(autentificacion.usuario.nombre) !== -1);
                } else if(typeof usuarios !== "undefined") {
                    throw new Error("El parámetro «usuarios» del autorizador de columna «solo_modificable_por» debe ser un array");
                }
                if (Array.isArray(grupos)) {
                    const esta_en_grupo = autentificacion.grupos.filter(grupo => grupos.indexOf(grupo.nombre) !== -1);
                    autorizado = autorizado || esta_en_grupo.length;
                } else if (typeof usuarios !== "undefined") {
                    throw new Error("El parámetro «grupos» del autorizador de columna «solo_modificable_por» debe ser un array");
                }
                if (Array.isArray(permisos)) {
                    const esta_en_permiso = autentificacion.permisos.filter(permiso => permisos.indexOf(permiso.nombre) !== -1);
                    autorizado = autorizado || esta_en_permiso.length;
                } else if (typeof usuarios !== "undefined") {
                    throw new Error("El parámetro «permisos» del autorizador de columna «solo_modificable_por» debe ser un array");
                }
                if (!autorizado) {
                    request.hql_data.item[columna_id] = null;
                }
            }
        } catch (error) {
            console.error("Error en «src/authorizers/columns/solo_modificable_por.js»");
            console.error(error);
            throw error;
        }
    };
};