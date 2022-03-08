<template>
  <div class="campaign-select-card">
    <router-link class="campaign-select-card__link" :to="{ name: 'Campaign' }">
      <sup class="campaign-select-card__suptitle">Play</sup>
      <h3 class="campaign-select-card__title">Battlefield 4 campaign</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.campaign-select-card {
  position: relative;
  
  width: 920px;
  height: 284px;

  background-image: url('../assets/images/bf4_campaign.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba($black, $opacity);
  overflow: hidden;

  transition: transform .4s $ease;

  &:hover {
    &:after {
      transform: translateY(0px);
    }
    .campaign-select-card__link {
      transform: translateY(-10px);
    }
  }

  &:after {
    content: '';
    width: 100%;
    height: 10px;

    background-color: #fff;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;

    transform: translateY(10px);
    transition: transform .4s $ease;
  }

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 22px;

    width: 100%;
    height: 100%;

    transition: transform .4s $ease;
  }

  &__suptitle {
    font-weight: 600;
    line-height: 87%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: rgba(#fff, $opacity);
  }

  &__title {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 36px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
}
</style>