
window.PaginaDeAsambleaInicio = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaInicio",
  "<div class=\"PaginaDeAsambleaInicio Component\">"
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
 + "                  <span class=\"\">Asamblea</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'}]\"></BreadcrumbGenerico>"
 + "        <h5>Asamblea</h5>"
 + "        <div class=\"\" style=\"text-align: center;\">"
 + "          <ul class=\"lista_de_menu_principal\" style=\"display: inline-block; padding: 0;\">"
 + "            <li>"
 + "              <span class=\"como_link\" v-on:click=\"() => ir_a_votaciones()\">Votaciones</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeAsambleaInicio.data");
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ ir_a_votaciones() {try {
console.log('[DEBUG]', "PaginaDeAsambleaInicio.ir_a_votaciones");
this.$router.history.push( "/asamblea/ver/votaciones" );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_problemas() {try {
console.log('[DEBUG]', "PaginaDeAsambleaInicio.ir_a_problemas");
this.$router.history.push( "/asamblea/ver/problemas" );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_soluciones() {try {
console.log('[DEBUG]', "PaginaDeAsambleaInicio.ir_a_soluciones");
this.$router.history.push( "/asamblea/ver/soluciones" );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_implementaciones() {try {
console.log('[DEBUG]', "PaginaDeAsambleaInicio.ir_a_implementaciones");
this.$router.history.push( "/asamblea/ver/implementaciones" );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);