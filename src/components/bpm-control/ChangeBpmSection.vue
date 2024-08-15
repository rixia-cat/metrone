<script setup lang="ts">
import { computed } from "vue";
import ActionButton from "../../components/button/ActionButton.vue";
import BpmSlider from "./slider/BpmSlider.vue";

const props = defineProps<{
    bpm: number;
    maxBpm: number;
    minBpm: number;
}>();

const bpm = defineModel('bpm', {
    type: Number,
    default: 120,
});
const maxBpm = computed(() => props.maxBpm);
const minBpm = computed(() => props.minBpm);

const changeBpmByStep = (step: number) => {
    bpm.value += step;
};


</script>
<template>
    <div class="change-bpm-section">
        <div class="change-bpm-buttons">
            <ActionButton @click="changeBpmByStep(-10)">
                <template #text>
                    -10
                </template>
            </ActionButton>
            <ActionButton @click="changeBpmByStep(-1)">
                <template #text>
                    -1
                </template>
            </ActionButton>
            <div class="spacer"></div>
            <ActionButton @click="changeBpmByStep(1)">
                <template #text>
                    +1
                </template>
            </ActionButton>
            <ActionButton @click="changeBpmByStep(10)">
                <template #text>
                    +10
                </template>
            </ActionButton>
        </div>

        <BpmSlider v-model:bpm="bpm" :minBpm="minBpm" :maxBpm="maxBpm" class="change-bpm-slider" />

    </div>
</template>

<style scoped>
.change-bpm-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
}

.change-bpm-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
}

.change-bpm-slider {
    width: 100%;
}

.spacer {
    flex: 1;
}
</style>