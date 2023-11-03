const Editor_wysiwyg_parser = require(__dirname + "/../../www/files/dependencies/editor-wysiwyg/wysiwyg-parser.js");

module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.no_modificable");
            const { operation, table } = request.params;
            if (["insert", "update"].indexOf(operation) === -1) {
                return;
            }
            if (columna_id in request.hql_data.item) {
                try {
                    // Solo asegurarse que sea parseable es suficiente:
                    Editor_wysiwyg_parser.parse(request.hql_data.item[columna_id]);
                } catch(error) {
                    throw new Error(`La columna «${columna_id}» requiere de ser escrita para el «editor-wysiwyg-vuejs» pero incumple normas gramaticales. A continuación se especifica el error: ${error.message}`);
                }
            }
        } catch (error) {
            console.error("Error en «src/authorizers/columns/no_modificable.js»");
            console.error(error);
            throw error;
        }
    };
};