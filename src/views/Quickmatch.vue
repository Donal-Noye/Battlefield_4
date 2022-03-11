<template>
  <AppBreadcrumb :path="path" :name="name" />
  <div class="quickmatch">
    <QuickmatchNav
      :quickmatchList="quickmatchList"
      :selected="selected"
      @selected="setSelected"
    />
    <QuickmatchItem
      v-for="item in quickmatchList"
      :key="item.title"
      :image="item.image"
      :title="item.title"
      :descr="item.descr"
      :isSelected="selected === item.title"
    />
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/ui/AppBreadcrumb";
import QuickmatchNav from "@/components/QuickmatchNav";
import QuickmatchItem from "@/components/QuickmatchItem";
import { breadcrumbPath } from '@/use/breadcrumbPath'
import { reactive, ref } from "vue";

export default {
  setup() {
    const quickmatchList = reactive([
      {
        title: 'large scale battles',
        image: 'https://i.ibb.co/LzHVLPd/LSB.jpg',
        descr: 'The best vehicle focused Conquest Large maps.',
      },
      {
        title: 'the battlefield',
        image: 'https://i.ibb.co/kc9qNqT/TB.jpg',
        descr: 'Battlefield at its best. Conquest Small, Rush, and Obliteration, with a good balance between infantry and vehicle gameplay.'
      },
      {
        title: 'close quarters',
        image: 'https://i.ibb.co/L52dXnt/CQ.jpg',
        descr: 'Smaller scale infantry focused maps and modes.'
      },
      {
        title: 'night operations',
        image: 'https://i.ibb.co/Z2bCnzS/NO.jpg',
        descr: 'A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the fight into nightime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield.'
      },
      {
        title: 'night operations large',
        image: 'https://i.ibb.co/BTRQWj4/NOL.jpg',
        descr: 'A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the fight into nightime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield.'
      },
      {
        title: 'night operations infantry',
        image: 'https://i.ibb.co/F5pgJPQ/NOI.jpg',
        descr: 'An infantry focused tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the fight into nightime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield.'
      },
      {
        title: 'community operations',
        image: 'https://i.ibb.co/vdVBg55/CO.jpg',
        descr: 'Experience Conquest Small, Rush, Obliteration, CTF, and Chainlink on Operation Outbreak. - Battlefield at its best with Conquest Small. Rush, Obliteration, Capture the Flag and Chain Link on the jungle map Operation Outbreak.'
      },
      {
        title: 'community operations large',
        image: 'https://i.ibb.co/zbj7nXD/COL.jpg',
        descr: 'Experience Conquest Large on Operation Outbreak. - All-out war with Conquest Large on the jungle map Operation Outbreak'
      },
    ])
    const selected = ref('large scale battles')

    const setSelected = (item) => {
      selected.value = item.title
    }

    return {
      quickmatchList,
      selected,
      setSelected,
      ...breadcrumbPath()
    }
  },
  components: {QuickmatchNav, QuickmatchItem, AppBreadcrumb}
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.quickmatch {
  display: grid;
  grid-template-columns: 25% 55%;
  gap: 43px;
  margin-top: 68px;

  &__item {
    border-bottom: 1px solid rgba(#fff, .1);
  }

  &__btn {
    width: 100%;
    padding: 16px;

    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: left;

    transition: all .2s $ease;

    &.active {
      color: $black;
      background-color: #fff;
    }

    &:not(.active):hover {
      background-color: rgba(#fff, .1);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__image {
    margin-bottom: 23px;
    position: relative;

    width: 100%;
    height: 288px;

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      background-color: rgba($black, .1);

      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    .overlay-texture {
      position: absolute;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 3rem;
    line-height: 38px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__descr {
    margin-bottom: 30px;

    font-weight: 600;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: 0.02em;
  }
}
</style>