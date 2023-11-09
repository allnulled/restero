
window.PaginaDeMensajesParaCrearMensaje = Castelog.metodos.un_componente_vue2("PaginaDeMensajesParaCrearMensaje",
  "<div class=\"PaginaDeMensajesParaCrearMensaje Component\">"
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
 + "                  <span class=\"\">Crear mensaje</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Mensajes',link:'/mensajes/inicio'}]\"></BreadcrumbGenerico>"
 + "        <h5>Crear mensaje</h5>"
 + "        <div class=\"\">"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">"
 + "              Destinatario:"
 + "            </div>"
 + "            <ExploradorDeDatos :root=\"root\" es-seleccionable=\"1\" id-de-tabla=\"Usuario\" :al-cambiar=\"valor => mensaje.id_de_usuario_destino = valor\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">"
 + "              Asunto:"
 + "            </div>"
 + "            <input type=\"text\" style=\"width: 100%;\" v-model=\"mensaje.asunto\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">"
 + "              Contenido:"
 + "            </div>"
 + "            <input type=\"text\" style=\"width: 100%;\" v-model=\"mensaje.contenido\" />"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"panel_de_botones_inferior\">"
 + "          <button v-on:click=\"() => enviar_mensaje()\">📩 Enviar</button>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeMensajesParaCrearMensaje.data");
return { mensaje:{ 
}
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async enviar_mensaje() {try {
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Mensaje_de_mensajeria", "POST", { 
...(this.mensaje )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
this.$router.history.push( "/mensajes/inicio" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {
}
};},
  null);