import 'babylonjs-loaders'
import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh, SceneLoader} from "babylonjs";


var canvas: any = document.getElementById("renderCanvas");
var engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
  const scene: Scene = new Scene(engine);

  const camera: ArcRotateCamera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0,0,0), scene);
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);

  // const box = MeshBuilder.CreateBox("box", {}, scene);
  // box.position = new Vector3(1,1,1)
  //const music = new BABYLON.Sound("cello", "sounds/cellolong.wav", scene, null, { loop: true, autoplay: true });
  SceneLoader.ImportMesh("hm", "./models/", "Bobbin.stl", scene)

  return scene;
}



var scene: Scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});