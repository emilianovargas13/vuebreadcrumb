<template>
    <div>
      Rentar espacio
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
    name: "Rentar",
    data() {
      return {
        items: [
          
          {
            text: "Catalogo de espacios ",
            to: { name: "catalogo" },
          },
          
          {
            text: "Rentar espacio",
            active: true,
          },
        ],
      };
    },
  });
  </script>
  