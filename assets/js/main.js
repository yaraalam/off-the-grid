// main.js
let divs = document.querySelectorAll(".grid-container div");

document.addEventListener("click", function() {
    let rotation = randomNumber(10, 40);
    document.body.style.transform = `rotate(${rotation}deg)`;
    randomize();
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomize() {
    divs.forEach(function(div) {
        let scale = randomFloat(0.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        div.style.transform = 
            `scale(${scale}) 
             translate(${translateX}%, ${translateY}%) 
             rotate(${rotate}deg)`;
    });

    console.log(divs.length, "randomize!");
}

function square(num) {
    return num * num;
}

console.log(square(2));
console.log(square(10));