//Miguel Oivares
//N320
//Ground Rain

//create application with classes for rain drops
//managa class for drops
// or array
//Classes are to be instantiated and used to run a simulation of something that looks like rain


//Class to create
//manage drops of rain or makes instainces and save them in a array


class Rain{
    constructor(rx, ry, radius, color){
        this.x = rx;
        this.y = ry;
        this.length = 15;
        this.radius = 0;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    update(){
        this.y = this.y + this.speed;
        this.speed = this.speed + .2;
        this.y++
        circle( this.x, this.y,this.radius);
    }
}

//this is the ground class that will be created and updateed every cycle
// it will collect the number of drops that are created change the blue for every 10 drops.

class Ground{
    constructor(x, y, w, h){
        this.width = w;
        this.height = h;
        this.xRect = x;
        this.yRect = y;
        this.blue = 5;
        this.dropCount = 20;
    }

    update(){
        rect(this.xRect, this.yRect, this.width, this.height);
        fill('rgb(0%,0%,'+ this. blue +'%)');
        }
}

console.log("Current screen height is " + window.innerHeight);
console.log("Current screen width is " + window.innerWidth)

var ground = new Ground(0 , window.innerHeight * .9, window.innerWidth, window.innerHeight * .1);


function setup(){
    createCanvas(windowWidth, windowHeight);  

}
function draw() {
    background(208, 211, 212);
    ground.update();
    ellipse(30, 30, 3, 15);
}