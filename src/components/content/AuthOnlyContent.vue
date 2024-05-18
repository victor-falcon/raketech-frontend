<script setup lang="ts">
import {ref} from 'vue'
import {useAuth0} from "@auth0/auth0-vue"
import Button from "../forms/Button.vue"

const auth0 = useAuth0();
const {isLoading, loginWithRedirect} = useAuth0()

const isAuthenticated = ref(auth0.isAuthenticated);

</script>

<template>
    <div v-if="isLoading" class="w-full h-[100vh] text-center flex flex-col items-center justify-center gap-6 animate-pulse">
        Loading…
    </div>

    <div v-else-if="!isAuthenticated" class="w-full h-[100vh] text-center flex flex-col items-center justify-center gap-6">
        You need to be logged in to access this page.

        <Button v-if="!isAuthenticated" @click.prevent="() => loginWithRedirect()">Login</Button>
    </div>

    <div v-else class="p-6 w-full">
        <slot/>
    </div>
</template>

<style scoped>

</style>
