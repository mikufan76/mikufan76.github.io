function pageTwo() {
  push();
  translate(-200, -500);
  scale(1.2);
  image(bg, x1, y1, 1591, 1881);
  pop();
  push();
  translate(200, 150);
  scale(0.7);
  image(ladAwe, 0, 0, 400, 600);
  pop();
  push();
  image(leftArm, 170, 250, 150, 300);
  pop();
  push();
  translate(width / 2, height / 2);
  rotate(-2);
  scale(1.2);
  image(rightArm, -30, 0, 150, 300);
  pop();

  let wave = otherFFT.waveform();
  let length = 180;

  push();
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(90);
  for (i = 0; i < length; i++) {
    stroke(255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    x = r * cos(i);
    y = r * sin(i);
    ellipse(x-100, y + 200, 4);
  }
  pop();

  push();
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(-90);
  for (i = 0; i < length; i++) {
    stroke(255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    x = r * cos(i);
    y = r * sin(i);
    ellipse(x+100, y - 200, 4);
  }
  pop();

  push();
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(90);
  for (i = 0; i < length; i++) {
    stroke(255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    x = r * cos(i);
    y = r * sin(i);
    ellipse(x - 100, y - 100, 4);
  }
  pop();

  push();
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(-90);
  for (i = 0; i < length; i++) {
    stroke(255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    x = r * cos(i);
    y = r * sin(i);
    ellipse(x + 100, y + 100, 4);
  }
  pop();

  push();
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(90);
  for (i = 0; i < length; i++) {
    stroke(255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    x = r * cos(i);
    y = r * sin(i);
    ellipse(x + 100, y + 100, 4);
  }
  pop();

  push();
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(-90);
  for (i = 0; i < length; i++) {
    stroke(255);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    x = r * cos(i);
    y = r * sin(i);
    ellipse(x - 100, y - 100, 4);
  }
  pop();
}
