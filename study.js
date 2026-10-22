let breakTime;

if (minutes < 25) {
  breakTime = 0;
} else if (minutes < 50) {
  breakTime = 5;
} else if (minutes < 90) {
  breakTime = 10;
} else {
  breakTime = null; // "longer break" has no set number in the lab
}

let message;
if (breakTime === 0) {
  message = "Keep going!";
} else if (breakTime === null) {
  message = "Take a longer break and recharge.";
} else {
  message = "Take a " + breakTime + "-minute break.";
}