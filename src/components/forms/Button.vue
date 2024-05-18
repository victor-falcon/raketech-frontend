<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
})
</script>

<template>
    <button class="bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all duration-300 ease-in-out rounded px-3 py-1">
        <slot />
    </button>
</template>

<style scoped>

</style>
