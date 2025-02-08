import { Application, Assets, Container, Sprite, Graphics } from "./pixi.mjs";

function paint(pixels, stage) {
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[0].length; j++) {
      let color = pixels[i][j];

      fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
      stage.addChild(
        new Graphics().rect(i, j, 1, 1).fill({ color: fillStyle })
      );
    }
  }
}

(async () => {
    console.log('hi')
  let width = 250;
  let height = 250;
  let focalLength = 50;
  let samples = 100;

  // Create a new application
  const app = new Application();
  await app.init({ width, height });
  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);

  let pixels = Array(250)
    .fill(0)
    .map(() =>
      Array(250)
        .fill(0)
        .map(() => {
          return [0, 0, 0];
        })
    );

  let objects = [
    {
      shape: "sphere",
      position: [1000, 0, 0],
      radius: 990,
      emission: [0, 0, 0],
      reflectivity: [1, 0, 0],
      roughness: 10,
    },
    {
      shape: "sphere",
      position: [-1000, 0, 0],
      radius: 990,
      emission: [0, 0, 0],
      reflectivity: [0, 1, 0],
      roughness: 3,
    },
    {
      shape: "sphere",
      position: [0, 1000, 0],
      radius: 990,
      emission: [0, 0, 0],
      reflectivity: [1, 1, 1],
      roughness: 3,
    },
    {
      shape: "sphere",
      position: [0, -1000, 0],
      radius: 990,
      emission: [0, 0, 0],
      reflectivity: [1, 1, 1],
      roughness: 3,
    },
    {
      shape: "sphere",
      position: [0, 0, 1000],
      radius: 990,
      emission: [0, 0, 0],
      reflectivity: [1, 1, 1],
      roughness: 3,
    },
    {
      shape: "sphere",
      position: [0, -14.5, 7],
      radius: 5,
      emission: [5550, 5550, 5550],
      reflectivity: [1, 1, 1],
      roughness: 3,
    },
    {
      shape: "sphere",
      position: [3, 7, 7],
      radius: 3,
      emission: [0, 0, 0],
      reflectivity: [1, 1, 1],
      roughness: 0,
    },
  ];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let x = i - width / 2;
      let y = j - height / 2;

      let direction = normalize([x, y, focalLength]);

      let color = [0, 0, 0];
      for (let i = 0; i < samples; i++) {
        color = add(color, trace([0, 0, 0], direction, objects, 4));
      }
      color = mul(color, 1 / samples);

      pixels[i][j] = color;
    }
  }

  paint(pixels, app.stage);
})();

function trace(origin, direction, objects, steps) {
  let intersect = intersection(origin, direction, objects);

  if (intersect.collided && steps > 0) {
    let reflectedOrigin = intersect.point;
    let reflectedDirection = reflect(direction, intersect.normal);

    return add(
      intersect.object.emission,
      mulParts(
        trace(
          reflectedOrigin,
          reflectedDirection,
          objects.filter((o) => o != intersect.object),
          steps - 1
        ),
        intersect.object.reflectivity
      )
    );
  }
  return [0, 0, 0];
}

function intersection(origin, direction, objects) {
  let minDistance = Infinity;
  let collided = false;
  let closestIntersection;
  let closestObject;

  for (let object of objects) {
    let intersection;
    if (object.shape == "sphere") {
      intersection = sphereIntersection(origin, direction, object);
      if (intersection.dist < minDistance) {
        closestIntersection = intersection;
        closestObject = object;

        minDistance = intersection.dist;
      }

      //if collided, set to true, else keep it the same
      collided = collided || intersection.collided;
    }
  }

  return {
    collided: collided,
    point: closestIntersection?.point ?? [0, 0, 0],
    dist: closestIntersection?.dist ?? Infinity,
    normal: closestIntersection?.normal ?? [0, 0, 0],
    object: closestObject,
  };
}

function sphereIntersection(origin, direction, sphere) {
  let sphereRay = sub(sphere.position, origin);
  let distSphereRay = mag(sphereRay);
  let distToClosestPointOnRay = dot(sphereRay, direction); // length of the segment along the ray to the closest point
  let distFromClosestPointToSphere = Math.sqrt(
    distSphereRay ** 2 - distToClosestPointOnRay ** 2
  );

  let distToIntersection =
    distToClosestPointOnRay -
    Math.sqrt(Math.abs(sphere.radius ** 2 - distFromClosestPointToSphere ** 2));
  let point = add(origin, mul(direction, distToIntersection));
  let normal = normalize(sub(point, sphere.position));

  //calculate roughness
  normal = normalize(
    add(
      normal,
      mul(
        [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
        sphere.roughness
      )
    )
  );

  if (
    distToClosestPointOnRay > 0 &&
    distFromClosestPointToSphere < sphere.radius
  ) {
    return {
      collided: true,
      dist: distToIntersection,
      point: point,
      normal: normal,
    };
  }

  return {
    collided: false,
    dist: Infinity,
  };
}

function reflect(direction, normal) {
  let normalLength = dot(direction, normal) * 2;
  return sub(direction, mul(normal, normalLength));
}

function mag([x, y, z]) {
  return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
}

function mul([x, y, z], s) {
  return [x * s, y * s, z * s];
}

function mulParts([a, b, c], [x, y, z]) {
  return [a * x, b * y, c * z];
}

function add([a, b, c], [x, y, z]) {
  return [a + x, b + y, c + z];
}

function sub(v, w) {
  return add(v, mul(w, -1));
}

function dot([a, b, c], [x, y, z]) {
  return a * x + b * y + c * z;
}

function normalize(v) {
  let magnitude = mag(v);
  return mul(v, 1 / magnitude);
}
