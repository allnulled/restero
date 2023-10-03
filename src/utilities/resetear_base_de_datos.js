module.exports = function (deployer) {
    return async function (tabla, parametros) {
        try {
            deployer.utilities.tracear("deployer.utilities.resetear_base_de_datos");
            if (deployer.settings.DB_DRIVER === "sqlite") {
                try {
                    deployer.fs.unlinkSync(__dirname + "/../configurations/db.instancia.sqlite");
                } catch(error) {
                    // @OK
                }
            } else if(deployer.settings.DB_DRIVER === "mysql") {
                const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
                await conexion.ejecutar("DROP DATABASE IF EXISTS " + deployer.settings.DB_NAME);
                await conexion.ejecutar("CREATE DATABASE " + deployer.settings.DB_NAME);
                await conexion.ejecutar("USE " + deployer.settings.DB_NAME);
            } else {
                throw new Error("Configuración «settings.DB_DRIVER» debe ser uno entre: «sqlite» o «mysql» para funcionar «deployer.utilities.resetear_base_de_datos»");
            }
        } catch (error) {
            console.error("Error en «src/utilities/resetear_base_de_datos.js»");
            console.error(error);
            throw error;
        }
    };
};