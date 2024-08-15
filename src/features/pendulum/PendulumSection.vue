<template>
    <div class="pendulum-container">
        <div class="pendulum">
            <div class="pendulum-rod"></div>
            <div class="pendulum-base"></div>
        </div>
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