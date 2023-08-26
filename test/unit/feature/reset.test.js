const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        require("fs").writeFileSync(__dirname + "/../test.resultados.json", "[]", "utf8");
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = main();