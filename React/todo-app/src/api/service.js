const baseServiceURL = 'https://jsonplaceholder.typicode.com'

const getTodos = () => {
  return fetch(`${baseServiceURL}/todos`).then(response => {
    return new Promise((resolve, reject) => {
      if (response.status === 200) {
        resolve(response.json())
      } else {
        reject('No se han podido obtener los to-dos')
      }
    })
  })
}

const loginUser = userData => {
  // Aca hago el fetch y la validación correspondiente
  // Por ahora data estática
  const user = {
    id: 1,
    name: 'Martín Luz',
    email: 'martin.luz@gmail.com',
    token: Math.random()
  }
  // cuando lo haga con fetch real al servicio, el propio fetch me devuelve la promesa
  return new Promise((resolve, reject) => {
    resolve(user)
  })
}

export { getTodos, loginUser }
