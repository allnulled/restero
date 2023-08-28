const axios = require("axios");
const { expect } = require("chai");
const { log_verde, log_rojo } = require(__dirname + "/../test.utilidades.js");

const main = async function () {
    try {
        const resultados_actuales = JSON.parse(require("fs").readFileSync(__dirname + "/../test.resultados.json").toString());
        const spaces_max = `|-------|---------|----------------------------------------------------------+`;
        log_verde(`+-------+---------+----+`);
        log_verde(`| STATE |  ORDER  | ID |`);
        log_verde(spaces_max);
        for(let index = 0; index < resultados_actuales.length; index++) {
            const resultado = resultados_actuales[index];
            const { test, estado } = resultado;
            const spaces = index < 10 ? "000" : index < 100 ? "00" : index < 1000 ? "0" : "";
            if(estado === "OK") {
                let msg = `|  [✔]  | nº ${spaces}${index} | Test «${test}».`;
                const spaces_final = spaces_max.length - msg.length;
                for(let index_spaces_final = 1; index_spaces_final < spaces_final; index_spaces_final++) {
                    msg += " "
                }
                msg += "|";
                log_verde(msg);
            } else {
                let msg = `|  [✘]  | nº ${spaces}${index} | Test «${test}».`;
                const spaces_final = spaces_max.length - msg.length;
                for (let index_spaces_final = 1; index_spaces_final < spaces_final; index_spaces_final++) {
                    msg += " "
                }
                msg += "|";
                log_rojo(msg);
            }
        }
        log_verde(`+-------+---------+----------------------------------------------------------+`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = main();