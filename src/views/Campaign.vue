<template>
  <h1 class="headline">Compaign</h1>
  <div class="campaign">
    <div class="campaign__menu">
      <nav class="campaign__nav">
        <ul class="campaign__list">
          <li
            class="campaign__item"
            v-for="item in campaignNavList"
            :key="item.name"
          >
            <button class="campaign__link" :class="item.active">{{ item.name }}</button>
          </li>
        </ul>
      </nav>
      <AppButton type="btn--primary" text="back" @click="backPage" />
    </div>
    <div class="campaign-mission">
      <div class="campaign-mission__objective">
        <div class="campaign-mission__header">
          <div class="campaign-mission__title">shanghai</div>
          <span class="campaign-mission__dot"></span>
          <div class="campaign-mission__title">objective</div>
        </div>
        <div class="campaign-mission__content campaign-mission__descr">
          <p class="campaign-mission__text">Reach the Hotel. Meet up with your CIA contact at the Zhi-You Tower.</p>
        </div>
      </div>
      <div class="campaign-mission__image">
        <img src="@/assets/images/campaign_mission.jpg" alt="">
      </div>
      <div class="campaign-mission__info">
        <div
          class="campaign-mission__item"
          v-for="item in campaignMissionInfo"
          :key="item.title"
        >
          <div class="campaign-mission__header">
            <div class="campaign-mission__title" v-if="item.title">{{ item.title }}</div>
          </div>
          <div class="campaign-mission__content">
            <p class="campaign-mission__text">{{ item.text }}</p>
            <p class="campaign-mission__text" v-if="item.score">{{ item.score }}</p>
          </div>
        </div>
      </div>
      <div class="campaign-mission__assignments">
        <div class="campaign-mission__header">
          <div class="campaign-mission__title">Mission Assignments</div>
        </div>
        <div class="campaign-mission__content">
          <div
            class="campaign-mission__item"
            v-for="item in campaignMissionAssignments"
            :key="item.score"
          >
            <img class="campaign-mission__image" :src="item.image" alt="">
            <p class="campaign-mission__text">{{ item.score }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import AppButton from "@/components/ui/AppButton";
import { backPage } from '@/use/backPage.js'

export default {
  components: { AppButton },
  setup() {
    const campaignNavList = reactive([
      { name: 'Resume', active: 'active' },
      { name: 'replay missions' },
      { name: 'start new campaign' },
    ])
    const campaignMissionInfo = reactive([
      { title: 'Difficulty', text: 'NORMAL' },
      { title: 'Collectibles', text: 'Dog tags', score: '1/3' },
      { text: 'Weapons', score: '0/2' },
    ])
    const campaignMissionAssignments = reactive([
      { image: 'https://i.ibb.co/rQFJKdf/bronze.png', score: '3000' },
      { image: 'https://i.ibb.co/G20hCyj/gold.png', score: '7000' },
      { image: 'https://i.ibb.co/HVnHhW0/silver.png', score: '10000' },
    ])

    return {
      campaignNavList,
      campaignMissionInfo,
      campaignMissionAssignments,
      ...backPage()
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.campaign {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 63px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  &__link {
    margin: 0 -20px;
    padding: 3px 20px 0px;

    font-weight: 600;
    font-size: 40px;
    line-height: 51px;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    &.active,
    &:hover {
      color: $black;
      background: linear-gradient(180deg, #FFFFFF 43.75%, #D2D2D2 100%);
    }
  }
}

.campaign-mission {
  &__objective, &__info, &__assignments {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__header {
    display: flex;
    align-items: center;
    padding: 0 12px;

    height: 40px;

    background-color: rgba($black, .8);
  }

  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__dot {
    display: block;
    margin: 0 15px;

    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: #fff;
  }

  &__content {
    padding: 8px 12px;

    background-color: rgba($black, .5);
  }

  &__descr {
    height: 90px;
  }

  &__text {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: 0.04em;
    color: rgba(#fff, .9);
  }

  &__image {
    margin-bottom: 20px;

    width: 900px;
    height: 315px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;

    .campaign-mission__content {
      display: flex;
      justify-content: space-between;
    }

    .campaign-mission__item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  }

  &__assignments {
    .campaign-mission__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .campaign-mission__item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .campaign-mission__image {
      width: 184px;
      height: 184px;
      margin: 0;
    }
  }
}
</style>