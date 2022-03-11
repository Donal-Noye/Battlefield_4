<template>
  <div class="recently-played">
    <div class="recently-played__header">
      <h5 class="headline">recently played</h5>
      <a class="see-all" href="#">see all</a>
    </div>
    <div class="recently-played__inner">
      <AppCard
        type="recent-server"
        img="https://i.ibb.co/fxJVxyc/dawnbreaker.jpg"
        title="[ Gunmaster - vote"
        map="Dawnbreaker"
        button="join"
      />
      <AppCard
        type="recent-server"
        img="https://i.ibb.co/vv1NWmt/propaganda.jpg"
        title="24/7 | DLC conquest"
        map="Propaganda"
        button="join"
      />
      <AppCard
        type="recent-server"
        img="https://i.ibb.co/SXYD1Ls/operation-locker.jpg"
        title="24/7 | DLC conquest"
        map="operation locker"
        button="join"
      />
      <AppCard
        type="recent-server"
        img="https://i.ibb.co/hHwS4PS/lancang-dam.jpg"
        title=". #3 [e4gl] 60 hz al"
        map="lancang dam"
        button="join"
      />
      <AppCard
        type="recent-server"
        img="https://i.ibb.co/hVTxX8P/siege-of-shanghai.jpg"
        title=". #1 [brazzers] - ni"
        map="siege of shanghai"
        button="join"
      />
      <AppCard
        type="recent-server"
        img="https://i.ibb.co/Fg0SWTT/golmud-railway.jpg"
        title=". #1| 24/7 rock n ro"
        map="golmud railway"
        button="join"
      />
    </div>
  </div>
</template>

<script>
import AppCard from "./ui/AppCard.vue"

export default {
  setup() {
  },
  components: { AppCard }
}
</script>

<style lang="scss">
.recently-played {
  margin-top: 13px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;

    .headline {
      margin: 0;
    }
  }

  &__inner {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }
}
</style>