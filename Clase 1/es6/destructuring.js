const person = ['Martin', 33]

// const [name, age] = person

// const name = person[0]
// const age = person[1]
//console.log(name, age)
//console.log(person[0])

const [height, weight] = medidas()
function medidas () {
  return [175, 75]
}

const user = {
  name: 'Martin',
  age: 33
}

// const name = user.name
// const age = user.age
const { name, age } = user

console.log(name, age)
