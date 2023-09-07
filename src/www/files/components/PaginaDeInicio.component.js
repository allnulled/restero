
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