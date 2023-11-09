
window.PaginaDeEscuelaParaEditarCurso = Castelog.metodos.un_componente_vue2("PaginaDeEscuelaParaEditarCurso",
  "<div class=\"PaginaDeEscuelaParaEditarCurso Component\">"
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
 + "                  <span class=\"\">{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} curso</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Escuela',link:'/escuela/ver/cursos'}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} curso</h5>"
 + "        <div class=\"\">"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Título del curso:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"curso.titulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Descripción del curso:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"curso.descripcion\" />"
 + "          </div>"
 + "          <div class=\"panel_de_botones_inferior\">"
 + "            <button v-if=\"modalidad === 'crear'\" v-on:click=\"() => crear_curso()\">➕ Crear curso</button>"
 + "            <button v-else-if=\"modalidad === 'editar'\" v-on:click=\"() => guardar_curso()\">💾 Guardar curso</button>"
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
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarCurso.data");
return { es_administrador:false,
curso:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_curso() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarCurso.crear_curso");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Curso_de_escuela", "POST", { 
...(this.curso )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/escuela/ver/cursos" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async guardar_curso() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarCurso.guardar_curso");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/update/Curso_de_escuela/" + this.$route.params.id, "POST", { id:this.$route.params.id,

...(this.curso )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/escuela/ver/curso/" + this.curso.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarCurso.mounted");
if(this.modalidad === "editar") {
const curso_id = this.$route.params.id;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Curso_de_escuela", "POST", { where:JSON.stringify([ [ "id",
"=",
curso_id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
if(typeof dato_1 === 'undefined') {
return;
}
this.curso = dato_1;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);