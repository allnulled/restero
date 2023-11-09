
window.PaginaDeAsambleaVerProblemaDeVotacion = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaVerProblemaDeVotacion",
  "<div class=\"PaginaDeAsambleaVerProblemaDeVotacion Component\">"
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
 + "                  <span class=\"\">Problema</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" v-if=\"problema\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Asamblea',link:'/asamblea/inicio'},{texto:'Votaciones',link:'/asamblea/ver/votaciones'},{texto:'Votación',link:'/asamblea/ver/votacion/' + problema.id_de_votacion},{texto:'Problemas',link:'/asamblea/ver/problemas/de/votacion/' + problema.id_de_votacion}]\"></BreadcrumbGenerico>"
 + "        <h5 style=\"margin-bottom: 1px;\">Problema</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button>➕ Crear solución</button>"
 + "          </div>"
 + "          <div class=\"carta_de_datos no_hover\">"
 + "            <div class=\"dato_nivel_1_de_carta\">"
 + "              Problema «{{ problema.id }}»"
 + "            </div>"
 + "            <table style=\"width: 100%;\">"
 + "              <tr>"
 + "                <td>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Creada el: «{{ problema.fecha_de_creacion }}»"
 + "                  </div>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Estado:</u> «{{ problema.estado }}»"
 + "            </div>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Descripción:</u> «{{ problema.descripcion }}»"
 + "            </div>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Contenido:</u> «{{ problema.contenido }}»"
 + "            </div>"
 + "          </div>"
 + "          <div>"
 + "            <table style=\"width: 100%;\">"
 + "              <tr>"
 + "                <td style=\"width: 50%;\">"
 + "                  <button style=\"width: 100%;\" v-on:click=\"() => votar_en_contra()\">En contra</button>"
 + "                </td>"
 + "                <td style=\"width: 50%;\">"
 + "                  <button style=\"width: 100%;\" v-on:click=\"() => votar_a_favor()\">A favor</button>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
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
console.log('[DEBUG]', "PaginaDeAsambleaVerProblemaDeVotacion.data");
return { problema:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async obtener_problema() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerProblemaDeVotacion.obtener_problema");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Problema_de_asamblea", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if((!(respuesta_1.data.resultado.length === 1))) {
throw new Error( `La votación «${this.$route.params.id}» no fue encontrada` );
}
this.problema = respuesta_1.data.resultado[ 0 ];
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
async votar_a_favor() {
},
async votar_en_contra() {
}
},
async mounted() {try {
(await this.obtener_problema(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);