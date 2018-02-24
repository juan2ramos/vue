<template>

  <div class="card" v-if="track && track.album">
    <img :src="track.album.images[0].url" alt="title">
    <header>
      <h2>{{track.name}}</h2>
      <p>Duración: {{track.duration_ms | ms - to - mm}}</p>
    </header>
    <div class="card-content">
      <ul class="is-list-less">
        <li>{{track.name}}
          <div class="row justify-between">
            <button @click="selectTrack">➡</button>
            <button @click="goToTrack(track.id)">🌎</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import trackMixin from '@/mixins/track'

  export default {
    mixins: [trackMixin],
    props: {
      track: {type: Object, required: true}
    },
    methods: {

      goToTrack(id) {
        if (!this.track.preview_url) {
          return
        }
        this.$router.push({name: "track", params: {id}});

      }
    }
  }
</script>
<style lang="scss" scoped="">
  .card {
    margin-top: 4rem;
    padding-bottom: 2rem;
  }

  a {
    cursor: pointer
  }
</style>
