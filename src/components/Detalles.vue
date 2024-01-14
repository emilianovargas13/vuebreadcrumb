<template>
    <div>
     Detalles de espacio
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
    name: "Detalles",
    data() {
      return {
        items: [
          
          {
            text: "LandPage ",
            to: { name: "landpage" },
          },
          
          {
            text: "Detalles de espacio",
            active: true,
          },
        ],
      };
    },
  });
  </script>
  