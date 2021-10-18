
"use strict";

let images = [
    'url("https://picsum.photos/600/600?random=1")',
    'url("https://picsum.photos/600/600?random=2")',
    'url("https://picsum.photos/600/600?random=3")',
    'url("https://picsum.photos/600/600?random=4")',
    'url("https://picsum.photos/600/600?random=5")',
    'url("https://picsum.photos/600/600?random=6")',
    'url("https://picsum.photos/600/600?random=7")',
    'url("https://picsum.photos/600/600?random=8")',
    'url("https://picsum.photos/600/600?random=9")',
    'url("https://picsum.photos/600/600?random=10")',
    'url("https://picsum.photos/600/600?random=11")',
    'url("https://picsum.photos/600/600?random=12")',
    'url("https://picsum.photos/600/600?random=13")',
    'url("https://picsum.photos/600/600?random=14")',
    'url("https://picsum.photos/600/600?random=15")',
    'url("https://picsum.photos/600/600?random=16")',
    'url("https://picsum.photos/600/600?random=17")',
    'url("https://picsum.photos/600/600?random=18")',
    'url("https://picsum.photos/600/600?random=19")',
    'url("https://picsum.photos/600/600?random=20")',
    'url("https://picsum.photos/600/600?random=21")',
    'url("https://picsum.photos/600/600?random=22")',
    'url("https://picsum.photos/600/600?random=23")',
    'url("https://picsum.photos/600/600?random=24")',
    'url("https://picsum.photos/600/600?random=25")',
    'url("https://picsum.photos/600/600?random=26")'
];

function crazyBalls_Images() {
    let section = document.querySelector('section');
    let ball = document.createElement('span');
    ball.style.left = Math.random() * innerWidth + 'px';
    ball.style.top = Math.random() * innerHeight + 'px';
    let bg = images[Math.floor(Math.random() * images.length)];
    let sizeBall = Math.random() * 200;
    ball.style.width = sizeBall + 'px';
    ball.style.height = sizeBall + 'px';
    ball.style.backgroundImage = bg;
    section.appendChild(ball);
    setTimeout( () => {
        ball.remove();
    }, 6000);
}

setInterval(crazyBalls_Images,50);
