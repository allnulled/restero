
window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
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
 + "                  <span class=\"\">Inicio</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div v-if=\"root.esquema\" class=\"window-body\">"
 + "        <h5>Inicio</h5>"
 + "        <ul>"
 + "          <li v-if=\"tiene_blog\">"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/blog/ver/posts')\">"
 + "              Blog"
 + "            </span>"
 + "          </li>"
 + "          <li v-if=\"tiene_foro\">"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/foro/ver/temas')\">"
 + "              Foro"
 + "            </span>"
 + "          </li>"
 + "          <li v-if=\"tiene_mensajeria\">"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/mensajes/inicio')\">"
 + "              Mensajes"
 + "            </span>"
 + "          </li>"
 + "          <li>"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/administracion')\">"
 + "              Panel de administración"
 + "            </span>"
 + "          </li>"
 + "          <li v-if=\"$window.utilidades.es_administrador(root.autentificacion)\">"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/importar_exportar_datos')\">"
 + "              Importar o exportar datos"
 + "            </span>"
 + "          </li>"
 + "          <li>"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/configuraciones')\">"
 + "              Configuraciones"
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
console.log('[DEBUG]', "PaginaDeInicio.data");
return { tiene_blog:false,
tiene_foro:false,
tiene_mensajeria:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ abrir_pagina_de( pagina ) {try {
console.log('[DEBUG]', "PaginaDeInicio.abrir_pagina_de");
this.$router.history.push( pagina );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeInicio.mounted");
this.tiene_blog = this.root.esquema.reduce( function( salida,
tabla ) {try {
if(tabla.tabla === "Post_de_blog") {
salida = true;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
false );
this.tiene_foro = this.root.esquema.reduce( function( salida,
tabla ) {try {
if(tabla.tabla === "Post_de_foro") {
salida = true;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
false );
this.tiene_mensajeria = this.root.esquema.reduce( function( salida,
tabla ) {try {
if(tabla.tabla === "Mensaje_de_mensajeria") {
salida = true;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
false );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);