const monthsElement = document.getElementById("meses");
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const bodyElement = document.body;

let currentDate = new Date(); //  Dia de hoy
let goalDate = new Date(2024, 4, 31, 0, 0); // Año, mes (enero==0), día, hora, minutos¡

let month, days, hours, mins, seconds, totalSeconds;
let index = 0;
//Contador
let contador = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

    // Condición para comprobar si ha llegado la hora establecida
    if (Math.floor(totalSeconds) <= 0) {
      clearInterval(contador);
      monthsElement.innerHTML = 0;
      daysElement.innerHTML = 0;
      hoursElement.innerHTML = 0;
      bodyElement.style.backgroundColor = "white";
      return;
    }
  //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
  //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
  //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60
  //2.592.000
  month = Math.floor(totalSeconds / 2592000);
  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  monthsElement.innerHTML = month;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

};

  // Cambio de color de fondo
  if (month >= 2) {
    bodyElement.style.backgroundColor = "green";
  } else if (month < 2 && days > 7) {
    bodyElement.style.backgroundColor = "yellow";
  } else {
    bodyElement.style.backgroundColor = "red";
  }
