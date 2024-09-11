<script setup lang="ts">
import { computed } from 'vue';
import Pendulum from './component/Pendulum.vue';

const props = defineProps<{
    angle: number;
}>();

const angle = computed(() => props.angle);

</script>

<template>
    <div class="pendulum-container">
        <Pendulum :angle="angle" />
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