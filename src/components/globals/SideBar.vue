<script lang="ts" setup></script>

<template>
    <aside class="side-bar">
        <RouterLink :to="{ name: 'exercise-1' }" class="btn btn-light">
            [Esercizio 1] Calcolatrice
        </RouterLink>
        <RouterLink :to="{ name: 'home' }" class="btn btn-light">
            Esercizio 2
        </RouterLink>
        <RouterLink :to="{ name: 'home' }" class="btn btn-light">
            Esercizio 3
        </RouterLink>
        <RouterLink :to="{ name: 'home' }" class="btn btn-light">
            Esercizio 4
        </RouterLink>
        <RouterLink :to="{ name: 'home' }" class="btn btn-light">
            Esercizio 5
        </RouterLink>
    </aside>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .side-bar
    {
        background-color: variables.$inset-gray;
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow: inset -0.5em 0px 0.5em -0.5em rgba(0, 0, 0, 0.5);
        padding-top: var(--navigation-bar-height);
        width: auto;

        .btn-light
        {
            display: block;
            margin: 0.75em;
        }
    }
</style>
