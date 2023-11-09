
window.PaginaDeAsambleaVerVotacion = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaVerVotacion",
  "<div class=\"PaginaDeAsambleaVerVotacion Component\">"
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
 + "                  <span class=\"\">Votación</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Asamblea',link:'/asamblea/inicio'},{texto:'Votaciones',link:'/asamblea/ver/votaciones'}]\"></BreadcrumbGenerico>"
 + "        <h5 style=\"margin-bottom: 1px;\">Votación</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"carta_de_datos no_hover\">"
 + "            <div class=\"dato_nivel_1_de_carta\">"
 + "              Votación «{{ votacion.id }}»"
 + "            </div>"
 + "            <table style=\"width: 100%;\">"
 + "              <tr>"
 + "                <td>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Creada el: <br/>«{{ votacion.fecha_de_creacion }}»"
 + "                  </div>"
 + "                </td>"
 + "                <td>"
 + "                  <div class=\"dato_nivel_5_de_carta\">"
 + "                    Finaliza el: <br/>«{{ votacion.fecha_de_finalizacion }}»"
 + "                  </div>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "            <div class=\"dato_nivel_3_de_carta\" style=\"text-align: center;\">"
 + "              Estado: «{{ votacion.estado }}»"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"\" style=\"text-align: center;\">"
 + "            <ul class=\"lista_de_menu_principal\" style=\"display: inline-block; padding: 0;\">"
 + "              <li>"
 + "                <span class=\"como_link\" v-on:click=\"() => ir_a_problemas_de_votacion()\">Problemas</span>"
 + "              </li>"
 + "              <li>"
 + "                <span class=\"como_link\" v-on:click=\"() => ir_a_soluciones_de_votacion()\">Soluciones</span>"
 + "              </li>"
 + "              <li>"
 + "                <span class=\"como_link\" v-on:click=\"() => ir_a_implementaciones_de_votacion()\">Implementaciones</span>"
 + "              </li>"
 + "            </ul>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotacion.data");
return { votacion:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ ir_a_problemas_de_votacion() {try {
this.$router.history.push( "/asamblea/ver/problemas/de/votacion/" + this.$route.params.id );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_soluciones_de_votacion() {try {
this.$router.history.push( "/asamblea/ver/soluciones/de/votacion/" + this.$route.params.id );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_implementaciones_de_votacion() {try {
this.$router.history.push( "/asamblea/ver/implementaciones/de/votacion/" + this.$route.params.id );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_votacion() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerVotacion.obtener_votacion");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Votacion_de_asamblea", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if((!(respuesta_1.data.resultado.length === 1))) {
throw new Error( `La votación «${this.$route.params.id}» no fue encontrada` );
}
this.votacion = respuesta_1.data.resultado[ 0 ];
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
(await this.obtener_votacion(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);