const fs = require("fs");
const sqlstring = require("sqlstring");
const hql_parser = require(__dirname + "/parsers/h-query-language.js");

const main = async function() {
    try {
        const deployer = { fs, sqlstring, hql_parser };
        Cargar_configuraciones: {
            deployer.configurations = await require(__dirname + "/configurations/index.js")(deployer)();
        }
        Cargar_utilidades: {
            deployer.utilities = await require(__dirname + "/utilities/index.js")(deployer)();
        }
        Cargar_controladores: {
            deployer.controllers = await require(__dirname + "/controllers/index.js")(deployer)();
        }
        Cargar_autorizadores: {
            deployer.authorizers = await require(__dirname + "/authorizers/index.js")(deployer)();
        }
        Desplegar_base_de_datos: {
            await deployer.utilities.desplegar_base_de_datos();
        }
        Desplegar_servidor: {
            await deployer.utilities.desplegar_servidor();
        }
        return deployer;
    } catch(error) {
        console.error("Error al desplegar aplicación HQL.");
        console.error(error);
        throw error;
    }
};

module.exports = main();