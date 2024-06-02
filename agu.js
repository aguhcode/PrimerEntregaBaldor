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

function solicitarReserva() {
  let continuar = true;

  while (continuar) {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let edad;
    let noches;
    let numeroHabitacion;

    do {
      edad = prompt("Por favor, ingresa tu edad (debe ser un número válido):");
    } while (isNaN(edad) || edad.trim() === "");

    edad = parseInt(edad);

    do {
      noches = prompt("¿Cuántas noches deseas reservar?");
    } while (isNaN(noches) || noches.trim() === "");

    noches = parseInt(noches);

    do {
      numeroHabitacion = prompt("Por favor, ingresa el número de habitación (debe ser un número válido):");
    } while (isNaN(numeroHabitacion) || numeroHabitacion.trim() === "");

    numeroHabitacion = parseInt(numeroHabitacion);

    if (edad >= 18) {
      let nuevaReserva = new Reserva(nombre, edad, numeroHabitacion, noches);
      reservas.push(nuevaReserva);
      alert("¡Reserva exitosa! El costo total es: $" + nuevaReserva.calcularCosto(precioPorNoche));
    } else {
      alert("Debes tener al menos 18 años para hacer una reserva.");
    }

    continuar = confirm("¿Quieres hacer otra reserva?");
  }

  mostrarReservas();
}

function mostrarReservas() {
  console.log("Reservas realizadas:");
  reservas.forEach((reserva, index) => {
    console.log(`Reserva ${index + 1}: ${reserva.nombre}, Edad: ${reserva.edad}, Habitación: ${reserva.numeroHabitacion}, Noches: ${reserva.noches}, Costo Total: $${reserva.calcularCosto(precioPorNoche)}`);
  });
}

function buscarReservaPorNombre(nombre) {
  return reservas.filter(reserva => reserva.nombre.toLowerCase() === nombre.toLowerCase());
}

function buscarReservasPorNumeroHabitacion(numeroHabitacion) {
  return reservas.filter(reserva => reserva.numeroHabitacion === numeroHabitacion);
}

solicitarReserva();

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

