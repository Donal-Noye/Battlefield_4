<template>
  <button class="btn" :class="type">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    type: String
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &--primary {
    position: relative;
    padding: 8px 63px;

    font-size: 2.6rem;
    line-height: 33px;
    color: rgba(#fff, .9);
    border: 1px solid #FFFFFF;

    &:focus,
    &:hover {
      &:after {
        background: linear-gradient(180deg, rgba(16, 16, 16, 0.5) 0%, rgba(255, 255, 255, 0.31) 100%);
      }
    }

    &:active {
      color: rgba($black, .9);

      &:after {
        background: linear-gradient(180deg, #FFFFFF 43.75%, #D2D2D2 100%);
        opacity: 1;
      }
    }

    span {
      position: relative;
      z-index: 1;
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, #101010 0%, rgba(16, 16, 16, 0) 100%);
      opacity: .5;

      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &--secondary {
    padding: 15px 52px;

    font-size: 1.8rem;
    border: 1px solid rgba(#FFF, .3);

    transition: all .4s $ease;

    &:hover {
      color: $black;
      background-color: #fff;
    }

    .large {
      font-size: 2rem;
    }
  }
}
</style>