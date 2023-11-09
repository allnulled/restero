
window.PaginaDePrensaParaVerNoticias = Castelog.metodos.un_componente_vue2("PaginaDePrensaParaVerNoticias",
  "<div class=\"PaginaDePrensaParaVerNoticias Component\">"
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
 + "              <span class=\"\">Noticias</span>"
 + "            </td>"
 + "            </tr>"
 + "          </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Noticias</h5>"
 + "        <div class=\"panel_principal\" style=\"\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button v-on:click=\"() => ir_a_crear_noticia()\">➕ Crear noticia</button>"
 + "          </div>"
 + "          <template v-if=\"noticias_de_prensa.length\">"
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
 + "              <template v-for=\"noticia, noticia_index in noticias_de_prensa\">"
 + "                <div class=\"post_en_lista\" v-bind:key=\"'foro-noticia-noticia-' + noticia_index\" v-on:click=\"() => ir_a_noticia(noticia.id)\">"
 + "                  <div class=\"titulo_de_post\">"
 + "                    {{ noticia.titulo }}"
 + "                  </div>"
 + "                  <div class=\"subtitulo_de_post\">"
 + "                    {{ noticia.subtitulo }}"
 + "                  </div>"
 + "                  <div class=\"autor_de_post\" v-if=\"autores_de_noticias[noticia.id_de_autor]\">"
 + "                    Escrito el {{ noticia.fecha_de_creacion }} por «{{ autores_de_noticias[noticia.id_de_autor].nombre }}»"
 + "                  </div>"
 + "                  <div class=\"contenido_de_post\" v-if=\"noticia.contenido\">"
 + "                    {{ noticia.contenido.substring(0, 50) }}..."
 + "                  </div>"
 + "                  <div class=\"tags_de_post\" v-if=\"noticia.tags\">"
 + "                    Tags: {{ noticia.tags }}"
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
 + "            No hay noticias actualmente."
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
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.data");
return { pagina:1,
noticias_de_prensa:[  ],
autores_de_noticias:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ir_a_crear_noticia() {try {
this.$router.history.push( "/prensa/crear/noticia" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.ir_a_principio_de_paginacion");
this.pagina = 1;
const resultado = (await this.obtener_noticias(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.ir_a_anterior_de_paginacion");
if(this.pagina === 1) {
return;
}
this.pagina -= 1;
const resultado = (await this.obtener_noticias(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_posterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.ir_a_posterior_de_paginacion");
this.pagina += 1;
const resultado = (await this.obtener_noticias(  ));
if(resultado === 0) {
this.pagina -= 1;
}
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_noticia( id_noticia ) {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.ir_a_noticia");
this.$router.history.push( "/prensa/ver/noticia/" + id_noticia );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_noticias() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.obtener_noticias");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Noticia_de_prensa", "POST", { page:this.pagina,
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
noticia ) {try {
if(salida.indexOf( noticia.id_de_autor ) === 0 - 1) {
salida.push( noticia.id_de_autor );
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
this.autores_de_noticias = datos_de_autores;
this.noticias_de_prensa = datos_1;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
mounted() {try {
console.log('[DEBUG]', "PaginaDePrensaParaVerNoticias.mounted");
this.obtener_noticias(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);