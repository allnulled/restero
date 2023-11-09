
window.ExploradorDeDatos = Castelog.metodos.un_componente_vue2("ExploradorDeDatos",
  "<div class=\"ExploradorDeDatos Component\">"
 + "    <div v-if=\"esSeleccionable !== '0'\">"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td class=\"w_100\">"
 + "              <input class=\"w_100\" type=\"text\" disabled=\"true\" v-model=\"seleccionados\" />"
 + "            </td>"
 + "            <td class=\"w_auto\">"
 + "              <button class=\"w_auto\" :class=\"{active:esta_mostrando_panel_normal}\" v-on:click=\"alternar_panel_normal\">⋯</button>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "    <div v-if=\"(esSeleccionable === '0') || esta_mostrando_panel_normal\">"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <button v-if=\"esSeleccionable === '0'\" class=\"w_auto\" v-on:click=\"ir_a_crear_fila\">✚</button>"
 + "            </td>"
 + "            <td class=\"w_100\">"
 + "              <div class=\"searchbox w_100\">"
 + "                <input class=\"w_100\" type=\"search\" placeholder=\"Buscar\" v-model=\"busqueda\" />"
 + "                <button aria-label=\"search\" v-on:click=\"buscar_texto\"></button>"
 + "              </div>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"w_auto\" :class=\"{active:esta_mostrando_panel_de_busqueda_avanzada}\" v-on:click=\"alternar_panel_de_busqueda_avanzada\">⋮</button>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "      <div v-if=\"esta_mostrando_panel_de_busqueda_avanzada\">"
 + "        <section class=\"tabs\">"
 + "          <menu role=\"tablist\" aria-label=\"Tabs Template\">"
 + "            <button role=\"tab\" :aria-selected=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'filtros'\" v-on:click=\"() => seleccionar_panel_de_busqueda_avanzada_sobre('filtros')\">Ⴤ Filtros</button>"
 + "            <button role=\"tab\" :aria-selected=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'orden'\" v-on:click=\"() => seleccionar_panel_de_busqueda_avanzada_sobre('orden')\">↓ Orden</button>"
 + "            <button role=\"tab\" :aria-selected=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'paginacion'\" v-on:click=\"() => seleccionar_panel_de_busqueda_avanzada_sobre('paginacion')\">🗒 Página</button>"
 + "          </menu>"
 + "          <article role=\"tabpanel\" v-if=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'filtros'\">"
 + "            <h5>Ⴤ Filtros</h5>"
 + "            <div>"
 + "              <div>"
 + "                <button v-on:click=\"agregar_filtro\">✚ Añadir</button>"
 + "              </div>"
 + "              <div>"
 + "                <div class=\"filtro_del_explorador\" v-for=\"filtro, filtro_index in filtros\" v-bind:key=\"'busqueda-de-' + tabla_id + '-filtro-' + filtro_index\">"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <select v-model=\"filtro[0]\">"
 + "                      <option v-for=\"id_columna, id_columna_index in columnas_de_fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-filtro-' + filtro_index + '-opcion-columna-' + id_columna_index\" :value=\"id_columna\">"
 + "                        {{ $window.utilidades.texto_humanizado(id_columna) }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <select v-model=\"filtro[1]\">"
 + "                      <option v-for=\"operador, operador_index in operadores_de_filtro\" v-bind:key=\"'busqueda-de-' + tabla_id + '-filtro-' + filtro_index + '-opcion-columna-' + operador_index\" :value=\"operador\">"
 + "                        {{ operador }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <input type=\"text\" v-model=\"filtro[2]\" />"
 + "                  </span>"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <button class=\"w_auto\" v-on:click=\"() => { filtros.splice(filtro_index, 1); $forceUpdate(true); }\">🗑 Eliminar</button>"
 + "                  </span>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'orden'\">"
 + "            <h5>↓ Orden</h5>"
 + "            <div>"
 + "              <div>"
 + "                <button v-on:click=\"agregar_orden\">✚ Añadir</button>"
 + "              </div>"
 + "              <div>"
 + "                <div class=\"orden_del_explorador\" v-for=\"orden, orden_index in ordenes\" v-bind:key=\"'busqueda-de-' + tabla_id + '-orden-' + orden_index\">"
 + "                  <span class=\"campo_del_orden\">"
 + "                    <select v-model=\"orden[0]\">"
 + "                      <option v-for=\"id_columna, id_columna_index in columnas_de_fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-orden-' + orden_index + '-opcion-columna-' + id_columna_index\" :value=\"id_columna\">"
 + "                        {{ $window.utilidades.texto_humanizado(id_columna) }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_orden\">"
 + "                    <select v-model=\"orden[1]\">"
 + "                      <option value=\"ASC\">ascendente</option>"
 + "                      <option value=\"DESC\">descendente</option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_orden\">"
 + "                    <button class=\"w_auto\" v-on:click=\"() => { ordenes.splice(orden_index, 1); $forceUpdate(true); }\">🗑 Eliminar</button>"
 + "                  </span>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'paginacion'\">"
 + "            <h5>🗒 Paginación</h5>"
 + "            <div>"
 + "              <div class=\"paginacion_del_explorador\">"
 + "                <div>Página:</div>"
 + "                <span class=\"campo_de_la_paginacion\">"
 + "                  <input type=\"number\" v-model=\"pagina\" v-on:keypress.enter=\"buscar_pagina\" />"
 + "                </span>"
 + "              </div>"
 + "              <div class=\"paginacion_del_explorador\">"
 + "                <div>Ítems:</div>"
 + "                <span class=\"campo_de_la_paginacion\">"
 + "                  <input type=\"number\" v-model=\"items\" v-on:keypress.enter=\"buscar_pagina\" />"
 + "                </span>"
 + "              </div>"
 + "              <div class=\"paginacion_del_explorador\">"
 + "                <span class=\"campo_de_la_paginacion\">"
 + "                  <button class=\"w_100\" v-on:click=\"buscar_pagina\">Ir a página</button>"
 + "                </span>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "        </section>"
 + "      </div>"
 + "      <div v-if=\"Array.isArray(filas) && filas.length\">"
 + "        <div class=\"paginacion alta\">"
 + "          <div class=\"display_inline_block\">"
 + "            <table>"
 + "              <tbody>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('««')\">"
 + "                    ««"
 + "                    </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('«')\">"
 + "                    «"
 + "                    </button>"
 + "                  </td>"
 + "                  <td class=\"w_auto\">"
 + "                    Pág. {{ pagina_actual }}"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"filas && (filas.length < items)\" v-on:click=\"buscar_pagina('»')\">"
 + "                    »"
 + "                    </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </tbody>"
 + "            </table>"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"visor_de_tabla\">"
 + "          <table class=\"w_100\">"
 + "            <thead>"
 + "              <tr>"
 + "                <th v-if=\"esSeleccionable !== '0'\"></th>"
 + "                <th v-for=\"id_columna, id_columna_index in columnas_de_fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-columna-' + id_columna_index\">"
 + "                  {{ $window.utilidades.texto_humanizado(id_columna) }}"
 + "                </th>"
 + "              </tr>"
 + "            </thead>"
 + "            <tbody>"
 + "              <tr v-for=\"fila, fila_index in filas\" v-bind:key=\"'busqueda-de-' + tabla_id + '-fila-' + fila_index\">"
 + "                <td v-if=\"esSeleccionable !== '0'\" style=\"vertical-align: middle;\">"
 + "                  <span style=\"vertical-align: middle;\">"
 + "                    <button class=\"w_auto\" v-on:click=\"() => seleccionar_fila(fila.id)\">"
 + "                      <span v-if=\"esta_fila_seleccionada(fila.id)\">"
 + "                        ✔"
 + "                      </span>"
 + "                      <span v-else>"
 + "                        <span style=\"visibility: hidden\">"
 + "                        ✘"
 + "                        </span>"
 + "                      </span>"
 + "                    </button>"
 + "                  </span>"
 + "                </td>"
 + "                <td v-for=\"columna, columna_index in fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-fila-' + fila_index + '-columna-' + columna_index\">"
 + "                  <span v-if=\"(columna_index === 'id') && (esSeleccionable === '0')\">"
 + "                    <button class=\"boton_de_identificador_en_tabla\" v-on:click=\"() => ir_a_fila(columna)\">"
 + "                      {{ columna }}"
 + "                    </button>"
 + "                  </span>"
 + "                  <span v-else class=\"contenido_de_columna\" :title=\"columna\">{{ columna }}</span>"
 + "                </td>"
 + "                <td class=\"w_100\">"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "        <div class=\"paginacion baja\">"
 + "          <div class=\"display_inline_block\">"
 + "            <table>"
 + "              <tbody>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('««')\">"
 + "                    ««"
 + "                    </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('«')\">"
 + "                    «"
 + "                    </button>"
 + "                  </td>"
 + "                  <td class=\"w_auto\">"
 + "                    Pág. {{ pagina_actual }}"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"filas && (filas.length < items)\" v-on:click=\"buscar_pagina('»')\">"
 + "                    »"
 + "                    </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </tbody>"
 + "            </table>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "      <div v-else-if=\"Array.isArray(filas)\">"
 + "        <span>No se obtuvieron resultados.</span>"
 + "        <span v-if=\"pagina !== 1\">"
 + "          <span>Puedes <span class=\"como_link\" v-on:click=\"ir_a_pagina_anterior\">volver a página anterior</span></span>"
 + "          <span> o </span>"
 + "          <span class=\"como_link\" v-on:click=\"ir_a_pagina_inicial\">volver a página inicial</span><span>.</span>"
 + "        </span>"
 + "      </div>"
 + "      <div v-else>"
 + "        No se ha hecho ninguna búsqueda."
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
esSeleccionable:{ type:String,
default:"0"
},
idDeTabla:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
seleccionPorDefecto:{ type:[ String,
Number ],
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
alCambiar:{ type:Function,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data(  ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.data");
return this.obtener_datos( { 
} );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ agregar_filtro() {try {
console.log('[DEBUG]', "ExploradorDeDatos.agregar_filtro");
this.filtros.push([ "",
"=",
"" ])
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
agregar_orden() {try {
console.log('[DEBUG]', "ExploradorDeDatos.agregar_orden");
this.ordenes.push([ "",
"ASC" ])
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
alternar_panel_de_busqueda_avanzada() {try {
console.log('[DEBUG]', "ExploradorDeDatos.alternar_panel_de_busqueda_avanzada");
this.esta_mostrando_panel_de_busqueda_avanzada = (!(this.esta_mostrando_panel_de_busqueda_avanzada));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
alternar_panel_normal() {try {
console.log('[DEBUG]', "ExploradorDeDatos.alternar_panel_normal");
this.esta_mostrando_panel_normal = (!(this.esta_mostrando_panel_normal));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async buscar() {try {
console.log('[DEBUG]', "ExploradorDeDatos.buscar");
const respuesta_busqueda = (await Castelog.metodos.una_peticion_http("/api/v1/select/" + this.tabla_id, "POST", { search:this.busqueda,
where:JSON.stringify(this.filtros, null, 2),
order:JSON.stringify(this.ordenes, null, 2),
page:this.pagina,
items:this.items
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_busqueda,
this );
this.pagina_actual = this.pagina;
this.filas = respuesta_busqueda.data.resultado;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
buscar_pagina( pagina ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.buscar_pagina");
if(typeof pagina === 'number') {
this.pagina = pagina;
}
if(pagina === "««") {
this.pagina = 1;
}
if(pagina === "«") {
this.pagina -= 1;
}
if(pagina === "»") {
this.pagina += 1;
}
return this.buscar(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
buscar_texto() {try {
console.log('[DEBUG]', "ExploradorDeDatos.buscar_texto");
this.pagina = 1;
return this.buscar(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_fila( index_fila ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.ir_a_fila");
this.$router.history.push( `/formulario/${this.tabla.tabla}/id/${index_fila}` );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_crear_fila(  ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.ir_a_crear_fila");
this.$router.history.push( `/formulario/${this.tabla.tabla}/crear` );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_pagina_anterior(  ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.ir_a_pagina_anterior");
this.pagina -= 1;
return this.buscar(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_pagina_inicial(  ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.ir_a_pagina_inicial");
this.pagina = 1;
return this.buscar(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
obtener_datos( base = { 
} ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.obtener_datos");
return Object.assign(base, { seleccionados:( this.seleccionPorDefecto + "" ).split( "," ),
tabla:false,
tabla_id:this.idDeTabla || this.$route.params.id_de_tabla,
busqueda:"",
filtros:[  ],
ordenes:[  ],
pagina:1,
pagina_actual:1,
items:20,
esta_mostrando_panel_normal:false,
esta_mostrando_panel_de_busqueda_avanzada:false,
esta_mostrando_panel_de_busqueda_avanzada_sobre:"filtros",
filas:undefined,
columnas_de_fila:undefined,
operadores_de_filtro:[ "=",
"!=",
"<",
"<=",
">=",
">",
"IS NULL",
"IS NOT NULL",
"LIKE",
"NOT LIKE",
"IN",
"NOT IN" ]
} );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
seleccionar_panel_de_busqueda_avanzada_sobre( subpanel ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.seleccionar_panel_de_busqueda_avanzada_sobre");
this.esta_mostrando_panel_de_busqueda_avanzada_sobre = subpanel;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
seleccionar_fila( fila_id_num ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.seleccionar_fila");
const fila_id = "" + fila_id_num;
const posicion = this.seleccionados.indexOf( fila_id );
if((!(posicion === 0 - 1))) {
this.seleccionados.splice( posicion,
1 );
}
else if(posicion === 0 - 1) {
const es_seleccionable_por_1 = this.esSeleccionable === "1";
if(es_seleccionable_por_1) {
const hay_uno_seleccionado = this.seleccionados.length > 0;
if(hay_uno_seleccionado) {
this.seleccionados = [  ];
}
}
this.seleccionados.push( fila_id );
}
this.alCambiar( this.seleccionados,
this );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
esta_fila_seleccionada( fila_id ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.esta_fila_seleccionada");
const posicion = this.seleccionados.indexOf( "" + fila_id );
return (!(posicion === 0 - 1));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
watch:{ filas( nuevo_valor ) {try {
console.log('[DEBUG]', "ExploradorDeDatos.watch.filas");
if(Array.isArray(nuevo_valor) && nuevo_valor.length) {
this.columnas_de_fila = Object.keys(nuevo_valor[ 0 ]);
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "ExploradorDeDatos.mounted");
this.tabla = this.$window.utilidades.busco_tabla_en_esquema( this.root.esquema,
this.tabla_id );
(await this.buscar(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);