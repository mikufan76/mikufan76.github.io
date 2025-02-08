const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
import * as math from "./mathlib.js"

const width = 500;
const height = 300;

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
const focalLength = 100;

let objects = [
  {
    shape: "sphere",
    position: [0, -6, 20],
    radius: 12,
    color: new rgb(255, 255, 255)
  },
  {
    shape: "sphere",
    position: [15, 4, 25],
    radius: 12,
    color: new rgb(203, 238, 248)
  },
  {
    shape: "triangle",
    points: [[0, 0, 0], [0, 2, 3], [2, 3, 0]],
    color: new rgb(203, 0, 0)
  }

];


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
    pixels[i][j] = trace([1, 0, 0], direction, objects);

  }
}

paint(pixels);

function paint(pixelGrid) {
  for (let i = 0; i < pixelGrid.length; i++) {
    for (let j = 0; j < pixelGrid[0].length; j++) {
      let color = pixels[i][j]
      ctx.fillStyle = color.toString();
      ctx.fillRect(i, j, 1, 1);
    }
  }
}

function intersection(origin, direction, objects) {
  let minDistance = Infinity;
  let collided = false;
  let closestIntersection;
  let closestObject;

  for (let obj of objects) {
    let intersect = false;
    if (obj.shape == "sphere") {
      let intersect = SphereIntersection(origin, direction, obj);
      if (intersect.dist < minDistance) {
        closestIntersection = intersect;
        closestObject = obj;

        minDistance = intersect.dist;
      }
      collided = collided || intersect.collided;
    }

    if (obj.shape == "triangle") {
      intersect = TriangleIntersection(origin, direction, obj.points)
    }


    //if collided, set to true, else keep it the same 
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
    return intersect.object.color;
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

function TriangleIntersection(origin, direction, points) {
  let planeVector = math.normalize(math.cross(math.sub(points[1], points[0]), math.sub(points[2], points[0])))
  let planeOffset = math.dot(planeVector, points[0])
  let distToSurface = (planeOffset - math.dot(planeVector, origin)) / math.dot(planeVector, direction)
  let point = math.add(math.scale(direction, distToSurface), origin)
  let c1 = math.dot(math.cross(math.sub(points[1], points[0]), math.sub(point, points[0])), planeVector) >= 0
  let c2 = math.dot(math.cross(math.sub(points[2], points[1]), math.sub(point, points[1])), planeVector) >= 0
  let c3 = math.dot(math.cross(math.sub(points[0], points[2]), math.sub(point, points[2])), planeVector) >= 0
  let collide = c1 && c2 && c3

  if (!collide || distToSurface <= 0) { distToSurface = Infinity }

  return { collide: collide, dist: distToSurface, point: point, normal: planeVector, obj: this }
}