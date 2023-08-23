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
            sql += "DELETE FROM ";
            sql += tabla;
            sql += "\nWHERE id = " + deployer.sqlstring.escape(parametros.id);
            return sql;
        } catch (error) {
            console.error("Error en «src/utilities/preparar_delete.js»");
            console.error(error);
            throw error;
        }
    };
};