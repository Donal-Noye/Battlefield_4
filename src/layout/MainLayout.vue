<template>
  <TheSidebar />
  <TheHeader />
  <main class="main">
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import TheHeader from "@/components/TheHeader";

export default {
  setup() {
    return {};
  },
  components: { TheSidebar, TheHeader }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.main {
  margin-left: $sidebar-width;
  padding: 180px 0 64px;
}

.container {
  max-width: 1540px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}
</style>