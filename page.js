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
  offsetY = -400 ;
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
    this.width = canvasWidth / 2 - 20;
    this.height = canvasHeight - 10;
  }

  draw(contents) {
    translate(this.canvasWidth / 2, this.canvasHeight / 2); // center origin
    push();
    strokeWeight(1);
    fill(240);
    this.turnPage();
    rect(this.offsetX, this.offsetY, this.width, this.height);
    contents(this.offsetX, this.offsetY, this.width, this.height);
    pop();
  }

  turnPage() {
    this.animation = cos(this.startTurn - frameCount);
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
