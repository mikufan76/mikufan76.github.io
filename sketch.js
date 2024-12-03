let bass, drums, guitar, other, piano, vocals;
let fft, bassFFT, drumsFFT, guitarFFT, otherFFT, pianoFFT, vocalsFFT;
let start = 0;
let page;
let bg;

function preload() {
  soundFormats("wav", "mp3");
  bass = loadSound("./media/audio/Mollusk-bass.mp3");
  drums = loadSound("./media/audio/Mollusk-drums.mp3");
  guitar = loadSound("./media/audio/Mollusk-guitar.mp3");
  other = loadSound("./media/audio/Mollusk-other.mp3");
  piano = loadSound("./media/audio/Mollusk-piano.mp3");
  vocals = loadSound("./media/audio/Mollusk-vocals.mp3");
  bg = loadImage("./media/bg.png");
}

function setup() {
  angleMode(DEGREES);
  let cnv = createCanvas(800, 800);
  cnv.mousePressed(canvasPressed);

  text("tap here to play", 10, 20);
  fft = new p5.FFT();
  fft.setInput(other);
  bassFFT = new p5.FFT();
  bassFFT.setInput(bass);
  page = new Page(width, height);
}

function draw() {
  background(255);
  page.draw(pageOne);

  bassFFT.analyze();
  let octaves = bassFFT.getOctaveBands();
  let basswave = bassFFT.waveform();

  let length = 180;

  // push();
  // translate(width / 2, height / 2 + 200);
  // for (let i = 0; i < length; i++) {
  //   fill(255);
  //   noFill();
  //   stroke((i / length) * 255,255 * noise(i), 255);
  //   let index = floor(map(i, 0, length, 0, wave.length - 1));
  //   let r = map(wave[index], -1, 1, 150, 360);
  //   let amp = 0.5;
  //   let max = 2;
  //   let min = 0.5;
  //   let period = lerp(min, max, max * sin((millis() - start) / 1000));
  //   let x = r * cos(i*millis()/1000);
  //   let y = r * amp * sin(((2 * Math.PI) / period) * i);
  //   ellipse(x, y, 4);
  // }
  // pop();

  // push();
  // let step = 1;
  // for (let i = 0; i < octaves.length; i += step) {
  //   let ctr = octaves[i].ctr;
  //   let lo = octaves[i].lo;
  //   let hi = octaves[i].hi;
  //   fill(255, 0, 0);
  //   rect(i * 20, ctr, 10, 10);
  //   fill(0, 255, 0);
  //   rect(i * 20, hi, 10, 10);
  //   fill(0, 0, 255);
  //   rect(i * 20, lo, 10, 10);
  // }

  // for (let i = 0; i < basswave.length; i += 10) {
  //   stroke(250);
  //   let num = abs(basswave[i]) * 100;
  //   fill(num * 20);
  //   rect(i * 10, 10, 10, 10);
  // }

  // pop();
}

function pageOne(x, y, width, height) {
  image(bg, x, y, width, height);
  let wave = fft.waveform();
  let length = 180;
  push();
  translate(width / 2, -height/4);
  scale(0.5, .5);
  for (let i = 0; i < length; i++) {
    fill(255);
    noFill();
    stroke(255 * noise(i), (i / length) * 255, 255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    let amp = 0.5;
    let max = 2;
    let min = 0.5;
    let period = lerp(min, max, max * sin((millis() - start) / 1000));
    // let x = r * cos(i*millis()/1000);
    let x = r * cos(i);
    let y = r * amp * sin(((2 * Math.PI) / period) * i);
    ellipse(x, y, 4);
  }
  pop();
}

const average = (array) => array.reduce((a, b) => a + b) / array.length;

function mousePressed() {
  page.setStartTurn();
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  if (!bass.isPlaying()) {
    // mySound.play();
    start = millis();
    vocals.play();
    bass.play();
    drums.play();
    guitar.play();
    other.play();
    piano.play();
    other.jump(51);
    bass.jump(51);
    drums.jump(51);
    guitar.jump(51);
    piano.jump(51);
    vocals.jump(51);
  } else {
    vocals.stop();
    bass.stop();
    drums.stop();
    guitar.stop();
    other.stop();
    piano.stop();
  }
}
