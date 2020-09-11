//Miguel Oivares
//N320
//Inheriting Instruments

//this is copy pasted from previous lab to create a return link to the main page
function setup(){
    createCanvas(window.innerWidth, windowHeight);  
    //This is all just code to create a button and remove its css so that I can put a gon back link to the main page
    //will have more of these in later labs
    let button = createButton('Go Back');
    button.position(10, 70);
    button.style('font-size', '25px');
    button.style('background', 'none');
    button.style('border','none');
    button.style('color','white');
    button.style('cursor','pointer');
    button.mouseClicked(goBack);
    //this is just to link back to main page
    function goBack(){
        window.open('../../index.html', '_self');
    }

}
function draw(){
    //copy pasted from previous lab to create go back link and title of this lab
    noStroke();
    fill(102, 102, 102);
    rect(0,0,415,60);
    rect(0,60,125,50);
    triangle(415,0,450,0,415,60 );
    triangle(125,60,160,60,125,110 );
    fill(255,255,255);
    textSize(32);
    text("Inheriting Instruments Lab 2", 10, 40);
}


//GOAL: explore and employ object oriented principles
//3 parts of this lab
    //Making a base abstract class
    //making concrete classes
    //testing those classes

//making a base class
//creat instrument class
console.log('Formating 4 assignment:"{{ family }} {{ verb }} at {{ loudness }}"');
class instrument{
    //properties required for the lab
    constructor(l,f,pv){
        this.loundness = l;
        this.family = f;
        this.playVerb = pv;
    }
    play(){
        console.log("{{"+ this.family +"}} {{"+ this.playVerb+"}} at {{"+this.loundness+"}} loudness");
    }
}
//Making Concrete classes
class woodwind extends instrument{
    constructor(l){
        super(l,"Woodwinds","blew");
    }
}

class percussion extends instrument{
    constructor(l){
        super(l,"Percusion","baned");
    }
}

class stringed extends instrument{
    constructor(l){
        super(l,"Stringed","strung");
    }
}

// testing your code
//making isntances of each child and put in array
let testArray = [];
testArray[0] = new woodwind ("Very Loud");
testArray[1]  = new percussion ("Not so Loud");
testArray[2] = new stringed ("Moderate");

testArray.forEach((test) =>{
    test.play();
});
