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

// Orignal attempted scrapped and had to start over becuase I couldnt figure out how to 
// apply v if to only the second book to make is hide I dont understand how to do it if
// its being put through an array  


// create book component
Vue.component("book-view",{
    props: ["book"],
    //template code to create the books 
    template: `<div style = \"margin-left:auto; margin-right:auto;\" v-if=\"book.display\">
                <div style=\"width:300px; height:380px;background-color:#ff8c1a;  border-radius: 15px 0px 0px 0px; text-align:center;\">
                    <h1 style= 'padding-top:35px;'>
                        {{ book.name }} 
                    </h1>
                    <p style='font-size:70px;'> 
                        {{ book.emoji }} 
                    </p> 
                    <p> 
                        {{ book.author }} 
                    </p> 
                </div> 
                <div style='position:absolute;height:30px; width:300px;background-color:#ff8c1a;'></div>
                <div style='position:absolute;width:300px; background-color:#cc6600; height:45px; display:block; border-radius: 15px 0px 0px 15px;'>
                    <div style='width:270px; margin-left:20px;background-color:#f2f2f2; height:30px; display:block;'>
                        <div style='width:50px;height:10px; display:block;'>
                        </div>
                        <div style='width:100px;height:2px; background-color: #cccccc; display:block;'>
                        </div>
                        <div style='width:50px;height:5px; display:block;'>
                        </div>
                        <div style=' float:right; width:10px; height:2px; background-color: #cccccc; display:block;'>
                        </div>
                        <div style='width:50px;height:5px; display:block;'>
                        </div>
                        <div style='width:20px;height:2px; background-color: #cccccc; display:block;'>
                        </div>
                        <div style=' margin-left:125px; width:75px; height:2px; background-color: #cccccc; display:block;'>
                        </div>
                    </div>
                </div>
               </div>`
});

//create data for Vue   
let app = new Vue({
    el: "#app",
    data: {
        test:true,
        //arrays to hold my book inforation
        books: [
            { id: 0, name: "Made In Abyss", emoji: "🗿", author: "Akihito Tsukushi", display: true},
            { id: 1, name: "Fire Force", emoji: "🧑‍🚒", author: "Atsushi Ōkubo", display: false},
        ]
    },
    //methods functions that we are calling 
    methods: {
        //onclick show book function will cahnge display value in the array to hide and show the second book
        showBook: function() {
            if(this.books[1].display == false){
                this.books[1].display = true;
                document.getElementById("butto").innerHTML="Hide Book 2";
            } else if (this.books[1].display == true){
                this.books[1].display = false;
                document.getElementById("butto").innerHTML="Show Book 2";
            }
        }
    }
})