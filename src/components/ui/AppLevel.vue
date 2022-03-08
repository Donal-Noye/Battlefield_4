<template>
  <div class="level">
    <div class="level__bar">
      <svg width="70" height="70" viewBox="0 0 73 73" fill="none">
        <path d="M8.20791 57.2757C11.7432 62.1123 16.4607 65.9605 21.909 68.4519C27.3573 70.9433 33.3538 71.9945 39.3247 71.5049C45.2955 71.0153 51.0408 69.0013 56.0104 65.6556C60.9801 62.31 65.0077 57.7447 67.7079 52.3968C70.408 47.0489 71.6902 41.0974 71.4318 35.1121C71.1733 29.1268 69.3828 23.308 66.2318 18.2127C63.0807 13.1175 58.6745 8.91638 53.4349 6.01156C48.1954 3.10673 42.2979 1.59544 36.3071 1.62236" stroke="#EE930E" stroke-width="2"/>
        <circle opacity="0.1" cx="36.4644" cy="36.622" r="35" stroke="white" stroke-width="2"/>
      </svg>
    </div>
    <div class="level__icon">
      <img src="@/assets/images/level.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
.level {
  position: relative;
  width: 70px;
  height: 70px;

  &__bar {
    svg {
      width: 70px;
      height: 70px;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;

    transform: translate(-50%, -50%);

    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>