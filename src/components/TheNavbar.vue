<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="(item, idx) in items" :key="idx">
        <router-link class="nav__link" :to="{ name: item.name }">{{ item.customName }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: Object
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.nav {
  &__list {
    display: flex;
    gap: 34px;

    border-bottom: 1px solid $line;
  }

  &__link {
    padding-bottom: 8px;
    position: relative;

    font-weight: 500;
    font-size: 2.8rem;
    line-height: 36px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: rgba(#fff, .8);

    transition: color .6s $ease;

    &:hover {
      color: rgba(#fff, .9);
    }

    &.active {
      color: #fff;

      &:after {
        opacity: 1;
        width: 100%;
      }
    }

    &:after {
      content: '';
      width: 0%;
      height: 2px;

      opacity: 0;
      background-color: #fff;

      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;

      transition: all .6s $ease;
    }
  }
}
</style>