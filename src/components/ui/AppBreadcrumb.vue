<template>
  <div class="breadcrumb">
    <div class="breadcrumb__previous">
      <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M8.15829 0.775848L1 8.63115L8.15829 16.4864" stroke="white"/>
      </svg>
      <div class="breadcrumb__path" @click="backPage">{{ path }}</div>
    </div>
    <h1 class="breadcrumb__name">{{ name }}</h1>
  </div>
</template>

<script>
import { backPage } from '@/use/backPage'

export default {
  props: ['path', 'name'],
  setup() {
    return {
      ...backPage()
    }
  }
}
</script>

<style lang="scss">
.breadcrumb {
  &__previous {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
  }

  &__path {
    margin-left: 25px;

    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__name {
    font-weight: 600;
    font-size: 4.6rem;
    line-height: 59px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
}
</style>