const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo, pasar_test, fallar_test } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const deployer = await require(__dirname + "/../../../src/deployer.js");
        log_verde("[...] Test para no_visibles_columnas en proceso...");
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
            sentido: "si",
            declaracion: "Una declaración",
            notas: "Una nota"
        });
        expect(typeof response_de_insert_voto.data).to.equal("object");
        
        const response_de_select_voto = await axios.post(app_url + "/api/v1/select/Voto", {
            authorization: response_de_login.data.token_de_sesion_activo,
        });
        console.log(response_de_select_voto.data.resultado);
        expect(typeof response_de_select_voto.data).to.equal("object");
        expect(response_de_select_voto.data.resultado[0].id_usuario).to.equal(1);
        Los_campos_invisibilizados_no_aparecen: {
            expect(typeof response_de_select_voto.data.resultado[0].declaracion).to.equal("undefined");
            expect(typeof response_de_select_voto.data.resultado[0].notas).to.equal("undefined");
        }
        
        log_verde("[✔] Test para no_visibles_columnas exitoso");
        pasar_test("no_visibles_columnas.test.js");
        deployer.utilities.gestor_de_shutdown();
    } catch (error) {
        log_rojo("[✘] Test para no_visibles_columnas fallido");
        fallar_test("no_visibles_columnas.test.js");
        console.log(error);
        throw error;
    }
};

module.exports = main();