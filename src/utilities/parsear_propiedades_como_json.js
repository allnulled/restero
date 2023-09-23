module.exports = function (deployer) {
    return function (objeto) {
        try {
            deployer.utilities.tracear("deployer.utilities.parsear_propiedad_como_json");
            const nuevo_objeto = {};
            for(let prop in objeto) {
                nuevo_objeto[prop] = JSON.parse(objeto[prop]);
            }
            return nuevo_objeto;
        } catch (error) {
            console.error("Error en «src/utilities/parsear_propiedades_como_json.js»");
            console.error(error);
            throw error;
        }
    };
};