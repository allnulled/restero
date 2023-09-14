module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            const { operation, table } = request.params;
            if (["insert", "update"].indexOf(operation) === -1) {
                return;
            }
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if (columna_id in request.hql_data.item) {
                const objeto_parametrico = JSON.parse(parametro);
                const { usuarios, grupos, permisos } = objeto_parametrico;
                let autorizado = false;
                if (usuarios) {
                    autorizado = autorizado || (usuarios.indexOf(autentificacion.usuario.nombre) !== -1);
                }
                if (grupos) {
                    const esta_en_grupo = autentificacion.grupos.filter(grupo => grupos.indexOf(grupo.nombre) !== -1);
                    autorizado = autorizado || esta_en_grupo.length;
                }
                if (permisos) {
                    const esta_en_permiso = autentificacion.permisos.filter(permiso => permisos.indexOf(permiso.nombre) !== -1);
                    autorizado = autorizado || esta_en_permiso.length;
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