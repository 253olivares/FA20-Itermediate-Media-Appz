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
//class for the game board that will grab and store all the boxes in a array from 0 - 8
class gameBoard {
    constructor(){
        //stores data for our object class this data being turn and spaces
        this.spaces = document.getElementsByClassName("space");
        this.turn = 1;
    }
    //method to begin the game by loading in names
    startGame(){
    /* this is animation that is payed when starting the game*/
        TweenMax.to("#GameDisplay", {duration: .5, css:{ display: 'none'}});
        TweenMax.to("#svgStyle", {duration: .5, css: { opacity: 1, filter:"none" }});
        document.getElementById("turnNumb").innerHTML = this.turn;
    }
    //load players method that fills in name in the players area
    loadPlayers(x, o){
        TweenMax.to("#players",{duration: 1, alpha:1});
        document.getElementById("P1Name").innerHTML = x.name;
        document.getElementById("P2Name").innerHTML = o.name;
        document.getElementById("P1").style.width = "300px";
    }
    //round method that will create animations for the board showing whose turn it is and filling in squares
    round(event){
        // this checks for which player turn it is based on turn number
        if (this.turn % 2 === 0){
            // player 2 turn
            document.getElementById("P2").style.width = "275px";
            event.target.setAttribute("selected", "O");
            console.log(event.target.getAttribute("selected"));
            TweenMax.to(event.target,{duration: 0, css:{fill:'#66ccff'}});
            document.getElementById("P1").style.width = "300px";
        } else{
            //player 1 turn
            document.getElementById("P1").style.width = "275px";
            event.target.setAttribute("selected", "X");
            console.log(event.target.getAttribute("selected"));
            TweenMax.to(event.target,{duration: 0, css:{fill:'#ff3333'}});
            document.getElementById("P2").style.width = "300px";
        }
        //this loops by adding a turn and updating the turn counter and runs method to check win
        this.turn++;
        document.getElementById("turnNumb").innerHTML = this.turn;
        game.checkWin();
    }
    // check win method that looks through our array and looks for win conditions for X and O by searching stored attribute
    checkWin(){
        if (this.turn == 10){
            //this ends game once players reach 10 turns meaning they can go anymore and have to restart saying it is a tie
            document.getElementById("P2").style.width = "275px";
            document.getElementById("result").innerHTML ="Game is a tie no one has won!";
            document.getElementById("svgStyle").style.opacity=".25";
            document.getElementById("svgStyle").style.filter="blur(5px)";
            document.getElementById("winner").style.display="block";
            TweenMax.to("#winner",{duration: 2, alpha:1});

        } else {
            //checks for 3 accross for X
            if (this.spaces[0].getAttribute("selected") == "X" && this.spaces[1].getAttribute("selected") == "X" && this.spaces[2].getAttribute("selected") == "X" || 
                this.spaces[3].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[5].getAttribute("selected") == "X" ||
                this.spaces[6].getAttribute("selected") == "X" && this.spaces[7].getAttribute("selected") == "X" && this.spaces[8].getAttribute("selected") == "X"){
                    player1Win();
            }
            //checks for 3 accross for O 
            else if (this.spaces[0].getAttribute("selected") == "O" && this.spaces[1].getAttribute("selected") == "O" && this.spaces[2].getAttribute("selected") == "O" || 
                this.spaces[3].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[5].getAttribute("selected") == "O" ||
                this.spaces[6].getAttribute("selected") == "O" && this.spaces[7].getAttribute("selected") == "O" && this.spaces[8].getAttribute("selected") == "O") {
                    player2Win();
            }
            //checks for 3 match up and down for X
            else if (this.spaces[0].getAttribute("selected") == "X" && this.spaces[3].getAttribute("selected") == "X" && this.spaces[6].getAttribute("selected") == "X" ||
                this.spaces[1].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[7].getAttribute("selected") == "X" ||
                this.spaces[2].getAttribute("selected") == "X" && this.spaces[5].getAttribute("selected") == "X" && this.spaces[8].getAttribute("selected") == "X" ){
                    player1Win();
            }
            //checks for 3 match up and down for O 
            else if (this.spaces[0].getAttribute("selected") == "O" && this.spaces[3].getAttribute("selected") == "O" && this.spaces[6].getAttribute("selected") == "O" || 
                this.spaces[1].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[7].getAttribute("selected") == "O" ||
                this.spaces[2].getAttribute("selected") == "O" && this.spaces[5].getAttribute("selected") == "O" && this.spaces[8].getAttribute("selected") == "O"){
                    player2Win();
            }
            //checks for 3 diagonal for X
            else if (this.spaces[0].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[8].getAttribute("selected") == "X" ||
                this.spaces[6].getAttribute("selected") == "X" && this.spaces[4].getAttribute("selected") == "X" && this.spaces[2].getAttribute("selected") == "X" ){
                    player1Win();
            } 
            //checks for 3 diagonal for O
            else if (this.spaces[0].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[8].getAttribute("selected") == "O" ||
                this.spaces[6].getAttribute("selected") == "O" && this.spaces[4].getAttribute("selected") == "O" && this.spaces[2].getAttribute("selected") == "O" ){
                    player2Win();
            }
        }
    }
    //method that animates the board  by adding a event listers that animates mouse hovers and click to give feedback to user
    animateBoard(){
        //loops through and addes event listener to all the squares
        for (var i = 0; i < this.spaces.length; i++) {
            //even listener to fill square on hover making it give response when putting the mouse over
            this.spaces[i].addEventListener('mouseover', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'#cccccc'}});
                    console.log("test");
                }
            }, false);
            //even listener to fill square back to orginal color when u remove the mouse
            this.spaces[i].addEventListener('mouseout', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'white'}});
                }
            }, false);
            //even listener to fill square back to orginal color when u remove the mouse
            this.spaces[i].addEventListener('mousedown', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'#333333'}});
                    game.round(event);
                }
            }, false);
            //event listerner that fills square when I lift my mouse so it doesnt stay that dark
            this.spaces[i].addEventListener('mouseup', function(event){
                if (event.target.getAttribute("selected") == 0){
                    TweenMax.to(event.target,{duration: 0, css:{fill:'#cccccc'}});
                }
            }, false);
        }   
    }
}
//player class that will house our player information
class player  {
    //grabs player info that we throw into it
    constructor($n, $p){
        this.name  = $n;
        this.piece = $p;
    }
    //win method that we call when a player meets win condition
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

//class extension that records which player is x and which player is O
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

//creats our board 
let game = new gameBoard;
//create playewr var
var player1;
var player2;


//this is our function that will begin game 
function begin(){
    //this checks to make sure our values are filled in the input and throws player name into the class if value length is not 0 after trim (We trim to make sure and check players are not just putting spaces)
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
    //plays our methods described above
    game.startGame();
    game.animateBoard();
    game.loadPlayers(player1, player2);
}
//function to call our player win method. 
function player1Win(){
    player1.win();
}
function player2Win(){
    player2.win();
}
