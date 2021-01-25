
"use strict";


let hexagon1 = document.getElementById('hexagon1');
let hexagon3 = document.getElementById('hexagon3');
let hexagon4 = document.getElementById('hexagon4');
let hexagon5 = document.getElementById('hexagon5');
let hexagon1Block = document.getElementById('hexBlock1');
let hexagon2Block = document.getElementById('hexBlock2');
let hexagon3Block = document.getElementById('hexBlock2');
let hexagon4Block = document.getElementById('hexBlock4');
let hexagon5Block = document.getElementById('hexBlock5');
let hexagon1Tittle = document.getElementById('hexTittle1');
let hexagon2Tittle = document.getElementById('hexTittle2');
let hexagon3Tittle = document.getElementById('hexTittle3');
let hexagon4Tittle = document.getElementById('hexTittle4');
let hexagon5Tittle = document.getElementById('hexTittle5');


function hoverHexagon1() {
    hexagon1.style.background = "white";
    hexagon1.style.transition = "0.5s";
    hexagon1Block.style.background = "black";
    hexagon1Block.style.borderColor = "white";
    hexagon1Block.style.transition = "1.3s";
    hexagon1Tittle.style.color = "white";
    hexagon1Tittle.style.transition = "0.5s";
}

function onhoverHexagon1() {
    hexagon1.style.background = "#111";
    hexagon1.style.transition = "1s";
    hexagon1Block.style.background = "white";
    hexagon1Block.style.borderColor = "grey";
    hexagon1Tittle.style.color = "black";
}

function hoverHexagon2() {
    hexagon2Block.style.transition = "0.6s";
    hexagon2Block.style.background = "red";
    hexagon2Block.style.borderColor = "black";
    hexagon2Tittle.style.textShadow = "5px 10px 1px black";
    hexagon2Tittle.style.color = "whitesmoke";
}

function onhoverHexagon2() {
    hexagon2Block.style.transition = "0.8s";
    hexagon2Block.style.background = "black";
    hexagon2Block.style.borderColor = "grey";
    hexagon2Tittle.style.color = "white";
    hexagon2Tittle.style.textShadow = "none";
}

function hoverHexagon3() {
    hexagon3.style.background = "white";
    hexagon3.style.transition = "0.5s";
    hexagon3Block.style.background = "black";
    hexagon3Block.style.transition = "0.5s";
    hexagon3Tittle.style.color = "white";
    hexagon3Tittle.style.transition = "0.5s";
    if(hexagon2Block.style.background == "black") {
        hexagon2Tittle.style.color = "white";
    }
}

function onhoverHexagon3() {
    hexagon3.style.background = "#111";
    hexagon3.style.transition = "1s";
    hexagon3Block.style.background = "white";
    hexagon3Block.style.transition = "1.5s";
    hexagon3Tittle.style.color = "black";
    hexagon3Tittle.style.transition = "2s";
    if(hexagon2Block.style.background == "white" && hexagon2Tittle.style.color == "white") {
        hexagon2Tittle.style.color = "black";
    }
}

function hoverHexagon4() {
    hexagon4.style.background = "white";
    hexagon4.style.transition = "0.5s";
    hexagon4Block.style.background = "black";
    hexagon4Block.style.transition = "0.5s";
    hexagon4Tittle.style.color = "white";
    hexagon4Tittle.style.transition = "0.5s";
}

function onhoverHexagon4() {
    hexagon4.style.background = "#111";
    hexagon4.style.transition = "1s";
    hexagon4Block.style.background = "white";
    hexagon4Block.style.transition = "1.5s";
    hexagon4Tittle.style.color = "black";
    hexagon4Tittle.style.transition = "2s";
}

function hoverHexagon5() {
    hexagon5.style.background = "white";
    hexagon5.style.transition = "0.5s";
    hexagon5Block.style.background = "black";
    hexagon5Block.style.transition = "0.5s";
    hexagon5Tittle.style.color = "white";
    hexagon5Tittle.style.transition = "0.5s";
}

function onhoverHexagon5() {
    hexagon5.style.background = "#111";
    hexagon5.style.transition = "1s";
    hexagon5Block.style.background = "white";
    hexagon5Block.style.transition = "1.5s";
    hexagon5Tittle.style.color = "black";
    hexagon5Tittle.style.transition = "2s";
}

