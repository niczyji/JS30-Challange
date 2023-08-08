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
