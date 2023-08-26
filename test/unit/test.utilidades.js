const cli_color = require("cli-color");

module.exports = {
    log_verde: function(msg, ...args) {
        console.log(cli_color.bold.greenBright(msg), ...args);
    },
    log_rojo: function (msg, ...args) {
        console.log(cli_color.bold.redBright(msg), ...args);
    },
    pasar_test: function (test) {
        const resultados_actuales_json = require("fs").readFileSync(__dirname + "/test.resultados.json").toString();
        const resultados_actuales = JSON.parse(resultados_actuales_json);
        resultados_actuales.push({
            test,
            estado: "OK"
        });
        require("fs").writeFileSync(__dirname + "/test.resultados.json", JSON.stringify(resultados_actuales), "utf8");
    },
    fallar_test: function (test) {
        const resultados_actuales_json = require("fs").readFileSync(__dirname + "/test.resultados.json").toString();
        const resultados_actuales = JSON.parse(resultados_actuales_json);
        resultados_actuales.push({
            test,
            estado: "FALLADO"
        });
        require("fs").writeFileSync(__dirname + "/test.resultados.json", JSON.stringify(resultados_actuales), "utf8");
    }
};