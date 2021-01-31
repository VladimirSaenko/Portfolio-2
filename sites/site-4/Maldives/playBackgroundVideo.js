
"use strict"

let backvideo = document.getElementById('backvideo');
let playbtn = document.getElementById('playbtn');
let icon = document.getElementById('icon');

playbtn.onclick = function () {
backvideo.style.display = "block";

if(backvideo.paused) {
    backvideo.play();
    icon.src = "/images/play.png";
    }
    else {
    backvideo.pause();
    icon.src = "/images/play.png";
    }
} 

