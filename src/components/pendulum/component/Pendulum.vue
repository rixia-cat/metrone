<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    angle: number;
}>();

const angle = computed(() => props.angle);

const penndulumRodStyle = computed(() => {
    return {
        transform: `rotate(${angle.value}deg) translateX(-50%)`,
    };
});

</script>
<template>
    <div class="pendulum">
        <div class="pendulum-rod" :style="penndulumRodStyle"></div>
        <div class="pendulum-base"></div>
    </div>
</template>

<style scoped>
.pendulum {
    position: relative;
    width: 100px;
    height: 100px;
}

.pendulum-rod {
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background-color: var(--color-main);
    transform: translateX(-50%);
    transform-origin: 50% 100%;
    transition: transform 0.2s ease-in-out;
}

.pendulum-base {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 16px;
    height: 16px;
    background-color: var(--color-main);
    border-radius: 20%;
    transform: translate(-50%, -50%);
}
</style>