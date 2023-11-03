
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
{ path:"/foro/ver/temas",
name:"PaginaDeForoParaVerTemas",
component:PaginaDeForoParaVerTemas,
props:{ 
}
},
{ path:"/foro/ver/tema/:id",
name:"PaginaDeForoParaVerPosts",
component:PaginaDeForoParaVerPosts,
props:{ 
}
},
{ path:"/foro/ver/post/:id",
name:"PaginaDeForoParaVerPost",
component:PaginaDeForoParaVerPost,
props:{ 
}
},
{ path:"/foro/crear/post/para/tema/:tema",
name:"PaginaDeForoParaEditarPost",
component:PaginaDeForoParaEditarPost,
props:{ modalidad:"crear"
}
},
{ path:"/foro/editar/post/:id",
name:"PaginaDeForoParaEditarPost",
component:PaginaDeForoParaEditarPost,
props:{ modalidad:"editar"
}
},
{ path:"/blog/ver/posts",
name:"PaginaDeBlogParaVerPosts",
component:PaginaDeBlogParaVerPosts,
props:{ 
}
},
{ path:"/blog/ver/post/:id",
name:"PaginaDeBlogParaVerPost",
component:PaginaDeBlogParaVerPost,
props:{ 
}
},
{ path:"/blog/crear/post",
name:"PaginaDeBlogParaEditarPost",
component:PaginaDeBlogParaEditarPost,
props:{ modalidad:"crear"
}
},
{ path:"/blog/editar/post/:id",
name:"PaginaDeBlogParaEditarPost",
component:PaginaDeBlogParaEditarPost,
props:{ modalidad:"editar"
}
},
{ path:"/",
name:"Inicio",
component:PaginaDeInicio,
props:{ 
}
} ];