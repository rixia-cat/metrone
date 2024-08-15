<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    bpm: number;
}>();
const bpm = computed(() => props.bpm);

</script>

<template>
    <div class="bmp-display-container">
        <div class="bpm-value">{{ bpm }}</div>
        <div class="bpm-label">BPM</div>
    </div>
</template>

<style scoped>
.bmp-display-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    gap: 8px;
}


.bpm-value {
    font-size: 48px;
    font-weight: bold;
    color: var(--color-main);
}

.bpm-label {
    font-size: 24px;
    color: var(--color-main);
}
</style>