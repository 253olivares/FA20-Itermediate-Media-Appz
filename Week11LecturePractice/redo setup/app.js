var canvas = document.getElementById("renderCamera");

var engine =  new BABYLON.Engine(canvas, true);
var camera, scene, sphere, light;
var t = 0;

scene = createScene();

engine.runRenderLoop(function () {
    t+= 0.03;
    light.intensity = 1 + Math.sin(t);
    scene.render();
});

function createScene() {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    
    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:.7}, scene);
    // //add light to the scene
    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);
    light.specular = new BABYLON.Color3(0, 0, 0);
    light.groundColor = new BABYLON.Color3(0, 1, 0);
    // var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -0.5, 1.0), scene);
    var lesserSphere = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter:.2}, scene);
    lesserSphere.position.x = 1;
    lesserSphere.position.y = 2;
    sphere.position.y = 2;
    // //add ground to the scene
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height:8, width:8, subdivisions:4}, scene);

    return scene;
};

