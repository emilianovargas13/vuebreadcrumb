<template>
    <div>
      Informacion de espacio
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
    name: "Informacion de espacio",
    data() {
      return {
        items: [
          {
            text: "Ofertar espacio",
            href: "#",
            to: { name: "ofertar" },
          },
          {
            text: "Informacion de espacio",
            active: true,
          },
        ],
      };
    },
  });
  </script>
  