
"use strict";

let side1 = document.getElementById('side1');
window.addEventListener('scroll', function() {
    side1.style.left = -window.pageYOffset + 'px';
});

let side2 = document.getElementById('side2');
window.addEventListener('scroll', function() {
    side2.style.left = window.pageYOffset + 'px';
});
