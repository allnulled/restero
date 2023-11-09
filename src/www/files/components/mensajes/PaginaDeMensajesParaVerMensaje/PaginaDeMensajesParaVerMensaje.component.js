
window.PaginaDeMensajesParaVerMensaje = Castelog.metodos.un_componente_vue2("PaginaDeMensajesParaVerMensaje",
  "<div class=\"PaginaDeMensajesParaVerMensaje Component\">"
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
 + "                  <span class=\"\">Leer mensaje</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Mensajes',link:'/mensajes/inicio'}]\"></BreadcrumbGenerico>"
 + "        <h5>Leer mensaje</h5>"
 + "        <div class=\"panel_principal\" v-if=\"mensaje && usuario_origen\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button v-on:click=\"() => eliminar_mensaje()\">🗑 Eliminar mensaje</button>"
 + "          </div>"
 + "          <div class=\"ver_mensaje\">"
 + "            <div class=\"asunto_de_mensaje\">"
 + "              Asunto: {{ mensaje.asunto }}"
 + "            </div>"
 + "            <div class=\"usuario_origen_de_mensaje\">"
 + "              Enviado por: {{ usuario_origen.nombre }}"
 + "            </div>"
 + "            <div class=\"contenido_de_mensaje\">"
 + "              {{ mensaje.contenido }}"
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
console.log('[DEBUG]', "PaginaDeMensajesParaVerMensaje.data");
return { mensaje:undefined,
usuario_origen:undefined
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async eliminar_mensaje() {try {
console.log('[DEBUG]', "PaginaDeMensajesParaVerMensaje.eliminar_mensaje");
const confirmacion = this.$window.confirm( "¿Seguro que quieres eliminar este mensaje?" );
if((!(confirmacion))) {
return 0;
}
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/delete/Mensaje_de_mensajeria", "POST", { id:this.$route.params.id
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
this.$router.history.push( "/mensajes/inicio" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_mensaje() {try {
console.log('[DEBUG]', "PaginaDeMensajesParaVerMensaje.obtener_mensaje");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Mensaje_de_mensajeria", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
console.log(respuesta_1);
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const mensaje = respuesta_1.data.resultado[ 0 ];
const id_de_usuario = mensaje.id_de_usuario_origen;
const respuesta_2 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Usuario", "POST", { where:JSON.stringify([ [ "id",
"=",
id_de_usuario ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_2,
this );
const usuario_origen = respuesta_2.data.resultado[ 0 ];
this.mensaje = mensaje;
this.usuario_origen = usuario_origen;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
(await this.obtener_mensaje(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);