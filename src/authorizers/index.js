module.exports = function (deployer) {
    return async function () {
        try {
            const authorizers = {};
            deployer.authorizers = authorizers;
            const filenames = deployer.fs.readdirSync(__dirname).filter(file => ((file !== "index.js") && (file !== "columns")));
            for (let index = 0; index < filenames.length; index++) {
                const filename = filenames[index];
                try {
                    const authorizer = await require(__dirname + "/" + filename)(deployer);
                    authorizers[filename.replace(/\.js$/g, "")] = authorizer;
                } catch (error) {
                    console.error(`Error cargando «src/authorizers/${filename}»`);
                    console.error(error);
                    throw error;
                }
            }
            authorizers.columns = {};
            const filenames_for_columns = deployer.fs.readdirSync(__dirname + "/columns");
            for (let index = 0; index < filenames_for_columns.length; index++) {
                const filename = filenames_for_columns[index];
                const authorizer = await require(__dirname + "/columns/" + filename)(deployer);
                authorizers.columns[filename.replace(/\.js$/g, "")] = authorizer;
            }
            return authorizers;
        } catch (error) {
            console.error("Error en «src/authorizers/index.js»");
            console.error(error);
            throw error;
        }
    };
};