import { Graphics } from "./pixi.mjs";

class Item {
  constructor(position, rotation, scale) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}

class Camera extends Item {
  constructor(position, rotation, scale, lookAt, up, width, height, stage) {
    super(position, rotation, scale);
    this.lookAt = lookAt;
    this.up = up;
    this.width = width;
    this.height = height;
    this.graphics = new Graphics
    this.stage = stage;
  }

  transformAllObjects(matrix) {

  }

  drawPixel(x, y, color) {
    return new Graphics()
      .rect(x, y, 1, 1)
      .fill(color);
  }

  drawBackground(color) {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        this.stage.addChild(this.drawPixel(i, j, color))
      }
    }
  }
}

class RenderObject extends Item {
  constructor(position, rotation, scale) {
    super(position, rotation, scale);
  }

  intersect(ray) {
    return false;
  }

  transform(matrix) { }
}

class Light extends Item {
  constructor(position, rotation, scale, color, opacity) {
    super(position, rotation, scale, opacity);
    this.color = color;
    this.opacity = opacity;
  }
}

class Sphere extends RenderObject {
  constructor(position, rotation, scale) {
    super(position, rotation, scale);
  }

  intersect(ray) {
    return false;
  }

  transform(matrix) { }
}

class Plane extends RenderObject {
  constructor(position, rotation, scale) {
    super(position, rotation, scale);
  }

  intersect(ray) {
    return false;
  }

  transform(matrix) { }
}

export {Camera}