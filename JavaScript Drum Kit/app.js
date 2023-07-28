function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  } // stop function
  audio.currentTime = 0;
  audio.play();
  var accessAudioDataKey = audio.dataset.key;
  var accessDivDataKey = key.dataset.key;

  if (accessAudioDataKey && accessDivDataKey == event.keyCode) {
    key.classList.add("play");
  }
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return; //skip;
  this.classList.remove("play");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
