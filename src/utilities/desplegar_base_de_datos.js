module.exports = function (deployer) {
    return async function () {
        try {
            const tabla1 = deployer.db.schema[0].tabla;
            if(deployer.settings.DB_RESET === true) {
                deployer.fs.unlinkSync(__dirname + "/../configurations/db.instancia.sqlite");
            }
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            try {
                const resultado = await conexion.ejecutar("select count(*) from " + tabla1 + ";");
                return false;
            } catch(error) {
                for (let index_tabla = 0; index_tabla < deployer.db.schema.length; index_tabla++) {
                    const datos_de_tabla = deployer.db.schema[index_tabla];
                    await conexion.ejecutar(datos_de_tabla.script);
                }
                return true;
            }
        } catch (error) {
            console.error("Error en «src/utilities/desplegar_servidor.js»");
            console.error(error);
            throw error;
        }
    };
};