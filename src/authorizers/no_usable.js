module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            throw new Error("Operación no permitida por «no_usable»");
        } catch (error) {
            console.error("Error en «src/authorizers/no_usable.js»");
            console.error(error);
            throw error;
        }
    };
};