module.exports = function(deployer) {
    return async function() {
        try {
            const dependencies = {};
            deployer.dependencies = dependencies;
            const filenames = deployer.fs.readdirSync(__dirname).filter(file => file !== "index.js");
            for(let index = 0; index < filenames.length; index++) {
                const filename = filenames[index];
                const dependencia = await require(__dirname + "/" + filename);
                dependencies[filename.replace(/\.js$/g, "")] = dependencia;
            }
            return dependencies;
        } catch(error) {
            console.error("Error en «src/dependencies/index.js»");
            console.error(error);
            throw error;
        }
    };
};