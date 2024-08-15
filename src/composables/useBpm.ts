import { computed, ref } from "vue";

export const useBpm = (defaultBpm: number) => {
    const MIN_BPM = 10;
    const MAX_BPM = 300;
    
    const srcBpm = ref(defaultBpm);
    const bpm = computed({
        get: () => srcBpm.value,
        set: (value: number) => {
            // 範囲内の値におさめる
            srcBpm.value = Math.min(Math.max(value, MIN_BPM), MAX_BPM);
        }
    });

    const changeBpmByStep = (step: number) => {
        bpm.value += step;
    }

    return {
        bpm,
        changeBpmByStep,
        MIN_BPM,
        MAX_BPM
    };
}