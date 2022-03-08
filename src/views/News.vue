<template>
  <div class="menu__header">
    <h4 class="menu__title">News</h4>
  </div>
  <div class="news">
    <ul class="news__list">
      <li class="news__card" v-for="item in news" :key="item.image">
        <img class="news__img" :src="item.image" alt="">
        <div class="news__content">
          <div class="news__type">news</div>
          <h4 class="news__title">{{ item.title }}</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const news = reactive([
      {
        image: 'https://i.ibb.co/PQNTqpK/winners.jpg',
        title: 'see this month’s winners'
      },
      {
        image: 'https://i.ibb.co/zrWFzRC/summer.jpg',
        title: 'battlefield v summer update'
      },
      {
        image: 'https://i.ibb.co/g4FsnxK/chapter-6.jpg',
        title: 'battlefield v chapter 6: update #3'
      },
      {
        image: 'https://i.ibb.co/Nr5F0SJ/red-airplane.jpg',
        title: 'fan-made image gallery'
      },
      {
        image: 'https://i.ibb.co/Dbgf8f6/fan-made-video.jpg',
        title: 'battlefield v chapter 6: update #2'
      },
      {
        image: 'https://i.ibb.co/6rXBmSF/jungle.jpg',
        title: 'ready to go into the jungle?'
      },
      {
        image: 'https://i.ibb.co/M6TCPwY/wake-island.jpg',
        title: 'Explore the wake island map'
      },
    ])

    return { news }
  },
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.news {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    position: relative;

    cursor: pointer;

    height: 284px;

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, rgba(16, 16, 16, 0) 22.92%, #101010 82.29%);
      opacity: .7;

      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
  }

  &__content {
    padding: 23px;
    margin-top: auto;

    position: relative;
    z-index: 1;
  }

  &__type {
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(#fff, .7);
  }

  &__title {
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 100%;
    letter-spacing: 0.03em;
    text-transform: capitalize;
  }
}
</style>