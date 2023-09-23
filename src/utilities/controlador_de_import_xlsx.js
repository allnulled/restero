module.exports = function (deployer) {
    const multer = require("multer");
    const path = require("path");
    return async function (request, response, parametro) {
        try {
            deployer.utilities.tracear("deployer.utilities.controlador_de_import_xlsx");
            let fichero_destino = undefined;
            await new Promise(function (ok, fail) {
                const uploader = multer({
                    storage: multer.diskStorage({
                        destination: function (request, file, done) {
                            const carpeta_destino = path.resolve(__dirname + "/../uploads");
                            done(null, carpeta_destino);
                        },
                        filename: function (request, file, done) {
                            fichero_destino = "importaciones." + (new Date()).getTime() + "." + file.originalname;
                            done(null, fichero_destino);
                        }
                    })
                });
                const controlador_de_uploader = uploader.fields([{
                    name: "fichero",
                    maxCount: 1
                }]);
                return controlador_de_uploader(request, response, (error, data) => {
                    if (error) {
                        return fail(error);
                    } else {
                        return ok(data);
                    }
                });
            });
            const ruta_destino = path.resolve(__dirname + "/../uploads", fichero_destino);
            const contenidos_a_importar = await deployer.utilities.leer_fichero_excel(ruta_destino);
            const errores = await deployer.utilities.importar_datos_masivos(contenidos_a_importar);
            return response.json({
                estado_de_importacion: "completado",
                errores,
            });
        } catch (error) {
            console.error("Error en «src/controllers/controlador_de_import_xlsx.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};