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

require("fs").writeFileSync(__dirname + "/migracion.generada.sql", texto, "utf8");
const migracion_en_texto = require("fs").readFileSync(__dirname + "/migracion.generada.sql").toString();
const migracion_inicial = require("fs").readFileSync(__dirname + "/migracion.sql").toString();
const migracion_final = migracion_inicial.replace(/\-\-\-\- Migracion generada [^.\n\r]+/g, "---- Migracion generada \n\n\n") + migracion_en_texto;
require("fs").writeFileSync(__dirname + "/migracion.sql", migracion_final, "utf8");