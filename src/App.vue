<script setup lang="ts">
import PendulumSection from "./components/pendulum/PendulumSection.vue";
import LogoSection from "./components/logo/LogoSection.vue";
import BpmDisplaySection from "./components/bpm-display/BpmDisplaySection.vue";
import ChangeBpmSection from "./components/bpm-control/ChangeBpmSection.vue";
import PlayControlSection from "./components/bpm-control/PlayControlSection.vue";
import { useBpm } from "./composables/useBpm";
import { useMetronome } from "./composables/useMetronome";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const { bpm, MIN_BPM, MAX_BPM } = useBpm(120);

const currentPendulumAngle = ref(0);
const onTick = () => {
  if (isPlaying.value) {
    if (currentPendulumAngle.value === 0) {
      currentPendulumAngle.value = 47;
    } else {
      currentPendulumAngle.value = currentPendulumAngle.value === 47 ? -47 : 47;
    }
  }
};
const { startMetronome, stopMetronome, setupMetronome, setVolume } = useMetronome({
  onTickCallback: onTick,
});

const isPlaying = ref(false);
watch(isPlaying, (newIsPlaying) => {
  if (newIsPlaying) {
    startMetronome(bpm.value);
  } else {
    stopMetronome();
    currentPendulumAngle.value = 0;
  }
});
const isMuted = ref(false);
watch(isMuted, (newIsMuted) => {
  if (newIsMuted) {
    setVolume(-999);
  } else {
    setVolume(0);
  }
});


watch(bpm, (newBpm) => {
  if (isPlaying.value) {
    stopMetronome();
    startMetronome(newBpm);
  }
});


const onCue = () => {
  if (!isPlaying.value) return;
  stopMetronome();
  startMetronome(bpm.value);
};


onMounted(() => {
  setupMetronome();
});
onBeforeUnmount(() => {
  stopMetronome();
});

</script>

<template>
  <div class="container">
    <div class="sections-area">
      <LogoSection />
      <PendulumSection :angle="currentPendulumAngle" />
      <BpmDisplaySection :bpm="bpm" />
      <ChangeBpmSection v-model:bpm="bpm" :minBpm="MIN_BPM" :maxBpm="MAX_BPM" />
      <PlayControlSection v-model:isPlaying="isPlaying" v-model:isMuted="isMuted" @cue="onCue" />
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;

  font-family: "IBM Plex Sans JP", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.sections-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 16px;
}
</style>