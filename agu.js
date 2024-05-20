let edad;

do {
  edad = prompt("Por favor, ingresa tu edad:");
} while (isNaN(edad) || edad === "");

edad = parseInt(edad);

if (edad >= 18) {
  console.log("Podes votar en las proximas elecciones!");
} else {
  console.log("Debes tener al menos 18 anios para votar.");
}
