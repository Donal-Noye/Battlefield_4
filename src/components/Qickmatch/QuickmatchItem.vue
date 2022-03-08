<template>
  <div class="quickmatch__content" v-if="isSelected">
    <div class="quickmatch__image">
      <img :src="image" alt="">
      <div class="overlay-texture"></div>
    </div>
    <h3 class="quickmatch__title">{{ title }}</h3>
    <p class="quickmatch__descr">{{ descr }}</p>
    <AppButton type="btn--secondary" text="find a game" />
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
export default {
  components: {AppButton},
  props: {
    isSelected: {
      type: Boolean
    },
    descr: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>