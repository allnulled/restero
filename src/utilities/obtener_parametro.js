module.exports = function (deployer) {
    return function (request, parametro) {
        try {
            if(request.body && request.body[parametro]) {
                return request.body[parametro];
            }
            return request.query[parametro];
        } catch (error) {
            console.error("Error en «src/utilities/obtener_parametro.js»");
            console.error(error);
            throw error;
        }
    };
};