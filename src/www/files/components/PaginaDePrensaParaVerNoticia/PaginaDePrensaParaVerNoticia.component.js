
window.PaginaDePrensaParaVerNoticia = Castelog.metodos.un_componente_vue2("PaginaDePrensaParaVerNoticia",
  "<div class=\"PaginaDePrensaParaVerNoticia Component\">"
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
 + "                  <span class=\"\">Ver noticia</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" v-if=\"noticia_de_prensa\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Noticias',link:'/prensa/ver/noticias'}]\"></BreadcrumbGenerico>"
 + "        <h5>Ver noticia</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"panel_de_botones_superior\" v-if=\"es_autor_de_noticia\">"
 + "            <button v-on:click=\"() => eliminar_noticia()\">🗑 Eliminar noticia</button>"
 + "            <button v-on:click=\"() => ir_a_editar_noticia()\">🖊 Editar noticia</button>"
 + "          </div>"
 + "          <div class=\"ver_post\">"
 + "            <div class=\"titulo_de_post\">{{ noticia_de_prensa.titulo }}</div>"
 + "            <div class=\"subtitulo_de_post\">{{ noticia_de_prensa.subtitulo }}</div>"
 + "            <div class=\"autor_de_post\">"
 + "              Escrito el {{ noticia_de_prensa.fecha_de_creacion }} por {{ autor.nombre }}"
 + "            </div>"
 + "            <div class=\"contenido_de_post\">"
 + "              <div v-html=\"noticia_de_prensa.contenido\"></div>"
 + "            </div>"
 + "            <div class=\"tags_de_post\">"
 + "              <div>Tags: {{ noticia_de_prensa.tags }}</div>"
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
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticia.data");
return { es_autor_de_noticia:false,
noticia_de_prensa:{ 
},
autor:{ 
},
pagina_de_comentarios:1,
comentarios:[  ],
autores_de_comentarios:{ 
},
esta_mostrando_creador_de_comentario:false,
esta_creando_comentario:false,
nuevo_comentario:""
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async eliminar_noticia() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticia.eliminar_noticia");
const confirmacion = this.$window.confirm( "¿Seguro que quieres eliminar esta noticia?" );
if((!(confirmacion))) {
return;
}
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/delete/Noticia_de_prensa", "POST", { id:this.noticia_de_prensa.id
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
this.$router.history.push( "/prensa/ver/noticias" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_editar_noticia() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticia.ir_a_editar_noticia");
this.$router.history.push( "/prensa/editar/noticia/" + this.$route.params.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_noticia() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticia.obtener_noticia");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Noticia_de_prensa", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
const respuesta_2 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Usuario", "POST", { where:JSON.stringify([ [ "id",
"=",
dato_1.id_de_autor ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_2,
this );
const dato_2 = respuesta_2.data.resultado[ 0 ];
this.noticia_de_prensa = dato_1;
this.autor = dato_2;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticia.mounted");
obtener_noticia: {
(await this.obtener_noticia(  ));}

averiguar_si_es_autor_de_noticia: {
this.es_autor_de_noticia = this.root.autentificacion.usuario.id === this.noticia_de_prensa.id_de_autor;}

} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);