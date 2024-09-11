import * as Tone from 'tone';
import type { NonCustomOscillatorType } from 'tone/build/esm/source/oscillator/OscillatorInterface';

export const useMetronome = (props:{
    onTickCallback: () => void
}) => {
    let metronome = new Tone.Loop(() => { }, '4n');
    let volume = new Tone.Volume(0).toDestination();

    function setupMetronome() {
        setSoundType('triangle');
    }

    function startMetronome(bpm: number) {
        const transport = Tone.getTransport();
        transport.bpm.value = bpm;
        transport.start();
        metronome.start(0);
    }

    function stopMetronome() {
        const transport = Tone.getTransport();
        metronome.stop();
        transport.stop();
    }

    function changeTempo(bpm: number) {
        const transport = Tone.getTransport();
        transport.bpm.value = bpm;
    }

    function cueMetronome() {
        metronome.stop();
        metronome.start(0);
    }

    function setVolume(newVolume: number) {
        volume.volume.value = newVolume;
        volume.toDestination();
    }

    function setSoundType(type:NonCustomOscillatorType ) {
        // メトロノーム音の設定
        const synth = new Tone.Synth({
            oscillator: {
                type: type
            },
            envelope: {
                attack: 0.0001,
                decay: 0.1,
                sustain: 0,
                release: 0.1,
            },
        }).toDestination();

        volume = new Tone.Volume(0).toDestination();

        metronome = new Tone.Loop(time => {
            synth.triggerAttackRelease('C5', '32n', time);
            props.onTickCallback();
        }, '4n');
    }

    return {
        setupMetronome,
        startMetronome,
        stopMetronome,
        changeTempo,
        cueMetronome,
        setVolume
    }
}