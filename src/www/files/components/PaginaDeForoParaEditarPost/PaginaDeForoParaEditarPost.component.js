
window.PaginaDeForoParaEditarPost = Castelog.metodos.un_componente_vue2("PaginaDeForoParaEditarPost",
  "<div class=\"PaginaDeForoParaEditarPost Component\">"
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
 + "                  <span class=\"\">{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} post</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Foro',link:'/foro/ver/temas'},{texto:'Tema',link:'/foro/ver/tema/'+(this.post.id_de_tema || this.$route.params.tema)}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} post</h5>"
 + "        <div class=\"\">"
 + "          <div class=\"campo_de_formulario\" style=\"display: block;\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">ID de tema:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"post.id_de_tema\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Título del post:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"post.titulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Subtítulo del post: (opcional)</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"post.subtitulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Contenido:</div>"
 + "            <textarea v-model=\"post.contenido\"></textarea>"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Tags:</div>"
 + "            <textarea v-model=\"post.tags\"></textarea>"
 + "          </div>"
 + "          <div class=\"panel_de_botones_inferior\">"
 + "            <button v-if=\"modalidad === 'crear'\" v-on:click=\"() => crear_post()\">➕ Crear post</button>"
 + "            <button v-else-if=\"modalidad === 'editar'\" v-on:click=\"() => guardar_post()\">💾 Guardar post</button>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
modalidad:{ type:String,
default:"crear"
}
},
data() {try {
return { es_administrador:false,
post:{ id_de_tema:this.$route.params.tema
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_post() {try {
console.log('[DEBUG]', "PaginaDeForoParaEditarPost.crear_post");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Post_de_foro", "POST", { 
...(this.post )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/foro/ver/tema/" + ( this.$route.params.tema || this.post.id_de_tema ) );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async guardar_post() {try {
console.log('[DEBUG]', "PaginaDeForoParaEditarPost.guardar_post");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/update/Post_de_foro/" + this.$route.params.id, "POST", { id:this.$route.params.id,

...(this.post )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/foro/ver/post/" + this.post.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeForoParaEditarPost.mounted");
if(this.modalidad === "editar") {
const post_id = this.$route.params.id;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Post_de_foro", "POST", { where:JSON.stringify([ [ "id",
"=",
post_id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
if(typeof dato_1 === 'undefined') {
return;
}
this.post = dato_1;
}
else if(this.modalidad === "crear") {
this.post.id_de_tema = this.$route.params.tema;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);