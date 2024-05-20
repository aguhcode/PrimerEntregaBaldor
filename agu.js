function verificarEdadParaVotar() {
  let edad;

  do {
    edad = prompt("Por favor, ingresa tu edad:");
  } while (isNaN(edad) || edad === "");

  edad = parseInt(edad);


  if (edad >= 18) {
    alert("Podes votar en las proximas elecciones!");
  } else {
    alert("Debes tener al menos 18 anios para votar.");
  }
}


verificarEdadParaVotar();
