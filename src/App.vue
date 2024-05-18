<script setup lang="ts">
import Header from "./components/header/Header.vue"
import AuthOnlyContent from "./components/content/AuthOnlyContent.vue"
import FlagGrid from "./components/flags/FlagGrid.vue"
import Footer from "./components/footer/Footer.vue"

</script>

<template>
    <Header />

    <AuthOnlyContent>
        <FlagGrid />
    </AuthOnlyContent>

    <Footer />
</template>
