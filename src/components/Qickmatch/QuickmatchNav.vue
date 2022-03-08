<template>
  <div class="quickmatch__nav">
    <ul class="quickmatch__list">
      <li class="quickmatch__item" v-for="item in quickmatchList" :key="item.title">
        <button
          class="quickmatch__btn"
          :class="{ active: item.title === selected }"
          @click="setItem(item)"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    quickmatchList: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    }
  },
  setup(_, { emit }) {
    const setItem = (item) => {
      emit('selected', item)
    }

    return { setItem }
  }
}
</script>

<style lang="scss">

</style>