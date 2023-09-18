
window.utilidades.gestor_de_hooks.agregar_hook( "app:iniciada",
function() {try {
console.log("app.iniciada ok!");
} catch(error) {
console.log(error);
throw error;
}

} );