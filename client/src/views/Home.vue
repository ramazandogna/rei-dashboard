<script lang="ts">
import { defineComponent } from 'vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue'
import SectionMain from '../components/SectionMain.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionTitle2 from '../components/SectionTitle2.vue'
import BannerCardBox from '../components/Banner/BannerCardBox.vue'
import BannerCardBoxSlim from '../components/Banner/BannerCardBoxSlim.vue'
import Charts from '../components/charts/Chart.vue'
import Users from '../components/tables/UserTable.vue'
import Introduce from '../components/Introduce.vue'
import Bar from '../components/Bar.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    LayoutAuthentication,
    SectionMain,
    SectionTitle,
    SectionTitle2,
    BannerCardBox,
    BannerCardBoxSlim,
    Charts,
    Users,
    Introduce,
    Bar
  }
})
</script>

<template>
  <LayoutAuthentication>
    <!-- Overview Section -->
    <SectionMain>
      <SectionTitle title="Overview" icon="i-ic-baseline-table-chart"> </SectionTitle>
      <div class="mb-6 flex flex-wrap gap-6 md:flex-none">
        <BannerCardBox></BannerCardBox>
        <BannerCardBox></BannerCardBox>
        <BannerCardBox></BannerCardBox>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
      </div>
      <div class="mb-6 flex flex-wrap gap-6">
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
        <BannerCardBoxSlim :icon="'i-material-symbols-light-money-rounded'"></BannerCardBoxSlim>
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
      <Bar
        barClose
        title="Bu standart bir uyarı mesajıdır. Eğer uyarıyı kapatmak istiyorsanız iconu kullanın! "
      />
      <Users />
    </SectionMain>
  </LayoutAuthentication>
</template>
