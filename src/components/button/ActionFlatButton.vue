<script setup lang="ts">


const emits = defineEmits<(e: 'click') => void>();

const onClick = () => {
    emits('click');
};
</script>

<template>
    <button @click="onClick" class="action-button">
        <slot name="icon" class="action-button-icon" />
        <slot name="text" class="action-button-text" />
    </button>
</template>

<style scoped>
.action-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 12px 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--color-button-action-primary-hover);
        scale: 1.05;
    }

    &:active {
        background-color: var(--color-button-action-primary-active);
        scale: 0.95;
    }
}


.action-button-icon {
    font-size: 1.5rem;
}

.action-button-text {
    color: var(--color-main);
    font-size: 1.5rem;
}
</style>