module.exports = function (deployer) {
    return function (request, parametro, valor_por_defecto = undefined) {
        try {
            if(request.params && (parametro in request.params)) {
                return request.params[parametro];
            }
            if(request.body && (parametro in request.body)) {
                return request.body[parametro];
            }
            if(request.query && (parametro in request.query)) {
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