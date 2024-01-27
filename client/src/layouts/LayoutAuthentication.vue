<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
    setup() {
        const isDark = ref<boolean>(false);

        const readLocalStorage = () => {
            const storedIsDark = localStorage.getItem('isDark');
            // If the stored value is present, use it; otherwise, use the default value false
            isDark.value = storedIsDark === 'true';
        };

        const writeLocalStorage = () => {
            localStorage.setItem('isDark', isDark.value.toString());
        };

        onMounted(() => {
            readLocalStorage();
        });

        watch(isDark, () => {
            writeLocalStorage();
        });

        console.log(isDark.value);
        return { isDark };
    },
});
</script>

<template>
    <div :class="{ 'dark': isDark }">
        <slot></slot>
    </div>
</template>
