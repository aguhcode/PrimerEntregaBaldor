function verificarEdadesParaVotar() {
  let edades = [];
  let continuar = true;

  while (continuar) {
    let edad;

    do {
      edad = prompt("Por favor, ingresa tu edad:");
    } while (isNaN(edad) || edad.trim() === "");

    edad = parseInt(edad);
    edades.push(edad);


    continuar = confirm("Queres ingresar otra edad?");
  }

  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      alert(`La persona con ${edades[i]} anios puede votar en las proximas elecciones.`);
    } else {
      alert(`La persona con ${edades[i]} anios debe tener al menos 18 anios para votar.`);
    }
  }
}

verificarEdadesParaVotar();

// Objeto para representar una reserva de hotel
class Reserva {
  constructor(nombre, edad, numeroHabitacion, noches) {
    this.nombre = nombre;
    this.edad = edad;
    this.numeroHabitacion = numeroHabitacion;
    this.noches = noches;
  }

  // Metodo para calcular el costo de la reserva
  calcularCosto(precioPorNoche) {
    return this.noches * precioPorNoche;
  }
}

// Variables necesarias
const precioPorNoche = 100;
let reservas = [];

// Funcion para solicitar una reserva
function solicitarReserva() {
  let continuar = true;

  while (continuar) {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let edad;
    let noches;
    let numeroHabitacion;

    // Validar la edad
    do {
      edad = prompt("Por favor, ingresa tu edad (debe ser un número válido):");
    } while (isNaN(edad) || edad.trim() === "");

    edad = parseInt(edad);

    // Validar el numero de noches
    do {
      noches = prompt("¿Cuántas noches deseas reservar?");
    } while (isNaN(noches) || noches.trim() === "");

    noches = parseInt(noches);

    // Validar el numero de habitación
    do {
      numeroHabitacion = prompt("Por favor, ingresa el número de habitación (debe ser un número válido):");
    } while (isNaN(numeroHabitacion) || numeroHabitacion.trim() === "");

    numeroHabitacion = parseInt(numeroHabitacion);

    // Verificar la edad para permitir la reserva
    if (edad >= 18) {
      let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
      reservas.push(nuevaReserva);
      alert("¡Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche));
    } else {
      alert("Debes tener al menos 18 años para hacer una reserva.");
    }

    // Preguntar al usuario si quiere hacer otra reserva
    continuar = confirm("¿Quieres hacer otra reserva?");
  }

  // Mostrar todas las reservas
  mostrarReservas();
}

// Funcion para mostrar todas las reservas
function mostrarReservas() {
  console.log("Reservas realizadas:");
  reservas.forEach((reserva, index) => {
    console.log(`Reserva ${index + 1}: ${reserva.nombre}, Edad: ${reserva.edad}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}, Costo Total: $${reserva.calcularCosto(precioPorNoche)}`);
  });
}

// Funcion para buscar una reserva por nombre
function buscarReservaPorNombre(nombre) {
  return reservas.filter(reserva => reserva.nombre.toLowerCase() === nombre.toLowerCase());
}

// Funcion para buscar reservas por número de habitación
function buscarReservasPorNumeroHabitacion(numeroHabitacion) {
  return reservas.filter(reserva => reserva.numeroHabitacion === numeroHabitacion);
}

// Llamada a la funcion para solicitar reservas
solicitarReserva();

// Ejemplos de uso de los métodos de búsqueda y filtrado
let nombreBusqueda = prompt("Ingresa el nombre para buscar una reserva:");
let reservasEncontradas = buscarReservaPorNombre(nombreBusqueda);
if (reservasEncontradas.length > 0) {
  console.log("Reservas encontradas:");
  reservasEncontradas.forEach(reserva => {
    console.log(`Nombre: ${reserva.nombre}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}`);
  });
} else {
  console.log("No se encontraron reservas para ese nombre.");
}

let numeroHabitacionBusqueda = parseInt(prompt("Ingresa el número de habitación para buscar reservas:"));
reservasEncontradas = buscarReservasPorNumeroHabitacion(numeroHabitacionBusqueda);
if (reservasEncontradas.length > 0) {
  console.log("Reservas encontradas:");
  reservasEncontradas.forEach(reserva => {
    console.log(`Nombre: ${reserva.nombre}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}`);
  });
} else {
  console.log("No se encontraron reservas para ese número de habitación.");
}

