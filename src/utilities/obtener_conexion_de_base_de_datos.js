const sqlite3 = require("sqlite3");

module.exports = function (deployer) {
    return async function () {
        try {
            deployer.utilities.tracear("deployer.utilities.obtener_conexion_de_base_de_datos");
            if (deployer.db.conexion) {
                return deployer.db.conexion;
            }
            let conexion_neta = undefined;
            if (deployer.settings.DB_DRIVER === "sqlite") {
                let conexion_bruta = undefined;
                await new Promise(function (ok, fail) {
                    conexion_bruta = new sqlite3.Database(__dirname + "/../configurations/db.instancia.sqlite", function (error) {
                        if (error) {
                            return fail(error);
                        }
                        return ok();
                    });
                });
                conexion_neta = {
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
            } else if (deployer.settings.DB_DRIVER === "mysql") {
                let conexion_bruta = undefined;
                const mysql2 = require("mysql2/promise");
                conexion_bruta = await mysql2.createConnection({
                    host: deployer.settings.DB_HOST,
                    port: deployer.settings.DB_PORT,
                    user: deployer.settings.DB_USER,
                    password: deployer.settings.DB_PASSWORD,
                    database: deployer.settings.DB_NAME
                });
                conexion_neta = {
                    nativa: conexion_bruta,
                    ejecutar: function(consulta_unica) {
                        return new Promise(function (ok, fail) {
                            conexion_bruta.query(consulta_unica).then(function(data) {
                                if(Array.isArray(data)) {
                                    return ok(data[0]);
                                }
                                return ok(data);
                            }).catch(function(error) {
                                console.error(error);
                                return fail(error);
                            });
                        });
                    }
                }
                deployer.db.conexion = conexion_neta;
            } else {
                throw new Error("Configuración «settings.DB_DRIVER» debe ser uno entre: «sqlite» o «mysql» para funcionar «deployer.utilities.obtener_conexion_de_base_de_datos»");
            }
            return conexion_neta;
        } catch (error) {
            console.error("Error en «src/utilities/obtener_conexion_de_base_de_datos.js»");
            console.error(error);
            throw error;
        }
    };
};