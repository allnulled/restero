module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.authorizers.solo_modificable_por_mismo_usuario");
            const { operation } = request.params;
            if (operation === "insert") {
                return deployer.utilities.solo_insertable_por_mismo_usuario(request, response, parametro);
            } else if (operation === "update") {
                return deployer.utilities.solo_actualizable_por_mismo_usuario(request, response, parametro);
            } else if (operation === "delete") {
                return deployer.utilities.solo_eliminable_por_mismo_usuario(request, response, parametro);
            }
        } catch (error) {
            console.error("Error en «src/authorizers/solo_insertable_por_mismo_usuario.js»");
            console.error(error);
            throw error;
        }
    };
};