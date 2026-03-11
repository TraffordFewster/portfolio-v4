<template>
    <li class="flex-1 px-1">
        <nuxt-link 
            :to="to" 
            class="block text-xs sm:text-sm font-medium transition-all py-2 text-center rounded-full whitespace-nowrap"
            :class="isActive ? 'text-emerald-400 bg-emerald-500/10' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'"
        >
            {{ title }}
        </nuxt-link>
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
    },
    isActive: {
        type: Boolean,
        default: false
    }
})
</script>

