
window.PaginaDeLogin = Castelog.metodos.un_componente_vue2("PaginaDeLogin",
  "<div class=\"text_align_center\" style=\"margin-top: 80px;\">"
 + "    <div class=\"background_image_for_login\"></div>"
 + "    <div class=\"window text_align_left display_inline_block\" style=\"max-width:300px; width: 100%;\">"
 + "      <div class=\"title-bar\">"
 + "        <div class=\"title-bar-text\">"
 + "          <span>Login</span>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <h5>Login de usuario</h5>"
 + "        <div class=\"caja_de_entrada_de_formulario primera\">"
 + "          <div>Usuario:</div>"
 + "          <input class=\"w_100\" type=\"text\" placeholder=\"\" v-model=\"nombre\" />"
 + "        </div>"
 + "        <div class=\"caja_de_entrada_de_formulario\">"
 + "          <div>Contraseña:</div>"
 + "          <input class=\"w_100\" type=\"password\" placeholder=\"\" v-model=\"contrasenya\" />"
 + "        </div>"
 + "        <hr />"
 + "        <div class=\"caja_de_entrada_de_formulario text_align_right\">"
 + "          <button v-on:click=\"loguearse\">Entrar</button>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data(  ) {try {
console.log('[DEBUG]', "PaginaDeLogin.data");
return { nombre:"",
contrasenya:""
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
},
methods:{ async loguearse(  ) {try {
console.log('[DEBUG]', "PaginaDeLogin.loguearse");
this.$router.history.push( "/" );
const respuesta_login = (await Castelog.metodos.una_peticion_http("/api/v1/login", "POST", { nombre:this.nombre,
contrasenya:this.contrasenya
}, null, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_login,
this );
this.root.token_de_sesion = respuesta_login.data.token_de_sesion_activo;
this.root.autentificacion = respuesta_login.data.autentificacion;
const respuesta_esquema = (await Castelog.metodos.una_peticion_http("/api/v1/db/schema", "POST", { 
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_esquema,
this );
this.root.esquema = respuesta_esquema.data.esquema;
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
}
};},
  null);