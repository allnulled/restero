
window.PaginaDeEscuelaParaVerCurso = Castelog.metodos.un_componente_vue2("PaginaDeEscuelaParaVerCurso",
  "<div class=\"PaginaDeEscuelaParaVerCurso Component\">"
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
 + "                  <span class=\"\">Ver curso</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" v-if=\"curso_de_escuela\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Escuela',link:'/escuela/ver/cursos'}]\"></BreadcrumbGenerico>"
 + "        <h5>Ver curso</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"lista_de_cursos\">"
 + "            <div class=\"curso_en_lista nohover\">"
 + "              <div class=\"titulo_de_curso\">{{ curso_de_escuela.titulo }}</div>"
 + "              <div class=\"fecha_de_creacion_de_curso\">"
 + "                Escrito el {{ curso_de_escuela.fecha_de_creacion }}"
 + "              </div>"
 + "              <div class=\"descripcion_de_curso\">"
 + "                <div>{{ curso_de_escuela.descripcion }}</div>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <table>"
 + "              <tr>"
 + "                <td>"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion()\"> «« </button>"
 + "                </td>"
 + "                <td>"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion()\"> « </button>"
 + "                </td>"
 + "                <td style=\"width: 100%; text-align: center;\">Página {{ pagina_de_lecciones }}</td>"
 + "                <td>"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_posterior_de_paginacion()\"> » </button>"
 + "                </td>"
 + "                <td style=\"display: none;\">"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion()\"> »» </button>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "          </div>"
 + "          <div class=\"panel_principal\">"
 + "            <div class=\"lista_de_lecciones\">"
 + "              <div class=\"leccion_en_lista\" v-on:click=\"() => ir_a_leccion(leccion.id)\" v-for=\"leccion, leccion_index in lecciones_de_curso\" v-bind:key=\"'leccion-' + leccion_index\">"
 + "                <div class=\"titulo_de_leccion\">{{ leccion.titulo }}</div>"
 + "                <div class=\"fecha_de_creacion_de_leccion\">"
 + "                  Escrito el {{ leccion.fecha_de_creacion }}"
 + "                </div>"
 + "                <div class=\"descripcion_de_leccion\">"
 + "                  <div>{{ leccion.descripcion }}</div>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <table>"
 + "              <tr>"
 + "                <td>"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_principio_de_paginacion()\"> «« </button>"
 + "                </td>"
 + "                <td>"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_anterior_de_paginacion()\"> « </button>"
 + "                </td>"
 + "                <td style=\"width: 100%; text-align: center;\">Página {{ pagina_de_lecciones }}</td>"
 + "                <td>"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_posterior_de_paginacion()\"> » </button>"
 + "                </td>"
 + "                <td style=\"display: none;\">"
 + "                  <button style=\"min-width: auto;\" v-on:click=\"() => ir_a_final_de_paginacion()\"> »» </button>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
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
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.data");
return { es_administrador:false,
curso_de_escuela:{ 
},
lecciones_de_curso:[  ],
pagina_de_lecciones:1
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ir_a_leccion( id_leccion ) {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.ir_a_leccion");
this.$router.history.push( "/escuela/ver/leccion/" + id_leccion );
} catch(error) {
console.log(error);
throw error;
}

},
async ir_a_principio_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.ir_a_principio_de_paginacion");
this.pagina_de_lecciones = 1;
(await this.obtener_lecciones(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_anterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.ir_a_anterior_de_paginacion");
if(this.pagina_de_lecciones === 1) {
return;
}
this.pagina_de_lecciones -= 1;
(await this.obtener_lecciones(  ));
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async ir_a_posterior_de_paginacion() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.ir_a_posterior_de_paginacion");
if((!(this.lecciones_de_curso.length === 20))) {
return;
}
this.pagina_de_lecciones += 1;
const resultados = (await this.obtener_lecciones(  ));
if(resultados === 0) {
this.pagina_de_lecciones -= 1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_curso() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.obtener_curso");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Curso_de_escuela", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
this.curso_de_escuela = dato_1;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_lecciones() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.obtener_lecciones");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Leccion_de_curso_de_escuela", "POST", { where:JSON.stringify([ [ "id_de_curso",
"=",
this.$route.params.id ] ], null, 2),
page:this.pagina_de_lecciones,
order:JSON.stringify([ [ "id",
"asc" ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const datos_1 = respuesta_1.data.resultado;
if(datos_1.length === 0) {
return 0;
}
this.lecciones_de_curso = datos_1;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerCurso.mounted");
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

obtener_curso: {
this.obtener_curso(  );}

obtener_lecciones: {
this.obtener_lecciones(  );}

} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);