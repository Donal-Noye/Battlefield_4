<template>
  <TheFeatured />
  <TheShortcuts />
  <TheRecentlyPlayed />
</template>

<script>
import TheFeatured from "@/components/Home/TheFeatured.vue";
import TheShortcuts from "@/components/Home/TheShortcuts.vue";
import TheRecentlyPlayed from '@/components/Home/TheRecentlyPlayed.vue';

export default {
  setup() {
    return {};
  },
  components: { 
    TheFeatured, 
    TheShortcuts, 
    TheRecentlyPlayed 
  }
}
</script>

<style lang="scss">
</style>