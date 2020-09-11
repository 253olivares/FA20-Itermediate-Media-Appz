class Water{
    constructor(){
        this.amount = 100;
    }
    drain(){
        this.amount -=5;
        console.log("Water drained, new amount: " + this.amount)
    }
}


class Cloud{
    constructor(water){
        this.water = water;
        this.size = 10;
    }

    grow(){
        this.water.drain();
        this.size ++;
        console.log("cloud grew to: "+this.size);
    }
}

let someWater = new Water();
let someCloud = new Cloud(someWater);
someCloud.grow();
someCloud.grow();
someCloud.grow();
someCloud.grow();