let texto = "";

// POSTS DE BLOG:

for(let index = 0; index < 100; index++) {
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

for (let index = 0; index < 100; index++) {
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

for (let index = 0; index < 100; index++) {
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

for (let index = 0; index < 100; index++) {
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

require("fs").writeFileSync(__dirname + "/migracion.generada.sql", texto, "utf8");
const migracion_en_texto = require("fs").readFileSync(__dirname + "/migracion.generada.sql").toString();
const migracion_inicial = require("fs").readFileSync(__dirname + "/migracion.sql").toString();
const texto_final_final = "---- Migracion generada \n\n\n" + migracion_en_texto;
const posicion = migracion_inicial.indexOf("---- Migracion generada");
const migracion_final = migracion_inicial.substr(0, posicion) + texto_final_final;
require("fs").writeFileSync(__dirname + "/migracion.sql", migracion_final, "utf8");