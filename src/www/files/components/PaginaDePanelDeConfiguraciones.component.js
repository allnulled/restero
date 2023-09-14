
window.PaginaDePanelDeConfiguraciones = Castelog.metodos.un_componente_vue2("PaginaDePanelDeConfiguraciones",
  "<div class=\"PaginaDePanelDeConfiguraciones Component\">"
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
 + "                  <span class=\"\">Configuraciones</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Configuraciones</h5>"
 + "        <details>"
 + "          <summary>Datos de sesión</summary>"
 + "          <p>"
 + "            <ul>"
 + "              <li>"
 + "                <details>"
 + "                  <summary>Usuario</summary>"
 + "                  <p>{{ root.autentificacion.usuario }}</p>"
 + "                </details>"
 + "              </li>"
 + "              <li>"
 + "                <details>"
 + "                  <summary>Sesión</summary>"
 + "                  <p>{{ root.autentificacion.sesion }}</p>"
 + "                </details>"
 + "              </li>"
 + "              <li>"
 + "                <details>"
 + "                  <summary>Permisos</summary>"
 + "                  <p>{{ root.autentificacion.permisos }}</p>"
 + "                </details>"
 + "              </li>"
 + "              <li>"
 + "                <details>"
 + "                  <summary>Grupos</summary>"
 + "                  <p>{{ root.autentificacion.grupos }}</p>"
 + "                </details>"
 + "              </li>"
 + "            </ul>"
 + "          </p>"
 + "        </details>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { esquema:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ abrir_pagina_de( pagina ) {try {
this.$router.history.push( pagina );
} catch(error) {
console.log(error);
throw error;
}

}
},
async mounted() {
}
};},
  null);