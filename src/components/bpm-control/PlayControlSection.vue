<script setup lang="ts">
import { PhSkipBack, PhSpeakerHigh, PhSpeakerSlash } from '@phosphor-icons/vue';
import ActionFlatButton from '../../components/button/ActionFlatButton.vue';
import PlayButton from './play/PlayButton.vue';


const isPlaying = defineModel('isPlaying', {
    type: Boolean,
    default: false
});
const isMuted = defineModel('isMuted', {
    type: Boolean,
    default: false
});

const emits = defineEmits<(e: 'cue') => void>();

const onClickCue = () => {
    emits('cue');
};

</script>

<template>
    <div class="play-control-container">
        <ActionFlatButton @click="onClickCue">
            <template #icon>
                <PhSkipBack class="flat-button-icon" />
            </template>
        </ActionFlatButton>
        <div class="play-button-container">
            <PlayButton v-model:isPlaying="isPlaying" />
        </div>
        <div class="mute-button-container">
            <ActionFlatButton @click="isMuted = !isMuted" class="mute-button">
                <template #icon v-if="isMuted">
                    <PhSpeakerSlash class="flat-button-icon" />
                </template>
                <template #icon v-else>
                    <PhSpeakerHigh class="flat-button-icon" />
                </template>
            </ActionFlatButton>
        </div>
    </div>
</template>

<style scoped>
.play-control-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.mute-button {
    transition: all 0.2s;
}

.flat-button-icon {
    color: var(--color-main);
    font-size: 3rem;
}
</style>