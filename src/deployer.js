const fs = require("fs");
const sqlstring = require("sqlstring");
const hql_parser = require(__dirname + "/parsers/hyper-query-language.js");

const main = async function() {
    try {
        const deployer = { fs, sqlstring, hql_parser };
        Cargar_dependencias: {
            deployer.dependencies = await require(__dirname + "/dependencies/index.js")(deployer)();
        }
        Cargar_configuraciones: {
            deployer.configurations = await require(__dirname + "/configurations/index.js")(deployer)();
        }
        Cargar_utilidades: {
            deployer.utilities = await require(__dirname + "/utilities/index.js")(deployer)();
        }
        Cargar_hooks: {
            await require(__dirname + "/hooks/hooks.js")(deployer)();
        }
        await deployer.utilities.gestor_de_hooks.usar_hook("app:iniciar");
        Cargar_controladores: {
            await deployer.utilities.gestor_de_hooks.usar_hook("app:controladores:precargar");
            deployer.controllers = await require(__dirname + "/controllers/index.js")(deployer)();
            await deployer.utilities.gestor_de_hooks.usar_hook("app:controladores:postcargar");
        }
        Cargar_autorizadores: {
            await deployer.utilities.gestor_de_hooks.usar_hook("app:autorizadores:precargar");
            deployer.authorizers = await require(__dirname + "/authorizers/index.js")(deployer)();
            await deployer.utilities.gestor_de_hooks.usar_hook("app:autorizadores:postcargar");
        }
        Desplegar_base_de_datos: {
            await deployer.utilities.gestor_de_hooks.usar_hook("app:base_de_datos:precargar");
            await deployer.utilities.desplegar_base_de_datos();
            await deployer.utilities.gestor_de_hooks.usar_hook("app:base_de_datos:precargar");
        }
        Desplegar_servidor: {
            await deployer.utilities.gestor_de_hooks.usar_hook("app:servidor:precargar");
            await deployer.utilities.desplegar_servidor();
            await deployer.utilities.gestor_de_hooks.usar_hook("app:servidor:precargar");
        }
        await deployer.utilities.gestor_de_hooks.usar_hook("app:iniciada");
        return deployer;
    } catch(error) {
        console.error("Error al desplegar aplicación HQL.");
        console.error(error);
        throw error;
    }
};

module.exports = main();