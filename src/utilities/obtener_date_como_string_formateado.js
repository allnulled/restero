module.exports = function (deployer) {
    return function (fecha, formato = "YYYY-MM-DD HH-mm-ss") {
        try {
            deployer.utilities.tracear("deployer.utilities.obtener_date_como_string");
            if (!(fecha instanceof Date)) {
                throw new Error("Requerido parámetro «fecha» ser instancia de «Date»");
            }
            const anyo = deployer.utilities.obtener_string_padeado(fecha.getFullYear(), 4);
            const mes = deployer.utilities.obtener_string_padeado(fecha.getMonth() + 1, 2);
            const dia = deployer.utilities.obtener_string_padeado(fecha.getDate(), 2);
            const hora = deployer.utilities.obtener_string_padeado(fecha.getHours(), 2);
            const minuto = deployer.utilities.obtener_string_padeado(fecha.getMinutes(), 2);
            const segundo = deployer.utilities.obtener_string_padeado(fecha.getSeconds(), 2);
            const milisegundo = deployer.utilities.obtener_string_padeado(fecha.getMilliseconds(), 3);
            return formato
                .replace(/YYYY/g, anyo)
                .replace(/MM/g, mes)
                .replace(/DD/g, dia)
                .replace(/HH/g, hora)
                .replace(/mm/g, minuto)
                .replace(/ss/g, segundo)
                .replace(/mls/g, milisegundo);
        } catch (error) {
            console.error("Error en «src/utilities/obtener_date_como_string.js»");
            console.error(error);
            throw error;
        }
    };
};