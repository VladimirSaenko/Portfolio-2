
let video = document.getElementById('video');
setInterval(function() {
    video.currentTime = window.pageYOffset/1000;
}, 100);