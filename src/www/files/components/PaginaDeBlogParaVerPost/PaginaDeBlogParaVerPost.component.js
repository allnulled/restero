
window.PaginaDeBlogParaVerPost = Castelog.metodos.un_componente_vue2("PaginaDeBlogParaVerPost",
  "<div class=\"PaginaDeBlogParaVerPost Component\">"
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
 + "                  <span class=\"\">Ver post</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Blog',link:'/blog/ver/posts'}]\"></BreadcrumbGenerico>"
 + "        <h5>Ver post</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"panel_de_botones_superior\" v-if=\"es_administrador\">"
 + "            <button v-on:click=\"() => ir_a_editar_post()\">Editar post</button>"
 + "          </div>"
 + "          <div class=\"ver_post\">"
 + "            <div class=\"titulo_de_post\">{{ post_del_blog.titulo }}</div>"
 + "            <div class=\"subtitulo_de_post\">{{ post_del_blog.subtitulo }}</div>"
 + "            <table>"
 + "              <tr>"
 + "                <td>"
 + "                  <div class=\"autor_de_post\">Escrito por: {{ autor.nombre }}</div>"
 + "                </td>"
 + "                <td style=\"width: 100%;\"></td>"
 + "                <td>"
 + "                  <div class=\"fecha_de_creacion_de_post\">Creado el: {{ post_del_blog.fecha_de_creacion }}</div>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "            <div class=\"contenido_de_post\">{{ post_del_blog.contenido }}</div>"
 + "          </div>"
 + "          <div class=\"panel_de_comentarios\" style=\"margin-top: 4px;\">"
 + "            <div class=\"ver_post\">"
 + "              <h5>Ver comentarios</h5>"
 + "              <div style=\"padding: 4px; padding-top: 0px;\">"
 + "                <div class=\"panel_de_botones_superior\" style=\"text-align: left;\">"
 + "                  <button style=\"width: 100%;\" v-on:click=\"() => abrir_creador_de_comentarios()\" v-if=\"!esta_mostrando_creador_de_comentario\">Crear comentario</button>"
 + "                  <div class=\"panel_de_creador_de_comentarios\" v-else>"
 + "                    <div>Escribe tu comentario aquí:</div>"
 + "                    <textarea v-model=\"nuevo_comentario\" :disabled=\"esta_creando_comentario\"></textarea>"
 + "                    <div style=\"text-align: right;\" v-if=\"!esta_creando_comentario\">"
 + "                      <button v-on:click=\"() => crear_comentario()\">Subir comentario</button>"
 + "                    </div>"
 + "                    <div role=\"progressbar\" class=\"animate\" v-else>"
 + "                      <div style=\"width: 100%;\"></div>"
 + "                    </div>"
 + "                  </div>"
 + "                </div>"
 + "                <div class=\"panel_de_botones_superior\">"
 + "                  <table>"
 + "                    <tr>"
 + "                      <td>"
 + "                        <button style=\"min-width: auto;\" v-on:click=\"() => id_a_principio_de_comentarios()\"> «« </button>"
 + "                      </td>"
 + "                      <td>"
 + "                        <button style=\"min-width: auto;\" v-on:click=\"() => id_a_anterior_de_comentarios()\"> « </button>"
 + "                      </td>"
 + "                      <td style=\"width: 100%;\"></td>"
 + "                      <td>"
 + "                        <button style=\"min-width: auto;\" v-on:click=\"() => id_a_siguiente_de_comentarios()\"> » </button>"
 + "                      </td>"
 + "                    </tr>"
 + "                  </table>"
 + "                </div>"
 + "                <template v-for=\"comentario, comentario_index in comentarios\">"
 + "                  <div class=\"ver_post\" style=\"margin-bottom: 4px;\" v-bind:key=\"'comentario-' + comentario_index\">"
 + "                    <table>"
 + "                      <tr>"
 + "                        <td>"
 + "                          <div class=\"autor_de_post\">"
 + "                            Escrito por: {{ autores_de_comentarios[comentario.id_de_autor].nombre }}"
 + "                          </div>"
 + "                        </td>"
 + "                        <td style=\"width: 100%;\">"
 + "                        </td>"
 + "                        <td>"
 + "                          <div class=\"fecha_de_creacion_de_post\">"
 + "                            Creado el: {{ comentario.fecha_de_creacion }}"
 + "                          </div>"
 + "                        </td>"
 + "                      </tr>"
 + "                    </table>"
 + "                    <div class=\"contenido_de_post\">"
 + "                      {{ comentario.contenido }}"
 + "                    </div>"
 + "                  </div>"
 + "                </template>"
 + "              </div>"
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
return { es_administrador:false,
post_del_blog:{ 
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
methods:{ abrir_creador_de_comentarios() {try {
this.esta_mostrando_creador_de_comentario = true;
} catch(error) {
console.log(error);
throw error;
}

},
async crear_comentario() {try {
this.esta_creando_comentario = true;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Comentario_de_post_de_blog", "POST", { 
...({ id_de_post_de_blog:this.$route.params.id,
contenido:this.nuevo_comentario
} )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.esta_mostrando_creador_de_comentario = false;
this.esta_creando_comentario = false;
this.nuevo_comentario = "";
(await this.obtener_comentarios(  ));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_editar_post() {try {
this.$router.history.push( "/blog/editar/post/" + this.$route.params.id );
} catch(error) {
console.log(error);
throw error;
}

},
async id_a_principio_de_comentarios() {try {
this.pagina_de_comentarios = 1;
(await this.obtener_comentarios(  ));
} catch(error) {
console.log(error);
throw error;
}

},
async id_a_anterior_de_comentarios() {try {
if(this.pagina_de_comentarios === 1) {
return;
}
this.pagina_de_comentarios -= 1;
(await this.obtener_comentarios(  ));
} catch(error) {
console.log(error);
throw error;
}

},
async id_a_siguiente_de_comentarios() {try {
this.pagina_de_comentarios += 1;
const resultados = (await this.obtener_comentarios(  ));
if(resultados === 0) {
this.pagina_de_comentarios -= 1;
}
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_post() {try {
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Post_de_blog", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
const dato_1 = respuesta_1.data.resultado[ 0 ];
const respuesta_2 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Usuario", "POST", { where:JSON.stringify([ [ "id",
"=",
dato_1.id_de_autor ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
const dato_2 = respuesta_2.data.resultado[ 0 ];
this.post_del_blog = dato_1;
this.autor = dato_2;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_comentarios() {try {
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Comentario_de_post_de_blog", "POST", { where:JSON.stringify([ [ "id_de_post_de_blog",
"=",
this.$route.params.id ] ], null, 2),
order:JSON.stringify([ [ "id",
"desc" ] ], null, 2),
page:this.pagina_de_comentarios
}, { authorization:this.root.token_de_sesion
}, null, null));
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
const datos_2 = respuesta_2.data.resultado;
const autores_de_comentarios = datos_2.reduce( function( salida,
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
this.comentarios = datos_1;
this.autores_de_comentarios = autores_de_comentarios;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
async mounted() {try {
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

obtener_post: {
this.obtener_post(  );}

obtener_comentarios: {
this.obtener_comentarios(  );}

} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);