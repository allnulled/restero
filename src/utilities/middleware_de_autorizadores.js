module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            const { operation, table } = request.params;
            const tablas_coincidentes = deployer.db.schema.filter(function (datos_de_tabla) {
                return datos_de_tabla.tabla === table;
            });
            if (tablas_coincidentes.length === 0) {
                throw new Error("Tipo de dato no reconocido en middleware de autorizadores");
            }
            const [tabla_coincidente] = tablas_coincidentes;
            const autorizadores = tabla_coincidente.atributos.filter(function (atributo) {
                if(atributo.startsWith("tiene_autorizador:")) {
                    return true;
                }
            });
            for(let index_autorizadores = 0; index_autorizadores < autorizadores.length; index_autorizadores++) {
                const autorizador = autorizadores[index_autorizadores];
                let autorizador_temp = undefined;
                autorizador_temp = autorizador.split(":");
                const etiqueta = autorizador_temp.shift().trim();
                const autorizador_id = autorizador_temp.shift().trim();
                const autorizador_parametro = autorizador_temp.join(":").trim();
                if (!(autorizador_id in deployer.authorizers)) {
                    throw new Error(`Autorizador no reconocido: «${autorizador_id}»`);
                }
                const autorizador_funcion = deployer.authorizers[autorizador_id];
                await autorizador_funcion(request, response, autorizador_parametro);
            }
            next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_autorizadores.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};