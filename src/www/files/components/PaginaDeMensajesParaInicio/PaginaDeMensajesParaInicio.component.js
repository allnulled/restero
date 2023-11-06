
window.PaginaDeMensajesParaInicio = Castelog.metodos.un_componente_vue2("PaginaDeMensajesParaInicio",
  "<div class=\"PaginaDeMensajesParaInicio Component\">"
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
 + "                  <span class=\"\">Mensajes</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Mensajes</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button v-on:click=\"() => ir_a_redactar_mensaje()\">📄 Redactar mensaje</button>"
 + "          </div>"
 + "          <div class=\"\" v-if=\"(pagina === 1) && (mensajes.length === 0)\">"
 + "            <div>No hay mensajes.</div>"
 + "          </div>"
 + "          <div v-else>"
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
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_posterior_de_paginacion()\"> » </button>"
 + "                  </td>"
 + "                  <td style=\"display: none;\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion()\"> »» </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "            </div>"
 + "            <div class=\"panel_de_mensajes\" v-if=\"mensajes.length\">"
 + "              <div class=\"lista_de_mensajes\">"
 + "                <table class=\"tabla_de_mensajes\">"
 + "                  <tr>"
 + "                    <th class=\"\">"
 + "                      ID"
 + "                    </th>"
 + "                    <th class=\"\">"
 + "                      Asunto"
 + "                    </th>"
 + "                    <th class=\"\">"
 + "                      Usuario origen"
 + "                    </th>"
 + "                    <th class=\"\">"
 + "                      Fecha de creación"
 + "                    </th>"
 + "                  </tr>"
 + "                  <tr class=\"fila_de_mensaje\" v-for=\"mensaje, mensaje_index in mensajes\" v-bind:key=\"'mensajes-mensaje-' + mensaje_index\" v-on:click=\"() => ir_a_ver_mensaje(mensaje.id)\">"
 + "                    <td class=\"mensaje_id\">"
 + "                      {{ mensaje.id }}"
 + "                    </td>"
 + "                    <td class=\"mensaje_asunto\">"
 + "                      {{ mensaje.asunto }}"
 + "                    </td>"
 + "                    <td class=\"mensaje_usuario_origen\">"
 + "                      {{ usuarios_de_mensajes[mensaje.id_de_usuario_origen].nombre }}"
 + "                    </td>"
 + "                    <td class=\"mensaje_fecha_de_creacion\">"
 + "                      {{ mensaje.fecha_de_creacion }}"
 + "                    </td>"
 + "                  </tr>"
 + "                </table>"
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
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_posterior_de_paginacion()\"> » </button>"
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
console.log('[DEBUG]', "PaginaDeMensajesParaInicio.data");
return { mensajes:[  ],
usuarios_de_mensajes:{ 
},
pagina:1
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_principio_de_paginacion");
this.pagina = 1;
const resultado = (await this.obtener_mensajes(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_anterior_de_paginacion");
if(this.pagina === 1) {
return;
}
this.pagina -= 1;
const resultado = (await this.obtener_mensajes(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_posterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_posterior_de_paginacion");
if((!(this.mensajes.length === 20))) {
return;
}
this.pagina += 1;
const resultado = (await this.obtener_mensajes(  ));
if(resultado === 0) {
this.pagina -= 1;
}
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_redactar_mensaje() {try {
console.log('[DEBUG]', "PaginaDeMensajesParaInicio.ir_a_redactar_mensaje");
this.$router.history.push( "/mensajes/crear/mensaje" );
} catch(error) {
console.log(error);
throw error;
}

},
async ir_a_ver_mensaje( id_mensaje ) {try {
this.$router.history.push( "/mensajes/ver/mensaje/" + id_mensaje );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_mensajes() {try {
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Mensaje_de_mensajeria", "POST", { page:this.pagina,
order:JSON.stringify([ [ "id",
"DESC" ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
console.log(respuesta_1);
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if(respuesta_1.data.resultado.length === 0) {
return 0;
}
const ids_de_usuario = respuesta_1.data.resultado.reduce( function( salida,
mensaje ) {try {
if(salida.indexOf( mensaje.id_de_usuario_origen ) === 0 - 1) {
salida.push( mensaje.id_de_usuario_origen );
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
[  ] );
const respuesta_2 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Usuario", "POST", { where:JSON.stringify([ [ "id",
"IN",
ids_de_usuario.join( ";" ) ] ], null, 2)
}, null, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_2,
this );
const usuarios = respuesta_2.data.resultado.reduce( function( salida,
usuario ) {try {
salida[ usuario.id ] = usuario;
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
{ 
} );
this.usuarios_de_mensajes = usuarios;
this.mensajes = respuesta_1.data.resultado;
this.$forceUpdate( true );
return this.mensajes.length;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
this.obtener_mensajes(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);