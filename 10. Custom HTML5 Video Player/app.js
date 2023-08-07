const player = document.querySelector(".player");
const video = document.querySelector("video");

const progressBar = document.getElementById("progress-bar");
const toggle = document.getElementById("toggle-video");
const toggleMute = document.getElementById("toggle-mute");
const volumeSlider = document.getElementById("volume-slider");
const sliders = document.querySelectorAll(".player-slider");
const skipButtons = document.querySelectorAll(".playback-btn");
const fullscreen = document.getElementById("fullscreen");

toggle.addEventListener("click", toggleVideo);
video.addEventListener("click", toggleVideo);

function toggleVideo() {
  video.paused ? video.play() : video.pause();
}
