
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
 + "          <li>"
 + "            <span class=\"como_link\" v-on:click=\"() => abrir_pagina_de('/blog/ver/posts')\">"
 + "              Blog"
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