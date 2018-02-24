<template>
  <div class="track row" v-if="track && track.album">
    <div class="col-6">
      <figure class="m-b-40">
        <img :src="track.album.images[0].url" alt="">
      </figure>
      <button @click="selectTrack"></button>
    </div>
    <div class="col-10">
      <h3>{{track.name}}</h3>
        <div class="container">
          <ul class="is-list-less">
            <li v-for="(v, k) in track">
              <strong>{{k}} </strong>
              <span>{{v}}</span>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
  import trackMixin from '@/mixins/track'
  import trackService from '@/services/track'

  export default {
    mixins: [trackMixin],

    data() {
      return {
        track: {}
      }
    },
    created() {
      const id = this.$route.params.id;
      trackService.getById(id).then(res => {
        this.track = res;
      });
    }
  }
</script>
<style scoped>
  .track {
    max-width: 80rem;
    margin: 2rem auto;
  }
</style>
