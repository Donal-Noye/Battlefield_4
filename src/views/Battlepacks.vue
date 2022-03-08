<template>
  <h1 class="headline">Battlepacks</h1>
  <div class="battlepacks">
    <div class="battlepacks__slider">
      <swiper
        :slides-per-view="3"
        :space-between="1"
        :modules="modules"
        :navigation="true"
      >
        <swiper-slide v-for="pack in battlepacks" :key="pack">
          <div class="battlepacks-card">
            <div class="battlepacks-card__image">
              <img :src="pack.image" alt="">
            </div>
            <h4 class="battlepacks-card__title">{{ pack.title }}</h4>
            <div class="battlepacks-card__level">
              <span class="battlepacks-card__level-bar"></span>
              <div class="battlepacks-card__rank">rank {{ pack.rank }}</div>
              <div class="battlepacks-card__score">{{ pack.score }}/110000</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="battlepacks-info">
      <div class="battlepacks-info__item">
        <div class="battlepacks-info__header">
          <h4 class="battlepacks-info__title">battlepacks</h4>
        </div>
        <div class="battlepacks-info__content">
          <div class="battlepacks-info__text">
            <p>Battlepacks contain a combination of new weapon accessories, dog tags, knives, XP boosts, and character customization items. They are awarded during gameplay either by ranking up or using your favorite weapon.</p>
            <p>Keep playing to unlock more Battlepacks to earn more and more items!</p>
          </div>
        </div>
      </div>
      <div class="battlepacks-info__item">
        <div class="battlepacks-info__header">
          <h4 class="battlepacks-info__title">Gold battlepacks</h4>
        </div>
        <div class="battlepacks-info__content">
          <div class="battlepacks-info__text">
            The Gold Battlepack contains 5 items, including:<br />
            - A minimum of 1 Advanced item, 2 Standard items<br />
            - 2 Bonus items with a small likelihood of being rewarded with a Distinguished item not present in a Silver Pack
          </div>
        </div>
      </div>
    </div>
    <div class="battlepacks__actions">
      <AppButton type="btn--primary" text="back" @click="backPage" />
      <AppButton type="btn--primary" text="refresh" />
    </div>
  </div>
</template>

<script>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

import "swiper/swiper-bundle.css";

import { reactive } from "vue";
import AppButton from "@/components/ui/AppButton";
import { backPage } from '@/use/backPage.js'

export default {
  setup() {
    const battlepacks = reactive([
      { image: 'https://i.ibb.co/TB5v6B9/battlepack-gold.png', title: 'gold battlepack', rank: '67', score: '97450' },
      { image: 'https://i.ibb.co/TB5v6B9/battlepack-gold.png', title: 'gold battlepack', rank: '55', score: '65490' },
      { image: 'https://i.ibb.co/TB5v6B9/battlepack-gold.png', title: 'gold battlepack', rank: '71', score: '6530' },
      { image: 'https://i.ibb.co/TB5v6B9/battlepack-gold.png', title: 'gold battlepack', rank: '62', score: '53422' },
      { image: 'https://i.ibb.co/TB5v6B9/battlepack-gold.png', title: 'gold battlepack', rank: '54', score: '5246' },
      { image: 'https://i.ibb.co/TB5v6B9/battlepack-gold.png', title: 'gold battlepack', rank: '45', score: '5424' },
    ])

    return {
      modules: [Navigation],
      battlepacks,
      ...backPage()
    }
  },
  components: {AppButton, Swiper, SwiperSlide },
};
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.battlepacks {
  &__slider {
    margin-top: 50px;
  }

  &__actions {
    display: flex;
    margin-top: 75px;
    gap: 8px;
  }

  .swiper {
    padding: 0 75px;
    height: 376px;
  }

  .swiper-button-disabled,
  .swiper-button-disabled {
    opacity: .3;
  }

  .swiper-button-prev {
    left: 0;

    &:after {
      margin-left: 11px;
      transform: rotate(225deg);
    }
  }

  .swiper-button-next {
    right: 0;

    &:after {
      margin-left: -11px;
      transform: rotate(45deg);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    margin: 0;

    width: 75px;
    height: 100%;

    background-color: $black;

    top: 0;

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

.battlepacks-card {
  display: grid;
  grid-template-rows: 1fr 54px 60px;

  height: 100%;

  cursor: pointer;
  background-color: rgba($black, $opacity);
  border: 1px solid transparent;

  &:hover {
    border-color: rgba(#FFF, .7);
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .3;

    img {
      width: 210px;
      height: 210px;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 2.6rem;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $black;

    background: linear-gradient(180deg, #B0B0B0 0%, #FFFFFF 100%);
  }

  &__level {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    position: relative;
  }

  &__level-bar {
    width: 80%;
    height: 100%;

    background-color: $orange;

    position: absolute;
    left: 0;
    top: 0;
  }

  &__score,
  &__rank {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    position: relative;
    z-index: 1;
  }
}

.battlepacks-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 50px;

  &__item {
    display: grid;
    grid-template-rows: 40px 250px;
  }

  &__header {
    display: flex;
    align-items: center;
    padding: 0 15px;

    background-color: rgba($black, .8);
  }

  &__title {
    font-weight: 600;
    font-size: 2.4rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__content {
    padding: 20px;
    background-color: rgba($black, $opacity);
  }

  &__text {
    font-weight: 600;
    font-size: 2rem;
    line-height: 117%;
    letter-spacing: 0.04em;
    color: rgba(#fff, .9);

    p {
      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }
  }
}
</style>