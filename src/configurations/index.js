module.exports = function(deployer) {
    return async function() {
        try {
            deployer.db = {};
            let environment = "default";
            if(process.env.NODE_ENV) {
                environment = process.env.NODE_ENV.toLowerCase();
            }
            deployer.settings = require(__dirname + `/settings.${environment}.json`);
            Generar_base_de_datos_via_plantillas: {
                const ejs = require("ejs");
                const fs = require("fs");
                const plantilla_padre = __dirname + "/db/db.ejs.sql";
                if(!fs.existsSync(plantilla_padre)) {
                    break Generar_base_de_datos_via_plantillas;
                }
                const db_ejs = fs.readFileSync(plantilla_padre).toString();
                const output = await ejs.render(db_ejs, { deployer }, { root: __dirname });
                if (output.trim().length === 0) {
                    break Generar_base_de_datos_via_plantillas;
                }
                fs.writeFileSync(__dirname + "/db.sql", output, "utf8");
            }
            const db_contents = deployer.fs.readFileSync(__dirname + "/db.sql").toString();
            deployer.db.schema = deployer.hql_parser.parse(db_contents);
            deployer.fs.writeFileSync(__dirname + "/db.sql.json", JSON.stringify(deployer.db.schema, null, 4), "utf8");
        } catch(error) {
            console.error("Error en «src/configurations/index.js»");
            console.error(error);
            throw error;
        }
    };
};