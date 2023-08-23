module.exports = function (deployer) {
    return function (tabla, parametros) {
        try {
            let sql = "";
            const tabla_coincidente = deployer.db.schema.filter(function (datos_de_tabla) {
                return tabla === datos_de_tabla.tabla
            })[0];
            if (typeof tabla_coincidente === "undefined") {
                throw new Error("Tipo de dato no reconocido: «" + tabla + "»");
            }
            sql += "INSERT INTO ";
            sql += tabla;
            sql += " (";
            let index_columnas_1 = 0;
            console.log(parametros.item);
            for(let columna in parametros.item) {
                if (index_columnas_1 !== 0) {
                    sql += ","
                }
                sql += "\n  ";
                sql += deployer.sqlstring.escapeId(columna);
                index_columnas_1++;
            }
            sql += "\n)";
            sql += "\nVALUES (";
            let index_columnas_2 = 0;
            for (let columna in parametros.item) {
                const columna_valor = parametros.item[columna];
                if (index_columnas_2 !== 0) {
                    sql += ","
                }
                sql += "\n  ";
                sql += deployer.sqlstring.escape(columna_valor);
                index_columnas_2++;
            }
            sql += "\n)";
            return sql;
        } catch (error) {
            console.error("Error en «src/utilities/preparar_insert.js»");
            console.error(error);
            throw error;
        }
    };
};