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
        const environments = ["default", "development", "testing", "production"];
        for(let index_env = 0; index_env < environments.length; index_env++) {
            const environment = environments[index_env];
            const ruta_a_settings = path.resolve(directorio_salida, `src/configurations/settings.${environment}.json`);
            const settings = require(ruta_a_settings);
            settings.DB_RESET = false;
            settings.DB_TEST_MIGRATION = false;
            fs.writeFileSync(ruta_a_settings, JSON.stringify(settings), "utf8");
        }
        console.log("[*] Reseteadas configuraciones");
    }
    Resetear_base_de_datos: {
        const ruta_a_db = path.resolve(directorio_salida, "src/configurations/db.instancia.sqlite");
        fs.unlinkSync(ruta_a_db);
        console.log("[*] Reseteada base de datos");
    }
    console.log("[*] Finalizado comando -restero generar-");
} else if(comando === "generar:seeder") {
    console.log("[*] Iniciado comando -restero generar:seeder-");
    const directorio_seeder = path.resolve(__dirname + "/seeder");
    const arg_salida = argumentos.output || argumentos.salida || false;
    if(!arg_salida) {
        throw new Error("Se requiere argumento --salida o --output para comando «restero generar:seeder»");
    }
    const salida_final = path.resolve(arg_salida);
    fs.copySync(directorio_seeder, salida_final);
    console.log("[*] Copiado directorio seeder...");
    console.log("[*]    - de: " + directorio_seeder);
    console.log("[*]    - a:  " + salida_final);
    console.log("[*] Finalizado comando -restero generar:seeder-");
} else {
    throw new Error(`Comando no reconocido para «restero»: «${comando}»`);
}