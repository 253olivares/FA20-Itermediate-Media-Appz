// let getSVG = document.getElementsByClassName("svgLine");
var getSVG = document.getElementsByClassName("svgLine");

document.addEventListener("click", changeColor);

function changeColor(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    //I barrowed this code from https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
    var i;
    for (i=0; i<getSVG.length; i++){
        getSVG[i].style.fill = randomColor;
    }
    
}


function setup(){
    let cnv = createCanvas(500, 130);
    cnv.position(0,0);
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
    rect(0,0,420,60);
    rect(0,60,125,50);
    triangle(420,0,450,0,420,60 );
    triangle(125,60,160,60,125,110 );
    fill(255,255,255);
    textSize(32);
    text("Board Game Deconstruction", 10, 40);
}