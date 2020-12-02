var canvas =  document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var camera, scene, ball, light, physicsPlugin, ground, timeoutId, particleSystem;

scene = createScene();
engine.runRenderLoop(function(){
    scene.render();   
})

scene.registerAfterRender(function() {
    if(ball.intersectsMesh(goal, false)){
        
        goal.position.x = (Math.random()* 8 ) -4;

        //play a particle burst
        particleSystem.manualEmitCount = 21;
        particleSystem.start();

        particleSystem.minEmitBox = ball.position;
        particleSystem.minEmitBox = ball.position;
        //put ball back.    
        restBall();
    }
})

function createScene() {

    var scene = new BABYLON.Scene(engine);
    //setup
    camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0,0,-30), scene);
    light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -.2, .2), scene);
    //physics
    gravityVector = BABYLON.Vector3(0, -9.81, 0);
    physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);

    ball = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(
        ball, BABYLON.PhysicsImpostor.SphereImpostor,
        { mass: 1, restitution: .2}, scene
    );
    ball.tag = "ball";

    ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 20, width: 20, subdivisions: 4}, scene);
    
    ground.position.y = -3;
    ground.position.z = 8;
    
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
        ground, BABYLON.PhysicsImpostor.BoxImpostor,
        {mass:0, restitution: .9}, scene
    );
    
    //make the goal
    goal = new BABYLON.MeshBuilder.CreateBox("goal", {height: 5, width:5}, scene);
    goal.position.z = 8;
    goal.position.x = (Math.random()* 8) - 4;

    particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.emitter = new BABYLON.Vector3(0,0,0);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.addVelocityGradient(0,2);

    particleSystem.particleTexture = new BABYLON.Texture("texture/Wicke.png", scene)

    return scene;
}

function restBall(){
    ball.position = new BABYLON.Vector3();

    ball.physicsImpostor.setLinearVelocity( new BABYLON.Vector3() );
    ball.physicsImpostor.setAngularVelocity(  new BABYLON.Vector3() );

    clearTimeout ( timeourId );

}

window.addEventListener("click", function(){
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    if(selectedObject){
        
        if(selectedObject.tag =='ball'){
            var surfaceNormal = pickResult.getNormal(true);
            var forceDirection = surfaceNormal.scale(-1000);

            selectedObject.physicsImpostor.applyForce(

            forceDirection,
            selectedObject.getAbsolutePosition()
            )
        
            timeourId = setTimeout(restBall, 3000);
        }
    }    
})