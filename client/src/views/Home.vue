<template>
    <LayoutAuthentication>
        <SectionMain>
            <SectionTitle title="123"
                icon="i-ic-baseline-table-chart">
            </SectionTitle>
            <div>This is home view</div>
            <div>yes this is home</div>
        </SectionMain>
        <SectionTitle2>123
        </SectionTitle2>

    </LayoutAuthentication>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutAuthentication from '../layouts/LayoutAuthentication.vue';
import SectionMain from '../components/SectionMain.vue';
import SectionTitle from '../components/SectionTitle.vue';
import SectionTitle2 from '../components/SectionTitle2.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { LayoutAuthentication, SectionMain, SectionTitle, SectionTitle2 }
})
</script>

<style scoped></style>