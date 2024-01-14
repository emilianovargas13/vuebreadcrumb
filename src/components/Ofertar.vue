<template>
    <div>
        Ofertar espacio
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
    name: "Ofertar",
    data() {
      return {
        items: [
          {
            text: "LandPage",
            to: { name: "landpage" },
          },
          {
            text: "Ofertar Espacio",
            active: true,
          },
        ],
      };
    },
  });
  </script>
  