
"use strict";

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let tittleFooter = document.getElementById("footer-tittle");
let gitimgLink = document.getElementById("gitImg");
let isTFvis = false;

window.addEventListener('scroll', function() {
    tittleFooter.style.transition = '3.5s';
    tittleFooter.style.transform = 'translateX(-0%)';
    isTFvis = true;
    function visGitImg() {
        gitimgLink.style.transition = '3.5';
        gitimgLink.style.visibility = 'visible';
        gitimgLink.style.transform = 'translateX(240%)';
    } 
    if(isTFvis == true) {
        setTimeout(visGitImg,3500);
    }
});

window.addEventListener('scroll',function() {
    let value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = value * 0.5 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value + 'px';
});
