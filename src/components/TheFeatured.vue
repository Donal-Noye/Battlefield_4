<template>
  <div class="featured">
    <swiper
      :slidesPerView="'auto'"
      :space-between="9"
      :modules="modules"
      :navigation="true"
    >
      <swiper-slide>
        <AppCard
          type="trending"
          img="https://i.ibb.co/JC4S80z/defuse.jpg"
          title="defuse"
          map="all maps"
          results="3"
          button="quickmatch"
        />
      </swiper-slide>
      <swiper-slide>
        <AppCard
          type="recommended"
          img="https://i.ibb.co/3rKyyt4/operation-whiteout.jpg"
          title="Conquest Large"
          map="Operation Whiteout, Ham"
          results="22"
          button="quickmatch"
        />
      </swiper-slide>
      <swiper-slide>
        <AppCard
          type="watch"
          img="https://i.ibb.co/BCbRRqk/learn-bf4-basics-with-oshy.jpg"
          title="Learn Battlefield 4 Basics with OSHY"
        />
      </swiper-slide>
      <swiper-slide>
        <AppCard
          type="watch"
          img="https://i.ibb.co/LgVRgKq/beginners-guide-to-bf4-by-asal.jpg"
          title="Beginners Guide To Battlefield 4 by Asal"
        />
      </swiper-slide>
      <swiper-slide>
        <AppCard
          type="watch"
          img="https://i.ibb.co/KDym5vh/new-into-the-jungle-trailer.jpg"
          title="New Into the Jungle Trailer"
        />
      </swiper-slide>
      <swiper-slide>
        <AppCard
          type="watch"
          img="https://i.ibb.co/mzc7nDQ/learn-about-new-weapons.jpg"
          title="Learn About New Weapons"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import AppCard from "@/components/ui/AppCard.vue";

import "swiper/swiper-bundle.css";

export default {
  setup() {
    return {
      modules: [Navigation],
    }
  },
  components: { AppCard, Swiper, SwiperSlide },
};
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.featured {
  margin-bottom: 20px;

  .swiper-slide {
    width: auto;
  }

  .swiper-button-disabled,
  .swiper-button-disabled {
    display: none;
  }

  .swiper-button-prev {
    left: 54px;

    &:after {
      margin-left: 8px;
      transform: rotate(225deg);
    }
  }

  .swiper-button-next {
    right: 54px;

    &:after {
      margin-left: -11px;
      transform: rotate(45deg);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 50px;
    height: 50px;

    background-color: rgba($black, .9);

    transition: all .4s $ease;

    &:hover {
      opacity: 1;
      background-color: #fff;

      &:after {
        border-color: $black;
      }
    }

    &:after {
      content: '';
      width: 20px;
      height: 20px;

      border-width: 3px 3px 0 0;
      border-style: solid;
      border-color: #fff;
      transform-origin: center;

      transition: border-color .2s ease;
    }
  }
}
</style>