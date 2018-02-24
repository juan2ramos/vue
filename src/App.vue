<template>
  <div id="app">
    <pm-header></pm-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <pm-footer></pm-footer>
  </div>
</template>
<script>

  import PmFooter from '@/components/layout/Footer.vue';
  import PmHeader from '@/components/layout/Header.vue';

  export default {
    name: 'app',
    components: {PmFooter, PmHeader},
  }
</script>

<style lang="scss">
  @import "./scss/main";
</style>
