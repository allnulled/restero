module.exports = function(deployer) {
    return function (fichero_excel) {
        deployer.utilities.tracear("deployer.utilities.leer_fichero_excel");
        const reader = require("xlsx");
        const file = reader.readFile(fichero_excel);
        const sheets = file.SheetNames;
        const importaciones = [];
        for (let i = 0; i < sheets.length; i++) {
            const sheet_name = file.SheetNames[i];
            const sheet = file.Sheets[sheet_name];
            const sheet_data = reader.utils.sheet_to_json(sheet);
            importaciones.push({
                titulo: sheet_name,
                datos: sheet_data
            });
        }
        return importaciones;
    }
}