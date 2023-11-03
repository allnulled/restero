
window.PuertoDeNotificaciones = Castelog.metodos.un_componente_vue2("PuertoDeNotificaciones",
  "<div class=\"PuertoDeNotificaciones Component\">"
 + "    <div class=\"punto_de_puerto_de_notificaciones\">"
 + "\t\t\t<div class=\"contenedor_de_puerto_de_notificaciones\">"
 + "\t\t\t\t<div class=\"caja_de_puerto_de_notificaciones\">"
 + "          <div class=\"window\" v-if=\"notificaciones.length\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">"
 + "                Notificaciones recientes: {{ notificaciones.length }}"
 + "              </div>"
 + "\t\t\t\t\t  </div>"
 + "            <div class=\"window-body\">"
 + "              <div class=\"caja_de_notificacion\" v-for=\"notificacion, notificacion_index in notificaciones\" v-bind:key=\"'puerto-notificaciones-notificacion-'+notificacion_index\">"
 + "                <div v-on:click=\"() => cerrar_notificacion(notificacion)\">"
 + "                {{ notificacion }}"
 + "                </div>"
 + "              </div>"
 + "\t\t\t\t\t  </div>"
 + "\t\t\t\t\t</div>"
 + "\t\t\t\t</div>"
 + "\t\t\t</div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data(  ) {try {
console.log('[DEBUG]', "PuertoDeNotificaciones.data");
return { notificaciones:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ agregar_notificacion( notificacion ) {try {
console.log('[DEBUG]', "PuertoDeNotificaciones.agregar_notificacion");
if((!(typeof notificacion === 'object'))) {
throw new Error( "Se requiere que el parámetro «notificacion» sea tipo objeto en «PuertoDeNotificaciones.agregar_notificacion»" );
}
const nueva_notificacion = Object.assign( { 
},
notificacion,
{ id:Castelog.metodos.un_texto_aleatorio(10, undefined)
} );
this.notificaciones.push(nueva_notificacion)
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
cerrar_notificacion( notificacion ) {try {
console.log('[DEBUG]', "PuertoDeNotificaciones.cerrar_notificacion");
const indice_notificacion = this.notificaciones.indexOf( notificacion );
this.notificaciones.splice( indice_notificacion,
1 );
this.$forceUpdate( true );
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
notificar_error( error ) {try {
console.log('[DEBUG]', "PuertoDeNotificaciones.notificar_error");
const objeto_de_error = Object.assign( { 
},
{ name:error.name,
message:error.message,
stack:error.stack
} );
this.agregar_notificacion( objeto_de_error );
console.log(error);
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
console.log('[DEBUG]', "PuertoDeNotificaciones.mounted");
this.$window.$notificaciones = this;
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);