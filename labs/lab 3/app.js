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
    //fucntion that puts div html in the slection menu for the vending machine
    render(){
        return`
        <div class="select">${this.snicker} <span>${this.sStock}</span></div>
        <div class="select">${this.mm} <span>${this.mStock}</span></div>
        <div class="select">${this.lays} <span>${this.lStock}</span></div>
        `;
    }
    //function for buying snickers will check to see if snicker stock is 0 or above and inform the user if the vending machine is currently out of stock
    buyS(){
        if (this.sStock <= 0){ 
            //displays message saying we are out of stock
            document.getElementById("stock").innerHTML = "I'm sorry but we dont have " + this.snicker;
        }else{
            //if stock ios not 0 or bellow then it subracts 1
            this.sStock --;
        }
    }
    //function for M&M's the performs the same tasks as the snickers purchase function checks for stocks and then takes away if above 0
    buyM(){
        if (this.mStock <= 0){
            document.getElementById("stock").innerHTML = "I'm sorry but we dont have " + this.mm;
        }else{
            this.mStock --;
        }
    }
    //function for Lays chips checks to see if stick is above 0 and takes away if it is
    buyL(){
        if (this.lStock <= 0){
            document.getElementById("stock").innerHTML = "I'm sorry but we dont have " + this.lays;
        }else{
            this.lStock --;
        }
    }

}
// create objects by calling the class
let vend = new vendingMachines;
//displays class for debugging reasons to make sure its being made correctly
console.log(vend);
//create a selection variable so I dont have to repeat document get element evertime I render
let selection = document.getElementById("selection");
//I render the div html code created in the class       
selection.innerHTML = vend.render();
// buy function that is going to be triggered everytime a button is pressed
function Buy(){
    // goes through and checks to see matching id to that of the button if it matches then it executes the if stament
    //the if statment runs the render code and displays slection contents of snicker and stock so that it updates with the new value
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
