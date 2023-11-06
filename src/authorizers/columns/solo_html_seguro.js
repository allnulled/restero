const Editor_wysiwyg_parser = require(__dirname + "/../../www/files/dependencies/editor-wysiwyg/wysiwyg-parser.js");

module.exports = function (deployer) {
    return async function (request, response, parametro, columna_id) {
        try {
            deployer.utilities.tracear("deployer.authorizers.columns.solo_html_seguro");
            const { operation, table } = request.params;
            if (["insert", "update"].indexOf(operation) === -1) {
                return;
            }
            if (columna_id in request.hql_data.item) {
                try {
                    // Solo asegurarse que sea parseable es suficiente:
                    // Aquí es donde hay que usar la librería: sanitize-html
                    // 
                    request.hql_data.item[columna_id] = require("sanitize-html")(request.hql_data.item[columna_id]);
                    // 
                } catch(error) {
                    throw new Error(`La columna «${columna_id}» requiere de ser escrita para ser HTML seguro por autorizador de columna «solo_html_seguro»`);
                }
            }
        } catch (error) {
            console.error("Error en «src/authorizers/columns/solo_html_seguro.js»");
            console.error(error);
            throw error;
        }
    };
};