
TweenMax.from("#container",{duration: 4, alpha:0, x:500});

let test = document.getElementsByClassName("Box");
console.log(test);

for (var i = 0; i < test.length; i++) {
    test[i].addEventListener('mouseover', function(event){
        TweenMax.to(event.target,{duration: 1, scale:1.25});
    }, false);

    test[i].addEventListener('mouseout', function(event){
        TweenMax.to(event.target,{duration: 1, scale:1});
    }, false);
    
    test[i].addEventListener('click', function(event){
        TweenMax.to(event.target,{duration: 3, alpha:0 , scale:.5 });
    }, false);
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
    rect(0,0,225,60);
    rect(0,60,125,50);
    triangle(225,0,255,0,225,60 );
    triangle(125,60,160,60,125,110 );
    fill(255,255,255);
    textSize(32);
    text("Animation Lab", 10, 40);
}w