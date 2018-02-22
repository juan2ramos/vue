<template>

  <div class="card">
    <img :src="track.album.images[0].url" alt="title">
    <header>
      <h2>{{track.name}}</h2>
    </header>
    <div class="card-content">
      <ul class="is-list-less">
        <li>{{track.name}}</li>
        <a @click="selectTrack">➡</a>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      track: {type: Object, required: true}
    },
    methods:{
      selectTrack(){
        this.$emit('select', this.track.id);
      }
    }
  }
</script>
<style lang="scss" scoped="">
  .card {
    margin-top: 4rem;
    padding-bottom: 2rem;
  }
</style>
