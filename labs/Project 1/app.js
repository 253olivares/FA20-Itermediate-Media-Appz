/* Miguel Olivares
Tic Tac Toe project 1 
Oct 30
Travis Fass class
*/
/* tween max animation code that is used at the start to create load in animation*/
TweenMax.from("#header",{duration: 4, alpha:0});
TweenMax.from("#game",{duration: 4, alpha:0, y:400});
/* P5 code used to display name of page in top left and create a link that taks back to the main page*/
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
/* P5 code used to display name of page in top left and create a link that taks back to the main page*/
function draw(){
    //copy pasted from previous lab to create go back link and title of this lab
    noStroke();
    fill(102, 102, 102);
    rect(0,0,315,60);
    rect(0,60,125,50);
    triangle(315,0,345,0,315,60 );
    triangle(125,60,160,60,125,110);
    fill(255,255,255);
    textSize(32);
    text("Board Game Project", 10, 40);
}

class gameBoard {
    constructor(){
    }
    startGame(){
    /* this is animation that is payed when starting the game*/
        TweenMax.to("#GameDisplay", {duration: .5, css:{ display: 'none'}});
        TweenMax.to("#svgStyle", {duration: .5, css: { opacity: 1, filter:"none" }});
        this.turn = 1;
    }
    animateBoard(){
        let test = document.getElementsByClassName("space");
        
        for (var i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', function(event){
        TweenMax.to(event.target,{duration: 0, css:{fill:'#cccccc'}});
        console.log("test");
        }, false);
        test[i].addEventListener('mouseout', function(event){
        TweenMax.to(event.target,{duration: 0, css:{fill:'white'}});
        }, false);
    
        test[i].addEventListener('mousedown', function(event){
        TweenMax.to(event.target,{duration: 0, css:{fill:'#333333'}});
        }, false);
        test[i].addEventListener('mouseup', function(event){
        TweenMax.to(event.target,{duration: 0, css:{fill:'#cccccc'}});
        }, false);
        }   
    }
    reset(){
        this.turn = 1;
    }
}

class player {
    constructor($n, $p){
        this.name  = $n;
        this.piece = $p;
    }
    score(){

    }
}

class x extends player {
    constructor($n){
        super($n, "X");
    }
}

class o extends player {
    constructor($n){
        super($n, "O");
    }
}
let game = new gameBoard;

function begin(){
    game.startGame();
    game.animateBoard();
}
