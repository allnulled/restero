module.exports = function(deployer) {
    return async function(request, response, next) {
        deployer.utilities.tracear("deployer.controllers.controlador_de_eliminar_post_de_blog");
        try {
            const sqlstring = require("sqlstring");
            const id_de_post_de_blog = request.params.id;
            let conexion = undefined;
            let autentificacion = undefined;
            const resultados = [];
            obtener_conexion_y_autentificacion: {
                conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                autentificacion = await deployer.utilities.obtener_autentificacion(request);
            }
            comprobar_autoria_de_post: {
                const permisos_coincidentes = autentificacion.permisos.filter(permiso => permiso.nombre === "permiso de administración");
                if (!permisos_coincidentes.length) {
                    throw new Error(`Operación «eliminar_post_de_blog» requiere de permiso «permiso de administración»`);
                }
            }
            eliminar_comentarios_relacionados: {
                let consulta_eliminar_comentarios = "";
                consulta_eliminar_comentarios += "DELETE FROM ";
                consulta_eliminar_comentarios += "Comentario_de_post_de_blog";
                consulta_eliminar_comentarios += " WHERE ";
                consulta_eliminar_comentarios += "id_de_post_de_blog";
                consulta_eliminar_comentarios += " = ";
                consulta_eliminar_comentarios += sqlstring.escape(id_de_post_de_blog);
                consulta_eliminar_comentarios += ";";
                const resultado = await conexion.ejecutar(consulta_eliminar_comentarios);
                resultados.push(resultado);
            }
            eliminar_post: {
                const consulta_eliminar_post = deployer.utilities.preparar_delete("Post_de_blog", {
                    id: id_de_post_de_blog
                });
                const resultado = await conexion.ejecutar(consulta_eliminar_post);
                resultados.push(resultado);
            }
            return response.json({
                operation: "eliminar_post_de_blog",
                table: ["Post_de_blog", "Comentario_de_post_de_blog"],
                query: {},
                body: {},
                resultado: resultados
            });
        } catch (error) {
            console.error("Error en «src/controllers/controlador_de_eliminar_post_de_blog.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};