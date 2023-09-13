const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para «incluir» en proceso...");
        const app_url = "http://127.0.0.1:" + deployer.settings.APP_PORT;
        Como_admin_puede: {
            const response_de_login = await axios.post(app_url + "/api/v1/login", {
                nombre: "admin",
                contrasenya: "admin"
            });
            expect(typeof response_de_login.data).to.equal("object");
            expect(typeof response_de_login.data.token_de_sesion_activo).to.equal("string");
            expect(typeof response_de_login.data.token_de_sesion_activo.length).to.equal("number");
            const response_de_insert_pulsion_1 = await axios.post(app_url + "/api/v1/insert/Pulsion_democratica", {
                authorization: response_de_login.data.token_de_sesion_activo,
            });
            expect(response_de_insert_pulsion_1.data.operation).to.equal("insert");
            expect(response_de_insert_pulsion_1.data.table).to.equal("Pulsion_democratica");
        }
        Como_noadmin_no_puede: {
            const response_de_login_2 = await axios.post(app_url + "/api/v1/login", {
                nombre: "noadmin",
                contrasenya: "noadmin"
            });
            expect(typeof response_de_login_2.data).to.equal("object");
            expect(typeof response_de_login_2.data.token_de_sesion_activo).to.equal("string");
            expect(typeof response_de_login_2.data.token_de_sesion_activo.length).to.equal("number");
            const response_de_insert_pulsion_2 = await axios.post(app_url + "/api/v1/insert/Pulsion_democratica", {
                authorization: response_de_login_2.data.token_de_sesion_activo,
            });
            expect(response_de_insert_pulsion_2.data.error).to.equal(true);
        }
        log_verde("[✔] Test para «incluir» exitoso");
        pasar_test("incluir.test.js");
        deployer.utilities.gestor_de_shutdown();
    } catch (error) {
        log_rojo("[✘] Test para incluir fallido");
        fallar_test("incluir.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();