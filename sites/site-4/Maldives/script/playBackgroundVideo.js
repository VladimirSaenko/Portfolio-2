
"use strict";

let backvideo = document.getElementById('backvideo');
let playbtn = document.getElementById('playbtn');
let icon = document.getElementById('icon');
let buttonText = document.getElementById('buttonText');

playbtn.onclick = function () {
    backvideo.style.display = "block";
    if(backvideo.paused) {
        backvideo.play();
        icon.src = "images/play.png";
        buttonText.innerHTML = "Play";
    }
    else {
        backvideo.pause();
        icon.src = "images/pause.png";
        buttonText.innerHTML = "Pause";
    }
}
