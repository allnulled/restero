module.exports = function (deployer) {
    return async function () {
        try {
            deployer.utilities.gestor_de_hooks.agregar_hook("app:iniciada", function() {
                process.exit(0);
            });
        } catch (error) {
            console.error("Error en «src/hooks/hooks.js»");
            console.error(error);
            throw error;
        }
    };
};