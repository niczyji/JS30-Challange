function updateClock() {
  const degPerMinuteOrSecond = 360 / 60; // Jede Sekunde /Minute entspricht 6 Grad
  const degPerHour = 360 / 12; // Jede Stunde entspricht 30 Grad

  setInterval(function () {
    const now = new Date();

    // Update the second hand
    const seconds = now.getSeconds();
    const secondHand = document.querySelector(".second-hand");
    let setSecond = seconds * degPerMinuteOrSecond + 90; // Start position calculation
    if (setSecond >= 360) {
      // If 360 degrees are reached, reset to 0
      setSecond -= 360;
    }
    secondHand.style.transform = `rotate(${setSecond}deg)`; // Rotate the hand

    // Update the minute hand
    let minutes = now.getMinutes();
    const minuteHand = document.querySelector(".min-hand");
    let setMinute = minutes * degPerMinuteOrSecond + 90; // Start position calculation
    if (setMinute >= 360) {
      // If 360 degrees are reached, reset to 0
      setMinute -= 360;
    }
    minuteHand.style.transform = `rotate(${setMinute}deg)`; // Rotate the hand

    // Update the minute hand
    let hours = now.getHours();
    hours = hours % 12;
    const hourHand = document.querySelector(".hour-hand");
    let setHour = hours * degPerHour + 90; // Start position calculation
    if (setHour >= 360) {
      // If 360 degrees are reached, reset to 0
      setHour -= 360;
    }
    hourHand.style.transform = `rotate(${setHour}deg)`; // Rotate the hand
  }, 1000);
}

updateClock();
