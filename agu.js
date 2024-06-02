// Objeto para representar una reserva de hotel
class Reserva {
  constructor(nombre, edad, numeroHabitacion, noches) {
    this.nombre = nombre;
    this.edad = edad;
    this.numeroHabitacion = numeroHabitacion;
    this.noches = noches;
  }

  // Método para calcular el costo de la reserva
  calcularCosto(precioPorNoche) {
    return this.noches * precioPorNoche;
  }
}

// Variables necesarias
const precioPorNoche = 100;
let reservas = [];

// Función para solicitar una reserva a través de prompt
function solicitarReservaConPrompt() {
  let nombre = prompt("Por favor, ingresa tu nombre:");
  let edad = prompt("Por favor, ingresa tu edad:");
  let numeroHabitacion = prompt("Por favor, ingresa el número de habitación:");
  let noches = prompt("Por favor, ingresa el número de noches:");

  // Validar la edad
  if (isNaN(edad) || edad.trim() === "" || parseInt(edad) < 18) {
    alert("Debes tener al menos 18 años para hacer una reserva.");
    return;
  }

  edad = parseInt(edad);
  noches = parseInt(noches);
  numeroHabitacion = parseInt(numeroHabitacion);

  let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
  reservas.push(nuevaReserva);
  alert("¡Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche));
}

// Función para solicitar una reserva a través del formulario
function solicitarReserva() {
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let numeroHabitacion = document.getElementById('numeroHabitacion').value;
  let noches = document.getElementById('noches').value;

  // Validar la edad
  if (isNaN(edad) || edad.trim() === "" || parseInt(edad) < 18) {
    alert("Debes tener al menos 18 años para hacer una reserva.");
    return;
  }

  edad = parseInt(edad);
  noches = parseInt(noches);
  numeroHabitacion = parseInt(numeroHabitacion);

  let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
  reservas.push(nuevaReserva);
  alert("¡Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche));

  // Limpiar el formulario
  document.getElementById('reservaForm').reset();
}

// Función para mostrar todas las reservas en consola
function mostrarReservas() {
  console.log("Reservas realizadas:");
  reservas.forEach((reserva, index) => {
    console.log(`Reserva ${index + 1}: ${reserva.nombre}, Edad: ${reserva.edad}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}, Costo Total: $${reserva.calcularCosto(precioPorNoche)}`);
  });
}

// Función para buscar una reserva por nombre
function buscarReservaPorNombre(nombre) {
  return reservas.filter(reserva => reserva.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para buscar reservas por número de habitación
function buscarReservasPorNumeroHabitacion(numeroHabitacion) {
  return reservas.filter(reserva => reserva.numeroHabitacion === numeroHabitacion);
}

// Función para buscar por nombre y mostrar resultados
function buscarPorNombre() {
  let nombreBusqueda = document.getElementById('buscarNombre').value;
  let reservasEncontradas = buscarReservaPorNombre(nombreBusqueda);
  mostrarResultadosBusqueda(reservasEncontradas);
}

// Función para buscar por número de habitación y mostrar resultados
function buscarPorHabitacion() {
  let numeroHabitacionBusqueda = parseInt(document.getElementById('buscarHabitacion').value);
  let reservasEncontradas = buscarReservasPorNumeroHabitacion(numeroHabitacionBusqueda);
  mostrarResultadosBusqueda(reservasEncontradas);
}

// Función para mostrar resultados de búsqueda
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

// Agregar event listeners a los botones
document.getElementById('hacerReservaBtn').addEventListener('click', solicitarReserva);
document.getElementById('buscarPorNombreBtn').addEventListener('click', buscarPorNombre);
document.getElementById('buscarPorHabitacionBtn').addEventListener('click', buscarPorHabitacion);

// Capturar entradas mediante prompt() al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  if (confirm("¿Quieres hacer una reserva utilizando prompt?")) {
    solicitarReservaConPrompt();
  }
});
