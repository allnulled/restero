module.exports = function (deployer) {
    return function (request, parametro, valor_por_defecto = undefined) {
        try {
            if(request.body && request.body[parametro]) {
                return request.body[parametro];
            }
            if(parametro in request.query) {
                return request.query[parametro];
            }
            return valor_por_defecto;
        } catch (error) {
            console.error("Error en «src/utilities/obtener_parametro.js»");
            console.error(error);
            throw error;
        }
    };
};