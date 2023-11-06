
window.PaginaDeEscuelaParaEditarLeccion = Castelog.metodos.un_componente_vue2("PaginaDeEscuelaParaEditarLeccion",
  "<div class=\"PaginaDeEscuelaParaEditarLeccion Component\">"
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
 + "                  <span class=\"\">{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} leccion</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Escuela',link:'/escuela/ver/leccions'}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} lección</h5>"
 + "        <div class=\"\">"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">ID de curso:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"leccion.id_de_curso\" disabled=\"true\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Título del lección:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"leccion.titulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Descripción del leccion:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"leccion.descripcion\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Contenido de la lección:</div>"
 + "            <textarea v-model=\"leccion.contenido\" placeholder=\"Este campo acepta HTML.\"></textarea>"
 + "          </div>"
 + "          <div class=\"panel_de_botones_inferior\">"
 + "            <button v-if=\"modalidad === 'crear'\" v-on:click=\"() => crear_leccion()\">➕ Crear lección</button>"
 + "            <button v-else-if=\"modalidad === 'editar'\" v-on:click=\"() => guardar_leccion()\">💾 Guardar lección</button>"
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
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarLeccion.data");
return { es_administrador:false,
leccion:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_leccion() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarLeccion.rear_leccion");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Leccion_de_curso_de_escuela", "POST", { 
...(this.leccion )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/escuela/ver/curso/" + this.$route.params.id_de_curso );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async guardar_leccion() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarLeccion.uardar_leccion");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/update/Leccion_de_curso_de_escuela/" + this.$route.params.id, "POST", { id:this.$route.params.id,

...(this.leccion )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/escuela/ver/leccion/" + this.leccion.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeEscuelaParaEditarLeccion.mounted");
if(this.modalidad === "editar") {
const leccion_id = this.$route.params.id;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Leccion_de_curso_de_escuela", "POST", { where:JSON.stringify([ [ "id",
"=",
leccion_id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
if(typeof dato_1 === 'undefined') {
return;
}
this.leccion = dato_1;
this.$forceUpdate( true );
}
else if(this.modalidad === "crear") {
this.leccion.id_de_curso = this.$route.params.id_de_curso;
this.$forceUpdate( true );
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);