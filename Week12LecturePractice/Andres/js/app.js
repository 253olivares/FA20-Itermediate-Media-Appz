var canvas = document.getElementById('render');

var engine = new BABYLON.Engine(canvas,true);
var camera, ground,light, mat,sphere,sphere2, mat2;

var scene =  createScene();
//render loop
engine.runRenderLoop(function() {
    mat.diffuseTexture.uOffset += .002;
    mat2.diffuseTexture.uOffset -= .002;
    scene.render();
});

function createScene (){
    var scene =  new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 5, BABYLON.Vector3.Zero(), scene);    
    camera.attachControl(canvas, true);

    ground = BABYLON.MeshBuilder.CreateGround("ground", {height:8, width:8, subdivisions:4}, scene);

    sphere =  BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    sphere.position.y = 2;
    sphere.position.z = 2;
    sphere2 =  BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    sphere2.position.y = 2;
    sphere2.position.z = -2;

    mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("img/Andrew.png", scene);
    mat2 = new BABYLON.StandardMaterial("base", scene);
    mat2.diffuseTexture = new BABYLON.Texture("img/Obama.png", scene);

    sphere.material = mat;
    sphere2.material = mat2;

    mat.diffuseTexture.vScale = -1.0;
    mat2.diffuseTexture.vScale = -1.0;   
    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);


    return scene;
}