import { Application, Assets, Container, Sprite, Graphics } from "./pixi.mjs";
import * as math from "./mathlib.js";
const width = 250;
const height = 250;

class rgb {
  /**
   *
   */
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toString() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
}
const bg = new rgb(62, 144, 235);
const focalLength = 25;

let objects = [
  {
    shape: "sphere",
    position: [0, 20, 40],
    radius: 10,
  },
];

(async () => {
  // Create a new application
  const app = new Application();
  await app.init({ width, height });
  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);

  const pixels = Array(width)
    .fill(0)
    .map(() =>
      Array(height)
        .fill(0)
        .map(() => {
          return bg;
        })
    );

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let x = i - width / 2;
      let y = j - height / 2;
      let direction = math.normalize([x, y, focalLength]);
      pixels[i][j] = trace([0, 0, 0], direction, objects);
    }
  }

  paint(app.stage, pixels);
})();

function paint(stage, pixelGrid) {
  for (let i = 0; i < pixelGrid.length; i++) {
    for (let j = 0; j < pixelGrid.length; j++) {
      stage.addChild(
        new Graphics().rect(i, j, 1, 1).fill({ color: `${bg.toString()}` })
      );
    }
  }
}

function intersection(origin, direction, objects) {
  let minDistance = Infinity;
  let collided = false;
  let closestIntersection;
  let closestObject;

  for (let obj of objects) {
    if (obj.shape == "sphere") {
      let intersect = SphereIntersection(origin, direction, obj);
      if (intersect.dist < minDistance) {
        closestIntersection = intersect;
        closestObject = obj;

        minDistance = intersect.dist;
      }

      //if collided, set to true, else keep it the same
      collided = collided || intersect.collided;
    }
  }

  return {
    collided,
    point: closestIntersection?.point ?? [0, 0, 0],
    dist: closestIntersection?.dist ?? Infinity,
    object: closestObject,
  };
}

function trace(origin, direction, objects) {
  let intersect = intersection(origin, direction, objects);
  if (intersect.collided) {
    return new rgb(255, 1, 1);
  }
  return bg;
}

function SphereIntersection(origin, direction, sphere) {
  let rayToSphere = math.sub(sphere.position, origin);
  let distRayToSphere = math.mag(rayToSphere);
  let distClosestPointOnRay = math.dot(rayToSphere, direction);
  let distClosestPointToSphere = Math.sqrt(
    distRayToSphere ** 2 - distClosestPointOnRay ** 2
  );
  let distToIntersection =
    distClosestPointOnRay -
    Math.sqrt(sphere.radius ** 2 - distClosestPointToSphere ** 2);
  let point = math.add(origin, math.mul(direction, distToIntersection));

  if (distClosestPointOnRay > 0 && distClosestPointToSphere < sphere.radius) {
    return {
      collided: true,
      dist: distToIntersection,
      point: point,
    };
  }
  return {
    collided: false,
    dist: Infinity,
  };
}
