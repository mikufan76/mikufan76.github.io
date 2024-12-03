class Page {
  canvasWidth;
  canvasHeight;
  canTurn = true;
  turnAmount = 0;
  isTurning = false;
  startTurn = 0;
  lift = 0;
  width = 0;
  height = 0;
  offsetX = 0;
  offsetY = -300;
  direction = 1;
  angle = 0;
  animation;
  scale = 1;
  shadow = 0;
  swapDir = false;

  setStartTurn() {
    this.swapDir = this.isTurning;
    this.startTurn = frameCount;
    this.direction = this.direction * -1;
    this.isTurning = true;
    console.log("turning");
  }

  /**
   *
   */
  constructor(canvasWidth, canvasHeight, canTurn = true) {
    this.canTurn = canTurn;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = canvasWidth / 3;
    this.height = canvasHeight / 2;
  }

  draw(contents) {
    push();
    translate(this.canvasWidth / 2, this.canvasHeight / 2); // center origin
    stroke(250);
    strokeWeight(1);
    point(0, 0);

    this.turnPage();
    image(img, this.offsetX, this.offsetY, this.width, this.height);

    // contents();
    pop();
  }

  turnPage() {
    this.animation = cos(startFrame - frameCount);
    this.lift = abs(this.animation);

    if (this.lift >= 0.9999) {
      this.isTurning = false;
    }

    if (this.lift < 0.9999 && this.isTurning) {
      this.scale = this.animation;
      this.angle = this.lift * -1;
      this.shadow = (this.animation * 255) / 2;
    }

    //shadows
    fill(20, 65, 129, this.shadow);
    rect(this.offsetX, this.offsetY, this.width, this.height);

    shearY(this.angle);
    scale(this.scale, 1);
  }
}
