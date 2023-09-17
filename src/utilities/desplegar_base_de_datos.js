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
                const migracion_inicial = deployer.fs.readFileSync(__dirname + "/../configurations/db/migrations/migracion.sql").toString();
                const sentencias_de_migracion = migracion_inicial.split(/(^|\n)\-\- Sentencia\:/g).map(sentencia => sentencia.trim()).filter(sentencia => sentencia !== "");
                for(let index_sentencias = 0; index_sentencias < sentencias_de_migracion.length; index_sentencias++) {
                    const sentencia_de_migracion = sentencias_de_migracion[index_sentencias];
                    await conexion.ejecutar(sentencia_de_migracion);
                }
                if(deployer.settings.DB_TEST_MIGRATION === true) {
                    const migracion_de_test = deployer.fs.readFileSync(__dirname + "/../configurations/db/migrations/migracion.test.sql").toString();
                    const sentencias_de_migracion_de_test = migracion_de_test.split(/(^|\n)\-\- Sentencia\:/g).map(sentencia => sentencia.trim()).filter(sentencia => sentencia !== "");
                    for (let index_sentencias = 0; index_sentencias < sentencias_de_migracion_de_test.length; index_sentencias++) {
                        const sentencia_de_migracion_de_test = sentencias_de_migracion_de_test[index_sentencias];
                        await conexion.ejecutar(sentencia_de_migracion_de_test);
                    }
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