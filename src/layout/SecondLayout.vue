<template>
  <div class="container  container--second-layout">
    <router-view />
  </div>
  <div class="overlay-texture"></div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.container--second-layout {
  max-width: 1670px;
  width: 100%;
  margin: 62px auto;
  padding: 0 40px;
}

.overlay-texture {
   width: 100%;
   height: 100%;

   background-image: url('../assets/images/overlay-texture.svg');
   background-repeat: no-repeat;
   background-size: cover;
   pointer-events: none;

   position: fixed;
   left: 0;
   top: 0;
   z-index: 1001;
 }
</style>