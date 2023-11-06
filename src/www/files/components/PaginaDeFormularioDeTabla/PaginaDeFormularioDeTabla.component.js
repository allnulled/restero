
window.PaginaDeFormularioDeDatoDeTabla = Castelog.metodos.un_componente_vue2("PaginaDeFormularioDeDatoDeTabla",
  "<div class=\"PaginaDeFormularioDeDatoDeTabla Component\">"
 + "    <div class=\"window\">"
 + "      <div class=\"title-bar\">"
 + "        <div class=\"title-bar-text\">"
 + "          <table class=\"\">"
 + "            <tbody>"
 + "              <tr>"
 + "                <td>"
 + "                  <span class=\"partenon\" v-on:click=\"() => $router.history.push('/')\">🏛️</span>"
 + "                </td>"
 + "                <td>"
 + "                  <span>Formulario de tabla</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Administración',link:'/administracion'},{texto:'Explorador',link:'/explorador/'+tabla_id}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ $window.utilidades.texto_humanizado(tabla_id) }}: {{ $route.params.id_de_fila || \"nuevo\" }}</h5>"
 + "        <div v-if=\"fila\" style=\"padding: 4px; padding-top: 0px;\">"
 + "          <div class=\"\" v-for=\"columna, columna_index in columnas_locales\" v-bind:key=\"'formulario-columna-'+columna_index\">"
 + "            <div class=\"columna_del_formulario\">"
 + "              <div v-if=\"columna_index === 'id'\">"
 + "                <label>ID: <span>{{ fila[columna_index] }}</span></label>"
 + "              </div>"
 + "              <div v-else-if=\"columna_index in columnas_foraneas\">"
 + "                <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}: <span class=\"inputtype\">{{ columna.tipo }}</span></div>"
 + "                <ExploradorDeDatos :root=\"root\" es-seleccionable=\"1\" :id-de-tabla=\"columnas_foraneas[columna_index].tabla_foranea\" :al-cambiar=\"v => fila[columna_index] = v[0]\" :seleccion-por-defecto=\"fila[columna_index]\" />"
 + "              </div>"
 + "              <div v-else-if=\"columna_index in columnas_fichero\">"
 + "                <form enctype=\"multipart/form-data\">"
 + "                  <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}: <span class=\"inputtype\">{{ columna.tipo }}</span></div>"
 + "                  <input class=\"inputfile\" type=\"file\" v-on:change=\"evento => cambiar_fichero(columna_index, evento)\" />"
 + "                  <div v-if=\"columnas_fichero_cargando[columna_index] !== true\">"
 + "                    <img class=\"inputfileimage\" :src=\"'/api/v1/getfile/' + tabla_id + '/?columna=' + columna_index + '&id=' + fila.id + '&nocache=' + new Date()\"  v-on:click=\"() => refrescar_imagen(columna_index)\" />"
 + "                  </div>"
 + "                </form>"
 + "              </div>"
 + "              <div v-else>"
 + "                <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}: <span class=\"inputtype\">{{ columna.tipo }}</span></div>"
 + "                <template v-if=\"columna.tipo === 'VARCHAR'\">"
 + "                  <template v-if=\"$window.utilidades.busco_atributo_en_columna(columna, 'es_opcion')\">"
 + "                    <select class=\"entrada_de_formulario\" v-model=\"fila[columna_index]\">"
 + "                      <option v-for=\"opcion, opcion_index in $window.utilidades.busco_atributo_en_columna(columna, 'es_opcion').split('|')\" v-bind:key=\"'tabla-' + tabla.tabla + '-columna-' + columna.columna + '-opcion-' + opcion_index\" :value=\"opcion\">"
 + "                        {{ opcion }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </template>"
 + "                  <template v-else>"
 + "                    <input class=\"entrada_de_formulario\" type=\"text\" v-model=\"fila[columna_index]\" />"
 + "                  </template>"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'INTEGER'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"number\" v-model=\"fila[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'REAL'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"number\" v-model=\"fila[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'DATETIME'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"datetime-local\" v-model=\"fila[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'TIMESTAMP'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"datetime-local\" v-model=\"fila[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'DATE'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"date\" v-model=\"fila[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'TIME'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"time\" v-model=\"fila[columna_index]\" />"
 + "                </template>"
 + "                <template v-else>"
 + "                  <textarea class=\"entrada_de_formulario\" v-model=\"fila[columna_index]\"></textarea>"
 + "                </template>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"columna_del_formulario text_align_right\">"
 + "            <button v-on:click=\"eliminar_fila\">Eliminar</button>"
 + "            <button v-on:click=\"buscar_fila\">Cargar</button>"
 + "            <button v-on:click=\"guardar_fila\">Guardar</button>"
 + "          </div>"
 + "        </div>"
 + "        <div v-else-if=\"modalidad === 'crear'\" style=\"padding: 4px; padding-top: 0px;\">"
 + "          <div class=\"\" v-for=\"columna, columna_index in columnas_locales\" v-bind:key=\"'formulario-columna-'+columna_index\">"
 + "            <div class=\"columna_del_formulario\" v-if=\"columna_index !== 'id'\">"
 + "              <div v-if=\"columna_index in columnas_foraneas\">"
 + "                <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}: <span class=\"inputtype\">{{ columna.tipo }}</span></div>"
 + "                <ExploradorDeDatos :root=\"root\" es-seleccionable=\"1\" :id-de-tabla=\"columnas_foraneas[columna_index].tabla_foranea\" :al-cambiar=\"v => fila_nueva[columna_index] = v[0]\" />"
 + "              </div>"
 + "              <div v-else>"
 + "                <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}: <span class=\"inputtype\">{{ columna.tipo }}</span></div>"
 + "                <template v-if=\"columna.tipo === 'VARCHAR'\">"
 + "                  <template v-if=\"$window.utilidades.busco_atributo_en_columna(columna, 'es_opcion')\">"
 + "                    <select class=\"entrada_de_formulario\" v-model=\"fila_nueva[columna_index]\">"
 + "                      <option v-for=\"opcion, opcion_index in $window.utilidades.busco_atributo_en_columna(columna, 'es_opcion').split('|')\" v-bind:key=\"'tabla-' + tabla.tabla + '-columna-' + columna.columna + '-opcion-' + opcion_index\" :value=\"opcion\">"
 + "                        {{ opcion }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </template>"
 + "                  <template v-else>"
 + "                    <input class=\"entrada_de_formulario\" type=\"text\" v-model=\"fila_nueva[columna_index]\" />"
 + "                  </template>"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'INTEGER'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"number\" v-model=\"fila_nueva[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'REAL'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"number\" v-model=\"fila_nueva[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'DATETIME'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"datetime-local\" v-model=\"fila_nueva[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'TIMESTAMP'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"datetime-local\" v-model=\"fila_nueva[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'DATE'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"date\" v-model=\"fila_nueva[columna_index]\" />"
 + "                </template>"
 + "                <template v-else-if=\"columna.tipo === 'TIME'\">"
 + "                  <input class=\"entrada_de_formulario\" type=\"time\" v-model=\"fila_nueva[columna_index]\" />"
 + "                </template>"
 + "                <template v-else>"
 + "                  <textarea class=\"entrada_de_formulario\" v-model=\"fila_nueva[columna_index]\"></textarea>"
 + "                </template>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"columna_del_formulario text_align_right\" v-if=\"modalidad === 'crear'\">"
 + "            <button v-on:click=\"crear_fila\">➕ Crear</button>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
modalidad:{ type:String,
default:function() {try {
return "editar";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data(  ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.data");
return { tabla:false,
tabla_id:this.$route.params.id_de_tabla,
fila:false,
fila_nueva:{ 
},
columnas_foraneas:{ 
},
columnas_locales:{ 
},
columnas_fichero:{ 
},
columnas_fichero_cargando:{ 
},
esta_cambiando_fichero:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async buscar_fila(  ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.buscar_fila");
const respuesta_fila = (await Castelog.metodos.una_peticion_http(`/api/v1/select/${this.tabla_id}`, "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id_de_fila ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_fila,
this );
this.fila = respuesta_fila.data.resultado[ 0 ];
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async guardar_fila(  ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.guardar_fila");
const respuesta_guardar = (await Castelog.metodos.una_peticion_http(`/api/v1/update/${this.tabla_id}`, "POST", { id:this.$route.params.id_de_fila,

...(this.fila )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_guardar,
this );
(await this.buscar_fila(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async crear_fila(  ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.crear_fila");
const respuesta_crear = (await Castelog.metodos.una_peticion_http(`/api/v1/insert/${this.tabla_id}`, "POST", { 
...(this.fila_nueva )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_crear,
this );
this.$router.history.push( "/explorador/" + this.$route.params.id_de_tabla );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async eliminar_fila(  ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.eliminar_fila");
const respuesta_eliminar = (await Castelog.metodos.una_peticion_http(`/api/v1/delete/${this.tabla_id}`, "POST", { id:this.$route.params.id_de_fila
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_eliminar,
this );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async cambiar_fichero( columna_index,
evento ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.cambiar_fichero");
this.desactualizar_imagen( columna_index );
const datos_de_formulario = new FormData(  );
const ficheros_seleccionados = evento.target.files;
const [ fichero_seleccionado ] = ficheros_seleccionados;
datos_de_formulario.append( "id",
this.$route.params.id_de_fila );
datos_de_formulario.append( "columna",
columna_index );
datos_de_formulario.append( "fichero",
fichero_seleccionado );
const respuesta_cambiar = (await Castelog.metodos.una_peticion_http(`/api/v1/setfile/${this.tabla_id}`, "POST", datos_de_formulario, { "Content-Type":"multipart/form-data",
authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_cambiar,
this );
(await this.actualizar_imagen( columna_index ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
cargar_metadatos_de_tabla() {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.cargar_metadatos_de_tabla");
this.tabla = this.root.esquema.filter( ( tabla ) => {try {
return tabla.tabla === this.tabla_id;
} catch(error) {
console.log(error);
throw error;
}

} )[ 0 ];
this.columnas_locales = ( () => {
try {
const columnas_locales = { 
};
for(let indice_componente = 0; indice_componente < this.tabla.composicion.length; indice_componente++) {const componente = this.tabla.composicion[ indice_componente ];
if(componente.sentencia === "columna") {
columnas_locales[ componente.columna ] = componente;
}}
return columnas_locales;
} catch(error) {
console.log(error);
throw error;
}
})();
this.columnas_foraneas = ( () => {
try {
const columnas_foraneas = { 
};
for(let indice_componente = 0; indice_componente < this.tabla.composicion.length; indice_componente++) {const componente = this.tabla.composicion[ indice_componente ];
if(componente.sentencia === "clave foránea") {
columnas_foraneas[ componente.columna ] = componente;
}}
return columnas_foraneas;
} catch(error) {
console.log(error);
throw error;
}
})();
this.columnas_fichero = ( () => {
try {
const columnas_fichero = { 
};
for(let indice_atributo = 0; indice_atributo < this.tabla.atributos.length; indice_atributo++) {const atributo = this.tabla.atributos[ indice_atributo ];
if(typeof atributo === 'string' && atributo.startsWith( "tiene_fichero:" )) {
const columna_fichero = atributo.substr( "tiene_fichero:".length ).trim(  );
columnas_fichero[ columna_fichero ] = 0;
}}
return columnas_fichero;
} catch(error) {
console.log(error);
throw error;
}
})();
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
desactualizar_imagen( columna_index ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.desactualizar_imagen");
this.columnas_fichero_cargando[ columna_index ] = true;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
actualizar_imagen( columna_index ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.actualizar_imagen");
return new Promise( ( ok ) => {try {
setTimeout( () => {try {
this.columnas_fichero_cargando[ columna_index ] = false;
this.$forceUpdate( true );
return ok(  );
} catch(error) {
console.log(error);
throw error;
}

},
1000 );
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async refrescar_imagen( columna_index ) {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.refrescar_imagen");
(await this.desactualizar_imagen( columna_index ));
(await this.actualizar_imagen( columna_index ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async beforeMount() {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.beforeMount");
this.cargar_metadatos_de_tabla(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeFormularioDeDatoDeTabla.mounted");
(await this.buscar_fila(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);