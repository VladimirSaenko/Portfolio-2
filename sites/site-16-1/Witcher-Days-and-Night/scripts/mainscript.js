
"use strict";

const scene = document.getElementById('scene');
const witcher = document.getElementById('geralt-of-Rivia');
let rightSide =document.getElementById('right');
let leftSide = document.getElementById('left');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let horseRoach = document.getElementById('horse');
let partisanEwok = document.getElementById('bear');
let monster = document.getElementById('leshyi');
let raven1 = document.getElementById('raven-1');
let raven2 = document.getElementById('raven-2');
let raven3 = document.getElementById('raven-3');
document.getElementById('forestDay').play();


function toggle() {
    sun.style.visibility = 'hidden';
    sun.style.transition = '0s';
    horseRoach.style.visibility = 'hidden';
    horseRoach.style.transition = '0s';
    partisanEwok.style.visibility = 'hidden';
    partisanEwok.style.transition = '0s';
    raven1.style.visibility = 'visible';
    raven1.style.transition = '1.5s';
    raven2.style.visibility = 'visible';
    raven2.style.transition = '1.5s';
    raven3.style.visibility = 'visible';
    raven3.style.transition = '1.5s';
    moon.style.visibility = 'visible';
    moon.style.transition = '0.5s';
    monster.style.visibility = 'visible';
    monster.style.transition = '1.5s';
    witcher.style.visibility = 'visible';
    witcher.style.transition = '2s';
    scene.style.background = 'linear-gradient(#111425,#131d57)';
    document.getElementById('forestDay').pause();
    document.getElementById('forestNight').play();

}

function retoggle() {
    sun.style.visibility = 'visible';
    sun.style.transition = '1.5s';
    horseRoach.style.visibility = 'visible';
    horseRoach.style.transition = '1.5s';
    partisanEwok.style.visibility = 'visible';
    partisanEwok.style.transition = '1s';
    raven1.style.visibility = 'hidden';
    raven1.style.transition = '0s';
    raven2.style.visibility = 'hidden';
    raven2.style.transition = '0s';
    raven3.style.visibility = 'hidden';
    raven3.style.transition = '0s';
    moon.style.visibility = 'hidden';
    moon.style.transition = '0s';
    monster.style.visibility = 'hidden';
    monster.style.transition = '0s';
    witcher.style.visibility = 'hidden';
    witcher.style.transition = '0s';
    scene.style.background = 'url(img/forest.jpg)';
    scene.style.backgroundSize = 'cover';
    scene.style.backgroundAttachment = 'fixed';
    scene.style.backgroundPosition = 'center';
    scene.style.backgroundRepeat = 'no-repeat';
    document.getElementById('forestNight').pause();
    document.getElementById('forestDay').play();
}

function changeItemLeft() {
    sun.style.left = '555px';
    horseRoach.style.left = '45vh';
    partisanEwok.style.bottom = '-75px';
}

function changeItemRight() {
    sun.style.left = '175px';
    horseRoach.style.left = '100vh';
    partisanEwok.style.bottom = '-250px';

}

function changeItemLeftNight() {
    raven1.style.left = '20%';
    raven2.style.left = '15%';
    raven3.style.left = '30%';
    monster.style.left = '135vh';
    moon.style.left = '75px';
    witcher.style.left = '0';
}

function changeItemRightNight() {
    witcher.style.left = '45vh';
    monster.style.left = '125vh';
    moon.style.left = '775px';
    raven1.style.left = '55%';
    raven2.style.left = '45%';
    raven3.style.left = '60%';
}


horseRoach.addEventListener('click',function(){
    document.getElementById('goRoach').play();
})

raven1.addEventListener('click',function(){
    document.getElementById('ravens').play();
})

raven2.addEventListener('click',function(){
    document.getElementById('ravens').play();
})

raven3.addEventListener('click',function(){
    document.getElementById('ravens').play();
})


