<template>
  <div > 
    <TheHeaderVue></TheHeaderVue>
    <TheMenuVue></TheMenuVue>
    <TheMainVue></TheMainVue>
  </div>
</template>

<script>
import TheHeaderVue from './layout/TheHeader/TheHeader.vue';
import TheMainVue from './layout/TheMain/TheMain.vue';
import TheMenuVue from './layout/TheMenu/TheMenu.vue';
export default {
  name: 'App',
  components: {
    TheHeaderVue,TheMainVue,TheMenuVue
  }
}
</script>

<style>
@import url(./css/main.css);
</style>
