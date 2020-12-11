"use strict";

let tittleFooter = document.getElementById("footer-tittle");
let gitimgLink = document.getElementById("gitImg");
let isTFvis = false;

window.addEventListener('scroll', function() {
    tittleFooter.style.transition = '3.5s';
    tittleFooter.style.transform = 'translateX(-0%)';
    isTFvis = true;
    function visGitImg() {
    gitimgLink.style.transition = '2.5s';
    gitimgLink.style.visibility = 'visible';
    gitimgLink.style.transform = 'translateX(240%)';
    } 
    if(isTFvis == true) {
    setTimeout(visGitImg,3500);
}
});