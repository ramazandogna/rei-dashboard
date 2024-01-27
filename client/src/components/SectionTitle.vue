<script setup lang="ts">
defineProps<{
    title: string;
    icon: string;
}>();
</script>

<template>
    <section class="mb-6 flex items-center gap-24px">
        <div
            class="w-12 h-12 flex items-center justify-center rounded-full shadow">
            <div class="w-24px h-24px" :class="icon">
            </div>
        </div>
        <h1 class="text-20px">{{ title }}</h1>
    </section>
</template>
