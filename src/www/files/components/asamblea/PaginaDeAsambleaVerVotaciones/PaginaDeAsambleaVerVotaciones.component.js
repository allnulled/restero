
window.PaginaDeAsambleaVerVotaciones = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaVerVotaciones",
  "<div class=\"PaginaDeAsambleaVerVotaciones Component\">"
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
 + "                  <span class=\"\">Votaciones</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Asamblea',link:'/asamblea/inicio'}]\"></BreadcrumbGenerico>"
 + "        <h5 style=\"margin-bottom: 1px;\">Votaciones activas</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button>➕ Crear votación</button>"
 + "          </div>"
 + "          <div v-if=\"votaciones_activas.length\">"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <table>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion_de_votaciones_activas()\"> «« </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion_de_votaciones_activas()\"> « </button>"
 + "                  </td>"
 + "                  <td style=\"width: 100%; text-align: center;\">Página {{ pagina_de_votaciones_activas }}</td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_siguiente_de_paginacion_de_votaciones_activas()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion_de_votaciones_activas()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <div class=\"lista_de_cartas_de_datos\">"
 + "                <template v-for=\"votacion, votacion_index in votaciones_activas\">"
 + "                  <div class=\"carta_de_datos\" v-bind:key=\"'tabla-de-votaciones-activas-fila-' + votacion_index\" v-on:click=\"() => ir_a_votacion(votacion.id)\">"
 + "                    <div class=\"dato_nivel_1_de_carta\">"
 + "                      Votación «{{ votacion.id }}»"
 + "                    </div>"
 + "                    <table style=\"width: 100%;\">"
 + "                      <tr>"
 + "                        <td>"
 + "                          <div class=\"dato_nivel_4_de_carta\">"
 + "                            Creada el: <br/>«{{ votacion.fecha_de_creacion }}»"
 + "                          </div>"
 + "                        </td>"
 + "                        <td>"
 + "                          <div class=\"dato_nivel_5_de_carta\">"
 + "                            Finaliza el: <br/>«{{ votacion.fecha_de_finalizacion }}»"
 + "                          </div>"
 + "                        </td>"
 + "                      </tr>"
 + "                    </table>"
 + "                    <div class=\"dato_nivel_3_de_carta\" style=\"text-align: center;\">"
 + "                      Estado: «{{ votacion.estado }}»"
 + "                    </div>"
 + "                  </div>"
 + "                </template>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <table>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion_de_votaciones_activas()\"> «« </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion_de_votaciones_activas()\"> « </button>"
 + "                  </td>"
 + "                  <td style=\"width: 100%; text-align: center;\">Página {{ pagina_de_votaciones_activas }}</td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_siguiente_de_paginacion_de_votaciones_activas()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion_de_votaciones_activas()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
 + "          </div>"
 + "          <div v-else>"
 + "            No hay votaciones activas en este momento."
 + "          </div>"
 + "        </div>"
 + "        <h5 style=\"margin-bottom: 1px;\">Votaciones inactivas</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div v-if=\"votaciones_inactivas.length\">"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <table>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion_de_votaciones_inactivas()\"> «« </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion_de_votaciones_inactivas()\"> « </button>"
 + "                  </td>"
 + "                  <td style=\"width: 100%; text-align: center;\">Página {{ pagina_de_votaciones_inactivas }}</td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_siguiente_de_paginacion_de_votaciones_inactivas()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion_de_votaciones_inactivas()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <div class=\"lista_de_cartas_de_datos\">"
 + "                <div class=\"carta_de_datos\" v-for=\"votacion, votacion_index in votaciones_inactivas\" v-bind:key=\"'tabla-de-votaciones-inactivas-fila-' + votacion_index\">"
 + "                  <div class=\"dato_nivel_1_de_carta\">"
 + "                    Votación «{{ votacion.id }}»"
 + "                  </div>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Creada el «{{ votacion.fecha_de_creacion }}»"
 + "                  </div>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Finaliza el «{{ votacion.fecha_de_finalizacion }}»"
 + "                  </div>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Estado: «{{ votacion.estado }}»"
 + "                  </div>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <table>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion_de_votaciones_inactivas()\"> «« </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion_de_votaciones_inactivas()\"> « </button>"
 + "                  </td>"
 + "                  <td style=\"width: 100%; text-align: center;\">Página {{ pagina_de_votaciones_activas }}</td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_siguiente_de_paginacion_de_votaciones_inactivas()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion_de_votaciones_inactivas()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
 + "          </div>"
 + "          <div v-else>"
 + "            No hay votaciones inactivas en este momento."
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.data");
return { votaciones_activas:[  ],
pagina_de_votaciones_activas:1,
votaciones_inactivas:[  ],
pagina_de_votaciones_inactivas:1
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async ir_a_votacion( id_votacion ) {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_votacion");
this.$router.history.push( "/asamblea/ver/votacion/" + id_votacion );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_votaciones_activas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.obtener_votaciones_activas");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Votacion_de_asamblea", "POST", { where:JSON.stringify([ [ "estado",
"IN",
"Problemas;Soluciones;Implementaciones" ] ], null, 2),
page:this.pagina_de_votaciones_activas
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if(respuesta_1.data.resultado.length === 0) {
return 0;
}
this.votaciones_activas = respuesta_1.data.resultado;
this.$forceUpdate( true );
return this.votaciones_activas.length;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_votaciones_inactivas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.obtener_votaciones_inactivas");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Votacion_de_asamblea", "POST", { where:JSON.stringify([ [ "estado",
"IN",
"Inactivo;Histórico" ] ], null, 2),
page:this.pagina_de_votaciones_inactivas
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if(respuesta_1.data.resultado.length === 0) {
return 0;
}
this.votaciones_inactivas = respuesta_1.data.resultado;
this.$forceUpdate( true );
return this.votaciones_inactivas.length;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_principio_de_paginacion_de_votaciones_activas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_principio_de_paginacion_de_votaciones_activas");
this.pagina_de_votaciones_activas = 1;
const resultado = (await this.obtener_votaciones_activas(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion_de_votaciones_activas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_anterior_de_paginacion_de_votaciones_activas");
if(this.pagina_de_votaciones_activas === 1) {
return;
}
this.pagina_de_votaciones_activas -= 1;
const resultado = (await this.obtener_votaciones_activas(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina += 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_siguiente_de_paginacion_de_votaciones_activas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_siguiente_de_paginacion_de_votaciones_activas");
this.pagina_de_votaciones_activas += 1;
const resultado = (await this.obtener_votaciones_activas(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina_de_votaciones_activas -= 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_principio_de_paginacion_de_votaciones_inactivas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_principio_de_paginacion_de_votaciones_inactivas");
this.pagina_de_votaciones_inactivas = 1;
const resultado = (await this.obtener_votaciones_inactivas(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion_de_votaciones_inactivas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_anterior_de_paginacion_de_votaciones_inactivas");
if(this.pagina_de_votaciones_inactivas === 1) {
return;
}
this.pagina_de_votaciones_inactivas -= 1;
const resultado = (await this.obtener_votaciones_inactivas(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina += 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_siguiente_de_paginacion_de_votaciones_inactivas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotaciones.ir_a_siguiente_de_paginacion_de_votaciones_inactivas");
this.pagina_de_votaciones_inactivas += 1;
const resultado = (await this.obtener_votaciones_inactivas(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina_de_votaciones_inactivas -= 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
(await this.obtener_votaciones_activas(  ));
(await this.obtener_votaciones_inactivas(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);