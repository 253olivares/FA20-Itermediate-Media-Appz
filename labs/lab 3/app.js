//Miguel Oivares
//N320
//Templates

//Vending machine need to store properties for candies
//creating class
class vendingMachines {
    constructor(){
        //creating properties for each candy and give a random stock number
        this.snicker = "Snickers";
        this.mm = "M&M's";
        this.lays = "Lays Classics"
        this.sStock = Math.floor((Math.random() * 20) + 1);
        this.mStock = Math.floor((Math.random() * 20) + 1);
        this.lStock = Math.floor((Math.random() * 20) + 1);
    }
    render(){
        return`
        <div class="select">${this.snicker} <span>${this.sStock}</span></div>
        <div class="select">${this.mm} <span>${this.mStock}</span></div>
        <div class="select">${this.lays} <span>${this.lStock}</span></div>
        `;
    }

    buyS(){
        if (this.sStock <= 0){ 
            document.getElementById("stock").innerHTML = "I'm sorry but we dont have " + this.snicker;
        }else{
            this.sStock --;
        }
    }

    buyM(){
        if (this.mStock <= 0){
            document.getElementById("stock").innerHTML = "I'm sorry but we dont have " + this.mm;
        }else{
            this.mStock --;
        }
    }

    buyL(){
        if (this.lStock <= 0){
            document.getElementById("stock").innerHTML = "I'm sorry but we dont have " + this.lays;
        }else{
            this.lStock --;
        }
    }

}

let vend = new vendingMachines;

console.log(vend);

let selection = document.getElementById("selection");

selection.innerHTML = vend.render();

function Buy(){
    if(event.target.id == "Snickers"){
        vend.buyS();
        selection.innerHTML = vend.render();
    } else if (event.target.id == "M&M"){
        vend.buyM();
        selection.innerHTML = vend.render();
    } else if (event.target.id == "Lays"){
        vend.buyL();
        selection.innerHTML = vend.render();
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
    rect(0,0,225,60);
    rect(0,60,125,50);
    triangle(225,0,255,0,225,60 );
    triangle(125,60,160,60,125,110 );
    fill(255,255,255);
    textSize(32);
    text("Templates Lab", 10, 40);
}
