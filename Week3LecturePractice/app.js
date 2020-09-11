//Abstraction
class addition{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    addNumbs(){
        return this.x + this.y; 
    }
}

let numbs2add = new addition(3,5);
console.log(numbs2add.addNumbs());

// Encapsulation 
class Monitor{
    constructor(n, AWU, ARGB){
        this.nits = n;
        this.AvgWattUsage = AWU;
        this.AdobeRGBCoverage = ARGB;
    }
    ShowMInfo(){
        console.log("Monitors peek brightness is" + this.nits);
        console.log("On Average this monitor uses" + this.AvgWattUsage + " per second.");
        console.log("This Monitor has a total RGB coverage of "+ this.AdobeRGBCoverage+ "%");
    }
}
        //both classes have seperate properties and methods that are encapulated to make sure they dont interfer with one another
class TV {
    constructor(s, n, r){
        this.nits = n;
        this.size = s;
        this.resolution = r;
    }
    ShowTVInfo(){
        console.log("This TV's peek brightness is" + this.nits);
        console.log("This Tv is" + this.size);
        console.log("This this TV has a resolution of "+ this.resolution);
    }
}

//Inheritance
class animal {
    constructor(s){
        this.species = s
    }
}
class dog extends animal{
    constructor(BF){
        this.BarkingFrequency = BF;
    }
}
class cat extends animal{
    constructor(CS){
        this.clawSize = CS;
    }
}

//poly morphism 
class animal {
    constructor(s){
        this.species = s
    }
}
class dog extends animal{
    constructor(BF){
        this.BarkingFrequency = BF;
        this.color = brown;
    }
}
    //both classes are a extensio of animal sharing species but also share the property color with diffrent values with dogs being brown
    //and cats being black
class cat extends animal{
    constructor(CS){
        this.clawSize = CS;
        this.color = black;
    }
}


//Types of relations

//Association

class boy{
    constructor(n, h, w){
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    drink(Soda){
        Soda.consume(this);
    }
}

class Soda{
    consume(child){
        console.log(child.name + " has just drank Soda")
    }
}
let kid1 = new boy (David, 5, 165);
let drank = new Soda();

kid1.drink;


//Aggregation

class chair {

    showInfo(){
        let height = 0;
        let legnumb = 0
        if(this.chairLegs != null){
            height = this.chairLegs.height;
            legnumb = this.chairLegs.legNumb;
        }
        console.log("this chairs legs are " + height + " inches tall and has " +legNumb+ " legs")
    }
}
class chairLegs{
    constructor(height,LN){
        this.height = height;
        this.legNumb = LN;
    }
}
var C = new chair();
var L = new chairLegs(12, 4);
C.chairLegs = L;
C.showInfo();


//Composition

class candybox{
    constructor(l, w, h, c, candy){
        this.length = l;
        this.width = w;
        this.height = h;
        this.color = c;
        this.candy = candy;
    }

    listCandy() {
        console.log(this.candy);
        this.candy.array.forEach(candy => {
            console.log("this chocloate is "+ candy.filling);
        });
    }
}
class treat{
    constructor(filling){
        this.type = "chocolate";
        this.filling = filling;

    }
}

var candies = [];
candies[0] = new treat ("carmel");
candies[1] = new treat ("no fillinf");
candies[2] = new treat ("hazelnut");
var ChocolateBox = new candybox(12,12,3,brown,candies);

ChocolateBox.listCandy();



//linking classes by invoking another method


class car {
    constructor(Miles,color){
        this.Miles = Miles;
        this.color = color;
    }
    tellInfo(){
        console.log("The car has been driven for " + this.Miles +" Miles.");
    }
}

class Mechanic{
    constructor(car){
        this.car = car;
    }
    repair(){
        this.car.tellInfo();
        console.log("Mechanic has just tooking a look at the car and will now reduce its Miles by 5");
        this.car.Miles --;
    }
}

let myCar = new car(200,"red");
let myMechanic = new Mechanic(myCar);
myMechanic.repair();
