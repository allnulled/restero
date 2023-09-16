module.exports = function (deployer) {
    return async function (datos_masivos) {
        try {
            const conexion = await deployer.utilities.obtener_conexion_de_base_de_datos();
            const esquema = deployer.db.schema;
            const errores = [];
            for(let index_hoja = 0; index_hoja < datos_masivos.length; index_hoja++) {
                const hoja = datos_masivos[index_hoja];
                const { titulo, datos } = hoja;
                const tablas_coincidentes = esquema.filter(tabla => tabla.tabla === titulo);
                if(tablas_coincidentes.length === 0) {
                    throw new Error(`No se identificó tabla «${titulo}» para importar datos masivos`);
                }
                const tabla = tablas_coincidentes[0];
                for(let index_fila = 0; index_fila < datos.length; index_fila++) {
                    const fila = datos[index_fila];
                    const consulta_de_insertar_fila = deployer.utilities.preparar_insert(titulo, {
                        item: fila
                    });
                    try {
                        await conexion.ejecutar(consulta_de_insertar_fila);
                    } catch(error) {
                        errores.push(error);
                        console.log(error);
                    }
                }
            }
            return errores;
        } catch (error) {
            console.error("Error en «src/utilities/importar_datos_masivos.js»");
            console.error(error);
            throw error;
        }
    };
};