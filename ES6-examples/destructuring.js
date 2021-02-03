const usuario = {
  nombre: "Martín",
  apellido: "Luz",
  email: "martin.luz@gmail.com"
};

// ES5
const nom = usuario.nombre;
// ES6
const { nombre: nomMartin, email: emailMartin } = usuario;
console.log(`Los datos del usuario son: ${nomMartin}, ${emailMartin}`);
