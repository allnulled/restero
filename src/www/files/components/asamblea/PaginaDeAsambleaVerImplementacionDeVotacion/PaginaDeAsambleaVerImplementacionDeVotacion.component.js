
window.PaginaDeAsambleaVerImplementacionDeVotacion = Castelog.metodos.un_componente_vue2("PaginaDeAsambleaVerImplementacionDeVotacion",
  "<div class=\"PaginaDeAsambleaVerImplementacionDeVotacion Component\">"
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
 + "                  <span class=\"\">Implementación</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" v-if=\"implementacion\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Asamblea',link:'/asamblea/inicio'},{texto:'Votaciones',link:'/asamblea/ver/votaciones'},{texto:'Votación',link:'/asamblea/ver/votacion/' + implementacion.id_de_votacion},{texto:'Implementaciones',link:'/asamblea/ver/implementaciones/de/votacion/' + implementacion.id_de_votacion}]\"></BreadcrumbGenerico>"
 + "        <h5 style=\"margin-bottom: 1px;\">Implementación</h5>"
 + "        <div class=\"panel_principal\">"
 + "          <div class=\"carta_de_datos no_hover\">"
 + "            <div class=\"dato_nivel_1_de_carta\">"
 + "              Implementacion «{{ implementacion.id }}»"
 + "            </div>"
 + "            <table style=\"width: 100%;\">"
 + "              <tr>"
 + "                <td>"
 + "                  <div class=\"dato_nivel_4_de_carta\">"
 + "                    Creada el: «{{ implementacion.fecha_de_creacion }}»"
 + "                  </div>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Estado:</u> «{{ implementacion.estado }}»"
 + "            </div>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Descripción:</u> «{{ implementacion.descripcion }}»"
 + "            </div>"
 + "            <div class=\"dato_nivel_3_de_carta\">"
 + "              <u>Contenido:</u> «{{ implementacion.contenido }}»"
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
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionDeVotacion.data");
return { implementacion:false
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async obtener_implementacion() {try {
console.log('[DEBUG]', "PaginaDeAsambleaVerImplementacionDeVotacion.obtener_implementacion");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("/api/v1/select/Implementacion_de_asamblea", "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_1,
this );
if((!(respuesta_1.data.resultado.length === 1))) {
throw new Error( `La votación «${this.$route.params.id}» no fue encontrada` );
}
this.implementacion = respuesta_1.data.resultado[ 0 ];
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
},
async mounted() {try {
(await this.obtener_implementacion(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);