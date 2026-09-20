// Web Audio API ambient music synthesizer & UI sound effects
// Lightweight, zero-asset, 100% browser-native cosmic audio engine

class AudioSystem {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private chordInterval: NodeJS.Timeout | null = null;

  // Ambient chord progressions (frequencies in Hz)
  // Deep ethereal space chords: Dm9 -> BbMaj7 -> Gm9 -> Asus4/A7
  private chords: number[][] = [
    [73.42, 146.83, 220.00, 261.63, 349.23, 440.00], // D minor 9
    [58.27, 116.54, 174.61, 220.00, 293.66, 349.23], // Bb Major 7
    [49.00, 98.00, 146.83, 174.61, 220.00, 329.63],  // G minor 9
    [55.00, 110.00, 164.81, 220.00, 293.66, 392.00], // A sus4 / 7
  ];
  private currentChordIndex = 0;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Warm Cosmic Low-Pass Filter
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(850, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(2, this.ctx.currentTime);

      // Subtle LFO to give filter an evolving, breathing pulse
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // very slow cycle (8.3s)
      lfoGain.gain.setValueAtTime(250, this.ctx.currentTime); // modulates filter cutoff +/- 250Hz
      lfo.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);
      lfo.start();

      this.masterGain.connect(this.filterNode);
      this.filterNode.connect(this.ctx.destination);
    }
  }

  public async startAmbientMusic() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }

    this.isPlaying = true;

    // Smooth fade in over 2 seconds to gentle ambient level
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.08, now + 2.0);

    this.playNextChord();
    if (this.chordInterval) clearInterval(this.chordInterval);
    this.chordInterval = setInterval(() => {
      if (this.isPlaying) {
        this.playNextChord();
      }
    }, 6000); // Shift chord every 6 seconds smoothly
  }

  private activeOscs: OscillatorNode[] = [];

  private playNextChord() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const chord = this.chords[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;

    const now = this.ctx.currentTime;
    const chordGain = this.ctx.createGain();
    chordGain.gain.setValueAtTime(0.001, now);
    chordGain.gain.exponentialRampToValueAtTime(0.9, now + 2.0);
    chordGain.gain.exponentialRampToValueAtTime(0.001, now + 5.9);
    chordGain.connect(this.masterGain);

    chord.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime((idx - 2) * 3, now);

      osc.connect(chordGain);
      osc.start(now);
      osc.stop(now + 6.0);
      this.activeOscs.push(osc);
    });

    // Remove finished oscillators from activeOscs after chord completes
    setTimeout(() => {
      this.activeOscs = this.activeOscs.filter(o => {
        try {
          return (o as any).playbackState !== 3; // 3 = FINISHED_STATE
        } catch {
          return false;
        }
      });
    }, 6200);
  }

  public stopAmbientMusic() {
    this.isPlaying = false;
    if (this.chordInterval) {
      clearInterval(this.chordInterval);
      this.chordInterval = null;
    }

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.00001, now + 0.15);
    }

    // Stop all active oscillators immediately
    this.activeOscs.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    this.activeOscs = [];
  }

  // Sci-fi UI sound effect on hover
  public playHoverSound() {
    if (!this.isPlaying && !this.ctx) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch {}
  }

  // Futuristic warp swell sound on entering portfolio
  public playLaunchSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = "sine";
      osc2.type = "triangle";

      osc1.frequency.setValueAtTime(220, now);
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.6);

      osc2.frequency.setValueAtTime(330, now);
      osc2.frequency.exponentialRampToValueAtTime(1320, now + 0.6);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.8);
      osc2.stop(now + 0.8);
    } catch {}
  }
}

export const audioSystem = new AudioSystem();
