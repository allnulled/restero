
window.PaginaDePanelDeAdministracion = Castelog.metodos.un_componente_vue2("PaginaDePanelDeAdministracion",
  "<div class=\"PaginaDePanelDeAdministracion Component\">"
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
 + "                  <span class=\"\">Panel de administración</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Secciones</h5>"
 + "        <ul>"
 + "          <li v-for=\"tabla, tabla_index in root.esquema\" v-bind:key=\"'tabla-de-esquema-' + tabla_index\">"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/explorador/' + tabla.tabla)\">"
 + "              {{ $window.utilidades.busco_atributo_en_tabla(tabla, 'nombre_humano', $window.utilidades.texto_humanizado(tabla.tabla)) }}"
 + "            </span>"
 + "          </li>"
 + "        </ul>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDePanelDeAdministracion.data");
return { esquema:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ abrir_pagina_de( pagina ) {try {
console.log('[DEBUG]', "PaginaDePanelDeAdministracion.abrir_pagina_de");
this.$router.history.push( pagina );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {
}
};},
  null);