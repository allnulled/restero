module.exports = function (deployer) {
    return function (response, error) {
        return response.json({
            error: true,
            type: error.name,
            message: error.message,
            stack: error.stack,
        });
    };
};