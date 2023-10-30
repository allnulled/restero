HQL_Lenguaje = HQL_Sentencias
HQL_Sentencias = _* sentencias:HQL_Sentencia* _* { return sentencias }
HQL_Sentencia = HQL_Sentencia_CREATE_TABLE
HQL_Sentencia_CREATE_TABLE = 
  token1:(_* ("CREATE TABLE"/"create table") _+)
  tabla:HQL_Id
  token2:( _* )
  atributos:HQL_Hiperdetalles_de_columna?
  token3:( _* "(" _*)
  composicion:HQL_Composicion_de_tabla
  token4:(_* ");")
    { return { tabla, atributos: atributos ? atributos : [], composicion, script: text() } }
HQL_Composicion_de_tabla = 
  sentencia1:HQL_Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_1
  sentenciaN:HQL_Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_n*
    { return [].concat([sentencia1]).concat(sentenciaN); }
HQL_Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_1 =
  HQL_Sentencia_FOREIGN_KEY /
  HQL_Sentencia_CONSTRAINT_UNIQUE /
  HQL_Sentencia_CREATE_COLUMN / 
  HQL_Sentencia_PRIMARY_KEY
HQL_Sentencia_CONSTRAINT_UNIQUE = 
  token1:(_*)
  token2:"CONSTRAINT"
  token3:(_+)
  columna:HQL_Id
  token4:(_+)
  token5:"UNIQUE"
  token6:(_* "(")
  columnas_implicadas:HQL_Id_list
  token7:(_* ")" _*)
    { return { sentencia: "restricción única", columna, columnas_implicadas } }
HQL_Id_list =
  columna:HQL_Id
  columnas:HQL_Id_postcoma+
    { return [].concat([ columna ]).concat(columnas) }
HQL_Id_postcoma =
  token1:","
  token2:_*
  id:HQL_Id
    { return id }
HQL_Sentencia_CREATE_COLUMN = 
  token1:(_*)
  columna:HQL_Id
  token2:(_+)
  tipo:HQL_Tipos
  detalles:HQL_Detalles_de_columna
  atributos:HQL_Hiperdetalles_de_columna?
    { return { sentencia: "columna", columna, tipo, detalles, atributos: atributos ? atributos : [] } }
HQL_Detalles_de_columna = (!(","/"\n"/"/*").)* { return text().trim() }
HQL_Hiperdetalles_de_columna =
  token1:"/*"
  atributos:HQL_Hiperatributos
  token2:(_* "*/")
    { return atributos }
HQL_Hiperatributos =
  atributos:HQL_Hiperatributo*
    { return atributos ? atributos : [] }
HQL_Hiperatributo =
  token1:(___ (__ __)? (__ __)? "@")
  hiperatributo:HQL_Hiperatributo_texto
  subatributos:HQL_Hipersubatributos?
    { return subatributos ? [hiperatributo, subatributos] : hiperatributo }
HQL_Hiperatributo_texto = (!(___).)+ { return text() }
HQL_Hipersubatributos =
  subatributos:HQL_Hipersubatributo+ 
    { return subatributos }
HQL_Hipersubatributo = ___+ (__ __)* "-" texto:HQL_Hiperatributo_texto { return texto.trim() }
HQL_Tipos = ("INTEGER"/"integer"/"int"/"VARCHAR"/"varchar"/"TEXT"/"text"/"DATETIME"/"datetime"/"DATE"/"date"/"TIMESTAMP"/"timestamp"/"TIME"/"time"/"REAL"/"real"/"BLOB"/"blob")
HQL_Sentencia_PRIMARY_KEY =
  token1:(_* ("PRIMARY KEY"/"primary key") _* )
  token3:(_* "(" _*)
  clave_1:HQL_Id
  clave_n:HQL_Id_n
  token4:(_* ")" _*)
    { return { sentencia: "clave primaria", columnas: [clave_1].concat(clave_n || []) } }
HQL_Sentencia_FOREIGN_KEY = 
  token1:(_* ("FOREIGN KEY"/"foreign key") _* "(")
  columna:HQL_Id
  token2:(")" _+ ("REFERENCES"/"references") _+)
  tabla_foranea:HQL_Id
  token3:(_* "(" _*)
  columna_foranea:HQL_Id
  token4:(_* ")" _*)
    { return { sentencia: "clave foránea", columna, tabla_foranea, columna_foranea } }
HQL_Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_n =
  token1:(_* "," _*)
  sentencia:HQL_Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_1
    { return sentencia }
HQL_Id = [A-Za-z_] [A-Za-z0-9_$]* { return text() }
HQL_Id_n = _* "," _* id:HQL_Id { return id }
___ = "\r\n" / "\r" / "\n" {}
__ = "\t" / " " {}
_ = __ / ___ {}