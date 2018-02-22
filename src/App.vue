<template>
  <div id="app">
    <pm-loader v-show="isLoading"></pm-loader>
    <pm-header></pm-header>
    <pm-notification v-show="showNotification" :typeMessage="typeMessage">
      <span slot="body">  </span>
    </pm-notification>
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
      </nav>
      <div class="col-16  m-t-40 " v-show="!isLoading">
        <ul class="row is-list-less justify-between">
          <li class="col-5" v-for="t in tracks">
            <pm-track :track="t" @select="setSelectedTrack" :class="{'is-active':t.id=== selectedTrack}"></pm-track>
          </li>
        </ul>
      </div>

    </section>
    <pm-footer></pm-footer>
  </div>

</template>

<script>
  import tracks from '@/services/track';
  import PmFooter from '@/components/layout/Footer.vue';
  import PmHeader from '@/components/layout/Header.vue';
  import PmTrack from '@/components/Track.vue';
  import PmLoader from '@/components/shared/Loading.vue';
  import PmNotification from '@/components/shared/Notification.vue';

  export default {
    name: 'app',
    components: {PmFooter, PmHeader, PmTrack, PmLoader, PmNotification},
    data() {
      return {
        isLoading: false,
        searchQuery: '',
        tracks: [],
        selectedTrack: '',
        showNotification: false,
        typeMessage: {}
      }
    },
    computed: {
      searchMessage() {
        return `Encontrados ${this.tracks.length}`
      }
    },
    watch: {
      showNotification() {
        if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false;
          }, 3000)
        }
      },
    },
    methods: {
      setSelectedTrack(id) {
        this.selectedTrack = id;
      },
      search() {
        this.isLoading = true;
        this.track = tracks.search(this.searchQuery)
          .then(res => {
            this.setNotification(res);
          });
      },

      setNotification(res) {
        this.isLoading = false;
        this.tracks = res.tracks.items;
        this.showNotification = true;

        if (res.tracks.total === 0) {
          this.typeMessage = {
            'class': 'alert-error',
            'message': 'No hubo resultados ',
          };
        } else {
          this.typeMessage = {
            'class': 'alert-success',
            'message': `Hubo ${res.tracks.total}`,
          };
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main";

  .is-active {
    border: .3rem solid green
  }
</style>
