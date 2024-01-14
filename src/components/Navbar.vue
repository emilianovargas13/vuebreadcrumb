<template>
    <div>
      <b-navbar toggleable="lg" class="styles-navbar">
        <b-navbar-brand class="container-menu pt-0 pb-1 my-0 px-2" v-b-toggle.sidebar>
          <b-icon
            class="selectable" 
            icon="list" 
            
            aria-hidden="true"
            
            />

        </b-navbar-brand>
      </b-navbar>
      <Sidebar/>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'Navbar',
    components: {
        Sidebar
    }
});
</script>
  
<style scoped>
  .container-menu{
    border-radius: 100%;
    font-size: 1.3rem;
  }

  .container-menu:hover{
    background-color: rgb(255, 255, 255, 0.3);
  }

</style>




