<template>
  <ul class="multiplayer-select">
    <li class="multiplayer-select-card" v-for="(item, idx) in multiplayerSelects" :key="idx">
      <router-link class="multiplayer-select-card__link" :to="{ name: item.path }">
        <div class="multiplayer-select-card__preview">
          <img :src="item.img" alt="">
        </div>
        <div class="multiplayer-select-card__info">
          <h3 class="multiplayer-select-card__title">{{ item.title }}</h3>
          <p class="multiplayer-select-card__text">{{ item.text }}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import AppModal from '@/components/ui/AppModal.vue'

export default {
  setup() {
    const multiplayerSelects = ref([
      {
        img: "https://i.ibb.co/cXhYdYD/quickmatch.jpg",
        title: "quickmatch",
        text: "The quickest way to get into any of the game modes.",
        path: "Quickmatch"
      },
      {
        img: "https://i.ibb.co/5vv4MXv/server-browser.jpg",
        title: "squad join",
        text: "Play with some friends.",
        path: "SquadJoin"
      },
      {
        img: "https://i.ibb.co/x8MfQZQ/squad-join.jpg",
        title: "server browser",
        text: "The old school way of finding that perfect game. Set up your filters and you’re ready to go.",
        path: "Server Browser"
      },
      {
        img: "https://i.ibb.co/7WYjCjF/test-range.jpg",
        title: "Test Range",
        text: "Try out all the weapons, gadgets and vehicles to improve your skills on the battlefield.",
        path: "Multiplayer",
      },
    ])

    return {
      multiplayerSelects,
    }
  },
  components: { AppModal }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.multiplayer-select {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 9px;
}

.multiplayer-select-card {
  height: 472px;

  background-color: rgba($black, $opacity);

  transition: background-color .4s $ease;

  &:hover {
    background-color: #fff;

    .multiplayer-select-card__title {
      color: rgba($black, .8);
    }

    .multiplayer-select-card__text {
      color: rgba($black, $opacity);
    }
  }

  &__link {
    height: 100%;
  }

  &__preview {
    height: 55%;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;

      background-color: rgba($black, .3);

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    padding: 16px 35px 16px 23px;
  }

  &__title {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 36px;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    transition: color .4s $ease;
  }

  &__text {
    font-weight: 600;
    letter-spacing: 0.03em;
    color: rgba(#fff, $opacity);

    transition: color .4s $ease;
  }
}
</style>