
"use strict";

window.onload = function() {
let cursor = document.getElementById('cursor');
window.onmousemove = function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    }
}
    
let freeSpaceW = window.innerWidth;
let freeSpaceH = window.innerHeight;
let body = document.body;
let row = '<div class = "stringOrRow ">';

while(freeSpaceW > 0) {
    row += '<div class="hexagon"></div>';
    freeSpaceW -= 102;
}

row += '</div>';
        
while(freeSpaceH > 0) {
    body.innerHTML += row;
    freeSpaceH -= 80;
}

// let cursor = document.getElementById('cursor');
// window.onmousemove = function(e) {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// }
