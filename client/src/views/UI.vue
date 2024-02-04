<script lang="ts">
import { defineComponent } from 'vue'
import SectionMain from '../components/SectionMain.vue'
import SectionTitle from '../components/SectionTitle.vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue'
import SectionTitle2 from '../components/SectionTitle2.vue'
import CardBox from '../components/CardBox.vue'
import Button from '../components/Button.vue'
import Bar from '../components/Bar.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: { SectionMain, SectionTitle, LayoutAuthentication, SectionTitle2, CardBox, Button, Bar }
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
      <CardBox centered> Modal is will be here.. </CardBox>
      <SectionMain>
        <Bar title="Normal" />
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
