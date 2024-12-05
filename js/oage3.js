function title() {
  push();
  translate(-200, -200);
  scale(0.7);
  image(bg, x1, y1, 1591, 1881);
  pop();
  textSize(100);
  fill("#082b5c");
  textFont("Cabin Sketch");
  strokeWeight(constrain(11 * sin(millis() / 10), 8, 11));
  stroke(233, 160, 200, 255);
  text("The Mollusk", 40, 150);
}
