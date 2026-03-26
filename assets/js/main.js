// main.js

let rotation = 0;
document.addEventListener("click", function() {
    let min = 10;
    let max = 40;
    rotation += Math.floor(Math.random() * (max - min + 1)) + min;
    document.body.style.transform = `rotate(${rotation}deg)`;
});