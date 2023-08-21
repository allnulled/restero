module.exports = function(deployer) {
    return async function() {
        try {
            const utilities = {};
            deployer.utilities = utilities;
            const filenames = deployer.fs.readdirSync(__dirname).filter(file => file !== "index.js");
            for(let index = 0; index < filenames.length; index++) {
                const filename = filenames[index];
                const utility = await require(__dirname + "/" + filename)(deployer);
                utilities[filename.replace(/\.js$/g, "")] = utility;
            }
            return utilities;
        } catch(error) {
            console.error("Error en «src/utilities/index.js»");
            console.error(error);
            throw error;
        }
    };
};