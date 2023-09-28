
window.utilidades = { 
};
window.utilidades.texto_humanizado = function( texto ) {try {
return texto.replace( new RegExp( "_",
"g" ),
" " );
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.busco_tabla_en_esquema = function( esquema,
tabla_buscada,
valor_por_defecto ) {try {
for(let index = 0; index < esquema.length; index++) {const tabla = esquema[ index ];
if(tabla.tabla === tabla_buscada) {
return esquema[ index ];
}}
return valor_por_defecto;
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.busco_atributo_en_tabla = function( tabla,
atributo_buscado,
valor_por_defecto ) {try {
const etiqueta = atributo_buscado + ":";
for(let indice_atributo = 0; indice_atributo < tabla.atributos.length; indice_atributo++) {const atributo_iterado = tabla.atributos[ indice_atributo ];
if(typeof atributo_iterado === 'string' && atributo_iterado.startsWith( etiqueta )) {
return atributo_iterado.substr( etiqueta.length ).trim(  );
}}
return valor_por_defecto;
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.busco_atributo_en_columna = function( columna,
atributo_buscado,
valor_por_defecto ) {try {
const etiqueta = atributo_buscado + ":";
for(let indice_atributo = 0; indice_atributo < columna.atributos.length; indice_atributo++) {const atributo_iterado = columna.atributos[ indice_atributo ];
if(typeof atributo_iterado === 'string' && atributo_iterado.startsWith( etiqueta )) {
return atributo_iterado.substr( etiqueta.length ).trim(  );
}}
return valor_por_defecto;
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.texto_humanizado_de_columna = function( esquema,
tabla_id,
columna_id ) {try {
const [ tabla ] = Castelog.metodos.un_filtrado_por(esquema, ( item ) => {
return item.tabla === tabla_id;
}, null, null);
const [ columna ] = Castelog.metodos.un_filtrado_por(tabla.composicion, ( item ) => {
return item.sentencia === "columna" && item.columna === columna_id;
}, null, null);
if(Array.isArray(columna.atributos)) {
const atributos_de_nombre_humano = Castelog.metodos.un_filtrado_por(columna.atributos, ( item ) => {
return item.startsWith( "nombre_humano:" );
}, null, null);
if(atributos_de_nombre_humano.length) {
const [ atributo_de_nombre_humano ] = atributos_de_nombre_humano;
const nombre_humano = atributo_de_nombre_humano.substr( "nombre_humano:".length ).trim(  );
return nombre_humano;
}
}
return window.utilidades.texto_humanizado( columna.columna.substr( 0,
1 ).toUpperCase(  ) + columna.columna.substr( 1 ) );
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.gestion_de_error_desde_respuesta = function( respuesta ) {try {
if(respuesta.data.error === true) {
window.$notificaciones.agregar_notificacion( respuesta.data );
return true;
}
return false;
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.es_administrador = function( autentificacion ) {try {
const { permisos
} = autentificacion;
const permisos_coincidentes = Castelog.metodos.un_filtrado_por(permisos, function( permiso ) {try {
return permiso.nombre === "permiso de administración";
} catch(error) {
console.log(error);
throw error;
}

}, null, null);
return permisos_coincidentes.length;
} catch(error) {
console.log(error);
throw error;
}

};
window.utilidades.gestor_de_hooks = window.generar_gestor_de_hooks(  );