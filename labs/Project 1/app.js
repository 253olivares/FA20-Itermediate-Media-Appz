/* Miguel Olivares
Tic Tac Toe project 1 
Oct 30
Travis Fass class
*/
/* tween max animation code that is used at the start to create load in animation*/
TweenMax.from("#header",{duration: 4, alpha:0});
TweenMax.from("#game",{duration: 4, alpha:0, y:400});
TweenMax.to("#players",{duration: 0, alpha:0});
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
        this.spaces = document.getElementsByClassName("space");
        this.turn = 1;
    }
    startGame(){
    /* this is animation that is payed when starting the game*/
        TweenMax.to("#GameDisplay", {duration: .5, css:{ display: 'none'}});
        TweenMax.to("#svgStyle", {duration: .5, css: { opacity: 1, filter:"none" }});
        document.getElementById("turnNumb").innerHTML = this.turn;
    }
    loadPlayers(x, o){
        TweenMax.to("#players",{duration: 1, alpha:1});
        document.getElementById("P1Name").innerHTML = x.name;
        document.getElementById("P2Name").innerHTML = o.name;
        document.getElementById("P1").style.width = "300px";
    }
    round(event){
        if (this.turn % 2 === 0){
            document.getElementById("P2").style.width = "275px";
            event.target.setAttribute("selected", "O");
            console.log(event.target.getAttribute("selected"));
            TweenMax.to(event.target,{duration: 0, css:{fill:'#66ccff'}});
            document.getElementById("P1").style.width = "300px";
        } else{
            document.getElementById("P1").style.width = "275px";
            event.target.setAttribute("selected", "X");
            console.log(event.target.getAttribute("selected"));
            TweenMax.to(event.target,{duration: 0, css:{fill:'#ff3333'}});
            document.getElementById("P2").style.width = "300px";
        }
        this.turn++;
        document.getElementById("turnNumb").innerHTML = this.turn;
        game.checkWin();
    }
    checkWin(){
        if (this.turn == 10){
            document.getElementById("P2").style.width = "275px";
            document.getElementById("result").innerHTML ="Game is a tie no one has won!";
            document.getElementById("svgStyle").style.opacity=".25";
            document.getElementById("svgStyle").style.filter="blur(5px)";
            document.getElementById("winner").style.display="block";
            TweenMax.to("#winner",{duration: 2, alpha:1});

        } else {
            if (this.spaces[0].getAttribute("selected") == "X" && this.spaces[1].getAttribute("selected") == "X" && this.spaces[2].getAttribute("selected") == "X" || 
                this.spaces[3].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[5].getAttribute("selected") == "X" ||
                this.spaces[6].getAttribute("selected") == "X" && this.spaces[7].getAttribute("selected") == "X" && this.spaces[8].getAttribute("selected") == "X"){
                    player1Win();
            } else if (this.spaces[0].getAttribute("selected") == "O" && this.spaces[1].getAttribute("selected") == "O" && this.spaces[2].getAttribute("selected") == "O" || 
                this.spaces[3].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[5].getAttribute("selected") == "O" ||
                this.spaces[6].getAttribute("selected") == "O" && this.spaces[7].getAttribute("selected") == "O" && this.spaces[8].getAttribute("selected") == "O") {
                    player2Win();
            } else if (this.spaces[0].getAttribute("selected") == "X" && this.spaces[3].getAttribute("selected") == "X" && this.spaces[6].getAttribute("selected") == "X" ||
                this.spaces[1].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[7].getAttribute("selected") == "X" ||
                this.spaces[2].getAttribute("selected") == "X" && this.spaces[5].getAttribute("selected") == "X" && this.spaces[8].getAttribute("selected") == "X" ){
                    player1Win();
            } else if (this.spaces[0].getAttribute("selected") == "O" && this.spaces[3].getAttribute("selected") == "O" && this.spaces[6].getAttribute("selected") == "O" || 
                this.spaces[1].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[7].getAttribute("selected") == "O" ||
                this.spaces[2].getAttribute("selected") == "O" && this.spaces[5].getAttribute("selected") == "O" && this.spaces[8].getAttribute("selected") == "O"){
                    player2Win();
            }else if (this.spaces[0].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[8].getAttribute("selected") == "X" ||
                this.spaces[6].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[2].getAttribute("selected") == "X" ){
                    player1Win();
            } else if (this.spaces[0].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[8].getAttribute("selected") == "O" ||
                this.spaces[6].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[2].getAttribute("selected") == "O" ){
                    player2Win();
            }
        }
    }
    
    animateBoard(){
        for (var i = 0; i < this.spaces.length; i++) {
            this.spaces[i].addEventListener('mouseover', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'#cccccc'}});
                    console.log("test");
                }
            }, false);
            this.spaces[i].addEventListener('mouseout', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'white'}});
                }
            }, false);
            this.spaces[i].addEventListener('mousedown', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'#333333'}});
                    game.round(event);
                }
            }, false);
            this.spaces[i].addEventListener('mouseup', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'#cccccc'}});
                }
            }, false);
        }   
    }
}

class player  {
    constructor($n, $p){
        this.name  = $n;
        this.piece = $p;
    }
    win(){
        document.getElementById("P2").style.width = "275px";
        document.getElementById("P1").style.width = "275px";
        document.getElementById("svgStyle").style.opacity=".25";
        document.getElementById("svgStyle").style.filter="blur(5px)";
        document.getElementById("winnerName").innerHTML = this.name;
        document.getElementById("winner").style.display="block";
        TweenMax.to("#winner",{duration: 2, alpha:1});
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
var player1;
var player2;
function begin(){
    if (document.getElementById("firstName").value.trim().length == 0 && document.getElementById("secondName").value.trim().length == 0){
        player1 = new x("Player 1");
        player2 = new o("Player 2");
    } else if (document.getElementById("firstName").value.trim().length == 0 && !document.getElementById("secondName").value.trim().length == 0){
        player1 = new x("Player 1");
        player2 = new o(document.getElementById("secondName").value);
    } else if (!document.getElementById("firstName").value.trim().length == 0 && document.getElementById("secondName").value.trim().length == 0){
        player1 = new x(document.getElementById("firstName").value);
        player2 = new o("Player 2");
    } else{
        player1 = new x(document.getElementById("firstName").value);
        player2 = new o(document.getElementById("secondName").value);
    }
    game.startGame();
    game.animateBoard();
    game.loadPlayers(player1, player2);
}
function player1Win(){
    player1.win();
}
function player2Win(){
    player2.win();
}
