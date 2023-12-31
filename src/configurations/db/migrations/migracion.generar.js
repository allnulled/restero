let texto = "";

// POSTS DE BLOG:

Posts_de_blog:
for(let index = 0; index < 100; index++) {
    break Posts_de_blog;
    const item = `
-- Sentencia:
INSERT INTO Post_de_blog(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Nueva versión de HTML (${index})',
    'La W3C ha publicado hoy el documento oficial de la versión 6 del HTML',
    'Como era de suponer, esto tenía que llegar. Y no es que estuviera la cosa mal antes, no es que se echara en falta algo nuevo, pero tenía que venir, era solo cuestión de tiempo: el documento de la web ya tiene otra versión aprobada.',
    '05-01-2025 13:38:00',
    1
);
`;
    texto += item;
}

// COMENTARIOS DE POSTS DE BLOG:

Comentarios_de_blog:
for (let index = 0; index < 100; index++) {
    break Comentarios_de_blog;
    const item = `
-- Sentencia:
INSERT INTO Comentario_de_post_de_blog(id_de_post_de_blog, contenido, fecha_de_creacion, id_de_autor) VALUES(
    100,
    '¡Wooooow! ¡Flipo por ${index} vez!',
    '05-01-2025 13:40:00',
    1
);
`;
    texto += item;
}

// TEMAS DE FORO:

Temas_de_foro:
for (let index = 0; index < 100; index++) {
    break Temas_de_foro;
    const item = `
-- Sentencia:
INSERT INTO Tema_de_foro(titulo, descripcion, seccion, tags) VALUES(
    'Tema ${index}',
    'Descripción del tema ${index}',
    'Sección 1',
    ''
);
`;
    texto += item;
}

// POSTS DE FORO:

Posts_de_foro:
for (let index = 0; index < 100; index++) {
    break Posts_de_foro;
    const item = `
-- Sentencia:
INSERT INTO Post_de_foro(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor, id_de_tema) VALUES(
    'Post ${index}',
    'Subtítulo de post ${index}',
    'Contenido del post ${index}. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1,
    1
);
`;
    texto += item;
}

// MENSAJES DE MENSAJERIA:

Mensajes_de_mensajeria:
for (let index = 0; index < 100; index++) {
    break Mensajes_de_mensajeria;
    const item = `
-- Sentencia:
INSERT INTO Mensaje_de_mensajeria(asunto, contenido, fecha_de_creacion, id_de_usuario_origen, id_de_usuario_destino) VALUES(
    'Asunto ${index}',
    'Contenido del post ${index}. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1,
    1
);
`;
    texto += item;
}

// CURSOS DE ESCUELA:

Cursos_de_escuela:
for (let index = 0; index < 100; index++) {
    break Cursos_de_escuela;
    const item = `
-- Sentencia:
INSERT INTO Curso_de_escuela(titulo, descripcion, fecha_de_creacion) VALUES(
    'Curso de escuela ${index}',
    'Descripción del curso de escuela ${index}.',
    '05-01-2026 14:50:00'
);
`;
    texto += item;
}

// LECCIONES DE CURSOS DE ESCUELA:

Lecciones_de_cursos_de_escuela:
for (let index = 0; index < 100; index++) {
    break Lecciones_de_cursos_de_escuela;
    const item2 = `
-- Sentencia:
INSERT INTO Leccion_de_curso_de_escuela(
    titulo, descripcion, fecha_de_creacion, id_de_curso, contenido) VALUES(
    'Lección ${index} de curso de escuela 100',
    'Descripción la lección ${index} del curso de escuela 1.',
    '05-01-2026 14:50:00',
    100,
    'Contenido de la lección en HTML. <a href="/">Ir a inicio</a>.'
);
`;
    texto += item2;
}



// NOTICIAS DE PRENSA:

Noticias_de_prensa:
for (let index = 0; index < 100; index++) {
    break Noticias_de_prensa;
    const item = `
-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia ${index}',
    'Subtítulo de post ${index}',
    'Contenido del post ${index}. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);
`;
    texto += item;
}


// VOTACIONES DE ASAMBLEA:

Votaciones_de_asamblea:
for (let index = 0; index < 100; index++) {
    // break Votaciones_de_asamblea;
    const item = `
-- Sentencia:
INSERT INTO Votacion_de_asamblea(fecha_de_creacion, fecha_de_finalizacion, estado) VALUES(
    '2023-01-05 10:30',
    '2023-01-25 10:30',
    '${ index % 2 ? "Inactivo" : "Problemas"}'
);
`;
    texto += item;
}

// PROBLEMAS DE ASAMBLEA:

Problemas_de_asamblea:
for (let index = 0; index < 100; index++) {
    // break Problemas_de_asamblea;
    const item = `
-- Sentencia:
INSERT INTO Problema_de_asamblea(titulo, descripcion, contenido, estado, id_de_votacion, fecha_de_creacion) VALUES(
    'Titulo ${index}',
    'Descripción ${index}',
    'Contenido ${index}',
    'Propuesto',
    '1',
    '2023-01-25 10:30'
);
`;
    texto += item;
}

// SOLUCIONES DE ASAMBLEA:

Soluciones_de_asamblea:
for (let index = 0; index < 100; index++) {
    // break Soluciones_de_asamblea;
    const item = `
-- Sentencia:
INSERT INTO Solucion_de_asamblea(titulo, descripcion, contenido, estado, id_de_votacion, fecha_de_creacion) VALUES(
    'Titulo ${index}',
    'Descripción ${index}',
    'Contenido ${index}',
    'Propuesto',
    '1',
    '2023-01-25 10:30'
);
`;
    texto += item;
}

// IMPLEMENTACIONES DE ASAMBLEA:

Implementaciones_de_asamblea:
for (let index = 0; index < 100; index++) {
    // break Implementaciones_de_asamblea;
    const item = `
-- Sentencia:
INSERT INTO Implementacion_de_asamblea(titulo, descripcion, contenido, estado, id_de_votacion, fecha_de_creacion) VALUES(
    'Titulo ${index}',
    'Descripción ${index}',
    'Contenido ${index}',
    'Propuesto',
    '1',
    '2023-01-25 10:30'
);
`;
    texto += item;
}

require("fs").writeFileSync(__dirname + "/migracion.generada.sql", texto, "utf8");
const migracion_en_texto = require("fs").readFileSync(__dirname + "/migracion.generada.sql").toString();
const migracion_inicial = require("fs").readFileSync(__dirname + "/migracion.sql").toString();
const texto_final_final = "---- Migracion generada \n\n\n" + migracion_en_texto;
const posicion = migracion_inicial.indexOf("---- Migracion generada");
const migracion_final = migracion_inicial.substr(0, posicion) + texto_final_final;
require("fs").writeFileSync(__dirname + "/migracion.sql", migracion_final, "utf8");