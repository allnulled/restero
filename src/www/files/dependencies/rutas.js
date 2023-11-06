
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
{ path:"/foro/editar/tema",
name:"PaginaDeForoParaEditarTema",
component:PaginaDeForoParaEditarTema,
props:{ modalidad:"editar"
}
},
{ path:"/foro/crear/tema",
name:"PaginaDeForoParaEditarTema",
component:PaginaDeForoParaEditarTema,
props:{ modalidad:"crear"
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
{ path:"/mensajes/inicio",
name:"PaginaDeMensajesParaInicio",
component:PaginaDeMensajesParaInicio,
props:{ 
}
},
{ path:"/mensajes/ver/mensaje/:id",
name:"PaginaDeMensajesParaVerMensaje",
component:PaginaDeMensajesParaVerMensaje,
props:{ 
}
},
{ path:"/mensajes/crear/mensaje",
name:"PaginaDeMensajesParaCrearMensaje",
component:PaginaDeMensajesParaCrearMensaje,
props:{ 
}
},
{ path:"/escuela/ver/cursos",
name:"PaginaDeEscuelaParaVerCursos",
component:PaginaDeEscuelaParaVerCursos,
props:{ 
}
},
{ path:"/escuela/ver/curso/:id",
name:"PaginaDeEscuelaParaVerCurso",
component:PaginaDeEscuelaParaVerCurso,
props:{ 
}
},
{ path:"/escuela/crear/curso",
name:"PaginaDeEscuelaParaEditarCurso",
component:PaginaDeEscuelaParaEditarCurso,
props:{ modalidad:"crear"
}
},
{ path:"/escuela/editar/curso/:id",
name:"PaginaDeEscuelaParaEditarCurso",
component:PaginaDeEscuelaParaEditarCurso,
props:{ modalidad:"editar"
}
},
{ path:"/escuela/ver/leccion/:id",
name:"PaginaDeEscuelaParaVerLeccion",
component:PaginaDeEscuelaParaVerLeccion,
props:{ 
}
},
{ path:"/escuela/crear/leccion/para/curso/:id_de_curso",
name:"PaginaDeEscuelaParaEditarLeccion",
component:PaginaDeEscuelaParaEditarLeccion,
props:{ modalidad:"crear"
}
},
{ path:"/escuela/editar/leccion/:id",
name:"PaginaDeEscuelaParaEditarLeccion",
component:PaginaDeEscuelaParaEditarLeccion,
props:{ modalidad:"editar"
}
},
{ path:"/prensa/ver/noticias",
name:"PaginaDePrensaParaVerNoticias",
component:PaginaDePrensaParaVerNoticias,
props:{ 
}
},
{ path:"/prensa/ver/noticia/:id",
name:"PaginaDePrensaParaVerNoticia",
component:PaginaDePrensaParaVerNoticia,
props:{ 
}
},
{ path:"/prensa/crear/noticia",
name:"PaginaDePrensaParaEditarNoticia",
component:PaginaDePrensaParaEditarNoticia,
props:{ modalidad:"crear"
}
},
{ path:"/prensa/editar/noticia/:id",
name:"PaginaDePrensaParaEditarNoticia",
component:PaginaDePrensaParaEditarNoticia,
props:{ modalidad:"editar"
}
},
{ path:"/",
name:"Inicio",
component:PaginaDeInicio,
props:{ 
}
} ];