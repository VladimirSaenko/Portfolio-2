
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
let rgbColorText1 = document.getElementById('rgbColorText-1');
let rgbColorText2 = document.getElementById('rgbColorText-2');

hiddenResultForm.style.visibility = 'hidden';
// rgbColorText1.style.visibility = 'visible';
// rgbColorText2.style.visibility = 'visible';


function calculateMinimalWay() {
 if(userLim.value > way1 && userLim.value > way2) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    resultText.textContent = "Ваш лимит позволяет вам воспользоваться обеями путями";
    resultcolorText.textContent = "Оба цвета";
    resultcolorText.style.visibility = 'visible';
    resultColor.style.background = randomColor1.style.background;
    resultColor.style.left = '50%';
    resultColor.style.visibility = "visible";
    secondResultColor.style.visibility = "visible";
    secondResultColor.style.background = randomColor2.style.background;
 }

 if(way1 < way2 && userLim.value >= way1 && userLim.value < way2) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    let wayColor1 = randomColor1.style.background;
    resultText.textContent = "Первый путь за " + way1 + " до магазина с краской- " + wayColor1 +
    " самый минимальный для вашего лимита";
    resultcolorText.style.visibility = "visible";
    resultcolorText.textContent = "Первый цвет";
    resultColor.style.background = randomColor1.style.background;
    resultColor.style.left = '46.5%';
    resultColor.style.visibility = 'visible';
    secondResultColor.style.visibility = 'hidden';
 }

 if(way2 < way1 && userLim.value >= way2 && userLim.value < way1) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    let wayColor2 = randomColor2.style.background;
    resultText.textContent = "Второй путь за " + way2 + " до магазина с краской- " + wayColor2 +  
    "; самый минимальный для вашего лимита";
    resultcolorText.textContent = "Второй цвет";
    resultcolorText.style.visibility = "visible";
    resultColor.style.background = randomColor2.style.background;
    resultColor.style.left = '46.5%';
    resultColor.style.visibility = 'visible';
    secondResultColor.style.visibility = 'hidden';
 }

 if(userLim.value < way1 && userLim.value < way2 || userLim.value == 0) {
    hiddenResultForm.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
    resultText.textContent = 'Ваш лимит очень маленький';
    resultColor.style.visibility = 'hidden';
    secondResultColor.style.visibility = 'hidden';
    resultcolorText.style.visibility = 'hidden';
 }

}

function getRandomColors() {
    randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    rgbColorText1.textContent = randomColor1.style.background;
    rgbColorText1.style.color = randomColor1.style.background;
    rgbColorText2.textContent = randomColor2.style.background;
    rgbColorText2.style.color = randomColor2.style.background;
}

function ifEqualyColors() {
    if(randomColor1.style.background == randomColor2.style.background) {
        randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        rgbColorText1.textContent = randomColor1.style.background;
        rgbColorText1.style.color = randomColor1.style.background;
        rgbColorText2.textContent = randomColor2.style.background;
        rgbColorText2.style.color = randomColor2.style.background;
    }
}

function getRandomColor1() {
    randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    rgbColorText1.textContent = randomColor1.style.background;
    rgbColorText1.style.color = randomColor1.style.background;
}

function getRandomColor2() {
    randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    rgbColorText2.textContent = randomColor2.style.background;
    rgbColorText2.style.color = randomColor2.style.background;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function closeResultForm() {
    hiddenResultForm.style.visibility = 'hidden';
    closeButton.style.visibility = 'hidden';
    closeButton.style.transition = '0s';
    resultColor.style.visibility = 'hidden';
    resultcolorText.style.visibility = 'hidden';
    secondResultColor.style.visibility = 'hidden';
    colorcost1 = getRandomInt(0,100);
    colorcost2 = getRandomInt(0,100);
    taxcost1 = getRandomInt(0,100);
    taxcost2 = getRandomInt(0,100);
    getRandomColors();
}




getRandomColors();
ifEqualyColors();
