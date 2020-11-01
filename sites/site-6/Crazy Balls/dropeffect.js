
"use strict";

let images = [
    'url("https://picsum.photos/600/600?random=1")',
    'url("https://picsum.photos/600/600?random=2")',
    'url("https://picsum.photos/600/600?random=3")',
    'url("https://picsum.photos/600/600?random=4")',
    'url("https://picsum.photos/600/600?random=5")',
    'url("https://picsum.photos/600/600?random=6")'
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
