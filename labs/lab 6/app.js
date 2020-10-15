//Miguel Oivares
//N320
//Vue Lab
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
    rect(0,0,210,60);
    rect(0,60,125,50);
    triangle(210,0,240,0,210,60 );
    triangle(125,60,160,60,125,110 );
    fill(255,255,255);
    textSize(32);
    text("Intro Vue Lab", 10, 40);
}

//Orignal attempted scrapped and had to start over becuase I couldnt figure out how to 
//apply v if to only the second book to make is hide I dont understand how to do it if
// its being put through an array  


// // create book component
// Vue.component("book-view",{
//     props: ["book"],
//     template: "<div style='width:300px; height:400px; background-color:#cc6600; text-align:center; margin-left:auto; margin-right:auto;' v-if='test'>  <h1 style= 'padding-top:50px;'> {{ book.name }} </h1> <p> {{ book.emoji }} </p> <p> {{ book.author }} </p> </div>"
// });

// //create data for Vue   
// let app = new Vue({
//     el: "#app",
//     data: {
//         test:true,
//         books: [
//             { id: 0, name: "Made In Abyss", emoji: "🗿", author: "Akihito Tsukushi"},
//             { id: 1, name: "Fire Force", emoji: "🧑‍🚒", author: "Atsushi Ōkubo"},
//         ]
//     },
// })


//ATTEMPT 2
//component for book 1 (I HAVE to keep them seperate I attempted to display them throught one
//but was unable to due to the button that needs to display the second box I was uable to
//get the v -if to work through template and only display on the second book and not the first.)
Vue.component ("book1-view", {
    props: ["book"],
    template:"<div style='width:300px; height:400px; background-color:#66ff66; text-align:center; margin-left:auto; margin-right:auto;'>  <h1 style= 'padding-top:35px;'> {{ book.name }} </h1> <p style='font-size:70px;'> {{ book.emoji }} </p> <p> {{ book.author }} </p> </div>"
})
//creating sepperate components to be able to hide one and display it on button click.
Vue.component ("book2-view", {
    props: ["book"],
    template:"<div style='width:300px; height:400px; background-color:#ff6666; text-align:center; margin-left:auto; margin-right:auto;'>  <h1 style= 'padding-top:35px;'> {{ book.name }} </h1> <p style='font-size:70px;'> {{ book.emoji }} </p> <p> {{ book.author }} </p> </div>"
})


//data for vue
let app = new Vue({
    //calling upon the element
    el:"#app",
    data: {
        see:false,
        //created two arrays to help display inforamtion of the books ina way that was easy and clean to read
        book1: [{ id: 0, name: "Made In Abyss", emoji: "🗿", author: "Akihito Tsukushi"}],
        book2: [{ id: 1, name: "Fire Force", emoji: "🧑‍🚒", author: "Atsushi Ōkubo"}]
    },
    //fucntions for my code
    methods: {
        //function that we are calling in our button to change the value of our see
        showBook: function () {
            //if statments to help hide and show the book witht he conditions are meet. 
            if (this.see == false){
                this.see = true;
                document.getElementById("butto").innerHTML="Hide Book 2";
            } else if (this.see == true){
                this.see = false;
                document.getElementById("butto").innerHTML="Show Book 2";
            }
        }
    }
})