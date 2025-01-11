<template>
  <div class="app-container">  
    <MenuComponent />   

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuComponent from '@/components/Menu.vue'

@Component({
  components: {
   MenuComponent
  }
})

export default class App extends Vue { 
  
}

</script>

<style>
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
