const sqlite3 = require("sqlite3");

module.exports = function (deployer) {
    return async function () {
        try {
            if (deployer.db.conexion) {
                return deployer.db.conexion;
            }
            let conexion_bruta = undefined;
            await new Promise(function (ok, fail) {
                conexion_bruta = new sqlite3.Database(__dirname + "/../configurations/db.instancia.sqlite", (error) => {
                    if (error) {
                        return fail(error);
                    }
                    return ok();
                });
            });
            const conexion_neta = {
                nativa: conexion_bruta,
                ejecutar: function (consulta_unica) {
                    return new Promise(function (ok, fail) {
                        try {
                            conexion_bruta.serialize(function () {
                                try {
                                    console.log("[SQL] " + consulta_unica);
                                    conexion_bruta.all(consulta_unica, [], function (error, data) {
                                        if (error) {
                                            console.error(error);
                                            return fail(error);
                                        }
                                        return ok(data);
                                    });
                                } catch (error) {
                                    console.error(error);
                                    return fail(error);
                                }
                            });
                        } catch (error) {
                            return fail(error);
                        }
                    });
                }
            }
            deployer.db.conexion = conexion_neta;
            return conexion_neta;
        } catch (error) {
            console.error("Error en «src/utilities/obtener_conexion_de_base_de_datos.js»");
            console.error(error);
            throw error;
        }
    };
};