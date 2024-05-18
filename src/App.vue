<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue"
import {ref} from "vue"

const auth0 = useAuth0();
const {loginWithRedirect} = useAuth0()

const isAuthenticated = ref(auth0.isAuthenticated);
const isLoading = ref(auth0.isLoading);
const user = ref(auth0.user);

function login() {
    loginWithRedirect()
}
</script>

<template>
    <span>Auth: {{ isAuthenticated? "yes" : "no" }}</span>
    <span>loading: {{ isLoading? "yes" : "no" }}</span>
    <span>User: {{ user?.email ?? "" }}</span>
    <button @click="login">Log in</button>
</template>
