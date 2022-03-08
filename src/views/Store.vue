<template>
  <div class="store">
    <div class="store-menu">
      <ul class="store-menu__list">
        <li 
          class="store-menu__item" 
          v-for="item in storeMenuList"
          :key="item.title"
        >
          <a class="store-menu__link" href="#">
            <h5 class="store-menu__title">{{ item.title }}</h5>
          </a>
        </li>
      </ul>
    </div>
    <div class="store-trending">
      <a 
        class="store-trending__banner" 
        :class="item.type"
        v-for="item in storeTrendingList"
        :key="item.title"
        href="#"
      >
        <img class="store-trending__image" :src="item.img" alt="">
        <h3 class="store-trending__title">{{ item.title }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const storeMenuList = ref([
      { title: 'battlepacks' },
      { title: 'shortcut kits' },
      { title: 'expansions' },
      { title: 'premium' },
    ])
    const storeTrendingList = ref([
      { type: 'bf-5', img: 'https://i.ibb.co/CmFkGSW/bf-5.jpg', title: 'big savings for battlefield veterans' },
      { type: 'bf-4', img: 'https://i.ibb.co/rcHFZr2/bf-4.jpg', title: 'secure a premium membership' },
    ])
  
    return {
      storeMenuList,
      storeTrendingList
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.store {
  display: grid;
  grid-template-columns: 412px auto;
  gap: 52px;
}

.store-menu {
  &__item {
    border-top: 1px solid rgba(#fff, .1);

    transition: background-color .2s $ease;

    &:hover {
      background-color: #fff;

      .store-menu__title {
        color: $black;
      }
    }
  }

  &__link {
    padding: 17px 20px;
  }

  &__title {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    transition: color .2s $ease;
  }
}

.store-trending {
  display: flex;
  gap: 6px;

  &__banner {
    position: relative;
    overflow: hidden;

    &:hover {
      &:after {
        transform: translateY(0);
      }

      .store-trending__title {
        transform: translateY(-10px);
      }
    }

    &:after {
      content: '';
      width: 100%;
      height: 10px;

      background-color: #fff;

      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;

      transform: translateY(10px);
      transition: transform .4s $ease;
    }

    &.bf-5 {
      width: 550px;
      height: 348px;

      .store-trending__title {
        width: 75%;
      }
    }

    &.bf-4 {
      width: 270px;
      height: 348px;
    }
  }

  &__title {
    padding: 22px;
    padding-left: 30px;

    position: absolute;
    bottom: 0;
    left: 0;

    font-weight: 500;
    font-size: 2.8rem;
    line-height: 93%;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    transition: transform .4s $ease;
  }
}
</style>
