<script setup lang="ts">
import Pendulum from './component/Pendulum.vue';
</script>

<template>
    <div class="pendulum-container">
        <Pendulum />
    </div>
</template>

<style scoped>
.pendulum-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-pendulum-background);
    padding: 16px;
    border-radius: 16px;
}
</style>