
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
 + "        <div style=\"padding-left: 20px\">"
 + "          <details>"
 + "            <summary>Datos de sesión</summary>"
 + "            <p>"
 + "              <ul>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Usuario</summary>"
 + "                    <p>"
 + "                      <ul>"
 + "                        <li>ID: {{ root.autentificacion.usuario.id }}</li>"
 + "                        <li>Nombre: {{ root.autentificacion.usuario.nombre }}</li>"
 + "                      </ul>"
 + "                    </p>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Sesión</summary>"
 + "                    <p>"
 + "                      <ul>"
 + "                        <li>ID: {{ root.autentificacion.sesion.id }}</li>"
 + "                        <li>Token: <div class=\"texto_monoespaciado texto_resaltado_para_copiar\">{{ root.autentificacion.sesion.token_de_sesion }}</div></li>"
 + "                      </ul>"
 + "                    </p>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Permisos</summary>"
 + "                    <p>"
 + "                      <ul>"
 + "                        <li v-for=\"permiso, permiso_index in root.autentificacion.permisos\" v-bind:key=\"'permiso-' + permiso_index\">"
 + "                          <ul>"
 + "                            <li>ID: {{ permiso.id }}</li>"
 + "                            <li>Nombre: {{ permiso.nombre }}</li>"
 + "                            <li>Descripción: {{ permiso.descripcion }}</li>"
 + "                          </ul>"
 + "                        </li>"
 + "                      </ul>"
 + "                    </p>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Grupos</summary>"
 + "                    <p>"
 + "                      <ul>"
 + "                        <li v-for=\"grupo, grupo_index in root.autentificacion.grupos\" v-bind:key=\"'grupo-' + grupo_index\">"
 + "                          <ul>"
 + "                            <li>ID: {{ grupo.id }}</li>"
 + "                            <li>Nombre: {{ grupo.nombre }}</li>"
 + "                            <li>Descripción: {{ grupo.descripcion }}</li>"
 + "                          </ul>"
 + "                        </li>"
 + "                      </ul>"
 + "                    </p>"
 + "                  </details>"
 + "                </li>"
 + "              </ul>"
 + "            </p>"
 + "          </details>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDePanelDeConfiguraciones.data");
return { esquema:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ abrir_pagina_de( pagina ) {try {
console.log('[DEBUG]', "PaginaDePanelDeConfiguraciones.abrir_pagina_de");
this.$router.history.push( pagina );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {
}
};},
  null);