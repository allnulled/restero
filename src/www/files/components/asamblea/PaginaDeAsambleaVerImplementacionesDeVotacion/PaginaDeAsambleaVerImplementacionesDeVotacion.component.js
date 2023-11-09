
window.PaginaDeAsambleaVerImplementacionesDeVotacion = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaVerImplementacionesDeVotacion",
  "<div class=\"PaginaDeAsambleaVerImplementacionesDeVotacion Component\">"
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
 + "                  <span class=\"\">Implementaciones</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Asamblea',link:'/asamblea/inicio'},{texto:'Votaciones',link:'/asamblea/ver/votaciones'},{texto:'Votación',link:'/asamblea/ver/votacion/' + this.$route.params.id_de_votacion}]\"></BreadcrumbGenerico>"
 + "        <h5>Implementaciones</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div v-if=\"implementaciones.length\">"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <table>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion()\"> «« </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion()\"> « </button>"
 + "                  </td>"
 + "                  <td style=\"width: 100%; text-align: center;\">Página {{ pagina }}</td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_siguiente_de_paginacion()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <div class=\"lista_de_cartas_de_datos\">"
 + "                <template v-for=\"implementacion, implementacion_index in implementaciones\">"
 + "                  <div class=\"carta_de_datos\" v-on:click=\"() => ir_a_ver_implementacion(implementacion.id)\" v-bind:key=\"'tabla-de-implementaciones-fila-' + implementacion_index\">"
 + "                    <div class=\"dato_nivel_1_de_carta\">"
 + "                      Implementacion «{{ implementacion.id }}»: {{ implementacion.titulo }}"
 + "                    </div>"
 + "                    <div class=\"dato_nivel_4_de_carta\">"
 + "                      Estado: «{{ implementacion.estado }}»"
 + "                    </div>"
 + "                    <div class=\"dato_nivel_4_de_carta\">"
 + "                      Creado el «{{ implementacion.fecha_de_creacion }}»"
 + "                    </div>"
 + "                    <div class=\"dato_nivel_2_de_carta\">"
 + "                      Descripción: {{ implementacion.descripcion }}"
 + "                    </div>"
 + "                    <div class=\"dato_nivel_3_de_carta\">"
 + "                      Contenido: {{ implementacion.contenido }}"
 + "                    </div>"
 + "                  </div>"
 + "                </template>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"panel_de_botones_superior\">"
 + "              <table>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion()\"> «« </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion()\"> « </button>"
 + "                  </td>"
 + "                  <td style=\"width: 100%; text-align: center;\">Página {{ pagina }}</td>"
 + "                  <td>"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_siguiente_de_paginacion()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
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
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionesDeVotacion.data");
return { implementaciones:[  ],
pagina:1
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async ir_a_ver_implementacion( id_implementacion ) {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionesDeVotacion.ir_a_ver_implementacion");
this.$router.history.push( "/asamblea/ver/implementacion/" + id_implementacion );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_datos() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionesDeVotacion.obtener_datos");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Implementacion_de_asamblea", "POST", { where:JSON.stringify([ [ "id_de_votacion",
"=",
this.$route.params.id_de_votacion ] ], null, 2),
page:this.pagina
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if(respuesta_1.data.resultado.length === 0) {
return 0;
}
this.implementaciones = respuesta_1.data.resultado;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionesDeVotacion.ir_a_principio_de_paginacion");
this.pagina = 1;
const resultado = (await this.obtener_datos(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionesDeVotacion.ir_a_anterior_de_paginacion");
if(this.pagina === 1) {
return;
}
this.pagina -= 1;
const resultado = (await this.obtener_datos(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina += 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_siguiente_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionesDeVotacion.ir_a_siguiente_de_paginacion");
this.pagina += 1;
const resultado = (await this.obtener_datos(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina -= 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
(await this.obtener_datos(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);