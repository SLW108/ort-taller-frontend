// En javascript las funciones son First-class citizens
// Pueden ser almacenadas en variables y ser enviadas a otras funciones.

// ES5
function sumarES5 (a, b) {
  return a + b
}

// ES6
const sumarES6 = (a, b) => {
  return a + b
}

const sumarES6MasCorta = (a, b) => a + b

function User (name, age) {
  this.name = name
  this.age = age

  setTimeout(() => {
    console.log(myfunc())
  }, 1000)

  const myfunc = () => 'Hola'
}

const users = [2, 4]

users.map(value => value * 2)

const user = new User('Martín', 33)























const me = {
  name: "martin",
  age: 33
}

const { name, age } = me;




