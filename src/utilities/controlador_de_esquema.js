module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.utilities.controlador_de_esquema");
            const esquema = [].concat(deployer.db.schema);
            for(let index_tablas = 0; index_tablas < esquema.length; index_tablas++) {
                delete esquema[index_tablas].script;
            }
            return response.json({
                esquema
            })
        } catch (error) {
            console.error("Error en «src/controllers/shutdown.js»");
            console.error(error);
            throw error;
        }
    };
};