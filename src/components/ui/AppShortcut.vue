<template>
  <li class="shortcut">
    <router-link :to="{ name: path }" class="shortcut__link">
      <slot />
    </router-link>
    <span class="shortcut__title">{{ title }}</span>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    path: String
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.shortcut {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  &:hover {
    .shortcut__link {
      opacity: 1;
      background-color: #fff;

      svg {
        fill: $black;
      }
    }

    .shortcut__title {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 108px;
    height: 48px;

    opacity: $opacity;
    background-color: $black;

    transition: all .4s $ease;

    svg {
      fill: #fff;

      transition: fill .4s $ease;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;

    opacity: 0;
    visibility: hidden;

    position: absolute;
    bottom: -20px;

    transform: translateY(-5px);
    transition: all .4s $ease;
  }
}
</style>