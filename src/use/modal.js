import { ref } from 'vue'

export function modal() {
  const modalActive = ref(false)

  const toggleModal = () => {
    modalActive.value = !modalActive.value
  }

  return {
    modalActive,
    toggleModal
  }
}