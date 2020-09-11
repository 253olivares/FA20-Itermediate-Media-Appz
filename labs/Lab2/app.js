//Miguel Oivares
//N320
//Inheriting Instruments

//this is copy pasted from previous lab to create a return link to the main page
function setup(){
    createCanvas(window.innerWidth, windowHeight);  
    //This is all just code to create a button and remove its css so that I can put a gon back link to the main page
    //will have more of these in later labs
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