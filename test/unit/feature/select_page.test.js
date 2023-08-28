const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para select_page en proceso...");
        const app_url = "http://127.0.0.1:" + deployer.settings.APP_PORT;
        ////////////////////////////////////////////////////////////////////////
        const response_de_login = await axios.post(app_url + "/api/v1/login", {
            nombre: "admin",
            contrasenya: "admin"
        });
        expect(typeof response_de_login.data).to.equal("object");
        expect(typeof response_de_login.data.token_de_sesion_activo).to.equal("string");
        expect(typeof response_de_login.data.token_de_sesion_activo.length).to.equal("number");
        ////////////////////////////////////////////////////////////////////////
        const response_de_insert_comentario_1 = await axios.post(app_url + "/api/v1/insert/Comentario", {
            authorization: response_de_login.data.token_de_sesion_activo,
            comentario: "AAAAA",
        });
        expect(typeof response_de_insert_comentario_1.data).to.equal("object");
        ////////////////////////////////////////////////////////////////////////
        const response_de_insert_comentario_2 = await axios.post(app_url + "/api/v1/insert/Comentario", {
            authorization: response_de_login.data.token_de_sesion_activo,
            comentario: "BBBBB",
        });
        expect(typeof response_de_insert_comentario_2.data).to.equal("object");
        ////////////////////////////////////////////////////////////////////////
        const response_de_select_comentario_1 = await axios.post(app_url + "/api/v1/select/Comentario", {
            authorization: response_de_login.data.token_de_sesion_activo,
            page: 1,
            items: 1
        });
        console.log(response_de_select_comentario_1.data.resultado);
        expect(typeof response_de_select_comentario_1.data).to.equal("object");
        expect(typeof response_de_select_comentario_1.data.resultado).to.equal("object");
        expect(typeof response_de_select_comentario_1.data.resultado.length).to.equal("number");
        Los_desordena_segun_la_columna_comentario_descendentemente: {
            expect(response_de_select_comentario_1.data.resultado.length).to.equal(1);
            expect(response_de_select_comentario_1.data.resultado[0].comentario).to.equal("AAAAA");
        }
        ////////////////////////////////////////////////////////////////////////
        const response_de_select_comentario_2 = await axios.post(app_url + "/api/v1/select/Comentario", {
            authorization: response_de_login.data.token_de_sesion_activo,
            page: 2,
            items: 1
        });
        console.log(response_de_select_comentario_2.data.resultado);
        expect(typeof response_de_select_comentario_2.data).to.equal("object");
        expect(typeof response_de_select_comentario_2.data.resultado).to.equal("object");
        expect(typeof response_de_select_comentario_2.data.resultado.length).to.equal("number");
        Los_desordena_segun_la_columna_comentario_descendentemente: {
            expect(response_de_select_comentario_2.data.resultado.length).to.equal(1);
            expect(response_de_select_comentario_2.data.resultado[0].comentario).to.equal("BBBBB");
        }
        ////////////////////////////////////////////////////////////////////////
        log_verde("[✔] Test para select_page exitoso");
        pasar_test("select_page.test.js");
        deployer.utilities.gestor_de_shutdown();
    } catch (error) {
        log_rojo("[✘] Test para select_page fallido");
        fallar_test("select_page.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();