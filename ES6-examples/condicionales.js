const usuario1 = {
  nombre: "Martín",
  apellido: "Luz",
  email: "martin.luz@gmail.com"
};

const usuario2 = {
  nombre: "Martín",
  apellido: "Luz"
};

// En ES5
function mostrarDatosCompletosES5(user) {
  let datos = `${user.nombre} ${user.apellido}`;
  if (user.email) {
    datos = `${datos} - ${user.email}`;
  } else {
    datos = `${datos} - No tiene email`;
  }
  return datos;
}

// En ES6
function mostrarDatosCompletosES6(user) {
  let datos = `${user.nombre} ${user.apellido} - ${
    user.email ? user.email : "No tiene"
  }`;
  return datos;
}

console.log(mostrarDatosCompletosES6(usuario1));
console.log(mostrarDatosCompletosES6(usuario2));
