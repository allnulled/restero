module.exports = function (deployer) {
    return async function () {
        try {
            deployer.server = require("http").createServer();
            deployer.app = require("express")(deployer.server);
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
            // @TOIMPORTANTITIZE
        } catch (error) {
            console.error("Error en «src/utilities/deploy_server.js»");
            console.error(error);
            throw error;
        }
    };
};