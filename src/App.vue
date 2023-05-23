<template>
  <div>
    <TheHeaderVue></TheHeaderVue>
    <TheMenuVue></TheMenuVue>
  </div>
</template>

<script>
//Import components

import TheHeaderVue from './layout/TheHeader/TheHeader.vue';
import TheMenuVue from './layout/TheMenu/TheMenu.vue';

export default {
  name: 'App',
  components: {
    TheHeaderVue,TheMenuVue
  }
}
</script>
<style scoped>

</style>
<style scoped>
@import url(./css/main.css);
</style>
