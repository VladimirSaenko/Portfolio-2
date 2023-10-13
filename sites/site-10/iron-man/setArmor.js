// "use strict";

let ironman = document.getElementById("ironman");

ironman.src = `images/ironman/armors/mark${getRandomInt(1, 4)}.png`;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
