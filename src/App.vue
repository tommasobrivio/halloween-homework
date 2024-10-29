<script lang="ts" setup>
    import AlertHandler from "./components/handlers/AlertHandler.vue";
    import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<template>
    <DefaultLayout>
        <RouterView />
    </DefaultLayout>
    <AlertHandler />
</template>

<style lang="scss">
    @import "@/assets/scss/index";

    #app
    {
        overflow: auto;
    }
</style>
