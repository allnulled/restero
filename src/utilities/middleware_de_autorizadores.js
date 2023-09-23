module.exports = function (deployer) {
    return async function (request, response, next) {
        try {
            deployer.utilities.tracear("deployer.utilities.middleware_de_autorizadores");
            const { operation, table } = request.params;
            const tablas_coincidentes = deployer.db.schema.filter(function (datos_de_tabla) {
                return datos_de_tabla.tabla === table;
            });
            if (tablas_coincidentes.length === 0) {
                throw new Error("Tipo de dato no reconocido en middleware de autorizadores");
            }
            const [tabla_coincidente] = tablas_coincidentes;
            const autorizadores_de_tabla = tabla_coincidente.atributos.filter(function (atributo) {
                return ((typeof(atributo) === "string") && atributo.startsWith("tiene_autorizador:"))
                  || (Array.isArray(atributo));
            });
            Itero_autorizadores_de_tabla:
            for(let index_autorizadores_de_tabla = 0; index_autorizadores_de_tabla < autorizadores_de_tabla.length; index_autorizadores_de_tabla++) {
                const autorizador = autorizadores_de_tabla[index_autorizadores_de_tabla];
                let autorizador_temp = undefined;
                if(typeof(autorizador) === "string") {
                    autorizador_temp = autorizador.split(":");
                    const etiqueta = autorizador_temp.shift().trim();
                    const autorizador_id = autorizador_temp.shift().trim();
                    const autorizador_parametro = autorizador_temp.join(":").trim();
                    if (!(autorizador_id in deployer.authorizers)) {
                        throw new Error(`Autorizador de tabla «${table}» no reconocido: «${autorizador_id}»`);
                    }
                    const autorizador_funcion = deployer.authorizers[autorizador_id];
                    await autorizador_funcion(request, response, autorizador_parametro);
                } else if (Array.isArray(autorizador)) {
                    const [hiperatributo, hipersubatributos] = autorizador;
                    if(hiperatributo.trim() === "tiene_autorizables:") {
                        let es_valido = false;
                        const errores = [];
                        Iterando_hipersubatributos:
                        for(let index_hsa = 0; index_hsa < hipersubatributos.length; index_hsa++) {
                            try {
                                const hsa = hipersubatributos[index_hsa];
                                const autorizador_temp = hsa.split(":");
                                const etiqueta = autorizador_temp.shift().trim();
                                const autorizador_id = autorizador_temp.shift().trim();
                                const autorizador_parametro = autorizador_temp.join(":").trim();
                                if (!(autorizador_id in deployer.authorizers)) {
                                    throw new Error(`Autorizador de tabla «${table}» no reconocido: «${autorizador_id}»; en hipersubatributo: «${index_hsa}»`);
                                }
                                const autorizador_funcion = deployer.authorizers[autorizador_id];
                                await autorizador_funcion(request, response, autorizador_parametro);
                                es_valido = true;
                                break Iterando_hipersubatributos;
                            } catch(error) {
                                errores.push(error);
                            }
                        }
                        if (!es_valido) {
                            throw new Error(errores.map(error => `${error.name}: ${error.message}`).join(" | "));
                        }
                    } else {
                        // @NOTHINGISOKAY no hacer nada si no es hiperatributo «tiene_autorizables» con hipersubatributos
                    }
                } else {
                    throw new Error(`Formato de autorizador no reconocido: ${autorizador}`);
                }
            }
            const columnas_coincidentes = tabla_coincidente.composicion.filter(function(componente) {
                return componente.sentencia === "columna";
            });
            Itero_columnas:
            for(let index_columna = 0; index_columna < columnas_coincidentes.length; index_columna++) {
                const columna = columnas_coincidentes[index_columna];
                if(!columna.atributos) {
                    continue Itero_columnas;
                }
                const autorizadores_de_columna = columna.atributos.filter(function(atributo) {
                    return (typeof (atributo) === "string") && atributo.startsWith("tiene_autorizador:");
                });
                Itero_autorizadores_de_columna:
                for(let index_autorizador = 0; index_autorizador < autorizadores_de_columna.length; index_autorizador++) {
                    const autorizador_de_columna = autorizadores_de_columna[index_autorizador];
                    const [ etiqueta, id_autorizador_con_parametros ] = deployer.utilities.obtener_string_partido_en_dos(autorizador_de_columna, ":", true);
                    const [autorizador_id, autorizador_parametros] = deployer.utilities.obtener_string_partido_en_dos(id_autorizador_con_parametros, ":", true);
                    if(!(autorizador_id in deployer.authorizers.columns)) {
                        throw new Error(`Autorizador de columna «${table}.${columna.columna}» no reconocido: «${autorizador_id}»`);
                    }
                    const autorizador_funcion = deployer.authorizers.columns[autorizador_id];
                    await autorizador_funcion(request, response, autorizador_parametros, columna.columna);
                }
            }
            next();
        } catch (error) {
            console.error("Error en «src/utilities/middleware_de_autorizadores.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};