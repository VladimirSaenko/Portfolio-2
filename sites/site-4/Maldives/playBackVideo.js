var backvideo = document.getElementById('backvideo');
var playbtn = document.getElementById('playbtn');
var icon = document.getElementById('icon');
playbtn.onclick = function () {
backvideo.style.display = "block";
    if(backvideo.paused) {
        backvideo.play();
        icon.src = "/images/play.png";
        }
        else {
        backvideo.pause();
        icon.src = "/images/play.png";
        }
} 