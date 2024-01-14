<template>
    <div>
      Rentar tu espacio
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
            text: "Informacion de espacio ",
            to: { name: "informacion" },
          },
          
          {
            text: "Rentar",
            active: true,
          },
        ],
      };
    },
  });
  </script>
  