<template>
  <TheSidebar />
  <main class="main main--without-header">
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";

export default {
  setup() {
    return {};
  },
  components: { TheSidebar }
}
</script>

<style lang="scss">
.main--without-header {
  padding: 36px 0 0;
}
</style>