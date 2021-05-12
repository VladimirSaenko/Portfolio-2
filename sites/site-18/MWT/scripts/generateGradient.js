
"use strict"

let mainsection = document.getElementById("mainsection");
mainsection.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
',' + getRandomInt(0,255) + ')' + ')';

setInterval(function() {
    mainsection.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
},1500)