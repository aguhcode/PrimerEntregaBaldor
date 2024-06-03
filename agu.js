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

function solicitarReservaConPrompt() {
  let nombre = prompt("Por favor, ingresa tu nombre:");
  let edad = prompt("Por favor, ingresa tu edad:");
  let numeroHabitacion = prompt("Por favor, ingresa el numero de habitacion:");
  let noches = prompt("Por favor, ingresa el numero de noches:");

  if (isNaN(edad) || edad.trim() === "" || parseInt(edad) < 18) {
    alert("Debes tener al menos 18 anos para hacer una reserva.");
    return;
  }

  edad = parseInt(edad);
  noches = parseInt(noches);
  numeroHabitacion = parseInt(numeroHabitacion);

  let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
  reservas.push(nuevaReserva);
  alert("Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche));

  guardarReservas();
}

function solicitarReserva() {
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let numeroHabitacion = document.getElementById('numeroHabitacion').value;
  let noches = document.getElementById('noches').value;

  if (isNaN(edad) || edad.trim() === "" || parseInt(edad) < 18) {
    alert("Debes tener al menos 18 anos para hacer una reserva.");
    return;
  }

  edad = parseInt(edad);
  noches = parseInt(noches);
  numeroHabitacion = parseInt(numeroHabitacion);

  let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
  reservas.push(nuevaReserva);
  alert("Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche));

  guardarReservas();

  document.getElementById('reservaForm').reset();
}

function mostrarReservas() {
  console.log("Reservas realizadas:");
  reservas.forEach((reserva, index) => {
    console.log(`Reserva ${index + 1}: ${reserva.nombre}, Edad: ${reserva.edad}, Habitacion: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}, Costo Total: $${reserva.calcularCosto(precioPorNoche)}`);
  });
}

function buscarReservaPorNombre(nombre) {
  return reservas.filter(reserva => reserva.nombre.toLowerCase() === nombre.toLowerCase());
}

function buscarReservasPorNumeroHabitacion(numeroHabitacion) {
  return reservas.filter(reserva => reserva.numeroHabitacion === numeroHabitacion);
}

function buscarPorNombre() {
  let nombreBusqueda = document.getElementById('buscarNombre').value;
  let reservasEncontradas = buscarReservaPorNombre(nombreBusqueda);
  mostrarResultadosBusqueda(reservasEncontradas);
}

function buscarPorHabitacion() {
  let numeroHabitacionBusqueda = parseInt(document.getElementById('buscarHabitacion').value);
  let reservasEncontradas = buscarReservasPorNumeroHabitacion(numeroHabitacionBusqueda);
  mostrarResultadosBusqueda(reservasEncontradas);
}

function mostrarResultadosBusqueda(reservasEncontradas) {
  let resultadoBusqueda = document.getElementById('resultadoBusqueda');
  resultadoBusqueda.innerHTML = '';

  if (reservasEncontradas.length > 0) {
    reservasEncontradas.forEach(reserva => {
      let reservaInfo = document.createElement('div');
      reservaInfo.textContent = `Nombre: ${reserva.nombre}, Habitacion: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}`;
      resultadoBusqueda.appendChild(reservaInfo);
    });
  } else {
    resultadoBusqueda.textContent = "No se encontraron reservas.";
  }
}

document.getElementById('hacerReservaBtn').addEventListener('click', solicitarReserva);
document.getElementById('buscarPorNombreBtn').addEventListener('click', buscarPorNombre);
document.getElementById('buscarPorHabitacionBtn').addEventListener('click', buscarPorHabitacion);

document.addEventListener('DOMContentLoaded', function() {
  cargarReservas();
  if (confirm("¿Quieres hacer una reserva utilizando prompt?")) {
    solicitarReservaConPrompt();
  }
});
