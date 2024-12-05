let bass, drums, guitar, other, piano;
let fft, bassFFT, drumsFFT, guitarFFT, otherFFT, pianoFFT, vocalsFFT;
let start = 0;
let page;
let bg, ladSit, beach;
let MUSIC_PLAYER;
let WIDTH = 800;
let HEIGHT = 500;

// Bounds
const x1 = 2;
const y1 = 2.5;
const x2 = x1;
const y2 = HEIGHT - 4;
const x3 = WIDTH - 4;
const y3 = 3;
const x4 = WIDTH - 4;
const y4 = HEIGHT - 4;

let state = 0;
let button;

// let vocals = "../media/audio/Mollusk-vocals.mp3";

function preload() {
  MUSIC_PLAYER = new MusicPlayer();
  // vocals = loadSound(vocals);
  bg = loadImage("../media/bg.png");
  ladSit = loadImage("../media/lad.png");
}

function setup() {
  angleMode(DEGREES);
  let cnv = createCanvas(WIDTH, HEIGHT);
  const wrapper = select("#wrapper");
  cnv.parent("#canvas");
  button = select("#button");
  button.parent("#wrapper");
  button.html("[I'm ready to begin]");
  button.mousePressed(buttonPress);
  MUSIC_PLAYER.vocals.addCue(16.2, () => MUSIC_PLAYER.vocals.pause());
  MUSIC_PLAYER.vocals.addCue(19, () => MUSIC_PLAYER.vocals.pause());

  // text("tap here to play", 10, 20);
  // fft = new p5.FFT();
  // fft.setInput(other);
  // bassFFT = new p5.FFT();
  // bassFFT.setInput(bass);
  // page = new Page(width, height);
  // let button = createButton("next page");
  // button.position(width / 2, height - 10);
  // button.mousePressed(() => page.setStartTurn());

  // let play = createButton("play music");
  // play.position(width / 2, height - 30);
  // play.mousePressed(playMusic);
}

function draw() {
  //Frame
  background("white");

  switch (state) {
    // title
    case 0:
      title();
      break;
    case 1:
      pageOne();
      break;
    case 2:
      pageOne(1);
      break;
    default:
      state = 0;
      break;
  }
  noFill();
  stroke(1);
  strokeWeight(2);
  rect(0, 0, width, height);
  // background(255);
  // page.draw(pageOne);
  // bassFFT.analyze();
  // let octaves = bassFFT.getOctaveBands();
  // let basswave = bassFFT.waveform();
  // let length = 180;
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
  translate(width / 2, height / 4 - 200);
  scale(0.9, 0.5);
  for (let i = 0; i < length; i++) {
    fill(255);
    noFill();
    stroke(255 * noise(i), (i / length) * 255, 255, 150);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    let amp = 1;
    let max = 1;
    let min = 0.5;
    let period = lerp(min, max, max * sin((millis() - start) / 1000));
    // let x = r * cos(i*millis()/1000);
    let x = r * cos(i);
    let y = r * amp * sin(((2 * Math.PI) / period) * i);
    square(x, y, 10);
  }
  pop();
  noStroke();
  let shadow = color(97, 42, 226, 30);
  push();
  shearY(-5);
  fill(shadow);
  ellipse(243, 78, 60, 40);
  pop();
  image(lad, 200, 1, 70, 70);
}

const average = (array) => array.reduce((a, b) => a + b) / array.length;

function buttonPress() {
  MUSIC_PLAYER.pause();
  switch (state) {
    case 0:
      MUSIC_PLAYER.vocals.play();
      MUSIC_PLAYER.vocals.jump(12.5);
      button.html("Hey little boy, what you got there?");

      break;
    case 1:
      MUSIC_PLAYER.vocals.play();
      MUSIC_PLAYER.vocals.jump(16.2);
      button.html(
        "Does it speaketh of the trinity? <br>Can it gaze at the sun with its wandering eye?"
      );
      break;
    case 2:
      button.html(
        "Bring forth the mollusk, cast unto me<br>Let's be forever let forever be free"
      );
      break;
    default:
      state = 0;
      break;
  }
  state++;
}
