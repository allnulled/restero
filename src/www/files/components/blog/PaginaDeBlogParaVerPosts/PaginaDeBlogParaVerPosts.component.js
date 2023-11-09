
window.PaginaDeBlogParaVerPosts = Castelog.metodos.un_componente_vue2("PaginaDeBlogParaVerPosts",
  "<div class=\"PaginaDeBlogParaVerPosts Component\">"
 + "    <div class=\"window\">"
 + "      <div class=\"title-bar\">"
 + "        <div class=\"title-bar-text\">"
 + "          <table class=\"\">"
 + "          <tbody>"
 + "            <tr>"
 + "            <td>"
 + "              <span class=\"partenon\" v-on:click=\"() => $router.history.push('/')\">🏛️</span>"
 + "            </td>"
 + "            <td>"
 + "              <span class=\"\">Blog</span>"
 + "            </td>"
 + "            </tr>"
 + "          </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Blog</h5>"
 + "        <div class=\"panel_principal\" style=\"\">"
 + "          <div class=\"panel_de_botones_superior\" v-if=\"es_administrador\">"
 + "            <button v-on:click=\"() => ir_a_crear_post()\">➕ Crear post</button>"
 + "          </div>"
 + "          <template v-if=\"posts_del_blog.length\">"
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
 + "            <div class=\"lista_de_posts\">"
 + "              <template v-for=\"post, post_index in posts_del_blog\">"
 + "                <div class=\"post_en_lista\" v-bind:key=\"'blog-post-' + post_index\" v-on:click=\"() => ir_a_post(post_index)\">"
 + "                  <div class=\"titulo_de_post\">"
 + "                  {{ post.titulo }}"
 + "                  </div>"
 + "                  <div class=\"subtitulo_de_post\" v-if=\"post.subtitulo\">"
 + "                  {{ post.subtitulo }}"
 + "                  </div>"
 + "                  <div class=\"autor_de_post\">"
 + "                    Escrito el {{ post.fecha_de_creacion }} por «{{ autores[post.id_de_autor].nombre }}»"
 + "                  </div>"
 + "                  <div class=\"contenido_de_post\" v-if=\"post.contenido\">"
 + "                    {{ post.contenido.substr(0, 50) }}..."
 + "                  </div>"
 + "                  <div class=\"tags_de_post\">"
 + "                    Tags: {{ post.tags }}"
 + "                  </div>"
 + "                </div>"
 + "              </template>"
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
 + "          </template>"
 + "          <div v-else>"
 + "            No hay posts en el blog."
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
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.data");
return { pagina:1,
es_administrador:false,
posts_del_blog:[  ],
autores:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ ir_a_crear_post() {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.ir_a_crear_post");
this.$router.history.push( "/blog/crear/post" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_post( post_index ) {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.ir_a_post");
const post = this.posts_del_blog[ post_index ];
this.$router.history.push( `/blog/ver/post/${post.id}` );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.ir_a_principio_de_paginacion");
this.pagina = 1;
const resultado = (await this.obtener_datos(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.ir_a_anterior_de_paginacion");
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
async ir_a_posterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.ir_a_posterior_de_paginacion");
this.pagina += 1;
const resultado = (await this.obtener_datos(  ));
this.$forceUpdate( true );
if(resultado === 0) {
this.pagina -= 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_datos() {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.obtener_datos");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Post_de_blog", "POST", { order:JSON.stringify([ [ "id",
"desc" ] ], null, 2),
page:this.pagina
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if(respuesta_1.data.resultado.length === 0) {
return 0;
}
const datos_1 = respuesta_1.data.resultado.sort( function( a,
b ) {try {
if(a.id < b.id) {
return 1;
}
if(a.id > b.id) {
return 0 - 1;
}
return 0;
} catch(error) {
console.log(error);
throw error;
}

} );
const ids_de_autores = datos_1.map( function( post_de_blog ) {try {
return post_de_blog.id_de_autor;
} catch(error) {
console.log(error);
throw error;
}

} ).reduce( function( salida,
id_de_autor ) {try {
if(salida.indexOf( id_de_autor ) === 0 - 1) {
salida.push( id_de_autor );
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
[  ] );
const respuesta_2 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Usuario", "POST", { where:JSON.stringify([ [ "id",
"in",
ids_de_autores.join( ";" ) ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_2,
this );
const datos_2 = respuesta_2.data.resultado;
const datos_2_mapeado = datos_2.reduce( function( salida,
autor ) {try {
salida[ autor.id ] = autor;
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
{ 
} );
this.posts_del_blog = datos_1;
this.autores = datos_2_mapeado;
return this.posts_del_blog.length;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeBlogParaVerPosts.mounted");
averiguar_si_es_administrador: {
this.es_administrador = this.root.autentificacion.permisos.reduce( function( salida,
permiso ) {try {
if(permiso.nombre === "permiso de administración") {
return true;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
false );}

obtener_datos: {
(await this.obtener_datos(  ));}

this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);