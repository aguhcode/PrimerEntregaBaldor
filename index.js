class Reserva {
  constructor(nombre, edad, numeroHabitacion, noches) {
    this.nombre = nombre;
    this.edad = edad;
    this.numeroHabitacion = numeroHabitacion;
    this.noches = noches;
  }

  calcularCosto(precioPorNoche) {
    return this.noches * precioPorNoche;
  }
}

const precioPorNoche = 100;
let reservas = [];

function cargarReservas() {
  const reservasGuardadas = localStorage.getItem('reservas');
  if (reservasGuardadas) {
    reservas = JSON.parse(reservasGuardadas);
  }
}

function guardarReservas() {
  localStorage.setItem('reservas', JSON.stringify(reservas));
}

function solicitarReserva() {
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let numeroHabitacion = document.getElementById('numeroHabitacion').value;
  let noches = document.getElementById('noches').value;

  if (isNaN(edad) || edad.trim() === "" || parseInt(edad) < 18) {
    mostrarMensaje("Debes tener al menos 18 años para hacer una reserva.", "error");
    return;
  }

  edad = parseInt(edad);
  noches = parseInt(noches);
  numeroHabitacion = parseInt(numeroHabitacion);

  let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
  reservas.push(nuevaReserva);
  mostrarMensaje("¡Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche), "success");

  guardarReservas();
  document.getElementById('reservaForm').reset();
}

function mostrarReservas() {
  let resultadoReservas = document.getElementById('resultadoReservas');
  resultadoReservas.innerHTML = '';
  reservas.forEach((reserva, index) => {
    let reservaInfo = document.createElement('div');
    reservaInfo.textContent = `Reserva ${index + 1}: Nombre: ${reserva.nombre}, Edad: ${reserva.edad}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}, Costo Total: $${reserva.calcularCosto(precioPorNoche)}`;
    resultadoReservas.appendChild(reservaInfo);
  });
}

function buscarPorNombre() {
  let nombreBusqueda = document.getElementById('buscarNombre').value;
  let reservasEncontradas = reservas.filter(reserva => reserva.nombre.toLowerCase() === nombreBusqueda.toLowerCase());
  mostrarResultadosBusqueda(reservasEncontradas);
}

function buscarPorHabitacion() {
  let numeroHabitacionBusqueda = parseInt(document.getElementById('buscarHabitacion').value);
  let reservasEncontradas = reservas.filter(reserva => reserva.numeroHabitacion === numeroHabitacionBusqueda);
  mostrarResultadosBusqueda(reservasEncontradas);
}

function mostrarResultadosBusqueda(reservasEncontradas) {
  let resultadoBusqueda = document.getElementById('resultadoBusqueda');
  resultadoBusqueda.innerHTML = '';

  if (reservasEncontradas.length > 0) {
    reservasEncontradas.forEach(reserva => {
      let reservaInfo = document.createElement('div');
      reservaInfo.textContent = `Nombre: ${reserva.nombre}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}`;
      resultadoBusqueda.appendChild(reservaInfo);
    });
  } else {
    resultadoBusqueda.textContent = "No se encontraron reservas.";
  }
}

function mostrarMensaje(mensaje, tipo) {
  let mensajeDiv = document.createElement('div');
  mensajeDiv.className = tipo;
  mensajeDiv.textContent = mensaje;
  document.body.appendChild(mensajeDiv);

  setTimeout(() => {
    mensajeDiv.remove();
  }, 3000);
}

document.getElementById('hacerReservaBtn').addEventListener('click', solicitarReserva);
document.getElementById('buscarPorNombreBtn').addEventListener('click', buscarPorNombre);
document.getElementById('buscarPorHabitacionBtn').addEventListener('click', buscarPorHabitacion);

document.addEventListener('DOMContentLoaded', function() {
  cargarReservas();
  mostrarReservas();
});
