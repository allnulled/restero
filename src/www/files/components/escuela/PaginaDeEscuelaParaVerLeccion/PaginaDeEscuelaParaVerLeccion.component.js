
window.PaginaDeEscuelaParaVerLeccion = Castelog.metodos.un_componente_vue2("PaginaDeEscuelaParaVerLeccion",
  "<div class=\"PaginaDeEscuelaParaVerLeccion Component\">"
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
 + "                  <span class=\"\">Ver lección</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" v-if=\"leccion\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Escuela',link:'/escuela/ver/cursos'},{texto:'Curso',link:'/escuela/ver/curso/'+leccion.id_de_curso}]\"></BreadcrumbGenerico>"
 + "        <h5>Ver lección</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"lista_de_cursos\">"
 + "            <div class=\"curso_en_lista nohover\">"
 + "              <div class=\"titulo_de_curso\">{{ leccion.titulo }}</div>"
 + "              <div class=\"descripcion_de_curso\" v-if=\"curso_de_leccion\">"
 + "                Pertenece al curso «{{ curso_de_leccion.titulo }}»"
 + "              </div>"
 + "              <div class=\"fecha_de_creacion_de_curso\">"
 + "                Escrito el {{ leccion.fecha_de_creacion }}"
 + "              </div>"
 + "              <div class=\"descripcion_de_curso\">"
 + "                <div>{{ leccion.descripcion }}</div>"
 + "              </div>"
 + "              <div class=\"descripcion_de_curso\">"
 + "                <div v-html=\"leccion.contenido\"></div>"
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
console.log('[DEBUG]', "PaginaDeEscuelaParaVerLeccion.data");
return { leccion:false,
curso_de_leccion:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async obtener_leccion() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerLeccion.obtener_leccion");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Leccion_de_curso_de_escuela", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
this.leccion = dato_1;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async obtener_curso() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerLeccion.obtener_curso");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Curso_de_escuela", "POST", { where:JSON.stringify([ [ "id",
"=",
this.leccion.id_de_curso ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
this.curso_de_leccion = dato_1;
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaVerLeccion.mounted");
obtener_leccion: {
this.obtener_leccion(  );}

obtener_curso: {
this.obtener_curso(  );}

} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);