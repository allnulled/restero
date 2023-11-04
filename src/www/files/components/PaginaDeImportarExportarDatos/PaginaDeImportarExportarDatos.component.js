
window.PaginaDeImportarExportarDatos = Castelog.metodos.un_componente_vue2("PaginaDeImportarExportarDatos",
  "<div class=\"PaginaDeImportarExportarDatos Component\">"
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
 + "                  <span class=\"\">Importar/Exportar datos</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Importar/Exportar datos</h5>"
 + "        <div style=\"padding: 3px; padding-top: 0px;\">"
 + "          <section class=\"tabs\">"
 + "            <menu role=\"tablist\">"
 + "              <button role=\"tab\" :aria-selected=\"seccion_seleccionada === 'importar'\" v-on:click=\"() => seleccionar_seccion('importar')\">↘ Importar</button>"
 + "              <button role=\"tab\" :aria-selected=\"seccion_seleccionada === 'exportar'\" v-on:click=\"() => seleccionar_seccion('exportar')\">↗ Exportar</button>"
 + "            </menu>"
 + "            <article role=\"tabpanel\" :hidden=\"seccion_seleccionada !== 'importar'\">"
 + "              <h5>↘ Importar datos masivamente</h5>"
 + "              <p>Selecciona el fichero (.ods | .xlsx | .xls):</p>"
 + "              <input type=\"file\" class=\"inputfile\" ref=\"importacion_de_datos\" />"
 + "              <div class=\"text_align_right\" style=\"padding-top: 4px;\">"
 + "                <button v-on:click=\"importar_datos_de_fichero\">↘ Importar datos de fichero</button>"
 + "              </div>"
 + "            </article>"
 + "            <article role=\"tabpanel\" :hidden=\"seccion_seleccionada !== 'exportar'\">"
 + "              <h5>↗ Exportar datos masivamente</h5>"
 + "              <p>Selecciona las tablas que quieres exportar:</p>"
 + "              <ul>"
 + "                <li v-for=\"tabla, tabla_index in root.esquema\" v-bind:key=\"'exportar-tabla-' + tabla_index\">"
 + "                  <input type=\"checkbox\" class=\"input_para_checkbox_1\" :id=\"'input-de-exportar-tabla-' + tabla.tabla\" :value=\"tabla.tabla\" v-model=\"tablas_seleccionadas\" />"
 + "                  <label :for=\"'input-de-exportar-tabla-' + tabla.tabla\">{{ tabla.tabla }}</label>"
 + "                </li>"
 + "              </ul>"
 + "              <div class=\"text_align_right\">"
 + "                <button v-on:click=\"exportar_datos_a_fichero\">↗ Exportar datos a fichero</button>"
 + "              </div>"
 + "            </article>"
 + "          </section>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeImportarExportarDatos.data");
return { tablas_seleccionadas:[  ],
seccion_seleccionada:'importar'
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ seleccionar_seccion( seccion ) {try {
console.log('[DEBUG]', "PaginaDeImportarExportarDatos.seleccionar_seccion");
this.seccion_seleccionada = seccion;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async importar_datos_de_fichero() {try {
console.log('[DEBUG]', "PaginaDeImportarExportarDatos.importar_datos_de_fichero");
const fichero = this.$refs.importacion_de_datos.files[ 0 ];
const datos_de_formulario = new FormData(  );
datos_de_formulario.append( "fichero",
fichero );
const respuesta_de_subida = (await Castelog.metodos.una_peticion_http("/api/v1/db/import/excel", "POST", datos_de_formulario, { "Content-Type":"multipart/form-data",
authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_de_subida,
this );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async exportar_datos_a_fichero() {try {
console.log('[DEBUG]', "PaginaDeImportarExportarDatos.exportar_datos_a_fichero");
const formulario = document.createElement( "form" );
formulario.style.display = "none";
formulario.method = "POST";
formulario.action = "/api/v1/db/export/excel";
const entrada_de_token = document.createElement( "input" );
entrada_de_token.type = "text";
entrada_de_token.name = "authorization";
entrada_de_token.value = this.root.token_de_sesion;
const entrada_de_tablas = document.createElement( "input" );
entrada_de_tablas.type = "text";
entrada_de_tablas.name = "tablas";
entrada_de_tablas.value = JSON.stringify(this.tablas_seleccionadas, null, 2);
document.body.appendChild( formulario );
formulario.appendChild( entrada_de_tablas );
formulario.appendChild( entrada_de_token );
formulario.submit(  );
formulario.remove(  );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
}
};},
  null);