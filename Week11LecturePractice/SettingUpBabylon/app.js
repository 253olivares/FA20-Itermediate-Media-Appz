var canvas = document.getElementById('myCanvas');

var engine =  new BABYLON.Engine(canvas, true);
var camera

function createScene () {
    var scene =  new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera("Camera". Math.PI/ 2, Math.PI/4,4,BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(0, -0.5,1.0), scene);

    var ground = BABYLON.MeshBuilder.CreateGround("ground",{height:4, width: 4, subdivisions: 4}, scene);
    return scene;
}