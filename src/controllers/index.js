module.exports = function(deployer) {
    return async function() {
        try {
            const controllers = {};
            deployer.controllers = controllers;
            const filenames = deployer.fs.readdirSync(__dirname).filter(file => file !== "index.js");
            for(let index = 0; index < filenames.length; index++) {
                const filename = filenames[index];
                const controller = await require(__dirname + "/" + filename)(deployer);
                controllers[filename.replace(/\.js$/g, "")] = controller;
            }
            return controllers;
        } catch(error) {
            console.error("Error en «src/controllers/index.js»");
            console.error(error);
            throw error;
        }
    };
};