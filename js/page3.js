function pageThree() {
  background("#FFFFCC");
  let wave = otherFFT.waveform();
  let length = 180;
  push();
  translate(width / 2, height / 2 + 200);
  for (let i = 0; i < length; i++) {
    fill(255);
    noFill();
    stroke(noise(i)*20 +  240, 120 + 20*sin(i), 0);
    let index = floor(map(i, 0, length, 0, wave.length - 1));
    let r = map(wave[index], -1, 1, 150, 360);
    let amp = 0.5;
    let max = 2;
    let min = 0.5;
    let period = lerp(min, max, max * sin((millis() - start) / 1000));
    let x = r * cos((i * millis()) / 1000);
    let y = r * amp * sin(((2 * Math.PI) / period) * i);
    ellipse(x, y-100, 4);
  }
  pop();
}
