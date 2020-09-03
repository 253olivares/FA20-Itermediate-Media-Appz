class Circle{
    constructor(cx, cy, radius, color){
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    update(){
        this.y = this.y + this.speed;
        this.speed = this.speed + .2;
        this.y++
        circle( this.x, this.y,this.radius);
    }
}

var myCircle = new Circle(100, 10, 100, [166,214,222]);
console.log(myCircle);
function setup(){
    createCanvas(windowWidth, windowHeight);                                                                                                                                                                            
}
function draw() {
    background(34, 32, 79);

    myCircle.update();

}