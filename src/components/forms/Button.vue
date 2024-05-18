<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
})
</script>

<template>
    <button class="bg-zinc-100 hover:bg-zinc-300 transition-all duration-300 ease-in-out rounded px-3 py-1">
        <slot />
    </button>
</template>

<style scoped>

</style>
