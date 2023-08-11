<template>
    <li class="flex-1">
        <nuxt-link :to="to" class="block font-bold text-xl w-full text-center p-2 hover:bg-indigo-200 rounded transition-colors">{{ title }}</nuxt-link>
    </li>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>

