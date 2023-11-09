
window.PaginaDeForoParaEditarTema = Castelog.metodos.un_componente_vue2("PaginaDeForoParaEditarTema",
  "<div class=\"PaginaDeForoParaEditarTema Component\">"
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
 + "                  <span class=\"\">{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} tema</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Foro',link:'/foro/ver/temas'}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ modalidad === \"crear\" ? \"Crear\" : \"Editar\" }} tema</h5>"
 + "        <div class=\"\">"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Título del tema:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"tema.titulo\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Descripción del tema:</div>"
 + "            <textarea v-model=\"tema.descripcion\"></textarea>"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Tags:</div>"
 + "            <textarea v-model=\"tema.tags\"></textarea>"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Sección del tema:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"tema.seccion\" />"
 + "          </div>"
 + "          <div class=\"campo_de_formulario\">"
 + "            <div class=\"enunciado_de_campo_de_formulario\">Orden del tema:</div>"
 + "            <input style=\"width: 100%;\" type=\"text\" v-model=\"tema.orden\" />"
 + "          </div>"
 + "          <div class=\"panel_de_botones_inferior\">"
 + "            <button v-if=\"modalidad === 'crear'\" v-on:click=\"() => crear_tema()\">➕ Crear tema</button>"
 + "            <button v-else-if=\"modalidad === 'editar'\" v-on:click=\"() => guardar_tema()\">💾 Guardar tema</button>"
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
return { es_administrador:false,
tema:{ id_de_tema:this.$route.params.tema
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_tema() {try {
console.log('[DEBUG]', "PaginaDeForoParaEditarTema.crear_tema");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/insert/Tema_de_foro", "POST", { 
...(this.tema )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/foro/ver/temas" );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async guardar_tema() {try {
console.log('[DEBUG]', "PaginaDeForoParaEditarTema.guardar_tema");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/update/Tema_de_foro/" + this.$route.params.id, "POST", { id:this.$route.params.id,

...(this.tema )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
console.log(respuesta_1);
this.$router.history.push( "/foro/ver/tema/" + this.tema.id );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeForoParaEditarTema.mounted");
if(this.modalidad === "editar") {
const tema_id = this.$route.params.id;
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Tema_de_foro", "POST", { where:JSON.stringify([ [ "id",
"=",
tema_id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
const dato_1 = respuesta_1.data.resultado[ 0 ];
if(typeof dato_1 === 'undefined') {
return;
}
this.tema = dato_1;
}
else if(this.modalidad === "crear") {
this.tema.id_de_tema = this.$route.params.tema;
}
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);