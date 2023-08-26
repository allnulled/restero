const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const resultados_actuales = JSON.parse(require("fs").readFileSync(__dirname + "/../test.resultados.json").toString());
        for(let index = 0; index < resultados_actuales.length; index++) {
            const resultado = resultados_actuales[index];
            const { test, estado } = resultado;
            if(estado === "OK") {
                log_verde(` [✔] Test «${test}» OK. [nº ${index}]`);
            } else {
                log_rojo(` [✘] Test «${test}» fallido. [nº ${index}]`);
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = main();