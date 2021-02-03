const sumar = (a, b) => a + b

function miPromesa (value1, value2) {
  const promise = new Promise((resolve, reject) => {
    try {
      const result = sumar(value1, value2)
      resolve(result)
    } catch (error) {
      reject('Algo salió mal')
    }
  })
  return promise
}

// Consumo la promesa
miPromesa(2, 4)
  .then(res => console.log('Suma exitosa', res))
  .catch(err => console.log(err))
