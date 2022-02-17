
"use strict";

let black = document.querySelector('.black');
window.onmousemove = function(e) {
    let x = e.clientX;
    black.style.left = x + 'px';
}
