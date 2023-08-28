const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const datos_de_tests = {
            inicio: (new Date()).toString(),
            tests: []
        };
        require("fs").writeFileSync(__dirname + "/../test.resultados.json", JSON.stringify(datos_de_tests), "utf8");
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = main();