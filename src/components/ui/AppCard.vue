<template>
  <div class="card" :class="type">
    <a href="#">
      <AppPlayBtn v-if="type === 'watch'" />
      <div class="card__preview">
        <img :src="img" alt="">
        <span class="card__type">{{ type }}</span>
      </div>
      <div class="card__content">
        <div class="card__info">
          <h5 class="card__title">{{ title }}</h5>
          <div class="card__map" v-if="map">{{ map }}</div>
          <div class="card__results" v-if="results">{{ results }} results</div>

          <button class="card__btn--more">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="card__bottom">
          <span v-show="button">{{ button }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import AppPlayBtn from "@/components/ui/AppPlayBtn";

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    map: {
      type: String,
      required: false
    },
    results: {
      type: String,
      required: false
    },
    button: {
      type: String,
      required: false
    },
  },
  setup (props) {
    const { results } = toRefs(props)
    const { map } = toRefs(props)
    const { button } = toRefs(props)

    return {
      results, map, button
    }
  },
  components: { AppPlayBtn }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.card {
  &:not(.watch):hover {
    .card__type {
      transform: translateY(-40px);
    }
    .card__content {
      transform: translateY(-40px);
      background-color: #fff;
    }
    .card__title {
      color: $black;
    }
    .card__map {
      color: $black;
    }
    .card__results {
      color: rgba($black, $opacity);
    }
    .card__btn--more {
      span {
        background-color: rgba($black, $opacity);
      }
    }
    .card__bottom {
      color: $black;
      opacity: 1;

      span {
        transform: translateY(0px);
      }
    }
  }

  &.trending {
    width: 548px;
    height: 348px;
    overflow: hidden;

    .card__btn--more {
      right: 22px;
      bottom: 32px;
    }
  }

  &.recommended {
    width: 270px;
    height: 348px;
    overflow: hidden;

    .card__btn--more {
      right: 22px;
      bottom: 32px;
    }
  }

  &.watch {
    width: 270px;
    height: 348px;

    overflow: hidden;
    position: relative;

    &:hover {
      .card__preview img {
        transform: translateY(-10px);
      }

      .play-video {
        background-color: #fff;

        span {
          border-color: transparent transparent transparent $black;
        }
      }

      .card__bottom {
        transform: translateY(0);
      }
    }

    a {
      height: 100%;
    }

    .card__preview {
      height: 100%;

      &:after {
        content: '';
        width: 100%;
        height: 100%;

        background-color: rgba($black, .3);
        
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .card__content {
      background: transparent;

      position: absolute;
      left: 0;
      bottom: 0;
    }

    .card__btn--more {
      display: none;
    }

    .card__bottom {
      height: 10px;
      background-color: #fff;
      opacity: 1;
      transform: translateY(10px);
    }
  }

  &.recent-server {
    width: auto;
    height: 284px;

    overflow: hidden;

    .card__preview {
      height: 162px;
    }

    .card__info {
      padding: 20px 23px 26px;
    }

    .card__title {
      margin-bottom: 30px;
    }

    .card__map {
      font-weight: 600;
      font-size: 1.8rem;
      letter-spacing: 0.04em;
      text-transform: capitalize;
      width: 90%;
    }

    .card__btn--more {
      right: 22px;
      bottom: 34px;
    }
  }

  &__preview {
    position: relative;

    width: 100%;
    height: 225px;

    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      transition: transform .4s $ease;
    }
  }

  &__type {
    font-weight: bold;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: rgba(#fff, .7);

    position: absolute;
    bottom: 21px;
    left: 24px;
    z-index: 1;

    transition: transform .4s $ease;
  }

  &__content {
    background-color: rgba(#000, $opacity);

    transition: all .4s $ease;
  }

  &__info {
    padding: 20px 20px 30px 25px;
    margin-bottom: 10px;
    position: relative;
  }

  &__title {
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    transition: color .4s $ease;
  }

  &__map {
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    transition: color .4s $ease;
  }

  &__results {
    margin-top: 12px;

    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(#fff, $opacity);

    transition: all .4s $ease;
  }

  &__btn--more {
    display: flex;
    gap: 3px;

    position: absolute;
    right: 0;
    bottom: 0;

    span {
      display: block;
      width: 5px;
      height: 5px;

      background-color: rgba(#fff, $opacity);

      transition: background-color .4s $ease;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 40px;

    opacity: 0;
    border-top: 1px solid rgba($black, .1);
    text-align: center;

    transition: all .4s $ease;

    span {
      font-weight: 700;
      font-size: 1.8rem;
      letter-spacing: 0.06em;
      color: $black;
      text-transform: uppercase;
    }
  }
}
</style>