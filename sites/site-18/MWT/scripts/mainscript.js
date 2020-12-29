"use scrpit";

let userLim = document.getElementById('limit');
const hiddenResultForm = document.getElementById('forma');
let resultText = document.getElementById('resultext');
let randomColor1 = document.getElementById('color1');
let randomColor2 = document.getElementById('color2');
let colorcost1 = getRandomInt(0,100);
let colorcost2 = getRandomInt(0,100);
let taxcost1 = getRandomInt(0,100);
let taxcost2 = getRandomInt(0,100);
let way1 = colorcost1 + taxcost1; 
let way2 = colorcost2 + taxcost2; 
let closeButton = document.getElementById('close');
let resultColor = document.querySelector('.resultColor');
let secondResultColor = document.querySelector('.secondResultColor');
let resultcolorText = document.querySelector('.resultColor-text');


function calculateMinimalWay() {
 if(userLim.value > way1 && userLim.value > way2) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    resultText.textContent = "Ваш лимит позволяет вам воспользоваться обеями путями";
    resultcolorText.textContent = "Оба цвета";
    resultColor.style.background = randomColor1.style.background;
    resultColor.style.left = '50%';
    secondResultColor.style.background = randomColor2.style.background;
 }

 if(way1 < way2 && userLim.value >= way1 && userLim.value < way2) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    resultText.textContent = "Первый путь за " + way1 + " до магазина с краской- " + randomColor1.style.background +
    " самый минимальный для вашего лимита";
    resultcolorText.textContent = "Первый цвет";
    resultColor.style.background = randomColor1.style.background;
    resultColor.style.left = '46.5%';
    secondResultColor.style.visibility = 'hidden';
 }

 if(way2 < way1 && userLim.value >= way2 && userLim.value < way1) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    resultText.textContent = "Второй путь за " + way2 + " до магазина с краской- " + randomColor2.style.background +  
    "; самый минимальный для вашего лимита";
    resultcolorText.textContent = "Второй цвет";
    resultColor.style.background = randomColor2.style.background;
    resultColor.style.left = '46.5%';
    secondResultColor.style.visibility = 'hidden';
 }

 if(userLim.value < way1 && userLim.value < way2 || userLim.value == 0) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    resultText.textContent = 'Ваш лимит очень маленький, увеличьте его';
 }

}


function getRandomColors() {
    randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
}


function ifEqualyColors() {
    if(randomColor1.style.background == randomColor2.style.background) {
        randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    }
}


function getRandomColor1() {
    randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
}


function getRandomColor2() {
    randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function closeResultForm() {
    hiddenResultForm.style.visibility = 'hidden';
    closeButton.style.visibility = 'hidden';
    closeButton.style.transition = '0s';
}



getRandomColors();
ifEqualyColors();