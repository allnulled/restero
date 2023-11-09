
window.PaginaDeForoParaVerTemas = Castelog.metodos.un_componente_vue2("PaginaDeForoParaVerTemas",
  "<div class=\"PaginaDeForoParaVerTemas Component\">"
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
 + "              <span class=\"\">Foro</span>"
 + "            </td>"
 + "            </tr>"
 + "          </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Foro</h5>"
 + "        <div class=\"panel_principal\" style=\"\">"
 + "          <div class=\"panel_de_botones_superior\" v-if=\"es_administrador\">"
 + "            <button v-on:click=\"() => ir_a_crear_tema_de_foro()\">➕ Crear tema</button>"
 + "          </div>"
 + "          <template v-if=\"temas_del_foro.length\">"
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
 + "              <template v-for=\"tema, tema_index in temas_del_foro\">"
 + "                <div class=\"post_en_lista\" v-bind:key=\"'foro-tema-' + tema_index\" v-on:click=\"() => ir_a_tema(tema.id)\">"
 + "                  <div class=\"titulo_de_post\">"
 + "                    {{ tema.titulo }}"
 + "                  </div>"
 + "                  <div class=\"subtitulo_de_post\">"
 + "                    {{ tema.descripcion }}"
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
 + "            No hay temas en el foro."
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
temas_del_foro:[  ],
es_administrador:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ir_a_crear_tema_de_foro() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_crear_tema_de_foro");
this.$router.history.push( "/foro/crear/tema" );
} catch(error) {
console.log(error);
throw error;
}

},
async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_principio_de_paginacion");
this.pagina = 1;
const resultado = (await this.obtener_temas(  ));
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
const resultado = (await this.obtener_temas(  ));
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_posterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_posterior_de_paginacion");
this.pagina += 1;
const resultado = (await this.obtener_temas(  ));
if(resultado === 0) {
this.pagina -= 1;
}
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
ir_a_tema( id_tema ) {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.ir_a_tema");
this.$router.history.push( `/foro/ver/tema/${id_tema}` );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_temas() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.obtener_temas");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Tema_de_foro", "POST", { page:this.pagina
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const datos_1 = respuesta_1.data.resultado;
if(datos_1.length === 0) {
return 0;
}
this.temas_del_foro = datos_1;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async averiguar_si_es_administrador() {try {
this.es_administrador = this.root.autentificacion.permisos.reduce( function( salida,
permiso ) {try {
if(permiso.nombre === "permiso de administración") {
salida = true;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
false );
} catch(error) {
console.log(error);
throw error;
}

}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeForoParaVerPosts.mounted");
(await this.obtener_temas(  ));
(await this.averiguar_si_es_administrador(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);