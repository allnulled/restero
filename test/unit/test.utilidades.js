const cli_color = require("cli-color");

module.exports = {
    log_verde: function(msg, ...args) {
        console.log(cli_color.bold.greenBright(msg), ...args);
    },
    log_rojo: function (msg, ...args) {
        console.log(cli_color.bold.redBright(msg), ...args);
    },
    pasar_test: function (test) {
        const datos_de_tests_json = require("fs").readFileSync(__dirname + "/test.resultados.json").toString();
        const datos_de_tests = JSON.parse(datos_de_tests_json);
        datos_de_tests.tests.push({
            test,
            estado: "OK"
        });
        require("fs").writeFileSync(__dirname + "/test.resultados.json", JSON.stringify(datos_de_tests), "utf8");
    },
    fallar_test: function (test) {
        const datos_de_tests_json = require("fs").readFileSync(__dirname + "/test.resultados.json").toString();
        const datos_de_tests = JSON.parse(datos_de_tests_json);
        datos_de_tests.tests.push({
            test,
            estado: "FALLADO"
        });
        require("fs").writeFileSync(__dirname + "/test.resultados.json", JSON.stringify(datos_de_tests), "utf8");
    }
};