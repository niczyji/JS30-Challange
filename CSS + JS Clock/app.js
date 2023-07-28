function updateClock() {
  const degPerMinuteOrSecond = 360 / 60; // Jede Sekunde /Minute entspricht 6 Grad
  const degPerHour = 360 / 12; // Jede Stunde entspricht 30 Grad

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
    let setSecond = seconds * degPerMinuteOrSecond + 90; // Start position calculation
    setSecond = normalizeDegrees(setSecond);
    secondHand.style.transform = `rotate(${setSecond}deg)`; // Rotate the hand

    // Update the minute hand
    let minutes = now.getMinutes();
    const minuteHand = document.querySelector(".min-hand");
    let setMinute = minutes * degPerMinuteOrSecond + 90; // Start position calculation
    setMinute = normalizeDegrees(setMinute);
    minuteHand.style.transform = `rotate(${setMinute}deg)`; // Rotate the hand

    // Update the hour hand
    let hours = now.getHours();
    hours = hours % 12;
    const hourHand = document.querySelector(".hour-hand");
    let setHour = hours * degPerHour + 90; // Start position calculation
    setHour = normalizeDegrees(setHour);
    hourHand.style.transform = `rotate(${setHour}deg)`; // Rotate the hand
  }, 1000);
}

updateClock();
