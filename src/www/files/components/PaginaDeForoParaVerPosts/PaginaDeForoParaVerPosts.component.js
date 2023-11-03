
window.PaginaDeForoParaVerPosts = Castelog.metodos.un_componente_vue2("PaginaDeForoParaVerPosts",
  "<div class=\"PaginaDeForoParaVerPosts Component\">"
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
 + "              <span class=\"\">Tema de foro</span>"
 + "            </td>"
 + "            </tr>"
 + "          </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Foro',link:'/foro/ver/temas'}]\"></BreadcrumbGenerico>"
 + "        <h5>Tema de foro</h5>"
 + "        <div class=\"panel_principal\" style=\"\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button v-on:click=\"() => ir_a_crear_post()\">Crear post</button>"
 + "          </div>"
 + "          <div class=\"\" style=\"border: 1px solid #333; margin-bottom: 4px;\">"
 + "            <h5>{{ tema_de_posts.titulo }}</h5>"
 + "            <div style=\"color: #666; padding: 8px; padding-top: 4px;\">{{ tema_de_posts.descripcion }}</div>"
 + "          </div>"
 + "          <template v-if=\"posts_del_foro.length\">"
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
 + "              <template v-for=\"post, post_index in posts_del_foro\">"
 + "                <div class=\"post_en_lista\" v-bind:key=\"'foro-post-post-' + post_index\" v-on:click=\"() => ir_a_post(post_index)\">"
 + "                  <div class=\"titulo_de_post\">"
 + "                    {{ post.titulo }}"
 + "                  </div>"
 + "                  <div class=\"subtitulo_de_post\">"
 + "                    {{ post.subtitulo }}"
 + "                  </div>"
 + "                  <div class=\"autor_de_post\" v-if=\"autores_de_posts[post.id_de_autor]\">"
 + "                    Escrito el {{ post.fecha_de_creacion }} por «{{ autores_de_posts[post.id_de_autor].nombre }}»"
 + "                  </div>"
 + "                  <div class=\"contenido_de_post\" v-if=\"post.contenido\">"
 + "                    {{ post.contenido.substring(0, 50) }}..."
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
 + "            No hay posts en este tema del foro."
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
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.data");
return { pagina:1,
tema_de_posts:{ 
},
posts_del_foro:[  ],
autores_de_posts:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ir_a_crear_post() {try {
this.$router.history.push( "/foro/crear/post/para/tema/" + this.tema_de_posts.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_principio_de_paginacion");
this.pagina = 1;
const resultado = (await this.obtener_posts(  ));
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
const resultado = (await this.obtener_posts(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_posterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_posterior_de_paginacion");
this.pagina += 1;
const resultado = (await this.obtener_posts(  ));
if(resultado === 0) {
this.pagina -= 1;
}
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_post( post_index ) {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_post");
const post = this.posts_del_foro[ post_index ];
this.$router.history.push( "/foro/ver/post/" + post.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_posts() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.obtener_posts");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Post_de_foro", "POST", { where:JSON.stringify([ [ "id_de_tema",
"=",
this.$route.params.id ] ], null, 2),
page:this.pagina,
order:JSON.stringify([ [ "id",
"DESC" ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const datos_1 = respuesta_1.data.resultado;
if(datos_1.length === 0) {
return 0;
}
const ids_de_autores = datos_1.reduce( function( salida,
post ) {try {
if(salida.indexOf( post.id_de_autor ) === 0 - 1) {
salida.push( post.id_de_autor );
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
ids_de_autores.join( ";" ) ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_2,
this );
const datos_2 = respuesta_2.data.resultado;
const datos_de_autores = datos_2.reduce( function( salida,
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
const respuesta_3 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Tema_de_foro", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_3,
this );
const dato_3 = respuesta_3.data.resultado[ 0 ];
this.autores_de_posts = datos_de_autores;
this.posts_del_foro = datos_1;
this.tema_de_posts = dato_3;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
mounted() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.mounted");
this.obtener_posts(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);