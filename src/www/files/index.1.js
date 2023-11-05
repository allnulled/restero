
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Restero | UI</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./components/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./components/theme/theme.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./dependencies/editor-wysiwyg/editor-wysiwyg-vuejs.css\" />\n    <script src=\"./components/calo/calo.js\"></script>\n    <script src=\"./dependencies/generar_gestor_de_hooks.js\"></script>\n    <script src=\"./dependencies/utilidades.js\"></script>\n    <script src=\"./dependencies/editor-wysiwyg/wysiwyg-parser.js\"></script>\n    <script src=\"./dependencies/editor-wysiwyg/editor-wysiwyg-vuejs.js\"></script>\n    <script src=\"./hooks/hooks.js\"></script>\n    <script src=\"./components/PuertoDeNotificaciones/PuertoDeNotificaciones.component.js\"></script>\n    <script src=\"./components/BreadcrumbGenerico/BreadcrumbGenerico.component.js\"></script>\n    <script src=\"./components/ExploradorDeDatos/ExploradorDeDatos.component.js\"></script>\n    <script src=\"./components/PaginaDeInicio/PaginaDeInicio.component.js\"></script>\n    <script src=\"./components/PaginaDePanelDeAdministracion/PaginaDePanelDeAdministracion.component.js\"></script>\n    <script src=\"./components/PaginaDePanelDeConfiguraciones/PaginaDePanelDeConfiguraciones.component.js\"></script>\n    <script src=\"./components/PaginaDeLogin/PaginaDeLogin.component.js\"></script>\n    <script src=\"./components/PaginaDeExploradorDeDatosDeTabla/PaginaDeExploradorDeDatosDeTabla.component.js\"></script>\n    <script src=\"./components/PaginaDeImportarExportarDatos/PaginaDeImportarExportarDatos.component.js\"></script>\n    <script src=\"./components/PaginaDeFormularioDeTabla/PaginaDeFormularioDeTabla.component.js\"></script>\n    <script src=\"./components/PaginaDeBlogParaVerPosts/PaginaDeBlogParaVerPosts.component.js\"></script>\n    <script src=\"./components/PaginaDeBlogParaVerPost/PaginaDeBlogParaVerPost.component.js\"></script>\n    <script src=\"./components/PaginaDeBlogParaEditarPost/PaginaDeBlogParaEditarPost.component.js\"></script>\n    <script src=\"./components/PaginaDeForoParaVerTemas/PaginaDeForoParaVerTemas.component.js\"></script>\n    <script src=\"./components/PaginaDeForoParaVerPosts/PaginaDeForoParaVerPosts.component.js\"></script>\n    <script src=\"./components/PaginaDeForoParaVerPost/PaginaDeForoParaVerPost.component.js\"></script>\n    <script src=\"./components/PaginaDeForoParaEditarPost/PaginaDeForoParaEditarPost.component.js\"></script>\n    <script src=\"./components/PaginaDeMensajesParaInicio/PaginaDeMensajesParaInicio.component.js\"></script>\n    <script src=\"./components/PaginaDeMensajesParaVerMensaje/PaginaDeMensajesParaVerMensaje.component.js\"></script>\n    <script src=\"./components/PaginaDeMensajesParaCrearMensaje/PaginaDeMensajesParaCrearMensaje.component.js\"></script>\n    <script src=\"./components/PaginaDeEscuelaParaVerCursos/PaginaDeEscuelaParaVerCursos.component.js\"></script>\n    <script src=\"./components/PaginaDeEscuelaParaVerCurso/PaginaDeEscuelaParaVerCurso.component.js\"></script>\n    <script src=\"./components/PaginaDeEscuelaParaVerLeccion/PaginaDeEscuelaParaVerLeccion.component.js\"></script>\n    <script src=\"./dependencies/rutas.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const main = async function() {try {
(await window.utilidades.gestor_de_hooks.usar_hook( "app:iniciar" ));
(await window.utilidades.gestor_de_hooks.usar_hook( "app:precargar:aplicacion" ));
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "      <div v-if=\"token_de_sesion\">"
 + "        <router-view :root=\"this\"></router-view>"
 + "      </div>"
 + "      <div v-else>"
 + "        <PaginaDeLogin :root=\"this\" />"
 + "      </div>"
 + "      <PuertoDeNotificaciones :root=\"this\" />"
 + "    </div>",
  function(component) {return { data() {try {
return { esquema:undefined,
token_de_sesion:undefined,
autentificacion:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n      body {}\n      .Component {}\n      .App {}\n  ",
  {},
  window.rutas_de_aplicacion,
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
(await window.utilidades.gestor_de_hooks.usar_hook( "app:postcargar:aplicacion",
{ rutas_de_aplicacion
} ));
(await window.utilidades.gestor_de_hooks.usar_hook( "app:iniciada",
{ rutas_de_aplicacion
} ));
} catch(error) {
console.log(error);
throw error;}
};
main(  );