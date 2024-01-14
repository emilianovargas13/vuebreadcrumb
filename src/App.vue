
<template>
  <div id="app">
    <div>
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <b-container fluid>
      <b-row>

        
        <b-col md="2" class="sidebar px-0">

          
          <div class="selecteable" @click="navigator('/inicio')">
            <b-icon />
            Inicio
          </div>
          <div class="selecteable" @click="navigator('/main')">
            <b-icon />
            Main
          </div>
          <div class="selecteable" @click="navigator('/tercero')">
            <b-icon />
            Tercero
          </div>

          <div class="selecteable" @click="navigator('/landpage')">
            <b-icon />
            Inicio LandPage
          </div>



        </b-col>
        <b-col md="10">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script >
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  methods: {
    navigator(link) {
      if (this.$route.path !== link) {
        this.$router.push(link);
      }
    },
  },
});
</script>

<style scoped>
#app {
  height: 97.6vh;
}

.sidebar {
  height: 94.8vh;
  background-color: #d6d6d6;
}

.selecteable {
  cursor: pointer;
  padding: 10px;
}

.selecteable:hover {
  background-color: #b4b4b4;
}
</style>
