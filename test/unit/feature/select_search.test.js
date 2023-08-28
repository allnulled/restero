const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para select_search en proceso...");
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
        const response_de_select_comentario = await axios.post(app_url + "/api/v1/select/Comentario", {
            authorization: response_de_login.data.token_de_sesion_activo,
            search: "BBBBB"
        });
        console.log(response_de_select_comentario.data.resultado);
        expect(typeof response_de_select_comentario.data).to.equal("object");
        expect(typeof response_de_select_comentario.data.resultado).to.equal("object");
        expect(typeof response_de_select_comentario.data.resultado.length).to.equal("number");
        Solo_encuentra_el_comentario_que_contiene_el_string_del_search: {
            expect(response_de_select_comentario.data.resultado.length).to.equal(1);
        }
        ////////////////////////////////////////////////////////////////////////
        log_verde("[✔] Test para select_search exitoso");
        pasar_test("select_search.test.js");
        deployer.utilities.gestor_de_shutdown();
    } catch (error) {
        log_rojo("[✘] Test para select_search fallido");
        fallar_test("select_search.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();