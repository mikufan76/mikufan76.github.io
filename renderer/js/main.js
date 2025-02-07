import { Application, Assets, Container, Sprite } from "./pixi.mjs";
import * as sceneData from "./shapes.js";
import { Camera, Sphere } from "./objects.js"
const width = 500;
const height = 300;
const bg = [62, 144, 235];

(async () => {
  // Create a new application
  const app = new Application();
  await app.init({ width, height });

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);


  // Create and add a container to the stage
  const container = new Container();
  const camera = new Camera([-8.829, 3.680, 9.392], [-5.73, -3.14, -0.31], [1, 1, 1], [0, 0, 0], [0, 1, 0], width, height, app.stage, bg);
  camera.drawBackground()
  const sphereOne = new Sphere([-8.902, 3.851, 3.401], [0, 0, 0], [2, 2, 2])
  camera.objects.push(sphereOne)
  camera.transformAllObjects()

})();


