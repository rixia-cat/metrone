<script setup lang="ts">
import PendulumSection from "./features/pendulum/PendulumSection.vue";
import LogoSection from "./features/logo/LogoSection.vue";
import BpmDisplaySection from "./features/bpm-display/BpmDisplaySection.vue";
import { useBpm } from "./composables/useBpm";
import ChangeBpmSection from "./features/control/ChangeBpmSection.vue";
import PlayControlSection from "./features/control/PlayControlSection.vue";

const { bpm, changeBpmByStep, MIN_BPM, MAX_BPM } = useBpm(120);
</script>

<template>
  <div class="container">
    <div class="sections-area">
      <LogoSection />
      <PendulumSection />
      <BpmDisplaySection :bpm="bpm" />
      <ChangeBpmSection v-model:bpm="bpm" :minBpm="MIN_BPM" :maxBpm="MAX_BPM" />
      <PlayControlSection />
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