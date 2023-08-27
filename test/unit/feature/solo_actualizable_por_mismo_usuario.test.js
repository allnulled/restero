const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para solo_actualizable_por_mismo_usuario en proceso...");
        const app_url = "http://127.0.0.1:" + deployer.settings.APP_PORT;
        const response_de_login = await axios.post(app_url + "/api/v1/login", {
            nombre: "admin",
            contrasenya: "admin"
        });
        expect(typeof response_de_login.data).to.equal("object");
        expect(typeof response_de_login.data.token_de_sesion_activo).to.equal("string");
        expect(typeof response_de_login.data.token_de_sesion_activo.length).to.equal("number");
        const response_de_insert_voto = await axios.post(app_url + "/api/v1/insert/Voto", {
            authorization: response_de_login.data.token_de_sesion_activo,
            sentido: "si"
        });
        expect(typeof response_de_insert_voto.data).to.equal("object");
        const response_de_select_voto = await axios.post(app_url + "/api/v1/select/Voto", {
            authorization: response_de_login.data.token_de_sesion_activo,
        });
        console.log(response_de_select_voto.data.resultado);
        expect(typeof response_de_select_voto.data).to.equal("object");
        expect(response_de_select_voto.data.resultado[0].id_usuario).to.equal(1);
        console.log(response_de_select_voto.data.resultado[0]);
        const response_de_update_voto = await axios.post(app_url + "/api/v1/update/Voto", {
            authorization: response_de_login.data.token_de_sesion_activo,
            id: response_de_select_voto.data.resultado[0].id,
            sentido: "no"
        });
        expect(typeof response_de_update_voto.data).to.equal("object");
        const response_de_select_voto_2 = await axios.post(app_url + "/api/v1/select/Voto", {
            authorization: response_de_login.data.token_de_sesion_activo,
        });
        expect(typeof response_de_select_voto_2.data).to.equal("object");
        expect(response_de_select_voto_2.data.resultado[0].id_usuario).to.equal(1);
        expect(response_de_select_voto_2.data.resultado[0].sentido).to.equal("no");
        const response_de_login_2 = await axios.post(app_url + "/api/v1/login", {
            nombre: "noadmin",
            contrasenya: "noadmin"
        });
        console.log(response_de_select_voto_2.data.resultado);
        expect(typeof response_de_login_2.data).to.equal("object");
        expect(typeof response_de_login_2.data.token_de_sesion_activo).to.equal("string");
        expect(typeof response_de_login_2.data.token_de_sesion_activo.length).to.equal("number");
        const response_de_update_voto_2 = await axios.post(app_url + "/api/v1/update/Voto", {
            authorization: response_de_login_2.data.token_de_sesion_activo,
            id: response_de_select_voto.data.resultado[0].id,
            sentido: "si"
        });
        expect(typeof response_de_update_voto_2.data).to.equal("object");
        const response_de_select_voto_3 = await axios.post(app_url + "/api/v1/select/Voto", {
            authorization: response_de_login.data.token_de_sesion_activo,
        });
        expect(typeof response_de_select_voto_3.data).to.equal("object");
        console.log(response_de_select_voto_3.data.resultado);
        expect(response_de_select_voto_3.data.resultado[0].id_usuario).to.equal(1);
        // El último update no afectó al estado del objeto 
        // porque no provino del usuario que hizo el insert:
        expect(response_de_select_voto_3.data.resultado[0].sentido).to.equal("no");
        log_verde("[✔] Test para solo_actualizable_por_mismo_usuario exitoso");
        pasar_test("solo_actualizable_por_mismo_usuario.test.js");
        deployer.utilities.gestor_de_shutdown();
    } catch (error) {
        log_rojo("[✘] Test para solo_actualizable_por_mismo_usuario fallido");
        fallar_test("solo_actualizable_por_mismo_usuario.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();