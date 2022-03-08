<template>
  <button class="play-video">
    <span></span>
  </button>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.play-video {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  border: 2px solid #fff;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  transform: translate(-50%, -50%);
  transition: background-color .4s $ease;

  span {
    display: block;

    width: 0;
    height: 0;

    border-style: solid;
    border-width: 14px 0 14px 24px;
    border-color: transparent transparent transparent #fff;

    transform: translateX(3px);
    transition: border-color .4s $ease;
  }
}
</style>