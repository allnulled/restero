
window.PaginaDePrensaParaEditarNoticia = Castelog.metodos.un_componente_vue2("PaginaDePrensaParaEditarNoticia",
  "<div class=\"PaginaDePrensaParaEditarNoticia Component\">"
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
 + "                  <span class=\"\">{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} noticia</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"migas_de_pan\"></BreadcrumbGenerico>"
 + "        <h5>{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} noticia</h5>"
 + "        <div class=\"\">"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Título de la noticia:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"noticia_de_prensa.titulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Subtítulo de la noticia: (opcional)</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"noticia_de_prensa.subtitulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Contenido:</div>"
 + "            <textarea v-model=\"noticia_de_prensa.contenido\" placeholder=\"Este campo acepta HTML.\"></textarea>"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Tags:</div>"
 + "            <textarea v-model=\"noticia_de_prensa.tags\"></textarea>"
 + "          </div>"
 + "          <div class=\"panel_de_botones_inferior\">"
 + "            <button v-if=\"modalidad === 'crear'\" v-on:click=\"() => crear_noticia()\">➕ Crear noticia</button>"
 + "            <button v-else-if=\"modalidad === 'editar'\" v-on:click=\"() => guardar_noticia()\">💾 Guardar noticia</button>"
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
return { es_autor:false,
noticia_de_prensa:{ 
},
migas_de_pan:( this.modalidad === "crear" ? [ { texto:'Inicio',
link:'/'
},
{ texto:'Noticias',
link:'/prensa/ver/noticias'
} ] : [ { texto:'Inicio',
link:'/'
},
{ texto:'Noticias',
link:'/prensa/ver/noticias'
},
{ texto:'Noticia',
link:'/prensa/ver/noticia/' + this.$route.params.id
} ] )
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_noticia() {try {
console.log('[DEBUG]', "PaginaDePrensaParaEditarNoticia.crear_noticia");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Noticia_de_prensa", "POST", { 
...(this.noticia_de_prensa )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/prensa/ver/noticias" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async guardar_noticia() {try {
console.log('[DEBUG]', "PaginaDePrensaParaEditarNoticia.guardar_noticia");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/update/Noticia_de_prensa", "POST", { id:this.$route.params.id,

...(this.noticia_de_prensa )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/prensa/ver/noticia/" + this.noticia_de_prensa.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDePrensaParaEditarNoticia.mounted");
if(this.modalidad === "editar") {
const id_de_noticia = this.$route.params.id;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Noticia_de_prensa", "POST", { where:JSON.stringify([ [ "id",
"=",
id_de_noticia ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
if(typeof dato_1 === 'undefined') {
return;
}
this.noticia_de_prensa = dato_1;
}
else if(this.modalidad === "crear") {

}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);