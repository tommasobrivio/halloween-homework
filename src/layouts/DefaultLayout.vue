<script lang="ts" setup>
    import HiddenFooter from "@/components/globals/HiddenFooter.vue";
    import NavigationBar from "@/components/globals/NavigationBar.vue";
</script>

<template>
    <div class="default-layout">
        <NavigationBar />
        <div class="content">
            <slot></slot>
        </div>
        <HiddenFooter />
    </div>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .default-layout
    {
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        min-height: 100svh;
        width: 100%;

        .content
        {
            background-color: variables.$slightly-off-white;
            flex: 1;
        }
    }
</style>
