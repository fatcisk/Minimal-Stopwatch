const buttonContainer = document.querySelector(".buttons");
const darkmodeBtn = document.querySelector(".dark-mode");
const display = document.getElementById("display");
const container = document.querySelector(".container");
const clock = document.querySelector(".clock");
const clockbtn = document.querySelector(".show-clock");
const contactPanel = document.querySelector(".contact-panel-holder");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close-btn");

const quoteButton = document.querySelector(".quo-btn");
const quoteText = document.querySelector(".quote-text");
const textArea = document.querySelector(".text-area");
const saveButton = document.querySelector(".save-quote");
const quoteArea = document.querySelector(".quote-area");
const warning = document.querySelector(".warning");

buttonContainer.addEventListener("mouseover", function () {
  buttonContainer.style.opacity = "1";
});

buttonContainer.addEventListener("mouseout", function () {
  buttonContainer.style.opacity = "0";
});
//quote

quoteButton.addEventListener("click", function () {
  overlay.style.display = "block";
  quoteArea.style.display = "block";
});

quoteText.innerHTML = localStorage.getItem("quoteText");

saveButton.addEventListener("click", function () {
  localStorage.setItem("quoteText", textArea.value);
  quoteText.innerHTML = textArea.value;
  quoteArea.style.display = "none";
  overlay.style.display = "none";
  if (textArea.value === "") {
    quoteText.style.display = "none";
  } else {
    quoteText.style.display = "block";
  }
});

//quote
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("clock").innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function contactMe() {
  contactPanel.style.display = "flex";
  overlay.style.display = "block";
}

function closeContact() {
  contactPanel.style.display = "none";
  overlay.style.display = "none";
}

clockbtncounter = 1;
clockbtn.addEventListener("click", function () {
  clockbtn.innerHTML = "SHOW CLOCK";
  if (clockbtncounter === 1) {
    clock.style.display = "none";
    clockbtncounter = 2;
  } else {
    clock.style.display = "block";
    clockbtncounter = 1;
    clockbtn.innerHTML = "HIDE CLOCK";
  }
});

dark = "#3d3d3d";
light = "white";

container.style.backgroundColor = localStorage.getItem("color");
display.style.color = localStorage.getItem("textcolor");
clock.style.color = localStorage.getItem("textcolor");
darkmodeBtn.style.color = localStorage.getItem("dmbtncolor");

onclickatrb = null;

if (localStorage.getItem("color") === dark) {
  darkmodeBtn.classList.add("fas");
  console.log("hey");
}

function deneme() {
  if (localStorage.getItem("color") === dark) {
    localStorage.setItem("color", light);
    localStorage.setItem("textcolor", dark);
    localStorage.setItem("dmbtncolor", dark);
    container.style.backgroundColor = localStorage.getItem("color");
    display.style.color = localStorage.getItem("textcolor");
    clock.style.color = localStorage.getItem("textcolor");
    darkmodeBtn.style.color = localStorage.getItem("dmbtncolor");
    darkmodeBtn.classList.toggle("fas");
  } else {
    localStorage.setItem("color", dark);
    localStorage.setItem("textcolor", light);
    localStorage.setItem("dmbtncolor", light);
    container.style.backgroundColor = localStorage.getItem("color");
    display.style.color = localStorage.getItem("textcolor");
    clock.style.color = localStorage.getItem("textcolor");
    darkmodeBtn.style.color = localStorage.getItem("dmbtncolor");
    darkmodeBtn.classList.toggle("fas");
  }
}

let seconds = localStorage.getItem("seconds");
let minutes = localStorage.getItem("minutes");
let hours = localStorage.getItem("hours");

let intreval = null;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

function timerText() {
  timerValue = document.getElementById("display").innerHTML;
  localStorage.setItem("timerValue", timerValue);
}

document.getElementById("display").innerHTML = localStorage.getItem(
  "timerValue"
);

function stopWatch() {
  seconds++;
  secondsValue = seconds;
  localStorage.setItem("seconds", secondsValue);

  minutesValue = minutes;
  localStorage.setItem("minutes", minutesValue);

  hoursValue = hours;
  localStorage.setItem("hours", hoursValue);

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  display.innerHTML =
    displayHours + "." + displayMinutes + "." + displaySeconds;
}

started = "started";
stopped = "stopped";

let status = "stopped";

function startStop() {
  if (status === "stopped") {
    intreval = window.setInterval(stopWatch, 1000);
    window.setInterval(timerText, 1000);
    document.getElementById("startstop").innerHTML = "STOP";
    status = "started";
  } else {
    window.clearInterval(intreval);
    document.getElementById("startstop").innerHTML = "START";
    status = "stopped";
  }
}

function reset() {
  localStorage.setItem("warning", 0);
  window.clearInterval(intreval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  denneme = "00.00.00";
  document.getElementById("display").innerHTML = "00.00.00";
  document.getElementById("startstop").innerHTML = "START";
  localStorage.setItem("timerValue", denneme);
  localStorage.setItem("seconds", 0);
  localStorage.setItem("hours", 0);
  localStorage.setItem("minutes", 0);
  status = "stopped";

  if (localStorage.getItem("warning") === "0") {
    console.log("hi");
    warning.style.display = "none";
  }
}

if (localStorage.getItem("warning") === "0") {
  console.log("hi");
  warning.style.display = "none";
}
