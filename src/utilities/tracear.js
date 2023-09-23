module.exports = function (deployer) {
    return function (id_funcion, parametros) {
        if (deployer.settings.APP_TRACES) {
            console.log("[TRACE] " + id_funcion + ( parametros ? ": " + parametros : "" ));
        }
    };
};