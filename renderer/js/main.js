import { Application, Assets, Container, Sprite } from "./pixi.mjs";
import * as sceneData from "./shapes.js";
import { Camera } from "./objects.js"
const width = 500;
const height = 300;
const bg = "#3e90eb";

(async () => {
  // Create a new application
  const app = new Application();
  await app.init({ width, height });

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);


  // Create and add a container to the stage
  const container = new Container();
  const camera = new Camera(0,0,0,0,0,width, height, app.stage);
  camera.drawBackground(bg)

})();
