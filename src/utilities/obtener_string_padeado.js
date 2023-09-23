module.exports = function (deployer) {
    return function (texto, longitud = 2, pad = '0', izq = true) {
        deployer.utilities.tracear("deployer.utilities.obtener_string_padeado");
        let texto_2 = "" + texto;
        while(texto_2.length < longitud) {
            if(izq) {
                texto_2 = pad + texto_2;
            } else {
                texto_2 = texto_2 + pad;
            }
        }
        return texto_2;
    };
};