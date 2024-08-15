<script setup lang="ts">
import { PhMetronome } from "@phosphor-icons/vue";
</script>

<template>
    <div>
        <h1 class="logo">
            <PhMetronome class="logo-icon" />
            <span class="logo-text">metrone</span>
        </h1>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
}

.logo-icon {
    font-size: 3rem;
    color: var(--color-main);
}

.logo-text {
    font-size: 2rem;
    line-height: 1;
    color: var(--color-main);
    font-family: 'Syncopate', sans-serif;

    text-shadow:
        0 0 8px rgba(255, 255, 255, 0.75);

}
</style>