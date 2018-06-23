function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


var button = document.createElement("button");
button.id = "button";
button.innerHTML = "Click me!";
document.body.appendChild(button);

button.addEventListener("click", printRandomColor);


function printRandomColor() {
  document.body.style.backgroundColor = getRandomColor();
}