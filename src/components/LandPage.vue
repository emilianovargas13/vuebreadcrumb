<template>
  <div>
    LandPage
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
  name: "LandPage",
  data() {
    return {
      items: [
        {
          text: "Renta tu espacio",
          href: "#",
          to: { name: "rentar" },
        },
       {
          text: "Rentar espacio",
          href: "#",
          to: { name: "rentar2" },
       },
        {
          text: "LandPage",
          active: true,
        },
      ],
    };
  },
});
</script>