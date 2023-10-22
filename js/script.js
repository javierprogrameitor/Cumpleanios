const monthsElement = document.getElementById("meses");
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');
const imagen = document.getElementById("img");

let currentDate = new Date(); //  Dia de hoy
let goalDate = new Date(2024, 8, 26, 12, 20); // Año, mes (enero==0), día, hora, minutos¡
/* Aquí cambiando el mes cambiamos la imagen de la estación y poniendo el todo a cero tenemoos la imagen del regalo
es la forma de comprobar la funcionalidad*/
let month, days, hours, mins, seconds, totalSeconds;
let img = ["./img/Primavera.png/", "./img/Verano.png", "./img/Otonio.png", "./img/Invierno.png"];
let index = 0;


let contador = setInterval(countdown, 1000);
countdown();
cambiarEstacion();

//setInterval(cambiarImagenesAuto, 3000);

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

    // Condición para comprobar si ha llegado la hora establecida
    if (Math.floor(totalSeconds) <= 0) {
    showProduct();
      secondsElement.innerHTML = 0;
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
 // Cambia de estacion según nos falte para el cumpleaños
 // para poder demostrar su funcinamento
function cambiarEstacion(){
  currentDate = new Date();
  month = Math.floor(totalSeconds / 2592000);


  if (month <= 3) {
    imagen.src = img[3];
  }
  if (month > 3 && month <= 6) {
    imagen.src = img[0];
  }
  if (month > 6 && month <= 9) {
    imagen.src = img[1];
  }
  if (month > 9 && month <= 11) {
    imagen.src = img[2];
  }
};


// Funcion que cambia automaticamnete las estaciones del año
function cambiarImagenesAuto() {

  imagen.src = img[index];
  index = (index + 1) % img.length;

};
function showProduct() {
  upcomingImg.classList.remove('nocolor-img');
  //Paramos el intervalo que se estaba ejecutando
  clearInterval(contador);
}
