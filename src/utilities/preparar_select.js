const operaciones_disponibles = [
    "<","<=",">",">=","=","!=","in","not in","like","not like","null","not null"
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
            const nombres_de_columnas = [];
            for(let index_columnas = 0; index_columnas < datos_de_columnas.length; index_columnas++) {
                const datos_de_columna = datos_de_columnas[index_columnas];
                if(index_columnas !== 0) {
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
                const [subj, op, obj] = regla_where;
                if (nombres_de_columnas.indexOf(subj) === -1) {
                    throw new Error("Columna en cláusula «where» no reconocida: «" + subj + "»");
                }
                sql += "\n  AND ";
                sql += deployer.sqlstring.escapeId(subj);
                if (operaciones_disponibles.indexOf(op) === -1) {
                    throw new Error("Operación en cláusula «where» no reconocida: «" + op + "»");
                }
                sql += " ";
                sql += op;
                sql += " ";
                sql += deployer.sqlstring.escape(obj);
            }
            // @TODO: order by
            // @TODO: limit & offset
            return sql;
        } catch (error) {
            console.error("Error en «src/utilities/preparar_select.js»");
            console.error(error);
            throw error;
        }
    };
};