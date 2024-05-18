<script setup lang="ts">
import {computed, reactive} from "vue"

const state = reactive({
    filter: ''
})

const flags = [
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
    {name: 'Spain', flag: 'https://flagcdn.com/w320/md.png'},
]

const filteredFlags = computed(() => {
    if (state.filter === '') {
        return flags
    }

    return flags.filter(flag => flag.name.toLowerCase().includes(state.filter.toLowerCase()))
})

</script>

<template>
    <div class="flex flex-col gap-3">
        <div>
            <input class="p-2 rounded border border-zinc-200 min-w-[300px]" v-model="state.filter" type="text" placeholder="Filter by name"/>
        </div>

        <div class="border border-zinc-200 rounded p-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <div v-for="(flag, i) in filteredFlags" :key="i" class="rounded text-center p-3 hover:bg-zinc-100 transition-all duration-200 ease-in-out">
                <img :src="flag.flag" />
                <span class="inline-block pt-2 tracking-wide opacity-75">{{ flag.name }}</span>
            </div>
        </div>
    </div>
</template>
