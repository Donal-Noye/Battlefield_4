<template>
  <div class="menu__header">
    <h4 class="menu__title">Watch</h4>
  </div>
  <div class="watch">
    <ul class="watch__list">
      <li class="watch__card" v-for="video in videos" :key="video.image">
        <img class="watch__img" :src="video.image" alt="">
        <AppPlayBtn />
        <div class="watch__content">
          <div class="watch__type">watch</div>
          <h4 class="watch__title">{{ video.title }}</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AppPlayBtn from "@/components/ui/AppPlayBtn";
import { reactive } from "vue";

export default {
  setup() {
    const videos = reactive([
      {
        image: 'https://i.ibb.co/KyFHCNK/better-squad.jpg',
        title: 'How to play better with your Squad'
      },
      {
        image: 'https://i.ibb.co/BCbRRqk/learn-bf4-basics-with-oshy.jpg',
        title: 'Learn Battlefield 4 Basics with OSHY'
      },
      {
        image: 'https://i.ibb.co/LgVRgKq/beginners-guide-to-bf4-by-asal.jpg',
        title: 'Beginners Guide To Battlefield 4 by Asal'
      },
      {
        image: 'https://i.ibb.co/KDym5vh/new-into-the-jungle-trailer.jpg',
        title: 'New Into the Jungle Trailer'
      },
      {
        image: 'https://i.ibb.co/mzc7nDQ/learn-about-new-weapons.jpg',
        title: 'Learn About New Weapons'
      },
    ])

    return { videos }
  },
  components: { AppPlayBtn }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.watch {
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
      opacity: 0.7;

      position: absolute;
      left: 0;
      bottom: 0;
    }

    &:hover {
      .play-video {
        background-color: #fff;

        span {
          border-color: transparent transparent transparent $black;
        }
      }
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