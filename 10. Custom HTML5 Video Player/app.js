const videoPlayer = document.querySelector(".player");
const videoContent = videoPlayer.querySelector("video");

const progressControl = document.getElementById("progress-bar");
const playPauseButton = document.getElementById("toggle-video");
const muteUnmuteButton = document.getElementById("toggle-mute");
const volumeControl = document.getElementById("volume-slider");
const controlSliders = videoPlayer.querySelectorAll(".player-slider");
const playbackControls = videoPlayer.querySelectorAll(".playback-btn");
const fullscreenButton = document.getElementById("fullscreen");

playPauseButton.addEventListener("click", handlePlayPause);
playPauseButton.addEventListener("click", togglePlayPauseIcon);
videoContent.addEventListener("click", handlePlayPause);
muteUnmuteButton.addEventListener("click", videoVolumeToggle);
muteUnmuteButton.addEventListener("click", toggleMuteIcon);
volumeControl.addEventListener("change", updateVolumeSlider);
controlSliders.forEach((slider) =>
  slider.addEventListener("input", setVideoProperty)
);
playbackControls.forEach((playbackButton) =>
  playbackButton.addEventListener("click", playbackFunction)
);
fullscreenButton.addEventListener("click", setFullscreen);
videoContent.addEventListener("dblclick", setFullscreen);

function handlePlayPause() {
  // Toggle Video Playback
  videoContent.paused ? videoContent.play() : videoContent.pause();
}

function togglePlayPauseIcon() {
  // Toggle Icon
  const icon = playPauseButton.children[0];
  if (icon.classList.contains("fa-play")) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else if (icon.classList.contains("fa-pause")) {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

function videoVolumeToggle() {
  videoContent.volume = videoContent.volume === 0 ? 1 : 0;
}

function toggleMuteIcon() {
  // Toggle Icon
  const icon = muteUnmuteButton.children[0];
  if (icon.classList.contains("fa-volume-up")) {
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-off");
  } else if (icon.classList.contains("fa-volume-off")) {
    icon.classList.remove("fa-volume-off");
    icon.classList.add("fa-volume-up");
  }
}

function updateVolumeSlider() {
  const icon = muteUnmuteButton.children[0];

  videoContent.volume = volumeControl.value;
  if (videoContent.volume === 0) {
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-off");
  } else if (videoContent.volume > 0) {
    icon.classList.remove("fa-volume-off");
    icon.classList.add("fa-volume-up");
  }
}

function setVideoProperty() {
  // set currentTime or volume or playbackRate
  videoContent[this.name] = this.value;
}

function playbackFunction() {
  const skip = parseFloat(this.dataset.skip);
  videoContent.currentTime += skip;
}

function setFullscreen() {
  // set fullscreen
  if (document.fullscreenElement) {
    document.exitFullscreen();
    videoPlayer.style.border = "";
    videoPlayer.style.borderRadius = "";
  } else {
    videoPlayer.requestFullscreen();
    videoPlayer.style.border = "none";
    videoPlayer.style.borderRadius = "none";
  }
}
