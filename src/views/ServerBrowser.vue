<template>
  <AppBreadcrumb :path="path" :name="name" />
  <div class="browser">
    <div class="browser__tabs">
      <button class="browser__tab active">servers</button>
      <button class="browser__tab">favorites</button>
      <button class="browser__tab">recent</button>
    </div>
    <div class="browser__inner">
      <div class="browser__content">
        <div class="browser__options">
          <p class="browser__option">name</p>
          <p class="browser__option">players</p>
          <p class="browser__option">ping</p>
        </div>
        <ul class="browser__servers">
          <AppBrowserServer :browserServers="browserServers" />
        </ul>
      </div>
      <div class="browser-filter">
        <h6 class="browser-filter__title">quickfilter</h6>
        <div class="browser-filter__content">
          <div class="browser-filter__dropdowns">
            <button class="browser-filter__dropdown" v-for="dropdown in dropdowns" :key="dropdown">
              <span>{{ dropdown }}</span>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.416016 1.01404C1.77294 2.3163 4.40479 5.00281 4.40479 5.00281C4.40479 5.00281 7.03663 2.37096 8.39355 1.01404" stroke="white"/>
              </svg>
            </button>
          </div>
          <input class="browser-filter__search" placeholder="Filter by name..." type="text">
          <div class="browser-filter__actions">
            <button class="browser-filter__btn">full filter</button>
            <button class="browser-filter__btn">reset filter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { breadcrumbPath } from '@/use/breadcrumbPath'
import AppBreadcrumb from '../components/ui/AppBreadcrumb.vue'
import AppBrowserServer from '../components/ui/AppBrowserServer.vue'
import browserServers from '../mocks/browserServers'

export default {
  setup() {
    const dropdowns = reactive(['game modes', 'maps', 'free slots', 'game size'])

    return {
      ...breadcrumbPath(),
      dropdowns,
      browserServers,
    }
  },
  components: { AppBreadcrumb, AppBrowserServer }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.browser {
  margin-top: 20px;

  &__tabs {
    display: flex;
    padding-bottom: 16px;
    gap: 16px;

    border-bottom: 1px solid rgba(#fff, .1);
  }

  &__tab {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(#fff, $opacity);

    transition: color .4s $ease;

    &.active,
    &:hover {
      color: #fff;
    }
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 18%;
    gap: 65px;
    padding-top: 23px;
  }

  &__options {
    display: grid;
    grid-template-columns: 1fr 10% 7% 8%;
    margin-bottom: 15px;
  }

  &__option {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(#fff, $opacity);
  }
}

.browser-filter {
  &__title {
    margin-bottom: 7px;

    font-weight: 700;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__dropdowns {
    display: flex;
    flex-direction: column;
    margin-bottom: 19px;
  }

  &__dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    position: relative;

    border-top: 1px solid rgba(#fff, .1);

    &:last-child {
      border-bottom: 1px solid rgba(#fff, .1);
    }

    &:hover {
      span {
        color: rgba(#fff, .8);
      }
      svg {
        opacity: .8;
      }
    }

    span {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: rgba(#fff, $opacity);
      
      transition: color .4s $ease;
    }

    svg {
      opacity: .5;

      position: absolute;
      right: 9px;

      transition: opacity .4s $ease;
    }
  }

  &__search {
    margin-bottom: 18px;
    padding: 9px 7px;

    width: 100%;

    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.03em;
    background: transparent;
    color: #fff;
    border: 1px solid rgba(#fff, .2);

    transition: all .4s $ease;

    &::placeholder {
      color: rgba(#fff, $opacity);
    }

    &:hover {
      background-color: rgba(#fff, .07);
    }

    &:focus {
      border: 1px solid #fff;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    padding-top: 19px;
    gap: 9px;

    border-top: 1px solid rgba(#fff, .1);
  }

  &__btn {
    padding: 9px;

    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border: 1px solid rgba(#fff, .2);

    transition: all .4s $ease;
  
    &:hover {
      background-color: #fff;
      color: $black;
      border-color: transparent;
    }
  }
}
</style>