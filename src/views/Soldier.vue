<template>
  <div class="soldier">
    <div class="soldier__look">
      <div class="soldier__model">
        <img src="@/assets/images/soldier.png" alt="">
      </div>
      <div class="soldier__dogtags">
        <img src="@/assets/images/soldier_dogtags.png" alt="">
      </div>
    </div>
    <div class="soldier__content">
      <div class="soldier-info">
        <AppLevel />
        <div class="soldier-info__content">
          <h2 class="soldier-info__name">cookie</h2>
          <div class="soldier-info__stats">
            <div class="soldier-info__level-number">
              <span>63</span>
            </div>
            <div class="soldier-info__rank-up">
              <span class="soldier-info__current">69,840 / 110,000</span>
              <p class="soldier-info__estimated">- Estimated rank up in 1h</p>
            </div>
          </div>
        </div>
      </div>
      <div class="soldier__select">
        <ul class="soldier-menu">
          <li class="soldier-menu__item" v-for="item in soldierMenuList" :key="item.title">
            <a class="soldier-menu__link" :href="item.path">
              <h5 class="soldier-menu__title headline">{{ item.title }}</h5>
              <div class="soldier-menu__stats">
                <span class="soldier-menu__current">{{ item.currentNum }}/{{ item.maxNum }}</span>
                <div class="soldier-menu__bar">
                  <span></span>
                </div>
              </div>
            </a>
          </li>
          <li class="soldier-menu__item">
            <router-link class="soldier-menu__link" :to="{name: 'Battlepacks'}">
              <h5 class="soldier-menu__title headline">battlepacks</h5>
            </router-link>
          </li>
        </ul>
        <div class="soldier__game">
          <div class="soldier-general-stats">
            <ul class="soldier-general-stats__list">
              <li class="soldier-general-stats__item" v-for="item in generalStats" :key="item.title">
                <h4 class="soldier-general-stats__title">{{ item.title }}</h4>
                <div class="soldier-general-stats__percent">{{ item.percent }}</div>
              </li>
            </ul>
          </div>
          <div class="soldier-top">
            <ul class="soldier-top__list">
              <li class="soldier-top__card  soldier-top__card--vehicle">
                <h6 class="soldier-top__title">top vehicle</h6>
                <div class="soldier-top__info">
                  <div class="soldier-top__weapon">Main Battle tank</div>
                  <div class="soldier-top__score">33 kills</div>
                </div>
              </li>
              <li class="soldier-top__card  soldier-top__card--primary">
                <h6 class="soldier-top__title">top primary</h6>
                <div class="soldier-top__info">
                  <div class="soldier-top__weapon">ACW-r</div>
                  <div class="soldier-top__score">495 kills</div>
                </div>
              </li>
              <li class="soldier-top__card  soldier-top__card--class">
                <h6 class="soldier-top__title">top class</h6>
                <div class="soldier-top__info">
                  <div class="soldier-top__weapon">engineer</div>
                  <div class="soldier-top__score">828,514 score</div>
                </div>
              </li>
              <li class="soldier-top__card  soldier-top__card--sidearm">
                <h6 class="soldier-top__title">top sidearm</h6>
                <div class="soldier-top__info">
                  <div class="soldier-top__weapon">m9</div>
                  <div class="soldier-top__score">112 kills</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLevel from "@/components/ui/AppLevel.vue"
import { ref } from 'vue';

export default {
  setup() {
    const soldierMenuList = ref([
      { title: 'weapons', currentNum: '185', maxNum: '185', path: '#' },
      { title: 'kits', currentNum: '64', maxNum: '64', path: '#' },
      { title: 'vehicles', currentNum: '182', maxNum: '182', path: '#' },
      { title: 'medals', currentNum: '54', maxNum: '54', path: '#' },
      { title: 'Assignments', currentNum: '110', maxNum: '110', path: '#' },
      { title: 'dog tags', currentNum: '720', maxNum: '720', path: '#' },
    ])
    const generalStats = ref([
      { title: 'wins', percent: '44%' },
      { title: 'score/min', percent: '592' },
      { title: 'kills/min', percent: '0.60' },
    ])
    
    return {
      soldierMenuList,
      generalStats,
    }
  },
  components: { AppLevel }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.soldier {
  display: grid;
  grid-template-columns: auto 1fr;

  &__look {
    position: relative;
  }

  &__dogtags {
    position: absolute;
    bottom: 120px;
    left: -80px;
    z-index: 2;
  }

  &__select {
    display: grid;
    grid-template-columns: 340px 575px;
    gap: 60px;
  }
}

.soldier-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  &__name {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 46px;
  }

  &__stats {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  &__level-number {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;

    border: 1px solid rgba(#fff, .3);

    span {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 23px;
    }
  }

  &__rank-up {
    display: flex;
    gap: 5px;
  }

  &__estimated,
  &__current {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.05em;
  }

  &__estimated {
    color: rgba(#fff, $opacity);
  }
}

.soldier-menu {
  &__item {
    transition: background-color .2s $ease;

    &:hover {
      background-color: #fff;
    
      .soldier-menu__title {
        color: $black;
      }
      .soldier-menu__current {
        color: $black;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    height: 57px;

    border-top: 1px solid rgba(#fff, .1);
    border-bottom: 1px solid rgba(#fff, .1);
  }

  &__title {
    transition: background-color .2s $ease;
  }

  &__stats {
    text-align: right;
  }

  &__current {
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    
    transition: background-color .2s $ease;
  }

  &__bar {
    position: relative;

    width: 80px;
    height: 4px;

    background-color: rgba($black, $opacity);

    span {
      display: block;
      width: 100%;
      height: 100%;

      background-color: $orange;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
}

.soldier-general-stats {
  &__list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  &__title {
    font-weight: 500;
    font-size: 2rem;
    line-height: 26px;
    text-transform: uppercase;
  }

  &__percent {
    font-weight: 700;
    font-size: 3.8rem;
  }
}

.soldier-top {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7px 8px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 12px;

    width: 283px;
    height: 168px;

    background-color: rgba($black, $opacity);

    background-repeat: no-repeat;
    background-position: center;

    transition: all .4s $ease;

    &:hover {
      background-color: #fff;

      .soldier-top__title {
        color: $black;
      }

      .soldier-top__weapon {
        color: $black;
      }

      .soldier-top__score {
        color: rgba($black, $opacity);
      }
    }

    &--vehicle {
      background-image: url('../assets/images/weapons/tank-white.png');

      &:hover {
        background-image: url('../assets/images/weapons/tank-black.png');
      }
    }

    &--primary {
      background-image: url('../assets/images/weapons/acw-white.png');
      
      &:hover {
        background-image: url('../assets/images/weapons/acw-black.png');
      }
    }

    &--class {
      background-image: url('../assets/images/weapons/engineer-white.png');
      
      &:hover {
        background-image: url('../assets/images/weapons/engineer-black.png');
      }
    }

    &--sidearm {
      background-image: url('../assets/images/weapons/m9-white.png');
      
      &:hover {
        background-image: url('../assets/images/weapons/m9-black.png');
      }
    }
  }

  &__title {
    font-weight: 600;
    line-height: 137%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(#fff, .7);

    transition: background-color .4s $ease;
  }

  &__weapon {
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.03em;
    text-transform: capitalize;

    transition: background-color .4s $ease;
  }

  &__score {
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: lowercase;
    color: rgba(#fff, $opacity);

    transition: background-color .4s $ease;
  }
}
</style>