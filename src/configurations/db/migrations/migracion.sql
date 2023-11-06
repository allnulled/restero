-- Sentencia:
INSERT INTO Usuario ( nombre, contrasenya ) VALUES ( 'admin', 'admin' );

-- Sentencia:
INSERT INTO Usuario ( nombre, contrasenya ) VALUES ( 'noadmin', 'noadmin' );

-- Sentencia:
INSERT INTO Grupo ( nombre, descripcion ) VALUES ( 'grupo de administradores', 'Se encarga de administrar globalmente los usuarios, grupos y permisos de la aplicación' );

-- Sentencia:
INSERT INTO Grupo_de_usuario ( id_grupo, id_usuario ) VALUES ( '1', '1' );

-- Sentencia:
INSERT INTO Permiso ( nombre, descripcion ) VALUES ( 'permiso de administración', 'Permite administrar globalmente los usuarios, grupos y permisos de la aplicación, y representa el permiso máximo en la aplicación' );

-- Sentencia:
INSERT INTO Permiso_de_grupo ( id_grupo, id_permiso ) VALUES ( '1', '1' );






--------------------------------------------------------------------------------------------------------

---- Migracion generada 



-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 0',
    'Subtítulo de post 0',
    'Contenido del post 0. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 1',
    'Subtítulo de post 1',
    'Contenido del post 1. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 2',
    'Subtítulo de post 2',
    'Contenido del post 2. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 3',
    'Subtítulo de post 3',
    'Contenido del post 3. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 4',
    'Subtítulo de post 4',
    'Contenido del post 4. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 5',
    'Subtítulo de post 5',
    'Contenido del post 5. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 6',
    'Subtítulo de post 6',
    'Contenido del post 6. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 7',
    'Subtítulo de post 7',
    'Contenido del post 7. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 8',
    'Subtítulo de post 8',
    'Contenido del post 8. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 9',
    'Subtítulo de post 9',
    'Contenido del post 9. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 10',
    'Subtítulo de post 10',
    'Contenido del post 10. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 11',
    'Subtítulo de post 11',
    'Contenido del post 11. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 12',
    'Subtítulo de post 12',
    'Contenido del post 12. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 13',
    'Subtítulo de post 13',
    'Contenido del post 13. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 14',
    'Subtítulo de post 14',
    'Contenido del post 14. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 15',
    'Subtítulo de post 15',
    'Contenido del post 15. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 16',
    'Subtítulo de post 16',
    'Contenido del post 16. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 17',
    'Subtítulo de post 17',
    'Contenido del post 17. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 18',
    'Subtítulo de post 18',
    'Contenido del post 18. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 19',
    'Subtítulo de post 19',
    'Contenido del post 19. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 20',
    'Subtítulo de post 20',
    'Contenido del post 20. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 21',
    'Subtítulo de post 21',
    'Contenido del post 21. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 22',
    'Subtítulo de post 22',
    'Contenido del post 22. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 23',
    'Subtítulo de post 23',
    'Contenido del post 23. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 24',
    'Subtítulo de post 24',
    'Contenido del post 24. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 25',
    'Subtítulo de post 25',
    'Contenido del post 25. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 26',
    'Subtítulo de post 26',
    'Contenido del post 26. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 27',
    'Subtítulo de post 27',
    'Contenido del post 27. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 28',
    'Subtítulo de post 28',
    'Contenido del post 28. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 29',
    'Subtítulo de post 29',
    'Contenido del post 29. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 30',
    'Subtítulo de post 30',
    'Contenido del post 30. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 31',
    'Subtítulo de post 31',
    'Contenido del post 31. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 32',
    'Subtítulo de post 32',
    'Contenido del post 32. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 33',
    'Subtítulo de post 33',
    'Contenido del post 33. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 34',
    'Subtítulo de post 34',
    'Contenido del post 34. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 35',
    'Subtítulo de post 35',
    'Contenido del post 35. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 36',
    'Subtítulo de post 36',
    'Contenido del post 36. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 37',
    'Subtítulo de post 37',
    'Contenido del post 37. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 38',
    'Subtítulo de post 38',
    'Contenido del post 38. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 39',
    'Subtítulo de post 39',
    'Contenido del post 39. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 40',
    'Subtítulo de post 40',
    'Contenido del post 40. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 41',
    'Subtítulo de post 41',
    'Contenido del post 41. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 42',
    'Subtítulo de post 42',
    'Contenido del post 42. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 43',
    'Subtítulo de post 43',
    'Contenido del post 43. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 44',
    'Subtítulo de post 44',
    'Contenido del post 44. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 45',
    'Subtítulo de post 45',
    'Contenido del post 45. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 46',
    'Subtítulo de post 46',
    'Contenido del post 46. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 47',
    'Subtítulo de post 47',
    'Contenido del post 47. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 48',
    'Subtítulo de post 48',
    'Contenido del post 48. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 49',
    'Subtítulo de post 49',
    'Contenido del post 49. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 50',
    'Subtítulo de post 50',
    'Contenido del post 50. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 51',
    'Subtítulo de post 51',
    'Contenido del post 51. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 52',
    'Subtítulo de post 52',
    'Contenido del post 52. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 53',
    'Subtítulo de post 53',
    'Contenido del post 53. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 54',
    'Subtítulo de post 54',
    'Contenido del post 54. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 55',
    'Subtítulo de post 55',
    'Contenido del post 55. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 56',
    'Subtítulo de post 56',
    'Contenido del post 56. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 57',
    'Subtítulo de post 57',
    'Contenido del post 57. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 58',
    'Subtítulo de post 58',
    'Contenido del post 58. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 59',
    'Subtítulo de post 59',
    'Contenido del post 59. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 60',
    'Subtítulo de post 60',
    'Contenido del post 60. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 61',
    'Subtítulo de post 61',
    'Contenido del post 61. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 62',
    'Subtítulo de post 62',
    'Contenido del post 62. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 63',
    'Subtítulo de post 63',
    'Contenido del post 63. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 64',
    'Subtítulo de post 64',
    'Contenido del post 64. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 65',
    'Subtítulo de post 65',
    'Contenido del post 65. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 66',
    'Subtítulo de post 66',
    'Contenido del post 66. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 67',
    'Subtítulo de post 67',
    'Contenido del post 67. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 68',
    'Subtítulo de post 68',
    'Contenido del post 68. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 69',
    'Subtítulo de post 69',
    'Contenido del post 69. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 70',
    'Subtítulo de post 70',
    'Contenido del post 70. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 71',
    'Subtítulo de post 71',
    'Contenido del post 71. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 72',
    'Subtítulo de post 72',
    'Contenido del post 72. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 73',
    'Subtítulo de post 73',
    'Contenido del post 73. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 74',
    'Subtítulo de post 74',
    'Contenido del post 74. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 75',
    'Subtítulo de post 75',
    'Contenido del post 75. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 76',
    'Subtítulo de post 76',
    'Contenido del post 76. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 77',
    'Subtítulo de post 77',
    'Contenido del post 77. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 78',
    'Subtítulo de post 78',
    'Contenido del post 78. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 79',
    'Subtítulo de post 79',
    'Contenido del post 79. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 80',
    'Subtítulo de post 80',
    'Contenido del post 80. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 81',
    'Subtítulo de post 81',
    'Contenido del post 81. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 82',
    'Subtítulo de post 82',
    'Contenido del post 82. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 83',
    'Subtítulo de post 83',
    'Contenido del post 83. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 84',
    'Subtítulo de post 84',
    'Contenido del post 84. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 85',
    'Subtítulo de post 85',
    'Contenido del post 85. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 86',
    'Subtítulo de post 86',
    'Contenido del post 86. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 87',
    'Subtítulo de post 87',
    'Contenido del post 87. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 88',
    'Subtítulo de post 88',
    'Contenido del post 88. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 89',
    'Subtítulo de post 89',
    'Contenido del post 89. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 90',
    'Subtítulo de post 90',
    'Contenido del post 90. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 91',
    'Subtítulo de post 91',
    'Contenido del post 91. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 92',
    'Subtítulo de post 92',
    'Contenido del post 92. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 93',
    'Subtítulo de post 93',
    'Contenido del post 93. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 94',
    'Subtítulo de post 94',
    'Contenido del post 94. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 95',
    'Subtítulo de post 95',
    'Contenido del post 95. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 96',
    'Subtítulo de post 96',
    'Contenido del post 96. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 97',
    'Subtítulo de post 97',
    'Contenido del post 97. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 98',
    'Subtítulo de post 98',
    'Contenido del post 98. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);

-- Sentencia:
INSERT INTO Noticia_de_prensa(titulo, subtitulo, contenido, fecha_de_creacion, id_de_autor) VALUES(
    'Noticia 99',
    'Subtítulo de post 99',
    'Contenido del post 99. En algún lugar de la Mancha de cuyo nombre no quiero acordarme residía un tal hidalgo que no sé qué y no sé cuantos bla bla habladurías y letras, muchas letras explicando una historieta larguísima de un tal Quijote.',
    '05-01-2026 14:50:00',
    1
);
