module.exports = function (deployer) {
    const fs = require("fs/promises");
    const path = require("path");
    const log_directory = path.resolve(__dirname + "/../logs");
    return async function (request) {
        try {
            const headers = request.headers;
            const ip = request.headers["x-forwarded-for"] || request.socket.remoteAddress;
            const url = request.originalUrl;
            const metadata = { ip, url, headers };
            const log_files = await fs.readdir(log_directory);
            if(log_files.length === 0) {
                const momento = new Date();
                const momento_string = deployer.utilities.obtener_date_como_string(momento);
                const nuevo_fichero_log = path.resolve(log_directory, momento_string + ".log");
                await fs.writeFile(nuevo_fichero_log, JSON.stringify(metadata), "utf8");
            } else {
                const ultimo_fichero_log = path.resolve(log_directory, log_files.sort().pop());
                const estado_de_fichero = fs.lstat(ultimo_fichero_log);
                const maximo_tamanyo = 5 * 1000 * 1000;
                if(estado_de_fichero.size > maximo_tamanyo) {
                    const momento = new Date();
                    const momento_string = deployer.utilities.obtener_date_como_string(momento);
                    const nuevo_fichero_log = path.resolve(log_directory, momento_string + ".log");
                    await fs.writeFile(nuevo_fichero_log, JSON.stringify(metadata), "utf8");
                } else {
                    fs.appendFile(ultimo_fichero_log, "\n" + JSON.stringify(metadata), "utf8");
                }
            }
        } catch (error) {
            console.error("Error en «src/utilities/gestionar_log_de_peticion.js»");
            console.error(error);
            throw error;
        }
    };
};