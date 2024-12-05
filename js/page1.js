function pageOne(index = 0) {
  push();
  translate(-600, -200);
  scale(2);
  image(bg, x1, y1, x4, y4);
  pop();
  const ladX = x4 / 2;
  const ladY = x4 / 3 - 30;
  const ladSize = 150;
  push();
  translate(x4 / 2, y4 / 2);
  shearX(-60);
  shearY(10);
  fill(93, 17, 155, 255 * 0.1);
  noStroke();
  ellipse(ladSize + ladSize - 10, ladSize / 2 - 10, ladSize, 70);
  pop();
  image(ladSit, ladX, ladY, ladSize, ladSize);
  if (index === 1) {
    textSize(20);
    textFont("Roboto");
    fill("navy");
    strokeWeight(1);
    stroke("lightblue");

    text("Kind sir, it's a mollusk I've found.", ladX-20, ladY-19);
  }
}
