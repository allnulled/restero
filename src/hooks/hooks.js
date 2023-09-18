module.exports = function (deployer) {
    return async function () {
        try {
            deployer.utilities.gestor_de_hooks.agregar_hook("app:iniciada", function() {
                console.log("app.iniciada ok!");
            });
        } catch (error) {
            console.error("Error en «src/hooks/hooks.js»");
            console.error(error);
            throw error;
        }
    };
};