<template>
  <li class="browser-server" v-for="item in browserServers" :key="item.id">
    <router-link class="browser-server__link" :to="{ name: 'Server Info', params: { id: item.id } }">
      <div class="browser-server__content browser-server__item">
        <button class="browser-server__favorite">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.3938 0.829071L11.4144 7.04792H17.9533L12.6632 10.8914L14.6839 17.1102L9.3938 13.2668L4.10373 17.1102L6.12436 10.8914L0.834291 7.04792H7.37317L9.3938 0.829071Z"
            />
          </svg>
        </button>
        <div class="browser-server__image">
          <img :src="item.mapImage" alt="" />
        </div>
        <div class="browser-server__info">
          <div class="browser-server__name">
            {{ item.name }}
          </div>
          <div class="browser-server__descr">
            <img
              class="browser-server__country"
              :src="item.countryFlag"
              alt=""
            />
            <p class="browser-server__mode">{{ item.mode }}</p>
            <p class="browser-server__map">{{ item.map }}</p>
            <p class="browser-server__preset">{{ item.preset }}</p>
            <p class="browser-server__tickrate">{{ item.tickrate }} hz</p>
          </div>
        </div>
      </div>
      <div class="browser-server__players browser-server__item">
        <p>{{ item.players }}/64</p>
      </div>
      <div class="browser-server__ping browser-server__item">
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="15.5303"
            y1="10.0184"
            x2="15.5303"
            y2="0.0184327"
            stroke="#23C13A"
            stroke-width="3"
          />
          <line
            x1="12.0303"
            y1="10.0184"
            x2="12.0303"
            y2="2.01843"
            stroke="#23C13A"
            stroke-width="3"
          />
          <line
            x1="8.53027"
            y1="10.0184"
            x2="8.53027"
            y2="4.01843"
            stroke="#23C13A"
            stroke-width="3"
          />
          <line
            x1="5.03027"
            y1="10.0184"
            x2="5.03027"
            y2="6.01843"
            stroke="#23C13A"
            stroke-width="3"
          />
          <line
            x1="1.53027"
            y1="10.0184"
            x2="1.53027"
            y2="8.01843"
            stroke="#23C13A"
            stroke-width="3"
          />
        </svg>
        <p>{{ item.ping }}</p>
      </div>
      <div class="browser-server__play-btn browser-server__item">
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9075 8.5L0.40747 16.2942L0.407471 0.705771L13.9075 8.5Z"
            fill="#101010"
          />
        </svg>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['browserServers'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.browser-server {
  position: relative;
  overflow: hidden;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(#fff, .1);
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;

    visibility: hidden;
    background-color: #fff;

    position: absolute;
    left: 0;
    bottom: 0;

    transform: translateY(100%);
    transition: all .4s $ease;
  }

  &:hover {
    &:after {
      transform: translateY(0);
      visibility: visible;
    }

    .browser-server__favorite {
      opacity: 1;
    }

    .browser-server__name {
      color: $black;
    }

    .browser-server__players p,
    .browser-server__ping p,
    .browser-server__descr p {
      color: rgba($black, .7);
    }

    .browser-server__play-btn {
      opacity: .5;
    }
  }

  &__link {
    display: grid;
    grid-template-columns: 9fr 10% 7% 8%;
  }
  
  &__item {
    display: flex;
    align-items: center;

    position: relative;
    z-index: 1;
  }

  &__favorite {
    display: flex;
    padding: 19px 16px;

    opacity: 0;

    transition: opacity .4s $ease;

    svg {
      fill: transparent;
      stroke: rgba($black, $opacity);
    }
  }

  &__image {
    margin-right: 15px;

    width: 108px;
    height: 56px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.06em;

    transition: color .4s $ease;
  }

  &__descr {
    display: flex;
    align-items: center;

    p {
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: rgba(#fff, $opacity);

      transition: color .4s $ease;

      &:not(:last-child):after {
        content: '-';
        margin: 0 5px;
      }
    }
  }

  &__country {
    margin-right: 8px;
  }

  &__players p {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.06em;

    transition: color .4s $ease;
  }

  &__ping p {
    margin-left: 8px;

    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.06em;
    color: rgba(#fff, $opacity);

    transition: color .4s $ease;
  }

  &__play-btn {
    justify-content: center;
    border-left: 1px solid rgba($black, .2);;
    opacity: 0;

    transition: opacity .4s $ease;
  }
}
</style>