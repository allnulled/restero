module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.espera_segundos");
            await new Promise((ok, fail) => {
                setTimeout(function() {
                    ok();
                }, parseInt(parametro));
            });
        } catch (error) {
            console.error("Error en «src/authorizers/espera_segundos.js»");
            console.error(error);
            throw error;
        }
    };
};