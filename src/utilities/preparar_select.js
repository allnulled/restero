const operaciones_disponibles = [
    "<","<=",">",">=","=","!=","in","not in","like","not like","is null","is not null"
]

module.exports = function (deployer) {
    return function (tabla, parametros) {
        try {
            let sql = "";
            sql += "SELECT";
            const tabla_coincidente = deployer.db.schema.filter(function(datos_de_tabla) {
                return tabla === datos_de_tabla.tabla
            })[0];
            if(typeof tabla_coincidente === "undefined") {
                throw new Error("Tipo de dato no reconocido: «" + tabla + "»");
            }
            const datos_de_columnas = tabla_coincidente.composicion.filter(function(datos_de_columna) {
                return datos_de_columna.sentencia === "columna";
            });
            const atributos_de_columnas_no_visibles = tabla_coincidente.atributos.filter(function(atributo) {
                return atributo.startsWith("no_visibles_columnas:");
            });
            const columnas_no_visibles = [];
            for(let index_atributos_columnas_no_visibles = 0; index_atributos_columnas_no_visibles < atributos_de_columnas_no_visibles.length; index_atributos_columnas_no_visibles++) {
                const atributo_de_columna_no_visible = atributos_de_columnas_no_visibles[index_atributos_columnas_no_visibles];
                const tmp1 = atributo_de_columna_no_visible.split(":");
                tmp1.shift();
                const columnas_no_visibles_concretas = tmp1.join(":").split(",");
                for(let index_columnas_concretas = 0; index_columnas_concretas < columnas_no_visibles_concretas.length; index_columnas_concretas++) {
                    const columna_concreta = columnas_no_visibles_concretas[index_columnas_concretas];
                    columnas_no_visibles.push(columna_concreta.trim());
                }
            }
            const nombres_de_columnas = [];
            Seleccionando_los_campos:
            for(let index_columnas = 0; index_columnas < datos_de_columnas.length; index_columnas++) {
                const datos_de_columna = datos_de_columnas[index_columnas];
                if(columnas_no_visibles.indexOf(datos_de_columna.columna) !== -1) {
                    continue Seleccionando_los_campos;
                }
                if (nombres_de_columnas.length !== 0) {
                    sql += ",";
                }
                sql += "\n  " + deployer.sqlstring.escapeId(datos_de_columna.columna);
                nombres_de_columnas.push(datos_de_columna.columna);
            }
            sql += "\nFROM ";
            sql += tabla;
            sql += "\nWHERE 1 = 1";
            const reglas_where = parametros.where;
            for(let index_where = 0; index_where < reglas_where.length; index_where++) {
                const regla_where = reglas_where[index_where];
                const [subj, op_crude, obj] = regla_where;
                const op = op_crude.toLowerCase();
                if (nombres_de_columnas.indexOf(subj) === -1) {
                    throw new Error("Columna en cláusula «where» no reconocida: «" + subj + "»");
                }
                sql += "\n  AND ";
                sql += deployer.sqlstring.escapeId(subj);
                if (operaciones_disponibles.indexOf(op) === -1) {
                    throw new Error("Operación en cláusula «where» no reconocida: «" + op + "»");
                }
                sql += " ";
                if (["in", "not in"].indexOf(op) !== -1) {
                    sql += op.toUpperCase();
                    const obj_split = obj.split(";");
                    if(obj_split.length === 0) {
                        throw new Error(`Se requieren ítems en el objeto de la regla «where» que usa «${op.toUpperCase()}» en índice «${index_where}» con columna «${subj}»`)
                    }
                    sql += " (";
                    for(let index_obj = 0; index_obj < obj_split.length; index_obj++) {
                        const obj_item = obj_split[index_obj];
                        if(index_obj !== 0) {
                            sql += ", "
                        }
                        sql += deployer.sqlstring.escape(obj_item);
                    }
                    sql += ")";
                } else if (["is null", "is not null"].indexOf(op) !== -1) {
                    sql += op;
                } else {
                    sql += op;
                    sql += " ";
                    sql += deployer.sqlstring.escape(obj);
                }
            }
            if(parametros.search) {
                sql += "\n  AND (";
                for(let index_columnas_participes = 0; index_columnas_participes < nombres_de_columnas.length; index_columnas_participes++) {
                    const nombre_de_columna = nombres_de_columnas[index_columnas_participes];
                    sql += "\n    ";
                    if (index_columnas_participes !== 0) {
                        sql += "OR ";
                    } else {
                        sql += "   ";
                    }
                    sql += nombre_de_columna + " LIKE " + deployer.sqlstring.escape("%" + parametros.search + "%");
                }
                sql += "\n  )";
            }
            if (parametros.order) {
                for(let index_order_rules = 0; index_order_rules < parametros.order.length; index_order_rules++) {
                    const regla_order = parametros.order[index_order_rules];
                    const [ columna, sentido ] = regla_order;
                    if(nombres_de_columnas.indexOf(columna) === -1) {
                        throw new Error("Columna no reconocida para ordenar por ella: «" + columna + "»");
                    }
                    if(["asc","desc"].indexOf(sentido.toLowerCase()) === -1) {
                        throw new Error("Sentido de ordenación no reconocido para ordenar: «" + sentido + "»");
                    }
                    if(index_order_rules === 0) {
                        sql += "\nORDER BY ";
                        sql += deployer.sqlstring.escapeId(columna);
                        sql += " ";
                        sql += sentido.toUpperCase();
                    } else {
                        sql += ", ";
                        sql += deployer.sqlstring.escapeId(columna);
                        sql += " ";
                        sql += sentido.toUpperCase();
                    }
                }
            }
            if(!parametros.items) {
                parametros.items = 20;
            }
            if(!parametros.page) {
                parametros.page = 1;
            }
            if(parametros.items && parametros.page) {
                const limit = parametros.items;
                const offset = parametros.items * (parametros.page - 1);
                sql += `\nLIMIT ${limit}`;
                sql += `\nOFFSET ${offset}`;
            }
            return sql;
        } catch (error) {
            console.error("Error en «src/utilities/preparar_select.js»");
            console.error(error);
            throw error;
        }
    };
};