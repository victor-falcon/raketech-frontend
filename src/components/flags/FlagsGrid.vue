<script setup lang="ts">
import {computed, reactive} from "vue"
import {useFetchCountries} from "../../api/countries/GetCountriesApi.ts"

type State = { filter: string }

const state = reactive<State>({
    filter: '',
})

const countries = useFetchCountries()

const filteredFlags = computed(() => {
    if (state.filter === '') {
        return countries.data
    }

    return countries.data.filter(flag => flag.name.toLowerCase().includes(state.filter.toLowerCase()))
})
</script>

<template>
    <div v-if="countries.isLoading" class="flex items-center justify-center h-[50vh] animate-pulse">
        Loading countries…
    </div>

    <div v-else-if="!countries.isLoading && filteredFlags.length === 0" class="flex items-center justify-center h-[50vh]">
        No country found
    </div>

    <div v-else class="flex flex-col gap-3">
        <div>
            <input class="p-2 rounded border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 min-w-[300px]" v-model="state.filter" type="text" placeholder="Filter by name"/>
        </div>

        <div class="border border-zinc-200 dark:border-zinc-700 rounded p-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <div v-for="(flag, i) in filteredFlags" :key="i" class="rounded text-center p-3 hover:bg-zinc-100 transition-all duration-200 ease-in-out">
                <div class="aspect-video overflow-hidden">
                    <img :src="flag.flag" class="object-cover w-full h-full" />
                </div>
                <span class="inline-block pt-2 tracking-wide opacity-75 text-sm text-ellipsis">{{ flag.name }}</span>
            </div>
        </div>
    </div>
</template>
