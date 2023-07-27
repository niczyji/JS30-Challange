document.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  var accessAudioDataKey = audio.dataset.key;
  var accessDivDataKey = key.dataset.key;

  if (accessAudioDataKey && accessDivDataKey == event.keyCode) {
    key.classList.toggle("play");
  }
});

var keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  console.log(e);
}
