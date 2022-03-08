<template>
  <div class="page">
    <component :is="layout + '-layout'" v-if="layout" />
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
import SecondLayout from '@/layout/SecondLayout';
import WithoutHeaderLayout from '@/layout/WithoutHeaderLayout';
import { useRoute } from 'vue-router'
import { computed } from "vue";

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    MainLayout,
    SecondLayout,
    WithoutHeaderLayout
  }
}
</script>

<style lang="scss">
@import "./assets/style/_vars.scss";

.page {
  min-height: 100vh;

  background-image: url('./assets/images/menu_bg.jpg');
  background-size: cover;
}
</style>