//DIGITAL CLOCK

function updateClock(){

  const now = new Date();

  let hours = now.getHours(); // for first 2 digits, pad them with 0
  const meridiem = hours > 12 ? "PM" : "AM";
  hours = hours % 12
  hours = hours.toString().padStart(2, 0);

  const minute = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minute}:${second} ${meridiem}`
  document.getElementById("clock").textContent = timeString;
}

updateClock();
// kinda like timeout, but call the function repeatedly
setInterval(updateClock, 1000);