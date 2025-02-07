import { Graphics, Color } from "./pixi.mjs";
import * as math from "./mathlib.js"

class Item {
  constructor(position, rotation, scale) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}

class Camera extends Item {
  constructor(position, rotation, scale, lookAt, up, width, height, stage, bg) {
    super(position, rotation, scale);
    this.lookAt = lookAt;
    this.up = up;
    this.width = width;
    this.height = height;
    this.graphics = new Graphics
    this.stage = stage;
    this.pixels = Array(width).fill(0).map(() => Array(height).fill(0).map(() => { return bg }))
    this.objects = [];
    this.transforms = {}
    this.cameraCoords = {};
  }

  transformAllObjects() {
    console.log('hi')
    const n = math.sub(this.position, this.lookAt)
    console.log(n)
    console.log(this.up)
    const u = math.cross(this.up, n)
    console.log(u)
    const v = math.cross(n, u);

    this.objects.forEach(obj => {
      let transform = 
        [
          [...this.position, math.dot(this.position, u)],
          [...this.rotation, math.dot(this.position, v)],
          [...this.scale, math.dot(this.position, n)],
          [0, 0, 0, 1]

        ]
      console.log(JSON.stringify(transform))
      this.transforms[obj] = transform
      this.cameraCoords[obj] = 0;
    })
  }



  drawPixel(x, y, color) {
    return new Graphics()
      .rect(x, y, 1, 1)
      .fill(color);
  }

  drawBackground() {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        this.stage.addChild(this.drawPixel(i, j, `rgb(${this.pixels[i][j]})`))
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

export { Camera, Sphere, Light }