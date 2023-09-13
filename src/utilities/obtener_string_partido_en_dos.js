module.exports = function (deployer) {
    return function (texto, partidor = ";") {
        const pos = texto.indexOf(partidor);
        const p1 = texto.substr(0, pos);
        const p2 = texto.substr(pos + 1);
        return [p1, p2];
    };
};