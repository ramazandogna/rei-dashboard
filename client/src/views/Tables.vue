<template>
  <LayoutAuthentication>
    <SectionMain>
      <UserTable />
    </SectionMain>
  </LayoutAuthentication>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue'
import SectionMain from '../components/SectionMain.vue'
import UserTable from '../components/tables/UserTable.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: { LayoutAuthentication, SectionMain, UserTable }
})
</script>

<style scoped></style>
