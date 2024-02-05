import { reactive } from 'vue'

const isModalOpen = reactive({
  value: false
})

export default function useModalShow() {
  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value
    console.log('isModalOpen', isModalOpen.value)
  }
  return { toggleModal, isModalOpen }
}
