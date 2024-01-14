<template>
    <div>
     Catalogo de espacios
      <div>
        <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
      </div>
    </div>
  </template>
  
  <script>
  import Vue from "vue";
  
  export default Vue.extend({
    name: "Catalogo",
    data() {
      return {
        items: [
          
          {
            text: "Detalles de espacio ",
            to: { name: "detalles" },
          },
          
          {
            text: "Catalogo",
            active: true,
          },
        ],
      };
    },
  });
  </script>
  