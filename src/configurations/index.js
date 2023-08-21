module.exports = function(deployer) {
    return async function() {
        try {
            deployer.db = {};
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