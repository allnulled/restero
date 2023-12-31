
window.BreadcrumbGenerico = Castelog.metodos.un_componente_vue2("BreadcrumbGenerico",
  "<div class=\"BreadcrumbGenerico Component\">"
 + "    <h5 style=\"margin-bottom: 1px;\">"
 + "      <span v-for=\"miga, miga_index in migas\" v-bind:key=\"'breadcrumb-miga-' + miga_index\">"
 + "        <span v-if=\"miga_index !== 0\">"
 + "           » "
 + "        </span>"
 + "        <span v-if=\"miga.link\" class=\"como_link_claro\" v-on:click=\"() => $router.history.push(miga.link)\">"
 + "          {{ miga.texto }}"
 + "        </span>"
 + "        <span v-else-if=\"miga.onclick\" class=\"como_link_claro\" v-on:click=\"miga.onclick\">"
 + "          {{ miga.texto }}"
 + "        </span>"
 + "      </span>"
 + "    </h5>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
migas:{ type:Array,
required:false,
default:[  ]
}
},
data() {try {
console.log('[DEBUG]', "BreadcrumbGenerico.data");
return { 
};
} catch(error) {
this.$window.$notificaciones.notificar_error( error );}
}
};},
  null);