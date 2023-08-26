module.exports = function (deployer) {
    return function () {
        try {
            for(let index = 0; index < 5; index++) {
                deployer.server.close();
                deployer.db.conexion.nativa.close();
            }
        } catch (error) {
            console.error("Error en «src/utilities/gestor_de_shutdown.js»");
            console.error(error);
            throw error;
        }
    };
};