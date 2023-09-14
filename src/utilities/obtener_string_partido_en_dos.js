module.exports = function (deployer) {
    return function (texto, partidor = ";", trimear = false) {
        const pos = texto.indexOf(partidor);
        if(pos === -1) {
            if(trimear) {
                return [texto.trim()];
            }
            return [texto];
        }
        let p1 = texto.substr(0, pos);
        let p2 = texto.substr(pos + 1);
        if(trimear) {
            p1 = p1.trim();
            p2 = p2.trim();
        }
        return [p1, p2];
    };
};