function updateClock() {
  const degPerMinuteOrSecond = 360 / 60; // Each second/minute corresponds to 6 degrees
  const degPerHour = 360 / 12; // Each hour corresponds to 30 degrees
  const defaultOffset = 90; // Offset to correctly position clock hands

  function normalizeDegrees(degrees) {
    if (degrees >= 360) {
      // If 360 degrees are reached, reset to 0
      degrees -= 360;
    }
    return degrees;
  }

  setInterval(function () {
    const now = new Date();

    // Update the second hand
    const seconds = now.getSeconds();
    const secondHand = document.querySelector(".second-hand");
    let setSecond = seconds * degPerMinuteOrSecond + defaultOffset; // Start position calculation
    setSecond = normalizeDegrees(setSecond);
    secondHand.style.transform = `rotate(${setSecond}deg)`; // Rotate the hand

    // Update the minute hand
    let minutes = now.getMinutes();
    const minuteHand = document.querySelector(".min-hand");
    let setMinute = minutes * degPerMinuteOrSecond + defaultOffset; // Start position calculation
    setMinute = normalizeDegrees(setMinute);
    minuteHand.style.transform = `rotate(${setMinute}deg)`; // Rotate the hand

    // Update the hour hand
    let hours = now.getHours();
    hours = hours % 12;
    const hourHand = document.querySelector(".hour-hand");
    let setHour = hours * degPerHour + defaultOffset; // Start position calculation
    setHour = normalizeDegrees(setHour);
    hourHand.style.transform = `rotate(${setHour}deg)`; // Rotate the hand
  }, 1000);
}

updateClock();
