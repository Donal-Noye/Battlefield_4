<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <ul class="sidebar-games">
        <li class="sidebar-games__item sidebar__item">
          <a class="sidebar-games__link sidebar__link" href="#">
            <img src="@/assets/images/games/bf5.jpg" alt="" />
          </a>
        </li>
        <li class="sidebar-games__item sidebar__item">
          <a class="sidebar-games__link sidebar__link" href="#">
            <img src="@/assets/images/games/bf1.jpg" alt="" />
          </a>
        </li>
        <li class="sidebar-games__item sidebar__item">
          <router-link class="sidebar-games__link sidebar__link active" to="/">
            <img src="@/assets/images/games/bf4.jpg" alt="" />
          </router-link>
        </li>
        <li class="sidebar-games__item sidebar__item">
          <a class="sidebar-games__link sidebar__link" href="#">
            <img src="@/assets/images/games/bfh.jpg" alt="" />
          </a>
        </li>
        <li class="sidebar__item">
          <router-link class="sidebar__career sidebar__link" :to="{ name: 'Career' }">
            <img src="@/assets/images/avatar.jpg" alt="" />
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link class="sidebar__watch sidebar__link" :to="{ name: 'Watch' }">
            <svg width="34" height="33" viewBox="0 0 34 33" fill="none">
              <path
                d="M0.961182 0.28186V32.5819H33.2612V0.28186H0.961182ZM11.0549 23.7498V9.05081L25.1862 16.4319L11.0549 23.7498Z"
                fill="white"
              />
            </svg>
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link class="sidebar__news sidebar__link" :to="{ name: 'News' }">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
              <rect
                x="0.0964355"
                y="0.172852"
                width="32"
                height="16"
                fill="white"
              />
              <rect
                x="0.0964355"
                y="20.1396"
                width="32"
                height="4"
                fill="white"
              />
              <rect
                x="0.0964355"
                y="28.1066"
                width="32"
                height="4"
                fill="white"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar__bottom">
      <router-link class="sidebar__help" :to="{ name: 'Help' }">
        <svg width="17" height="17" viewBox="0 0 17 17">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.41064 0.472717C3.99237 0.472717 0.410645 4.05444 0.410645 8.47272C0.410645 12.891 3.99237 16.4727 8.41064 16.4727C12.8289 16.4727 16.4106 12.891 16.4106 8.47272C16.4106 4.05444 12.8289 0.472717 8.41064 0.472717ZM9.27939 13.792V11.578C9.27939 11.35 9.16539 11.236 8.93739 11.236H7.33539C7.09539 11.236 6.97539 11.356 6.97539 11.596V13.774C6.97539 14.038 7.09539 14.17 7.33539 14.17H8.93739C9.16539 14.17 9.27939 14.044 9.27939 13.792ZM9.26139 9.68804V9.22004C9.26139 8.93204 9.41739 8.64404 9.72939 8.35604L10.9534 7.36604C11.4934 6.89804 11.7634 6.37004 11.7634 5.78204V5.53004C11.7634 4.59404 11.5054 3.87404 10.9894 3.37004C10.4734 2.86604 9.74139 2.61404 8.79339 2.61404H7.73139C6.78339 2.61404 6.05139 2.86604 5.53539 3.37004C5.01939 3.87404 4.76139 4.59404 4.76139 5.53004V5.94404C4.76139 6.20804 4.88739 6.34004 5.13939 6.34004H6.66939C6.92139 6.34004 7.04739 6.20804 7.04739 5.94404V5.56604C7.04739 5.18204 7.12539 4.91204 7.28139 4.75604C7.44939 4.60004 7.71939 4.52204 8.09139 4.52204H8.41539C8.81139 4.52204 9.09339 4.60604 9.26139 4.77404C9.44139 4.93004 9.53139 5.19404 9.53139 5.56604V5.67404C9.53139 6.03404 9.33939 6.36404 8.95539 6.66404L7.94739 7.49204C7.63539 7.74404 7.41339 7.99604 7.28139 8.24804C7.14939 8.48804 7.08339 8.80604 7.08339 9.20204V9.68804C7.08339 9.94004 7.20939 10.066 7.46139 10.066H8.88339C9.13539 10.066 9.26139 9.94004 9.26139 9.68804Z"
          />
        </svg>
      </router-link>
      <a class="sidebar__quit" @click="toggleModal" href="#">
        <svg width="17" height="16" viewBox="0 0 17 16">
          <g clip-path="url(#clip0_303_96)">
            <path
              d="M7.41064 0H9.41064V8H7.41064V0ZM11.4106 0.59375L11.4575 0.609375C12.1867 0.911458 12.8534 1.3099 13.4575 1.80469C14.0617 2.29948 14.5825 2.86719 15.02 3.50781C15.4575 4.14844 15.7987 4.84896 16.0435 5.60938C16.2882 6.36979 16.4106 7.16667 16.4106 8C16.4106 9.10417 16.2023 10.1432 15.7856 11.1172C15.369 12.0911 14.7987 12.9401 14.0747 13.6641C13.3507 14.388 12.5018 14.9583 11.5278 15.375C10.5539 15.7917 9.51481 16 8.41064 16C7.30648 16 6.26742 15.7917 5.29346 15.375C4.3195 14.9583 3.47054 14.388 2.74658 13.6641C2.02262 12.9401 1.45231 12.0911 1.03564 11.1172C0.618978 10.1432 0.410645 9.10417 0.410645 8C0.410645 7.16667 0.53304 6.36979 0.777832 5.60938C1.02262 4.84896 1.36377 4.14844 1.80127 3.50781C2.23877 2.86719 2.76481 2.29688 3.37939 1.79688C3.99398 1.29688 4.67106 0.895833 5.41064 0.59375L5.37939 2.82812C4.94189 3.08854 4.53825 3.40104 4.16846 3.76562C3.79867 4.13021 3.48356 4.53385 3.22314 4.97656C2.96273 5.41927 2.76221 5.89583 2.62158 6.40625C2.48096 6.91667 2.41064 7.44792 2.41064 8C2.41064 8.83333 2.56689 9.61458 2.87939 10.3438C3.19189 11.0729 3.62158 11.7083 4.16846 12.25C4.71533 12.7917 5.35075 13.2188 6.07471 13.5312C6.79867 13.8438 7.57731 14 8.41064 14C9.24398 14 10.0226 13.8438 10.7466 13.5312C11.4705 13.2188 12.106 12.7917 12.6528 12.25C13.1997 11.7083 13.6294 11.0729 13.9419 10.3438C14.2544 9.61458 14.4106 8.83333 14.4106 8C14.4106 7.44792 14.3403 6.91667 14.1997 6.40625C14.0591 5.89583 13.856 5.41927 13.5903 4.97656C13.3247 4.53385 13.007 4.1276 12.6372 3.75781C12.2674 3.38802 11.8586 3.07292 11.4106 2.8125V0.59375Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_303_96">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.410645)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  </aside>
  <teleport to="body">
    <AppModal 
      title="Quit" 
      text="Do you really want to quit?" 
      @close="toggleModal"
      :modalActive="modalActive"
    />
  </teleport>
</template>

<script>
import AppModal from "./ui/AppModal.vue";
import { modal } from '@/use/modal'

export default {
  setup() {
    return {
      ...modal()
    };
  },
  components: { AppModal },
};
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.sidebar {
  display: flex;
  flex-direction: column;
  padding: 180px 0 56px;

  width: $sidebar-width;
  min-height: 100vh;

  border-right: 1px solid $line;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  &__link {
    &.active {
      &:before {
        opacity: 0.8;
        height: 100%;
      }
    }

    &:before {
      content: "";
      width: 3px;
      height: 0;

      opacity: 0;
      background-color: $orange;

      position: absolute;
      left: 0;
      top: 50%;

      transform: translateY(-50%);
      transition: all 0.6s $ease;
    }
  }

  &__item {
    position: relative;
    padding: 0 25px;
  }

  &__other {
    display: grid;
    gap: 30px;
  }

  &__career {
    width: 40px;
    height: 40px;

    opacity: $opacity;

    transition: opacity 0.6s $ease;

    &:hover,
    &.active {
      opacity: 1;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__watch,
  &__news {
    display: grid;
    align-items: center;
    justify-content: center;

    opacity: $opacity;

    transition: opacity 0.6s $ease;

    &:hover,
    &.active {
      opacity: 0.8;
    }
  }

  &__bottom {
    display: grid;
    justify-content: center;
    margin: -15px;
    margin-top: auto;
  }

  &__help,
  &__quit {
    display: flex;
    padding: 15px 37px;

    &.active,
    &:hover {
      svg {
        fill: #fff;
      }
    }

    svg {
      width: 16px;
      height: 16px;

      fill: rgba(#fff, $opacity);

      transition: fill 0.6s $ease;
    }
  }
}

.sidebar-games {
  display: grid;
  gap: 16px;
  margin-bottom: 20px;

  &__link {
    width: 40px;
    height: 48px;

    &:hover {
      img {
        opacity: 0.8;
      }
    }

    &.active {
      img {
        opacity: 0.8;
      }
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      opacity: $opacity;

      transition: opacity 0.6s $ease;
    }
  }
}
</style>