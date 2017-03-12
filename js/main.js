// Plays webm video on hover
$(".video-cover").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    this.nextElementSibling.play();
}

function hideVideo(e) {
    this.nextElementSibling.currentTime = 0;
    this.nextElementSibling.pause();
}