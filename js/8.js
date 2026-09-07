/**
 * Question 8:
 * Write a JavaScript program to display a real-time clock in the format Hour:Minute:Second.
 */

function displayRealTimeClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  const clockElement = document.getElementById("q8-result");
  if (clockElement) {
    clockElement.innerText = `Current Time: ${timeString}`;
  }

  return timeString;
}

// Update real-time clock every second automatically
setInterval(displayRealTimeClock, 1000);
