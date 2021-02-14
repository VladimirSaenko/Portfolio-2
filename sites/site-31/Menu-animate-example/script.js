
"use strict";

function toggleMenu() {
    const menuToggle = document.querySelector(".menuToggle");
    // menuToggle.classList.add('active');
    menuToggle.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    // navigation.classList.add('active');
    navigation.classList.toggle('active');
    const tittle = document.querySelector('.tittle');
    tittle.classList.toggle('active');
}

let menuItems = document.getElementsByClassName('menu-item');

for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].onmouseout = () => {
        document.getElementById('slide').src = 'images/black.jpg';
    }
    menuItems[i].onmouseenter = () => {
        document.getElementById('slide').src = `images/img${i+1}.jpg`;
    }
}
