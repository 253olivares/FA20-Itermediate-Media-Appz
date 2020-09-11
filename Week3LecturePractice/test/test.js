
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
        this.car.Miles = this.car.Miles - 5;
        console.log(this.car.Miles);
    }
}

let myCar = new car(200,"red");
let myMechanic = new Mechanic(myCar);
myMechanic.repair();
