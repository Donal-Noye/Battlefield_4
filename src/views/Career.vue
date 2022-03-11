<template>
  <div class="menu__header">
    <h4 class="menu__title">Career</h4>
  </div>
  <div class="career">
    <div class="career__info">
      <div class="career__player">
        <div class="career__avatar">
          <img src="@/assets/images/avatar.jpg" alt="">
        </div>
        <h2 class="career__nickname">cookie</h2>
      </div>
      <ul class="career-stats">
        <li class="career-stats__item" v-for="item in playerStats" :key="item.title">
          <h6 class="career-stats__title">{{ item.title }}</h6>
          <p class="career-stats__value">{{ item.value }}</p>
        </li>
      </ul>
    </div>
    <ul class="career-games">
      <li class="career-games__card" v-for="game in playerGames" :key="game">
        <div class="career-games__image">
          <img :src="game.image" alt="">
        </div>
        <div class="career-games__content">
          <img class="career-games__logo" :src="game.logo" alt="">
          <div class="career-games__level">
            <div class="career-games__level-bar">
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="54.9643" cy="54.8286" r="53.2109" stroke="white" stroke-width="3"/>
                <path d="M84.6805 98.9687C92.2359 93.8822 98.3592 86.9416 102.464 78.8111C106.569 70.6806 108.519 61.6325 108.126 52.533C107.733 43.4335 105.011 34.5871 100.22 26.8407C95.4295 19.0944 88.7307 12.7074 80.7649 8.29116C72.7992 3.87492 63.8332 1.57729 54.7253 1.61821" stroke="#EE930E" stroke-width="3"/>
              </svg>
              <img class="career-games__rank" :src="game.rankImg" alt="">
            </div>
            <div class="career-games__level-number">
              <span>{{ game.rankValue }}</span>
            </div>
          </div>
          <ul class="career-games-stats">
            <li class="career-games-stats__item" v-for="gameStat in game.stats" :key="gameStat">
              <h6 class="career-stats__title">{{ gameStat.title }}</h6>
              <p class="career-games-stats__value">{{ gameStat.value }}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const playerStats = reactive([
      { title: 'wins', value: '48%' },
      { title: 'time', value: '240h' },
      { title: 'kills', value: '11,446' },
      { title: 'score/min', value: '956' },
      { title: 'kills/min', value: '0.78' },
      { title: 'k/d', value: '1.25' },
    ])
    const playerGames = reactive([
      {
        image: 'https://i.ibb.co/KzFc8sq/bf1-career.jpg',
        logo: 'https://i.ibb.co/QpNz72n/bf1-logo.png',
        rankImg: 'https://i.ibb.co/LSFwsnV/bf1-rank.png',
        rankValue: '90',
        stats: [
          { title: 'wins', value: '50%' },
          { title: 'time', value: '126h' },
          { title: 'kills', value: '7320' },
        ]
      },
      {
        image: 'https://i.ibb.co/gjgzrVL/bf4-carrer.jpg',
        logo: 'https://i.ibb.co/f49MdtF/bf4-logo.png',
        rankImg: 'https://i.ibb.co/xXVj3H5/level.png',
        rankValue: '63',
        stats: [
          { title: 'wins', value: '45%' },
          { title: 'time', value: '113h' },
          { title: 'kills', value: '4516' },
        ]
      }
    ])

    return {
      playerStats,
      playerGames
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.career {
  display: grid;
  grid-template-columns: 423px auto;
  gap: 100px;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__avatar {
    margin-bottom: 20px;

    width: 166px;
    height: 166px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__nickname {
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 43px;
    letter-spacing: 0.03em;
  }
}

.career-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;

  &__title {
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: rgba(#fff, $opacity);
  }

  &__value {
    font-weight: 600;
    font-size: 4.6rem;
    line-height: 59px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
}

.career-games {
  display: flex;
  gap: 8px;

  &__card {
    width: 282px;
    height: 502px;

    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, rgba(16, 16, 16, 0) 28.13%, #000000 100%);
      opacity: .9;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 60px 40px;

    height: 100%;

    position: relative;
    z-index: 2;
  }

  &__logo {
    margin-bottom: 34px;

    width: 160px;
    height: 32px;
  }

  &__level {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  &__level-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;

    position: relative;
  }

  &__rank {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 56px;
    height: 56px;

    transform: translate(-50%, -50%);
  }

  &__level-number {
    display: flex;
    align-items: center;
    padding: 0 17px;

    height: 23px;
    text-align: center;
    border: 1px solid rgba(#FFF, $opacity);

    span {
      font-weight: 600;
      font-size: 2rem;
      line-height: 26px;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
  }
}

.career-games-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  &__item {
    text-align: center;
  }

  &__value {
    margin-top: 9px;

    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
}
</style>