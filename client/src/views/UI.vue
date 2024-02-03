<script lang="ts">
import { defineComponent } from 'vue'
import SectionMain from '../components/SectionMain.vue'
import SectionTitle from '../components/SectionTitle.vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue'
import SectionTitle2 from '../components/SectionTitle2.vue'
import CardBox from '../components/CardBox.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: { SectionMain, SectionTitle, LayoutAuthentication, SectionTitle2, CardBox }
})
</script>

<template>
  <LayoutAuthentication>
    <SectionMain>
      <SectionTitle title="UI Kit" icon="i-material-symbols-style-outline" />
      <SectionTitle2 title="Card Box" />
      <CardBox> This is CardBox </CardBox>
      <SectionTitle2 title="" />
      <CardBox centered> Button </CardBox>
      <CardBox> 123 </CardBox>
      <CardBox centered> Error </CardBox>
    </SectionMain>
  </LayoutAuthentication>
</template>
