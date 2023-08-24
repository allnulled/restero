module.exports = function (deployer) {
    return async function () {
        try {
            const authorizers = {};
            deployer.authorizers = authorizers;
            const filenames = deployer.fs.readdirSync(__dirname).filter(file => file !== "index.js");
            for (let index = 0; index < filenames.length; index++) {
                const filename = filenames[index];
                const authorizer = await require(__dirname + "/" + filename)(deployer);
                authorizers[filename.replace(/\.js$/g, "")] = authorizer;
            }
            return authorizers;
        } catch (error) {
            console.error("Error en «src/authorizers/index.js»");
            console.error(error);
            throw error;
        }
    };
};