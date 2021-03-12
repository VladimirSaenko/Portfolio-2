
"use strict";

let tittle = document.getElementById('tittle');
let slideImage = document.getElementById('slide-image');
let loremtext = document.getElementById('lorem');
let calltittle = document.getElementById('calltittle');

function lifestyleText() {
    tittle.innerHTML = "Lifestyle";
    slideImage.src = "img/two_girls_image.png";
    loremtext.style.visibility = "visible";
    calltittle.style.visibility = "hidden";
    if(window.matchMedia("max-width:600px")) {
        tittle.style.fontSize = "45px";
        tittle.style.letterSpacing = "3px";
    }
}

function photodiaryText() {
    tittle.innerHTML = "Photodiary";
    slideImage.src = "img/coffe_image.png";
    loremtext.style.visibility = "visible";
    calltittle.style.visibility = "hidden";
    if(window.matchMedia("max-width:600px")) {
        tittle.style.fontSize = "40px";
        tittle.style.letterSpacing = "2px";
    }
}

function musicText() {
    tittle.innerHTML = "Music";
    slideImage.src = "img/girl_image.png";
    loremtext.style.visibility = "visible";
    calltittle.style.visibility = "hidden";
    if(window.matchMedia("max-width:600px")) {
        tittle.style.fontSize = "55px";
        tittle.style.letterSpacing = "5px";
    }
}

function travelText() {
    tittle.innerHTML = "Travel";
    slideImage.src = "img/image_dorogi_v_Russia.png";
    loremtext.style.visibility = "visible";
    calltittle.style.visibility = "hidden";
    if(window.matchMedia("max-width:600px")) {
        tittle.style.fontSize = "65px";
        tittle.style.letterSpacing = "5px";
    }
}