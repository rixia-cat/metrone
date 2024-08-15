<script setup lang="ts">
import { computed } from 'vue';


const bpm = defineModel('bpm', {
    type: Number,
    default: 120,
});

const props = defineProps<{
    minBpm: number;
    maxBpm: number;
}>();

const minBpm = computed(() => props.minBpm);
const maxBpm = computed(() => props.maxBpm);

</script>

<template>
    <div>
        <input type="range" :min="minBpm" :max="maxBpm" step="1" v-model="bpm" class="slider" />
        <div class="slider-labels">
            <div class="slider-min">{{ minBpm }}</div>
            <div class="slider-max">{{ maxBpm }}</div>
        </div>
    </div>
</template>

<style scoped>
.slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;

    cursor: pointer;
    height: 2px;
    border: none;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
    }

    &::-webkit-slider-runnable-track {
        width: 95%;
        height: 4px;
        margin-top: 2px;
        margin-bottom: 2px;
        cursor: pointer;
        background-color: var(--color-main);
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--color-main);
        cursor: pointer;
        margin-top: -14px;
    }

    &::-moz-range-track {
        width: 95%;
        height: 4px;
        margin-top: 2px;
        margin-bottom: 2px;
        cursor: pointer;
        background-color: var(--color-main);
    }

    &::-moz-range-thumb {
        width: 32px;
        height: 32px;
        margin-top: -14px;
        border-radius: 50%;
        background-color: var(--color-main);
        cursor: pointer;
    }

    &::moz-focus-outer {
        border: 0;
    }


    &:active::-webkit-slider-thumb {
        box-shadow: 0 0 0 10px var(--color-main);
    }
}

.slider-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding-top: 12px;
}

.slider-min,
.slider-max {
    font-size: 0.8rem;
    color: var(--color-main);
}
</style>