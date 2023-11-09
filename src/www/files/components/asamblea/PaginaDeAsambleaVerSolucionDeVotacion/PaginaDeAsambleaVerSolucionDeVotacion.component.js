
window.PaginaDeAsambleaVerSolucionDeVotacion = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaVerSolucionDeVotacion",
  "<div class=\"PaginaDeAsambleaVerSolucionDeVotacion Component\">"
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
 + "                  <span class=\"\">Solucion</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" v-if=\"solucion\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Asamblea',link:'/asamblea/inicio'},{texto:'Votaciones',link:'/asamblea/ver/votaciones'},{texto:'Votación',link:'/asamblea/ver/votacion/' + solucion.id_de_votacion},{texto:'Soluciones',link:'/asamblea/ver/soluciones/de/votacion/' + solucion.id_de_votacion}]\"></BreadcrumbGenerico>"
 + "        <h5 style=\"margin-bottom: 1px;\">Solucion</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"panel_de_botones_superior\">"
 + "            <button>➕ Crear implementación</button>"
 + "          </div>"
 + "          <div class=\"carta_de_datos no_hover\">"
 + "            <div class=\"dato_nivel_1_de_carta\">"
 + "              Solucion «{{ solucion.id }}»"
 + "            </div>"
 + "            <table style=\"width: 100%;\">"
 + "              <tr>"
 + "                <td>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Creada el: «{{ solucion.fecha_de_creacion }}»"
 + "                  </div>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Estado:</u> «{{ solucion.estado }}»"
 + "            </div>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Descripción:</u> «{{ solucion.descripcion }}»"
 + "            </div>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Contenido:</u> «{{ solucion.contenido }}»"
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
console.log('[DEBUG]', "PaginaDeAsambleaVerSolucionDeVotacion.data");
return { solucion:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async obtener_solucion() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerSolucionDeVotacion.obtener_solucion");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Solucion_de_asamblea", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if((!(respuesta_1.data.resultado.length === 1))) {
throw new Error( `La votación «${this.$route.params.id}» no fue encontrada` );
}
this.solucion = respuesta_1.data.resultado[ 0 ];
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
(await this.obtener_solucion(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);