<script setup lang="ts">
import { PhPause, PhPlay } from '@phosphor-icons/vue';

const isPlaying = defineModel('isPlaying', {
    type: Boolean,
    default: false
});
</script>

<template>
    <button @click="isPlaying = !isPlaying" class="play-button">
        <PhPause v-if="isPlaying" class="play-button-icon" />
        <PhPlay v-else class="play-button-icon" />
    </button>
</template>

<style scoped>
.play-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border: solid 2px var(--color-button-play-border);
    border-radius: 50%;
    background-color: var(--color-button-play-primary);
    cursor: pointer;
    transition: background-color 0.2s;
}

.play-button:hover {
    background-color: var(--color-button-play-primary-hover);
    border-radius: 50%;
}

.play-button:active {
    background-color: var(--color-button-play-primary-active);
    border-radius: 50%;
}

.play-button-icon {
    color: var(--color-main);
    font-size: 3rem;
}
</style>