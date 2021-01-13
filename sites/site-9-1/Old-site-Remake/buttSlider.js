
"use strict";

function lifestyleText() {
    document.getElementById('tittle').innerHTML = "Lifestyle";
    document.getElementById('image').src = "img/two_girls_image.png";
    document.getElementById('lorem').style.visibility = "visible";
    document.getElementById('calltittle').style.visibility = "hidden";
    if(window.matchMedia("max-width:600px")) {
        document.getElementById('tittle').style.fontSize = "75px";
    }
}

function photodiaryText() {
    document.getElementById('tittle').innerHTML = "Photodiary";
    document.getElementById('image').src = "img/coffe_image.png";
    document.getElementById('lorem').style.visibility = "visible";
    document.getElementById('calltittle').style.visibility = "hidden";
    if(window.matchMedia("max-width:600px")) {
        document.getElementById('tittle').style.fontSize = "60px";
    }
}

function musicText() {
    document.getElementById('tittle').innerHTML = "Music";
    document.getElementById('image').src = "img/girl_image.png";
    document.getElementById('lorem').style.visibility = "visible";
    document.getElementById('calltittle').style.visibility = "hidden";
}

function travelText() {
    document.getElementById('tittle').innerHTML = "Travel";
    document.getElementById('image').src = "img/image_dorogi_v_Russia.png";
    document.getElementById('lorem').style.visibility = "visible";
    document.getElementById('calltittle').style.visibility = "hidden";
}
