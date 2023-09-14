module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            const { operation, table } = request.params;
            const autentificacion = await deployer.utilities.obtener_autentificacion(request);
            if(!autentificacion) {
                throw new Error(`Operación «${operation}» en «${table}» requiere de autentificación por autorizador «incluir»`);
            }
            const [ operaciones, objetos ] = deployer.utilities.obtener_string_partido_en_dos(parametro, ":");
            const operaciones_afectadas = operaciones.split("|").map(op => op.trim());
            const objeto_parametrico = JSON.parse(objetos);
            const es_operacion_afectada = operaciones_afectadas.indexOf(operation) !== -1;
            if(es_operacion_afectada) {
                const { usuarios, grupos, permisos } = objeto_parametrico;
                let autorizado = false;
                if(usuarios) {
                    autorizado = autorizado || (usuarios.indexOf(autentificacion.usuario.nombre) !== -1);
                }
                if(grupos) {
                    const esta_en_grupo = autentificacion.grupos.filter(grupo => grupos.indexOf(grupo.nombre) !== -1);
                    autorizado = autorizado || esta_en_grupo.length;
                }
                if(permisos) {
                    console.log(permisos);
                    const esta_en_permiso = autentificacion.permisos.filter(permiso => permisos.indexOf(permiso.nombre) !== -1);
                    autorizado = autorizado || esta_en_permiso.length;
                }
                if(!autorizado) {
                    throw new Error(`Operación «${operation}» en «${table}» no permitida por autorizador «incluir» contra operaciones «${operaciones_afectadas.join(" | ")}»`);
                }
            }
        } catch (error) {
            console.error("Error en «src/authorizers/incluir.js»");
            console.error(error);
            throw error;
        }
    };
};