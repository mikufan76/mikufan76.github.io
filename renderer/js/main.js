import { Application, Assets, Container, Sprite } from "./pixi.mjs";
import * as sceneData from "./shapes.js";
const width = 500;
const height = 300;

(async () => {
  // Create a new application
  const app = new Application();
  await app.init({ width, height, background: "#4599f3" });

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);


  // Create and add a container to the stage
  const container = new Container();

  app.stage.addChild(container);
})();
