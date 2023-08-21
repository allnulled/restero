const fs = require("fs");
const hql_parser = require(__dirname + "/h-query-language.js");

const main = async function() {
    try {
        const deployer = { fs, hql_parser };
        Cargar_configuraciones: {
            deployer.configurations = await require(__dirname + "/configurations/index.js")(deployer)();
        }
        Cargar_utilidades: {
            deployer.utilities = await require(__dirname + "/utilities/index.js")(deployer)();
        }
        Cargar_controladores: {
            deployer.controllers = await require(__dirname + "/controllers/index.js")(deployer)();
        }
        Desplegar_servidor: {
            deployer.utilities.desplegar_servidor();
        }
        return deployer;
    } catch(error) {
        console.error("Error al desplegar aplicación HQL.");
        console.error(error);
        throw error;
    }
};

module.exports = main();