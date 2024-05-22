function verificarEdadesParaVotar() {
  let edades = [];
  let continuar = true;

  // Ciclo para seguir pidiendo edades hasta que el usuario decida parar
  while (continuar) {
    let edad;

    // Ciclo para asegurarse de que se ingrese una edad válida
    do {
      edad = prompt("Por favor, ingresa tu edad:");
    } while (isNaN(edad) || edad.trim() === "");

    edad = parseInt(edad);
    edades.push(edad);

    // Preguntar al usuario si quiere ingresar otra edad
    continuar = confirm("Queres ingresar otra edad?");
  }

  // verificacion de cada edad en el array
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      alert(`La persona con ${edades[i]} anios puede votar en las proximas elecciones.`);
    } else {
      alert(`La persona con ${edades[i]} anios debe tener al menos 18 anios para votar.`);
    }
  }
}

verificarEdadesParaVotar();
