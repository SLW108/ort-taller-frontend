const datos = [2, 4, 6, 8]

const reducidos = datos.reduce(function (acumulado, dato) {
  return acumulado + dato
})

console.log(reducidos)
