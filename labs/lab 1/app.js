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
    constructor(rx, ry, color){
        this.x = rx;
        this.y = ry;
        this.length = random(10, 20);
        this.width = random(3, 5);
        this.color = 255,255,255;
        // this.speed = 1 + Math.random() * 2;
    }

    update(){
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.width, this.length);
        this.y = this.y + 6;
        // this.y = this.y + this.speed;
        // this.speed = this.speed + .1;
        // this.y++
        if (this.y > window.innerHeight * .925){
            //sends rain drop back above off screen with reset values
            this.y = random(0, -3000);
            this.length = random(10, 20);
            this.width = random(3, 5);
            rainCount++;
            //orginally located in ground update but moved here when noticed that color would change furing mulitple frames if the counter did not change
            //now that its moved here it will only change when the coounter goes up so it would only change the color once
            if (rainCount % 10 == 0){
                rectGreen = rectGreen + 5;
                console.log(rectGreen);
            }
            // console.log(rainCount);
            // this.speed = 1 + Math.random() * 2;
        }
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
    }

    update(){
        fill('rgb(0%,'+ rectGreen +'%, 0%)');
        rect(this.xRect, this.yRect, this.width, this.height);
        if (rectGreen > 100){
            textAlign(CENTER, CENTER);
            fill(255,255,255);
            textSize(40);
            text("Grass fully fertilized", window.innerWidth *.5, window.innerHeight * .95);
            textAlign(LEFT,BASELINE);
        }
        // if (rainCount > 0){
        //     console.log("working");
        //     if(rainCount % 100 == 0){
        //         this.green = this.green + 5;
        //         console.log(this.green);
        //     }
        // }
        // if (this.green == 100){}
        }
}

//debugging
// console.log("Current screen height is " + window.innerHeight);
// console.log("Current screen width is " + window.innerWidth)

//creating rain array to store dropplets
var rain =[];
//this keeps track of the number of drops that have touched the ground
var rainCount = 0;
var rectGreen = 5;
var ground = new Ground(0 , window.innerHeight * .9, window.innerWidth, window.innerHeight * .1);


function setup(){
    createCanvas(window.innerWidth, windowHeight);  
    //Creating rain and putting it in array
    //I am giving all the rain random x anmd y's out side the canvas so that 
    //it appears to be falling all at random moments instead of all the rain spawning at once and just falling
    for (i = 0; i < 200; i++) {
        rain[i] = new Rain(random(50,window.innerWidth - 50), random(0, -3000));
      }    // console.log("This is the rain array that is created     " + rain + "     all this rain exists outside of canvas at start");


}

function draw() {
    //sky blue rgb
    background(142, 188, 212);
    ground.update();
    //testing ellipse to determine shape of rain
    // ellipse(30, 30, 3, 15);
    for (i = 0; i < rain.length; i++) {
        rain[i].update();
      }
    fill(102, 102, 102);
    rect(0,0,290,60);
    triangle(290,0,325,0,290,60 );
    fill(255,255,255);
    textSize(32);
    text("Ground Rain Lab 1", 10, 40);
    text(rainCount, 10, 100);
}