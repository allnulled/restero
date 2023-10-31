
window.PaginaDeBlogParaEditarPost = Castelog.metodos.un_componente_vue2("PaginaDeBlogParaEditarPost",
  "<div class=\"PaginaDeBlogParaEditarPost Component\">"
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
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Blog',link:'/blog/ver/posts'}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} post</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"\">"
 + "            <div class=\"\">Título del post:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"post.titulo\" />"
 + "          </div>"
 + "          <div class=\"\">"
 + "            <div class=\"\">Subtítulo del post: (opcional)</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"post.subtitulo\" />"
 + "          </div>"
 + "          <div class=\"\">"
 + "            <div class=\"\">Contenido:</div>"
 + "            <textarea v-model=\"post.contenido\"></textarea>"
 + "          </div>"
 + "          <div>"
 + "            <button v-if=\"modalidad === 'crear'\" v-on:click=\"() => crear_post()\">Crear</button>"
 + "            <button v-else-if=\"modalidad === 'editar'\" v-on:click=\"() => guardar_post()\">Guardar</button>"
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
post:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_post() {try {
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Post_de_blog", "POST", { 
...(this.post )
}, { authorization:this.root.token_de_sesion
}, null, null));
console.log(respuesta_1);
} catch(error) {
console.log(error);
throw error;
}

},
async guardar_post() {try {
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/update/Post_de_blog/" + this.$route.params.id, "POST", { id:this.$route.params.id,

...(this.post )
}, { authorization:this.root.token_de_sesion
}, null, null));
console.log(respuesta_1);
} catch(error) {
console.log(error);
throw error;
}

}
},
async mounted() {try {
if(this.modalidad === "editar") {
const post_id = this.$route.params.id;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Post_de_blog", "POST", { where:JSON.stringify([ [ "id",
"=",
post_id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
const dato_1 = respuesta_1.data.resultado[ 0 ];
if(typeof dato_1 === 'undefined') {
return;
}
this.post = dato_1;
}
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);