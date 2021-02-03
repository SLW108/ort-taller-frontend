function saludar (name, age, email) {
  // let saludo = 'Hola ' + name + ' de: ' + age + ' años ' + ' e email: ' + email
  let saludo = `Hola ${name} de "${age}" años e email: ${email}, ${evaluarEdad(
    age
  )} `
  return saludo
}

function evaluarEdad (age) {
  return age >= 18 ? 'que es mayor de edad' : ' que es menor de edad'
}

console.log(saludar('Daniel', 10, 'daniel@gmail.com'))
// console.log(evaluarEdad(10))
