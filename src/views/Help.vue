<template>
  <div class="menu__header">
    <h4 class="menu__title">Help</h4>
  </div>
  <div class="help">
    <ul class="help__info">
      <li class="help__item" v-for="item in helpList" :key="item.title">
        <h2 class="help__title">{{ item.title }}</h2>
        <p class="help__text">{{ item.text }}</p>
      </li>
    </ul>
    <AppButton type="btn--secondary" text="contact us" />
  </div>
</template>

<script>
import {reactive} from "vue";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {AppButton},
  setup() {
    const helpList = reactive([
      {
        title: 'Get started in Battlefield 1',
        text: 'Redeem your code, download and install Battlefield 1'
      },
      {
        title: 'Battlefield 1 features and game modes',
        text: 'What’s new in Battlefield 1? Explore new features and game modes, find out which class suits your play-style, and learn how Scraps and Warbonds work.'
      },
      {
        title: 'Battlefield 1 - Custom Games',
        text: 'Arriving just in time for Batlefest on November 16, 2016, Custom Games bring new challenges for all Battlefield 1 players. Find out more about Fog of War, Hardcore servers and Standard Issue Rifles.'
      },
    ])

    return {
      helpList
    }
  }
}
</script>

<style lang="scss">
.help {
  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 70px;
    margin-bottom: 100px;
  }

  &__title {
    font-weight: 600;
    font-size: 3.4rem;
    line-height: 43px;
    letter-spacing: 0.03em;
    color: rgba(#fff, .8);
  }

  &__text {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: rgba(#fff, .8);
  }

  .btn {
    padding: 10px 100px;
    font-size: 2.8rem;
  }
}
</style>