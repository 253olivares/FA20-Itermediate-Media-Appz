var game = {
    image:'coverart.jpg',
    name:"Super Mario Sunshine",
    publisher:"Nintendo",
    release:"2002",
    rating:"5/5"
}

let template = `
<img class="gameImage" src="${game.image}">
<div class="name">${game.name}</div>
<div class="publisher">${game.publisher}</div>
<div class="day_released">${game.release}</div>
<div class="gameRating">${game.rating}</div>
`;


let newDiv = document.createElement("div");
newDiv.innerHTML = template;
document.body.appendChild(newDiv);

// var template = document.getElementById("gameListing");
// var cloneTemp = template.content.clonenode(true);
// cloneTemp.querySelector(".gameImage").setAttribute("src",game.image);
// cloneTemp.querySelector(".name").innerHTML = game.name;
// cloneTemp.querySelector(".publisher").innerHTML = game.publisher;
// cloneTemp.querySelector(".day_released").innerHTML = game.release;
// cloneTemp.querySelector(".gameRating").innerHTML = game.rating;
// document.body.appendChild(cloneTemp);
