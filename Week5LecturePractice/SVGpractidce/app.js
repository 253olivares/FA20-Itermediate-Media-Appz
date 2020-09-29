let example = document.getElementsByClassName("example");

example.addEventListener("click", move);
function move() {
    example.setAttribute("x", 300);
    example.setAttribute("y", 600);
  } 