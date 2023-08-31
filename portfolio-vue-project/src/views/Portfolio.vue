<script setup>
import Calculator from '../components/Calculator.vue';
</script>

<template>
    <Calculator></Calculator>
</template>

<style scoped>
    main {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 2rem;
    }
</style>