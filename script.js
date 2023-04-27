var segundos = 0;
var minutos = 0;
var temporizador;

function iniciar() {
    temporizador = setInterval(function () {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }
    actualizarTemporizador();
    if (minutos == 10 && segundos == 00) {
      alert("¡Han pasado 10 minutos!");
    }
  }, 1000);
  document.getElementById("Estado").innerHTML="Ocupado";
}

function pausar() {
  clearInterval(temporizador);
}

function detener() {
  clearInterval(temporizador);
  segundos = 0;
  minutos = 0;
  actualizarTemporizador();
  document.getElementById("Estado").innerHTML="Disponible";
}

function reiniciar() {
    temporizador= setInterval(function () {
      segundos++;
      if (segundos == 60) {
        segundos = 0;
        minutos++;
      }
      actualizarTemporizador();
      if (minutos == 10 && segundos == 00) {
        alert("¡Han pasado 10 minutos!");
      }
    }, 1000);
  }

function actualizarTemporizador() {
  var tiempo = minutos.toString().padStart(2, "0") + ":";
  tiempo += segundos.toString().padStart(2, "0");
  document.getElementById("timer").innerHTML = tiempo;
}

function Ocupado(){
  document.getElementById("Estado").innerHTML="Ocupado";
}
function Disponible(){
  document.getElementById("Estado").innerHTML="Disponible";
}