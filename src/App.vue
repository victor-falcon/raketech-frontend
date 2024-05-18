<script setup lang="ts">
import Header from "./components/header/Header.vue"
import AuthOnlyContent from "./components/content/AuthOnlyContent.vue"
import FlagsGrid from "./components/flags/FlagsGrid.vue"
import Footer from "./components/footer/Footer.vue"

</script>

<template>
    <Header />

    <AuthOnlyContent>
        <FlagsGrid />
    </AuthOnlyContent>

    <Footer />
</template>
