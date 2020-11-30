var canvas = document.getElementById('renderCamera');

var engine =  new BABYLON.Engine(canvas, true);
var camera, mat, ground;
var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();

var scene = createScene();


engine.runRenderLoop(function() {
    // mat.diffuseTexture.uOffset += .008;
    scene.render();
});

window.addEventListener("click", function () {
    var pickResult =  scene.pick(scene.pointerX, scene.pointerY);
    var pushDir = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;
    pushDir = pushDir.scale(1000)
    pickResult.pickedMesh.physicsImpostor.applyForce(pushDir, pickResult.pickedMesh.getAbsolutePosition());
});

function createScene (){
    //create scene spcace
    var scene =  new BABYLON.Scene(engine);
    scene.enablePhysics(gravityVector, physicsPlugin);
    //add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);    
    camera.attachControl(canvas, true);

    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:1}, scene);
    sphere.position.y = 2;
    ground = BABYLON.MeshBuilder.CreateGround("ground", {height:10, width:10, subdivisions:4}, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.9}, scene);

    ground.physicsImpostor.friction = 10;
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass:1, restitution:.9 }, scene);
    sphere.physicsImpostor.physicsBody.linearDamping = .6;
    sphere.physicsImpostor.physicsBody.angularDamping = .5;
    sphere.friction = 2;

    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
    mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("andres/img/Obama.png", scene);

    mat.diffuseTexture.uOffset = .5;
    mat.diffuseTexture.vScale = -1.0;
    
    sphere.physicsImpostor.applyForce(
        new BABYLON.Vector3(0,0,2000),
        sphere.getAbsolutePosition()
    );

    sphere.material = mat;

    return scene;
}