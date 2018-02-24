<template>

  <header class="nav row col-16 p-20">
    <div class="col-16 row align-center justify-between">
      <figure>Logo</figure>
      <nav >
        <ul class="is-list-less row">
          <li>
            <router-link to="/">Buscar</router-link>

          </li>
          <li>
            <router-link to="about">Nosotros</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <section class="m-t-a-40 is-text-center">
      <h1>Platzi Music</h1>
      <h2>Canciones que están vue-nisimas!</h2>
    </section>
    <div class="col-16 justify-center">
      <p class="player"><pm-player></pm-player></p>
    </div>

  </header>

</template>
<script>
  import PmPlayer from '@/components/Player.vue'

  export default {
    components: {PmPlayer}
  }
</script>
<style lang="scss" scoped="true">
  nav{
    a{
      color: white !important;
    }
    li{
      margin: 0 1rem;
    }
  }
  header {
    background: #191821;
    color: white;
  }
  .player{
    max-width: 30rem;
    margin: auto;
  }
</style>
