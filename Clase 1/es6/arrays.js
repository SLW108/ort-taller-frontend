const ages = [20, 30, 40]

/*
for (let i = 0; i < ages.length; i++) {
  agesDouble.push(ages[i] * 2)
}
*/
// ages.forEach(doubles)

const agesDouble = ages.map(function (value) {
  return value * 2
})

console.log(agesDouble)

let greetings = 'Hola'

let arr = Array.from(greetings)
console.log(arr)
