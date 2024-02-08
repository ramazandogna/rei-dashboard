<script lang="ts">
import { defineComponent } from 'vue'
import SectionMain from '../components/SectionMain.vue'
import SectionTitle from '../components/SectionTitle.vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue'
import SectionTitle2 from '../components/SectionTitle2.vue'
import CardBox from '../components/CardBox.vue'
import Button from '../components/Button.vue'
import Bar from '../components/Bar.vue'
import Modal from '../components/Modal.vue'
import useModalShow from '../hooks/modal'
export default defineComponent({
  setup() {
    const { toggleModal } = useModalShow()
    return { toggleModal }
  },
  components: { SectionMain, SectionTitle, LayoutAuthentication, SectionTitle2, CardBox, Button, Bar, Modal }
})
</script>

<template>
  <LayoutAuthentication>
    <SectionMain>
      <SectionTitle title="UI Kit" icon="i-material-symbols-style-outline" />
      <CardBox centered>
        <Button title="Toggle" isIcon :icon="'i-line-md-moon-filled-to-sunny-filled-loop-transition'" />
      </CardBox>
      <CardBox centered>
        <Button title="Button" />
        <Button :buttonColor="'bgError'" isIcon title="With Icon" />
        <Button :buttonColor="'bgSuccess'" buttonType="mini" title="Mini" />
        <Button :buttonColor="'bgBlue'" />
      </CardBox>
      <SectionTitle2 title="Section Title 2" />
      <CardBox centered>
        <Button isIcon title="Modal" @click="toggleModal"></Button>
        <Modal :style="'w-250px h-250px'">
          <div class="flex h-full w-full flex-col justify-between">
            <h2 class="text-24px text-center">This is modal</h2>
            <div class="gap-4px flex items-end">
              <Button isIcon title="Modal" />
              <span class="ml-auto"><Button isIcon :button-color="'bgError'" /></span>
            </div>
          </div>
        </Modal>
      </CardBox>
      <CardBox centered>
        <h2 class="text-24px">Input</h2>
        <div class="input">
          <i
            class="text-#9e9e9e z-1 h-24px w-24px left-14px i-line-md-cog-loop absolute flex h-full items-center"
          />
          <input type="text" placeholder=" " id="username" />
          <label class="cursor-text" for="username">Username</label>
        </div>
      </CardBox>
      <SectionMain>
        <Bar :barClose="true" title="Normal" />
        <Bar barType="error" title="Error" barRight>
          <Button buttonType="mini" title="Mini" buttonColor="bgBlue"></Button>
        </Bar>
        <Bar title="Blue" barType="blue" />
        <Bar title="Success" barType="success" />
      </SectionMain>
      <CardBox centered> Error </CardBox>
    </SectionMain>
  </LayoutAuthentication>
</template>

<style scoped>
/* floating label */
.input {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #0000000d;
  border-radius: 4px;
}

input {
  border: none;
  flex-grow: 1;
  height: 46px;
  padding-top: 10px;
  background: transparent;
  font-size: 14px;
  font-weight: 300;
  transition: all 0.4s ease;
  border-radius: 4px;
  padding-left: 52px;
  z-index: 2;
}

.input input:focus {
  outline: none;
  border-bottom: 1px solid #6236ff;
  box-shadow: 0 1px 0 0 #6236ff;
}

label {
  left: 52px;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  color: #00000090;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-17px);
  font-size: 12px;
  color: #6236ff;
}
</style>
