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
            sql += "UPDATE ";
            sql += tabla;
            sql += " SET";
            let index_columnas_1 = 0;
            console.log(parametros.item);
            Columnas_del_update:
            for (let columna in parametros.item) {
                if(columna === "id") {
                    continue Columnas_del_update;
                }
                const columna_valor = parametros.item[columna];
                if(columna_valor === null) {
                    continue Columnas_del_update;
                }
                if (columna_valor === undefined) {
                    continue Columnas_del_update;
                }
                if (index_columnas_1 !== 0) {
                    sql += ","
                }
                sql += "\n  ";
                sql += deployer.sqlstring.escapeId(columna);
                sql += " = ";
                sql += deployer.sqlstring.escape(columna_valor);
                index_columnas_1++;
            }
            sql += "\nWHERE id = " + deployer.sqlstring.escape(parametros.id);
            return sql;
        } catch (error) {
            console.error("Error en «src/utilities/preparar_update.js»");
            console.error(error);
            throw error;
        }
    };
};