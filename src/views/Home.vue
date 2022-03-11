<template>
  <TheFeatured />
  <TheShortcuts />
  <TheRecentlyPlayed />
</template>

<script>
import TheFeatured from "@/components/TheFeatured.vue";
import TheShortcuts from "@/components/TheShortcuts.vue";
import TheRecentlyPlayed from '@/components/TheRecentlyPlayed.vue';

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