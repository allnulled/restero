
window.rutas_de_aplicacion = [ { path:"/login",
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