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
            const consulta_de_usuario = `SELECT
                    Usuario.id AS 'Usuario.id',
                    Usuario.nombre AS 'Usuario.nombre',
                    Usuario.correo AS 'Usuario.correo',
                    Grupo.id AS 'Grupo.id',
                    Grupo.nombre AS 'Grupo.nombre',
                    Grupo.descripcion AS 'Grupo.descripcion',
                    Permiso.id AS 'Permiso.id',
                    Permiso.nombre AS 'Permiso.nombre',
                    Permiso.descripcion AS 'Permiso.descripcion'
                FROM Usuario
                LEFT JOIN Grupo_de_usuario
                    ON Usuario.id = Grupo_de_usuario.id_usuario
                LEFT JOIN Grupo
                    ON Grupo.id = Grupo_de_usuario.id_grupo
                LEFT JOIN Permiso_de_usuario
                    ON Usuario.id = Permiso_de_usuario.id_usuario
                LEFT JOIN Permiso_de_grupo
                    ON Grupo.id = Permiso_de_grupo.id_grupo
                LEFT JOIN Permiso
                    ON Permiso.id IN (Permiso_de_usuario.id_permiso, Permiso_de_grupo.id_permiso)
                WHERE Usuario.id = ${sesion_coincidente.id_usuario};`;
            const datos_coincidentes = await conexion.ejecutar(consulta_de_usuario);
            const autentificacion_final = { usuario: undefined, grupos: [], permisos: [] };
            const grupos_mentados = {};
            const permisos_mentados = {};
            for(let index = 0; index < datos_coincidentes.length; index++) {
                const dato = datos_coincidentes[index];
                if(!autentificacion_final.usuario) {
                    autentificacion_final.usuario = {
                        id: dato["Usuario.id"],
                        nombre: dato["Usuario.nombre"],
                        correo: dato["Usuario.correo"],
                    }
                }
                if(dato["Grupo.id"] && (!(dato["Grupo.id"] in grupos_mentados))) {
                    grupos_mentados[dato["Grupo.id"]] = {
                        id: dato["Grupo.id"],
                        nombre: dato["Grupo.nombre"],
                        descripcion: dato["Grupo.descripcion"],
                    }
                }
                if (dato["Permiso.id"] && (!(dato["Permiso.id"] in permisos_mentados))) {
                    permisos_mentados[dato["Permiso.id"]] = {
                        id: dato["Permiso.id"],
                        nombre: dato["Permiso.nombre"],
                        descripcion: dato["Permiso.descripcion"],
                    }
                }
            }
            Object.keys(grupos_mentados).forEach(grupo_id => {
                autentificacion_final.grupos.push(grupos_mentados[grupo_id]);
            });
            Object.keys(permisos_mentados).forEach(permiso_id => {
                autentificacion_final.permisos.push(permisos_mentados[permiso_id]);
            });
            const authentication = {
                sesion: sesion_coincidente,
                ...autentificacion_final
            };
            request.hql_authentication = authentication;
            return authentication;
        } catch (error) {
            console.error("Error en «src/utilities/obtener_autentificacion.js»");
            console.error(error);
            throw error;
        }
    };
};