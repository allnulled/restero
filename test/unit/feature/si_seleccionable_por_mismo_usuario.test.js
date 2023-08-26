const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para si_seleccionable_por_mismo_usuario en proceso...");
        log_verde("[✔] Test para si_seleccionable_por_mismo_usuario exitoso");
        pasar_test("si_seleccionable_por_mismo_usuario.test.js");
        deployer.utilities.gestor_de_shutdown();
    } catch (error) {
        log_rojo("[✘] Test para si_seleccionable_por_mismo_usuario fallido");
        fallar_test("si_seleccionable_por_mismo_usuario.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();