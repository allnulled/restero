module.exports = function (deployer) {
    return function (response, error) {
        deployer.utilities.tracear("deployer.utilities.gestor_de_error_de_peticion");
        return response.json({
            error: true,
            type: error.name,
            message: error.message,
            stack: error.stack,
        });
    };
};