
window.EditorWysiwygVuejs = Castelog.metodos.un_componente_vue2("EditorWysiwygVuejs",
  "<div class=\"EditorWysiwygVuejs Component\">"
 + "    <div v-if=\"modo === 'editor'\">"
 + "      <div class=\"editor_wysiwyg_panel_de_botones\">"
 + "        <button style=\"min-width: auto;\" v-on:click=\"() => alternar_marcas()\">Marcas</button>"
 + "        <button style=\"min-width: auto;\" v-on:click=\"() => cambiar_a_modo('ayuda')\">Guía</button>"
 + "        <button style=\"min-width: auto;\" v-on:click=\"() => cambiar_a_modo('vista')\">Visualizar</button>"
 + "      </div>"
 + "      <div class=\"editor_wysiwyg_contenedor_de_panel_de_marcas\" v-if=\"esta_mostrando_marcas\">"
 + "        <div class=\"editor_wysiwyg_panel_de_marcas\">"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('negrita')\">Negrita</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('cursiva')\">Cursiva</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('subrayado')\">Subrayado</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('tachado')\">Tachado</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('fuente')\">Tamaño</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('color_de_fondo')\">Color de fondo</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('color_de_fuente')\">Color de fuente</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('alineado_izquierda')\">Alineado izquierda</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('alineado_derecha')\">Alineado derecha</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('alineado_centro')\">Alineado centro</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('alineado_justificado')\">Alineado justificado</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('lista_ordenada')\">Lista ordenada</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('lista_desordenada')\">Lista desordenada</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('punto')\">Punto</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('flotacion_izquierda')\">Flotación izquierda</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('flotacion_derecha')\">Flotación derecha</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('link')\">Link</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('imagen')\">Imagen</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('codigo')\">Codigo</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('tabla')\">Tabla</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('fila')\">Fila</button>"
 + "          <button class=\"editor_wysiwyg_boton_de_marca\" v-on:click=\"() => insertar_marca('celda')\">Celda</button>"
 + "        </div>"
 + "      </div>"
 + "      <div>"
 + "        <textarea class=\"editor_wysiwyg_textarea_editor\" v-model=\"contenido_en_codigo\" ref=\"editor_de_contenido\"></textarea>"
 + "        <div v-if=\"error\">"
 + "          {{ error }}"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "    <div v-else-if=\"modo === 'vista'\">"
 + "      <div class=\"editor_wysiwyg_panel_de_botones\">"
 + "        <button v-on:click=\"() => cambiar_a_modo('editor')\">Editar</button>"
 + "      </div>"
 + "      <div>"
 + "        <div class=\"editor_wysiwyg_visualizador\" v-html=\"contenido_en_html\"></div>"
 + "      </div>"
 + "    </div>"
 + "    <div v-else-if=\"modo === 'ayuda'\">"
 + "      <div class=\"editor_wysiwyg_panel_de_botones\">"
 + "        <button v-on:click=\"() => cambiar_a_modo('editor')\">Volver</button>"
 + "      </div>"
 + "      <div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Negrita</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [negrita][/negrita]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Cursiva</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [cursiva][/cursiva]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Subrayado</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [subrayado][/subrayado]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Tachado</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [tachado][/tachado]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Tamaño de fuente</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [fuente de=\"12px\"][/fuente]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Color de fondo</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [color_de_fondo de=\"black\"][/color_de_fondo]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Color de letra</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [color_de_letra de=\"white\"][/color_de_letra]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Alineado izquierda</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [alineado a=\"left\"][/alineado]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Alineado derecha</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [alineado a=\"right\"][/alineado]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Alineado centro</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [alineado a=\"center\"][/alineado]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Alineado justificado</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [alineado a=\"justify\"][/alineado]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Lista ordenada</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [lista_ordenada]"
 + "                [punto][/punto]"
 + "            [/lista_ordenada]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Lista desordenada</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [lista_desordenada]"
 + "                <div>[punto][/punto]</div>"
 + "            [/lista_desordenada]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Flotación izquierda</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [flotacion a=\"left\"][/flotacion]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Flotación derecha</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [flotacion a=\"right\"][/flotacion]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Link</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [link a=\"url\"][/link]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Imagen</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [imagen de=\"url\"][/imagen]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Codigo</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [codigo][/codigo]"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"editor_wysiwyg_item_de_guia\">"
 + "          <div class=\"editor_wysiwyg_titulo\">Tabla</div>"
 + "          <div class=\"editor_wysiwyg_ejemplo\">"
 + "            [tabla]"
 + "                <div>[fila expandida=\"4\"]</div>"
 + "                    <div>[celda][/celda]</div>"
 + "                    <div>[celda expandida=\"3\"][/celda]</div>"
 + "                    <div>[celda][/celda]</div>"
 + "                <div>[/fila]</div>"
 + "            [/tabla]"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ valorPorDefecto:{ type:String,
default:""
},
alCambiar:{ type:Function,
default:function() {
}
}
},
data() {try {
return { modo:"editor",
esta_mostrando_marcas:false,
contenido_en_codigo:this.valorPorDefecto,
contenido_en_html:"",
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ insertar_marca( marca ) {try {
this.esta_mostrando_marcas = false;
const editor_de_contenido = this.$refs.editor_de_contenido;
editor_de_contenido.focus(  );
let texto_de_marca = "";
if(marca === "negrita") {
texto_de_marca = '[negrita] [/negrita]';
}
if(marca === "cursiva") {
texto_de_marca = '[cursiva] [/cursiva]';
}
if(marca === "subrayado") {
texto_de_marca = '[subrayado] [/subrayado]';
}
if(marca === "tachado") {
texto_de_marca = '[tachado] [/tachado]';
}
if(marca === "fuente") {
texto_de_marca = '[fuente de="12px"] [/fuente]';
}
if(marca === "color_de_fondo") {
texto_de_marca = '[color_de_fondo de="white"] [/color_de_fondo]';
}
if(marca === "color_de_fuente") {
texto_de_marca = '[color_de_fuente de="black"] [/color_de_fuente]';
}
if(marca === "alineado_izquierda") {
texto_de_marca = '[alineado a="izquierda"] [/alineado]';
}
if(marca === "alineado_derecha") {
texto_de_marca = '[alineado a="derecha"] [/alineado]';
}
if(marca === "alineado_centro") {
texto_de_marca = '[alineado a="centro"] [/alineado]';
}
if(marca === "alineado_justificado") {
texto_de_marca = '[alineado a="justificado"] [/alineado]';
}
if(marca === "lista_ordenada") {
texto_de_marca = '[lista_ordenada] [/lista_ordenada]';
}
if(marca === "lista_desordenada") {
texto_de_marca = '[lista_desordenada] [/lista_desordenada]';
}
if(marca === "punto") {
texto_de_marca = '[punto] [/punto]';
}
if(marca === "flotacion_izquierda") {
texto_de_marca = '[flotacion a="izquierda"] [/flotacion]';
}
if(marca === "flotacion_derecha") {
texto_de_marca = '[flotacion a="derecha"] [/flotacion]';
}
if(marca === "link") {
texto_de_marca = '[link a=""] [/link]';
}
if(marca === "imagen") {
texto_de_marca = '[imagen de=""] [/imagen]';
}
if(marca === "codigo") {
texto_de_marca = '[codigo] [/codigo]';
}
if(marca === "tabla") {
texto_de_marca = '[tabla] [/tabla]';
}
if(marca === "fila") {
texto_de_marca = '[fila expandida="1"] [/fila]';
}
if(marca === "celda") {
texto_de_marca = '[celda expandida="1"] [/celda]';
}
const posicion_inicial = editor_de_contenido.selectionStart;
const posicion_final = editor_de_contenido.selectionEnd;
const texto_inicial = editor_de_contenido.value;
const texto_resultante = texto_inicial.substr( 0,
posicion_inicial ) + texto_de_marca + texto_inicial.substr( posicion_final );
this.contenido_en_codigo = texto_resultante;
this.$forceUpdate( true );
setTimeout( function() {try {
editor_de_contenido.selectionStart = texto_inicial.substr( 0,
posicion_inicial ).length + texto_de_marca.length - 4 - marca.length;
editor_de_contenido.selectionEnd = editor_de_contenido.selectionStart + 1;
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_marcas() {try {
if(this.esta_mostrando_marcas === true) {
this.esta_mostrando_marcas = false;
}
else {
this.esta_mostrando_marcas = true;
}
} catch(error) {
console.log(error);
throw error;
}

},
transpilar_codigo() {try {
const resultado = Editor_wysiwyg_vuejs_parser.parse( this.contenido_en_codigo );
this.contenido_en_html = resultado;
this.alCambiar( this.contenido_en_codigo,
this );
} catch(error) {
console.log(error);
throw error;
}

},
cambiar_a_modo( nuevo_modo ) {try {
if(nuevo_modo === "vista") {
try {
this.transpilar_codigo(  );
} catch(error) {
this.error = error;
return;}
this.error = undefined;
this.modo = "vista";
}
else if(nuevo_modo === "editor") {
this.modo = "editor";
}
else if(nuevo_modo === "ayuda") {
this.modo = "ayuda";
}
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);