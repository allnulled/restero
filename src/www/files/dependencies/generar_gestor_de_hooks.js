(function(factory) {
    const modulo = factory();
    if(typeof window !== "undefined") window.generar_gestor_de_hooks = modulo;
    if (typeof global !== "undefined") global.generar_gestor_de_hooks = modulo;
    if (typeof module !== "undefined") module.exports = modulo;
})(function() {
    return function() {
        const gestor_de_hooks = { $hooks: {} };
        gestor_de_hooks.agregar_hook = function(id, callback, metadatos = {}) {
            if (!(id in gestor_de_hooks.$hooks)) gestor_de_hooks.$hooks[id] = [];
            gestor_de_hooks.$hooks[id].push({ callback, metadatos });
        };
        gestor_de_hooks.usar_hook = async function (id, parametros) {
            if (!(id in gestor_de_hooks.$hooks)) return parametros;
            const hooks = gestor_de_hooks.$hooks[id];
            for(let index = 0; index < hooks.length; index++) {
                try {
                    const { callback, metadatos } = hooks[index];
                    await callback(parametros, index, metadatos);
                } catch(error) {
                    console.log(`Error en hook «${id}» en callback «${index}»:`);
                    console.log(error);
                }
            }
            return parametros;
        };
        return gestor_de_hooks;
    };
});