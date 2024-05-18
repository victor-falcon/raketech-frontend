<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue"
import {ref} from "vue"
import Button from "../forms/Button.vue"

const auth0 = useAuth0();
const {loginWithRedirect, logout, isLoading} = useAuth0()

const isAuthenticated = ref(auth0.isAuthenticated);
const user = ref(auth0.user);
</script>

<template>
    <div class="w-full flex flex-row items-center justify-between px-6 py-5 border-b border-zinc-200 dark:border-zinc-700">
        <h1>🤟 App Name</h1>

        <div :class="[
            'flex flex-row gap-4 items-center transition-all duration-200 ease-in-out',
            {'opacity-0': isLoading,}
        ]">
            <div v-if="isAuthenticated">{{ user?.email }}</div>
            <Button v-if="!isAuthenticated" @click.prevent="() => loginWithRedirect()">Login</Button>
            <Button v-else @click.prevent="() => logout()">Logout</Button>
        </div>
    </div>
</template>

<style scoped>

</style>
