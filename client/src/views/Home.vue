<script lang="ts">
import { defineComponent } from 'vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue'
import SectionMain from '../components/SectionMain.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionTitle2 from '../components/SectionTitle2.vue'
import CardBox from '../components/CardBox.vue'
import CardBoxSlim from '../components/CardBoxSlim.vue'
import Charts from '../components/charts/Chart.vue'
import Users from '../components/tables/UserTable.vue'
import Introduce from '../components/Introduce.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    LayoutAuthentication,
    SectionMain,
    SectionTitle,
    SectionTitle2,
    CardBox,
    CardBoxSlim,
    Charts,
    Users,
    Introduce
  }
})
</script>

<template>
  <LayoutAuthentication>
    <!-- Overview Section -->
    <SectionMain>
      <SectionTitle title="Overview" icon="i-ic-baseline-table-chart"> </SectionTitle>
      <div class="mb-6 flex gap-6">
        <CardBox></CardBox>
        <CardBox></CardBox>
        <CardBox></CardBox>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
        <CardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></CardBoxSlim>
      </div>
    </SectionMain>
    <!-- Introduce Section -->
    <SectionMain>
      <Introduce />
    </SectionMain>
    <!-- Charts Section -->
    <SectionMain class="h-550px max-h-500px">
      <SectionTitle class="" title="Trends overview (Charts)" icon="i-material-symbols-add-chart">
      </SectionTitle>
      <Charts class="" height="max-h-450px w-auto" />
    </SectionMain>
    <!-- Kullanıcı Tablosu Section -->
    <SectionMain class="mt-48px">
      <SectionTitle title="Users" icon="i-material-symbols-person-pin-rounded"> </SectionTitle>
      <Users />
    </SectionMain>
  </LayoutAuthentication>
</template>
