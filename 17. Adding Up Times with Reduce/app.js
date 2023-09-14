const videoListItems = document.querySelectorAll(".videos li");

// Create an array from the 'data-time' attributes
const videoTimes = Array.from(videoListItems).map((item) =>
  item.getAttribute("data-time")
);

// Calculate the total time in seconds
const totalTime = videoTimes.reduce((acc, time) => {
  const [minutes, seconds] = time.split(":").map(Number);
  return acc + (minutes * 60 + seconds);
}, 0);

// Convert the total time into hours, minutes, and seconds
const totalHours = Math.floor(totalTime / 3600);
const remainingSecondsForMinutes = totalTime % 3600;
const totalMinutes = Math.floor(remainingSecondsForMinutes / 60);
const totalSeconds = remainingSecondsForMinutes % 60;

console.log(
  `Die Gesamtzeit beträgt ${totalHours} Stunden, ${totalMinutes} Minuten und ${totalSeconds} Sekunden.`
);
