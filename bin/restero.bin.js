#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const [node_binario, restero_binario, comando] = process.argv;
const argumentos = require("yargs").argv;

if(comando === "generar") {
    console.log("[*] Iniciado comando -restero generar-");
    const arg_salida = argumentos.output || argumentos.salida || ".";
    const arg_fichero = argumentos.file || argumentos.fichero || undefined;
    const arg_directorio = argumentos.directory || argumentos.folder || argumentos.directorio || argumentos.carpeta || undefined;
    const directorio_salida = path.resolve(arg_salida);
    const directorio_origen = path.resolve(__dirname + "/..");
    fs.copySync(directorio_origen, directorio_salida);
    console.log("[*] Copiado proyecto original");
    if(arg_directorio) {
        const directorio_sobreescritura = path.resolve(arg_directorio);
        fs.copySync(directorio_sobreescritura, directorio_salida);
        console.log("[*] Copiado proyecto de sobreescritura");
    }
    if(arg_fichero) {
        const fichero_sql = path.resolve(arg_fichero);
        const fichero_sql_original = path.resolve(directorio_salida, "src/configurations/db.sql");
        fs.copySync(fichero_sql, fichero_sql_original);
        console.log("[*] Copiado fichero de base de datos");
    }
    Resetear_settings: {
        const ruta_a_settings = path.resolve(directorio_salida, "src/configurations/settings.json");
        const settings = require(ruta_a_settings);
        settings.DB_RESET = false;
        settings.DB_TEST_MIGRATION = false;
        fs.writeFileSync(ruta_a_settings, JSON.stringify(settings), "utf8");
        console.log("[*] Reseteadas configuraciones");
    }
    Resetear_base_de_datos: {
        const ruta_a_db = path.resolve(directorio_salida, "src/configurations/db.instancia.sqlite");
        fs.unlinkSync(ruta_a_db);
        console.log("[*] Reseteada base de datos");
    }
    console.log("[*] Finalizado comando -restero generar-");
} else {
    throw new Error(`Comando no reconocido para «restero»: «${comando}»`);
}