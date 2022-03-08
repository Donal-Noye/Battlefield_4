<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <TheNavbar :items="navList" />
        <div class="header__info">
          <AppLevel />
          <div class="logo">
            <img src="@/assets/images/bf4_logo.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import TheNavbar from "./TheNavbar.vue"
import AppLevel from './ui/AppLevel.vue';

export default {
  setup() {
    const navList = ref([
      { name: 'Home', customName: 'Home' },
      { name: 'Multiplayer', customName: 'Multiplayer' },
      { name: 'MenuCampaign', customName: 'Campaign' },
      { name: 'Soldier', customName: 'Soldier' },
      { name: 'Store', customName: 'Store' },
      { name: 'More', customName: 'More' },
    ])
    
    return { 
      navList, 
    }
  },
  components: { TheNavbar, AppLevel }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.header {
  width: calc(100% - $sidebar-width);

  position: absolute;
  top: 36px;
  left: $sidebar-width;

  &__inner {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    gap: 37px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 26px;
  }
}
</style>