// En javascript las funciones son First-class citizens
// Pueden ser almacenadas en variables y ser enviadas a otras funciones.

// ES5
function sumarES5(a, b) {
  return a + b;
}


// ES6
const sumarES6 = (a, b) => {
  return a + b;
};


const sumarES6MasCorta = (a, b) => a + b;


function User(name, age) {
  this.name = name;
  this.age = age
}


const user = new User("Martín", 33);



