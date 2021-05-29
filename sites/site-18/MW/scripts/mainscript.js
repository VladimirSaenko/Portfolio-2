
"use strict"

let userLim = document.getElementById('limit');
let resultForm = document.getElementById('form');
let resultText = document.getElementById('resultText');
let resultColor = document.getElementById('resultColor');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let colorcost1 = getRandomInt(0,100);
let colorcost2 = getRandomInt(0,100);
let taxcost1 = getRandomInt(0,100);
let taxcost2 = getRandomInt(0,100);
let way1 = colorcost1 + taxcost1; 
let way2 = colorcost2 + taxcost2;
let rgb1 = document.getElementById("rgb1");
let rgb2 = document.getElementById("rgb2");
let rangeRandom = document.getElementById("rangeRandom");
let currency = document.getElementById("currency"); 
let titleColor1 = document.getElementById('titleColor1');
let titleColor2 = document.getElementById('titleColor2');
let valuta = "";

function mainFunc() {
    if(rangeRandom.value == 100) {
        colorcost1 = getRandomInt(0,100);
        colorcost2 = getRandomInt(0,100);
        taxcost1 = getRandomInt(0,100);
        taxcost2 = getRandomInt(0,100);
        way1 = colorcost1 + taxcost1;
        way2 = colorcost2 + taxcost2;
        calculateMinimalWay();
        getRandomCostWays();
    }

    if(rangeRandom.value == 1000) {
        colorcost1 = getRandomInt(100,1000);
        colorcost2 = getRandomInt(100,1000);
        taxcost1 = getRandomInt(100,1000);
        taxcost2 = getRandomInt(100,1000);
        way1 = colorcost1 + taxcost1;
        way2 = colorcost2 + taxcost2;
        calculateMinimalWay();
        getRandomCostWays();
   }

   if(rangeRandom.value == 50) {
       colorcost1 = getRandomInt(0,50);
       colorcost2 = getRandomInt(0,50);
       taxcost1 = getRandomInt(0,50);
       taxcost2 = getRandomInt(0,50);
       way1 = colorcost1 + taxcost1;
       way2 = colorcost2 + taxcost2;
       calculateMinimalWay();
       getRandomCostWays();
   }

   if(rangeRandom.value == 500) {
       colorcost1 = getRandomInt(0,500);
       colorcost2 = getRandomInt(0,500);
       taxcost1 = getRandomInt(0,500);
       taxcost2 = getRandomInt(0,500);
       way1 = colorcost1 + taxcost1;
       way2 = colorcost2 + taxcost2;
       calculateMinimalWay();
       getRandomCostWays();
   }

   if(rangeRandom.value == 250) {
       colorcost1 = getRandomInt(0,250);
       colorcost2 = getRandomInt(0,250);
       taxcost1 = getRandomInt(0,250);
       taxcost2 = getRandomInt(0,250);
       way1 = colorcost1 + taxcost1;
       way2 = colorcost2 + taxcost2;
       calculateMinimalWay();
       getRandomCostWays();
   }

   if(rangeRandom.value == 300) {
       colorcost1 = getRandomInt(0,300);
       colorcost2 = getRandomInt(0,300);
       taxcost1 = getRandomInt(0,300);
       taxcost2 = getRandomInt(0,300);
       way1 = colorcost1 + taxcost1;
       way2 = colorcost2 + taxcost2;
       calculateMinimalWay();
       getRandomCostWays();
    }

   if(rangeRandom.value == 10) {
       colorcost1 = getRandomInt(0,10);
       colorcost2 = getRandomInt(0,10);
       taxcost1 = getRandomInt(0,10);
       taxcost2 = getRandomInt(0,10);
       way1 = colorcost1 + taxcost1;
       way2 = colorcost2 + taxcost2;
       calculateMinimalWay();
       getRandomCostWays();
    }

   else {
       colorcost1 = getRandomInt(0,rangeRandom.value);
       colorcost2 = getRandomInt(0,rangeRandom.value);
       taxcost1 = getRandomInt(0,rangeRandom.value);
       taxcost2 = getRandomInt(0,rangeRandom.value);
       way1 = colorcost1 + taxcost1;
       way2 = colorcost2 + taxcost2;
       calculateMinimalWay();
       getRandomCostWays(); 
    }
}

function calculateMinimalWay() {
    if(userLim.value > way1 && userLim.value > way2) {
        resultForm.style.visibility = 'visible';
        resultText.textContent = "Ваш лимит позволяет вам воспользоваться обеями путями";
        resultColor.style.visibility = "hidden";  
    }
   
    if(way1 < way2 && userLim.value >= way1 && userLim.value < way2) {
        resultForm.style.visibility = 'visible';
        let wayColor1 = color1.style.background;
        resultText.textContent = "Первый путь за " + way1 + valuta + " с цветом- " + wayColor1 +
        " самый минимальный для вашего лимита";
        resultColor.style.background = color1.style.background;
    }
   
    if(way2 < way1 && userLim.value >= way2 && userLim.value < way1) {
        resultForm.style.visibility = 'visible';
        let wayColor2 = color2.style.background;
        resultText.textContent = "Второй путь за " + way2 + valuta  + " с цветом- " + wayColor2 +  
        " самый минимальный для вашего лимита";
        resultcolorText.style.visibility = "visible";
        resultColor.style.background = color2.style.background;
    }
   
    if(way1 == way2 && userLim.value > way1 && way2) {
        resultForm.style.visibility = 'visible';
        resultText.textContent = "Ваш лимит позволяет вам воспользоваться обеями путями";
        resultColor.style.visibility = "hidden";
    }
   
    if(userLim.value < way1 && userLim.value < way2 || userLim.value == 0) {
        resultForm.style.visibility = 'visible';
        resultText.textContent = 'Ваш лимит очень маленький';
        resultColor.style.visibility = 'hidden';
    }
   
    if(userLim.value < 0) {
        resultForm.style.visibility = 'visible';
        resultText.textContent = 'Ваш лимит минусовой, напишете число больше 0 ';
        resultColor.style.visibility = 'hidden';
    }
 
    if(userLim.value == 0 && way1 == 0 && way2 == 0) {
        resultForm.style.visibility = 'visible';
        resultText.textContent = 'Введите лимит';
        resultColor.style.visibility = 'hidden';
    }
}

function getRandomColors() {
    color1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    color2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    rgb1.style.color = color1.style.background;
    rgb1.textContent = color1.style.background;
    rgb2.style.color = color2.style.background;
    rgb2.textContent = color2.style.background;
    titleColor1.style.color = color1.style.background;
    titleColor2.style.color = color2.style.background;
}

function getRandomColor1() {
    rgb1.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    rgb1.textContent = rgb1.style.color;
    color1.style.background = rgb1.style.color;
    titleColor1.style.color = rgb1.style.color;
}
 
function getRandomColor2() {
    rgb2.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    rgb2.textContent = rgb2.style.color;
    color2.style.background = rgb2.style.color;
    titleColor2.style.color = rgb2.style.color;
}

function getCurrency() {
    if(currency.value == "$") {
        valuta = "$";
    }
    else if(currency.value == "€") {
        valuta = "€";
    }
    else if(currency.value == "₴") {
        valuta = "₴";
    }
    else if(currency.value == "₽") {
        valuta = "₽";
    }
    else if(currency.value == "£") {
        valuta = "£";
    }
    else if(currency.value == "zł") {
        valuta = "zł";
    }
    else if(currency.value == "") {
        valuta = "";
    }
}

function getRandomCostWays() {
    colorcost1 = getRandomInt(0,100);
    colorcost2 = getRandomInt(0,100);
    taxcost1 = getRandomInt(0,100);
    taxcost2 = getRandomInt(0,100);
    way1 = colorcost1 + taxcost1;
    way2 = colorcost2 + taxcost2;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomColors();
getRandomCostWays();