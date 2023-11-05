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


