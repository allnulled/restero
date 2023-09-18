
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>Interfaz de usuario</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./components/win7.scoped.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./components/theme.css\" />\n    <script src=\"./components/calo.js\"></script>\n    <script src=\"./dependencies/generar_gestor_de_hooks.js\"></script>\n    <script src=\"./dependencies/utilidades.js\"></script>\n    <script src=\"./hooks/hooks.js\"></script>\n    <script src=\"./components/PuertoDeNotificaciones.component.js\"></script>\n    <script src=\"./components/BreadcrumbGenerico.component.js\"></script>\n    <script src=\"./components/ExploradorDeDatos.component.js\"></script>\n    <script src=\"./components/PaginaDeInicio.component.js\"></script>\n    <script src=\"./components/PaginaDePanelDeAdministracion.component.js\"></script>\n    <script src=\"./components/PaginaDePanelDeConfiguraciones.component.js\"></script>\n    <script src=\"./components/PaginaDeLogin.component.js\"></script>\n    <script src=\"./components/PaginaDeExploradorDeDatosDeTabla.component.js\"></script>\n    <script src=\"./components/PaginaDeImportarExportarDatos.component.js\"></script>\n    <script src=\"./components/PaginaDeFormularioDeTabla.component.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const main = async function() {try {
(await window.utilidades.gestor_de_hooks.usar_hook( "app:iniciar" ));
(await window.utilidades.gestor_de_hooks.usar_hook( "app:precargar:rutas" ));
const rutas = [ { path:"/login",
name:"Login",
component:PaginaDeLogin,
props:{ 
}
},
{ path:"/explorador/:id_de_tabla",
name:"ExploradorDeDatosDeTabla",
component:PaginaDeExploradorDeDatosDeTabla,
props:{ 
}
},
{ path:"/formulario/:id_de_tabla/crear",
name:"FormularioDeDatoDeTabla",
component:PaginaDeFormularioDeDatoDeTabla,
props:{ modalidad:"crear"
}
},
{ path:"/formulario/:id_de_tabla/id/:id_de_fila",
name:"FormularioDeDatoDeTabla",
component:PaginaDeFormularioDeDatoDeTabla,
props:{ modalidad:"editar"
}
},
{ path:"/administracion",
name:"PanelDeAdministracion",
component:PaginaDePanelDeAdministracion,
props:{ 
}
},
{ path:"/configuraciones",
name:"PanelDeConfiguraciones",
component:PaginaDePanelDeConfiguraciones,
props:{ 
}
},
{ path:"/importar_exportar_datos",
name:"PaginaDeImportarExportarDatos",
component:PaginaDeImportarExportarDatos,
props:{ 
}
},
{ path:"/",
name:"Inicio",
component:PaginaDeInicio,
props:{ 
}
} ];
(await window.utilidades.gestor_de_hooks.usar_hook( "app:postcargar:rutas",
{ rutas
} ));
(await window.utilidades.gestor_de_hooks.usar_hook( "app:precargar:aplicacion",
{ rutas
} ));
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
token_de_sesion:undefined
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
  rutas,
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
(await window.utilidades.gestor_de_hooks.usar_hook( "app:postcargar:aplicacion",
{ rutas
} ));
(await window.utilidades.gestor_de_hooks.usar_hook( "app:iniciada",
{ rutas
} ));
} catch(error) {
console.log(error);
throw error;}
};
main(  );