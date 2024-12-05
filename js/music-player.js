const vocals = "../media/audio/Mollusk-vocals.mp3";
const instrumentPaths = [
  "../media/audio/Mollusk-bass.mp3",
  "../media/audio/Mollusk-drums.mp3",
  "../media/audio/Mollusk-guitar.mp3",
  "../media/audio/Mollusk-other.mp3",
  "../media/audio/Mollusk-piano.mp3",
];

class MusicPlayer {
  instruments = [];
  vocals;
  soundFormats = ["wav", "mp3"];
  sounds;
  other;
  isPlaying = false;

  constructor() {
    soundFormats(...this.soundFormats);
    instrumentPaths.forEach((path) => {
      this.instruments.push(loadSound(path));
      if (path.includes("other")) {
        this.other = this.instruments[this.instruments.length - 1];
      }
    });
    this.vocals = loadSound(vocals);
    this.sounds = [this.vocals, ...this.instruments];
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  stop() {
    this.isPlaying = false;
    this.sounds.forEach((sound) => {
      sound.stop();
    });
  }

  pause() {
    this.isPlaying = false;
    this.sounds.forEach((sound) => {
      sound.pause();
    });
  }

  play() {
    this.isPlaying = true;
    this.sounds.forEach((sound) => sound.play());
  }

  jump(sec) {
    this.sounds.forEach((sound) => sound.jump(sec));
  }

  toggleVocals() {
    this.vocals.isPlaying ? this.vocals.stop() : this.vocals.play();
  }
}
