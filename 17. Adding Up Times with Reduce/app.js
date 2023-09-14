const videoListItems = document.querySelectorAll(".videos li");

const videoTimes = Array.from(videoListItems).map((item) =>
  item.getAttribute("data-time")
);

const totalTime = videoTimes.reduce((acc, time) => {
  const [minutes, seconds] = time.split(":").map(Number);
  return acc + (minutes * 60 + seconds);
}, 0);

const totalHours = Math.floor(totalTime / 3600);
const remainingSecondsForMinutes = totalTime % 3600;
const totalMinutes = Math.floor(remainingSecondsForMinutes / 60);
const totalSeconds = remainingSecondsForMinutes % 60;

console.log(
  `${totalTime} Die Gesamtzeit beträgt ${totalHours} Stunden, ${totalMinutes} Minuten und ${totalSeconds} Sekunden.`
);
