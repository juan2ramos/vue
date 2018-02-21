<template>
  <div id="app" class="row align-center justify-around">
    <pm-header></pm-header>
    <section class="container">
      <nav class="nav row">
        <div class=" row m-t-a-40">
          <input type="text" class="col-8" placeholder="Buscar canciones" v-model="searchQuery">
          <a class="button col-4" @click="search">Buscar</a>
          <a class="button col-4 error-button">&times;</a>
          <p>
            <small>{{searchMessage}}</small>
          </p>
        </div>
        <div class="col-16">
          <ul>
            <li v-for="t in tracks">{{ t.name}} - {{t.artists[0].name}}</li>
          </ul>
        </div>
      </nav>
    </section>
    <pm-footer></pm-footer>
  </div>

</template>

<script>
  import tracks from './services/track';
  import PmFooter from './components/layout/Footer.vue'
  import PmHeader from './components/layout/Header.vue'
  export default {
    name: 'app',
    components: {PmFooter,PmHeader},
    data() {
      return {
        searchQuery: '',
        tracks: []
      }
    },
    computed: {
      searchMessage() {
        return `Encontrados ${this.tracks.length}`
      }
    },
    methods: {
      search() {
        this.track = tracks.search(this.searchQuery)
          .then(res => {
            console.log(res.tracks.items);
            this.tracks = res.tracks.items
          });
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main";

</style>
