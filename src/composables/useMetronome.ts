import * as Tone from 'tone';

export const useMetronome = () => {
    let metronome = new Tone.Loop(() => { }, '4n');

    function setupMetronome() {
        // メトロノーム音の設定
        const synth = new Tone.Synth({
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 0.001,
                decay: 0.1,
                sustain: 0,
                release: 0.1
            }
        }).toDestination();

        // メトロノームのループ設定
        metronome = new Tone.Loop(time => {
            synth.triggerAttackRelease('C5', '32n', time);
        }, '4n');
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
        metronome.start(0);
    }

    function setVolume(volume: number) {
        const destination = Tone.getDestination();
        destination.volume.value = volume;
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