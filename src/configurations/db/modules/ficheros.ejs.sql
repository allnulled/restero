CREATE TABLE Fichero /*
  @tiene_fichero: fichero
  @tiene_autorizador: solo_insertable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_actualizable_por_mismo_usuario: id_usuario
  @tiene_autorizador: solo_eliminable_por_mismo_usuario: id_usuario
*/ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER,
  fichero VARCHAR(512),
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);