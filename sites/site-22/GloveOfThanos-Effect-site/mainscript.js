
"use strict";

const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
const section = document.querySelector('section');
let time = 14000;

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        const block = document.createElement('div')
        block.classList.add('blocks');
        const up = 10 * j;
        const left = 10 * i;
        const bottom = 90 - 10 * j;
        const right = 90 - 10 * i;
        block.style.clipPath = `inset(${up}% ${left}% ${bottom}% ${right}%)`;
        const duration = Math.random() * 5;
        block.style.animationDuration = 2 + duration + 's';
        block.style.animationDelay = duration + 's';
        banner.append(block);
    }
}

setTimeout(() =>{
    section.classList.add('active');
} , time);

setTimeout(() => {
    location.reload();
}, time + 7000)
