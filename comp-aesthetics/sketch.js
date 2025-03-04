const WINDOW_SKETCH = false;

const CELL_SIZE = 20;
const CELL_DIRECTIONS = "RLLR";
const ITERATIONS = 0; //Precalculated Iterations
const CONTINUE_AFTER_ITERATION = true; //Continue drawing after iterations
let swirl, guitar;

const LETTER_MAPPINGS = {
  L: -1,
  R: 1,
  U: -6,
  N: 0,
};

let cells = [];
let stateColors = [];
let ant = { x: 0, y: 0 };
let translatedTurns = [];
let hitEdge = false;
let direction = -1;
let xDir = 1;
let yDir = 1;

let baseColor = 0;

let antColor = 100;

let swirlFFT, guitarFFT, swirlDetect, guitarDetect, swirlAmp;

function setup() {
  p5.disableFriendlyErrors = true;
  noStroke();
  colorMode(HSL);
  angleMode(DEGREES);
  init();
  swirlFFT = new p5.FFT();
  guitarFFT = new p5.FFT();
  swirlDetect = new p5.peakDetect();
  guitarDetect = new p5.peakDetect();
  swirlAmp = new p5.Amplitude();
  swirl.connect(swirlAmp);
  frameRate(32)
}

function preload() {
  swirl = loadSound("assets/Mollusk-other.mp3");
  guitar = loadSound("assets/Mollusk-guitar.mp3");
}

const init = () => {
  let xSize = windowWidth;
  let ySize = windowHeight;

  if (WINDOW_SKETCH) {
    xSize = 390;
    ySize = 1215;
  }
  let cnv = createCanvas(xSize, ySize);

  cells.forEach((nested) => (nested.length = 0));
  cells.length = 0;

  for (let x = 0; x < width / CELL_SIZE; x++) {
    cells.push([]);
    for (let y = 0; y < height / CELL_SIZE; y++) {
      cells[x].push({
        x,
        y,
        state: 0,
      });
    }
  }

  ant.x = Math.trunc(cells.length / 2);
  ant.y = Math.trunc(cells[0].length / 2);
  ant.dir = 0;

  stateColors.length = 0;
  const randomHue = randomInt(0, 360);
  for (let i = 0; i < CELL_DIRECTIONS.length; i++) {
    stateColors.push(color(randomHue, 75, (100 / CELL_DIRECTIONS.length) * i));
  }

  translatedTurns.length = 0;
  for (let i = 0; i < CELL_DIRECTIONS.length; i++) {
    translatedTurns.push(LETTER_MAPPINGS[CELL_DIRECTIONS[i]]);
  }

  background(stateColors[0]);

  for (let i = 0; i < ITERATIONS; i++) {
    if (moveAnt(false)) {
      noLoop();
      console.log(`Exited at iteration ${i}`);
      break;
    }
  }

  for (let x = 0; x < cells.length; x++) {
    for (let y = 0; y < cells[0].length; y++) {
      const currentCell = cells[x][y];
      fill(stateColors[currentCell.state]);
      square(currentCell.x * CELL_SIZE, currentCell.y * CELL_SIZE, CELL_SIZE);
    }
  }
};

function canvasPressed() {}

function draw() {
  // if (hitEdge || !(CONTINUE_AFTER_ITERATION || ITERATIONS === 0)) {
  //   return;
  // }

  guitarFFT.analyze();
  swirlFFT.analyze();
  guitarDetect.update(guitarFFT);
  swirlDetect.update(swirlFFT);

  if (!swirl.isPlaying()) {
    return;
  }

  const guitarEnergy = guitarFFT.getEnergy("bass") % 360;
  // console.log(guitarEnergy)

  antColor = guitarEnergy;

  if (guitarDetect.isDetected) {
    console.log("guitar detected");
  }

  const energy = swirlAmp.getLevel();
  ant.x += 1.5 * xDir
  ant.y = (sin(energy * 360)*100 + height / 2) * yDir;
  // console.log(`${ant.x}, ${ant.y}`);

  ant.x = Math.trunc(ant.x);
  ant.y = Math.trunc(ant.y);

  if (energy > 100) {
    // console.log("hi");
    direction = +1;
  }
  moveAnt(direction);
}

function moveAnt(direction) {
  // let dir = direction % 4;

  // switch (dir) {
  //   case -1:
  //     break;
  //   case 0:
  //     ant.y -= 1;
  //     break;
  //   case 1:
  //     ant.x += 1;
  //     break;
  //   case 2:
  //     ant.y += 1;
  //     break;
  //   default:
  //     ant.x -= 1;
  //     break;
  // }

  fill(antColor + baseColor, 80, 50);
  square(ant.x, ant.y, CELL_SIZE);

  if (ant.x > width - CELL_SIZE - 1) {
    console.log("hit rigth edge");
    xDir *= -1;
    ant.x = width - CELL_SIZE - 1;

  }
  if (ant.y > height - CELL_SIZE - 1 || ant.y < CELL_SIZE + 1) {
    console.log("hit edge Y");
    yDir *= -1;
    baseColor + 100;
  }
}

function mousePressed(e) {
  if (WINDOW_SKETCH) {
    return;
  }
  if (e.button !== 0) {
    return;
  } //If not left mouse button

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    const fs = fullscreen();
    fullscreen(!fs);
  }
  if (!swirl.isPlaying()) {
    swirl.play();
    guitar.play();
  }
}

function windowResized() {
  if (WINDOW_SKETCH) {
    return;
  }

  init();
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
