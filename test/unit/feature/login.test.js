const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function() {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para login en proceso...");
        const response_de_login = await axios.post("http://127.0.0.1:" + deployer.settings.APP_PORT + "/api/v1/login", {
            nombre: "admin",
            contrasenya: "admin"
        });
        expect(typeof response_de_login.data).to.equal("object");
        expect(typeof response_de_login.data.token_de_sesion_activo).to.equal("string");
        expect(typeof response_de_login.data.token_de_sesion_activo.length).to.equal("number");
        expect(typeof response_de_login.data.autentificacion).to.equal("object");
        expect(typeof response_de_login.data.autentificacion.sesion).to.equal("object");
        expect(typeof response_de_login.data.autentificacion.usuario).to.equal("object");
        expect(typeof response_de_login.data.autentificacion.grupos).to.equal("object");
        expect(typeof response_de_login.data.autentificacion.grupos.length).to.equal("number");
        expect(typeof response_de_login.data.autentificacion.permisos).to.equal("object");
        expect(typeof response_de_login.data.autentificacion.permisos.length).to.equal("number");
        console.log(response_de_login.data.autentificacion);
        log_verde("[✔] Test para login exitoso");
        pasar_test("login.test.js");
        await deployer.utilities.gestor_de_shutdown();
    } catch(error) {
        log_rojo("[✘] Test para login fallido");
        fallar_test("login.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();