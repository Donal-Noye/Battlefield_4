<template>
  <transition name="modal-animation">
    <div class="modal" v-show="modalActive" @click="close">
      <transition name="modal-animation-inner">
        <div class="modal__inner" v-show="modalActive" @click.stop>
          <h3 class="modal__title">{{ title }}</h3>
          <p class="modal__text">{{ text }}</p>
          <div class="modal__actions">
            <AppButton text="yes" type="btn--secondary large" />
            <AppButton text="no" type="btn--secondary large" @click="close" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import AppButton from "./AppButton.vue";

export default {
  props: {
    title: String,
    text: String,
    modalActive: Boolean
  },
  setup(_, {emit}) {
    const close = () => {
      emit('close')
    }

    return {close}
  },
  components: { AppButton }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  
  background-color: rgba($black, .9);
  backdrop-filter: blur(1px);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  &__title {
    margin-bottom: 20px;

    font-weight: 600;
    font-size: 2.8rem;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  &__text {
    font-weight: 600;
    line-height: 87%;
    text-align: center;
    letter-spacing: 0.1em;
    color: rgba(#fff, .8);
  }

  &__actions {
    display: flex;
    gap: 8px;
    margin-top: 53px;
  }
}

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity .3s $ease;
}

.modal-animation-inner-enter-active {
  transition: all .3s $ease .2s;
}

.modal-animation-inner-leave-active {
  transition: all .3s $ease;
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(1.5);
}

.modal-animation-inner-leave-to {
  transform: scale(.9);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
</style>