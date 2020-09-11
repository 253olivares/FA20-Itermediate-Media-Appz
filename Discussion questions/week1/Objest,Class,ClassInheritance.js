//objects
//properties color, weight, species, favfood, name
//Methods feed, hop
var rabbit = {
    color: 'gray',
    weight: '.88 pounds',
    species: 'Mini Lop',
    favFood: 'carrot',
    name: 'Henry',
    feed: function() {
        console.log('Henry has just eaten a small carrot :)!');
    },
    hop: function() {
        console.log("Henry has just jumped 3 feet in the air!");
    },
}

rabbit.feed();
rabbit.hop();

//classes
//constructors set the information of the object we want to make
//by grabbing the information we send
//here I am using the first letter of each just to make it easy for me. 
class rabbits {
    constructor(c, w, s, f, n ){
        this.color = c;
        this.weight = w;
        this.species = s;
        this.favFood = f;
        this.name = n;
    }
    feed() {
        console.log( this.name + ' has just eaten a small carrot :)!');
    }
    hop() {
        console.log( this.name +" has just jumped 3 feet in the air!");
    }
}

let Rabnbit1 = new rabbits  ('white', '1 pound', 'American Rabbit', 'Walnuts', 'David');
Rabnbit1.feed();
Rabnbit1.hop();

//Classes inheritance
class animal {
    constructor(ac, n, c, w,){
        this.animalClass = ac;
        this.name = n;
        this.color = c;
        this.weight = w;
    }
}
 class dog extends animal {
    constructor (ac, n, c, w){
        super(ac, n, c, w);
        this.species = "Cat";
    }
    bork() {
        console.log (this.name +" has borked!");
    }
 }
 class cat extends animal {
    constructor (ac, n, c, w){
        super(ac, n, c, w);
        this.species = "Dog";
    }
    Meow() {
        console.log (this.name +" cat has meowed!")
    }
 }
 class rabbits2 extends animal {
    constructor (ac, n, c, w){
        super(ac, n, c, w);
        this.species = "Rabbit";
    }
    hop() {
        console.log( this.name +" has just jumped 3 feet in the air!");
    }
 }
 let dog1 = new dog ('Mammal','chiqueto','brown', '5 pounds');
 let cat1 = new cat ('Mammal','mona','gray', '2 pounds');
 let rabbit2 = new rabbits2 ('Mammal','jacob','white','1 pound');

 dog1.bork();
 cat1.Meow();
 rabbit2.hop();