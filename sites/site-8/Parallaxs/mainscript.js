
"use strict";

const rightbox = document.getElementById("right");
const leftbox = document.getElementById("left");

rightbox.addEventListener('mousemove', () => {
    rightbox.style.width = '75vw';
})

rightbox.addEventListener('mouseleave', () => {
    rightbox.style.width = '50vw';
})

leftbox.addEventListener('mousemove', () => {
    leftbox.style.width = '75vw';
})

leftbox.addEventListener('mouseleave', () => {
    leftbox.style.width = '50vw';
})