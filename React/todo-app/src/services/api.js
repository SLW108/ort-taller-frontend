const baseServiceURL = 'https://jsonplaceholder.typicode.com'

/**
 * LLamada a la API para obtener los todos
 * @returns {Promise}
 */
const getTodos = id => {
  let url = `${baseServiceURL}/todos`

  return fetch(id !== null ? `${url}?userId=${id}` : url).then(response => {
    return new Promise((resolve, reject) => {
      if (response.status === 200) {
        resolve(response.json())
      } else {
        reject('No se han podido obtener los to-dos')
      }
    })
  })
}
/**
 * @description MOCK de llamada a una API para login
 * @param {string} username
 * @param {string} password
 * @returns {Promise}
 *
 */
const loginUser = ({ username, password }) => {
  // Aca hago el fetch y la validación correspondiente
  // Por ahora data estática
  const user = {
    id: 1,
    name: 'Martín Luz',
    password: '1234',
    username: 'martin.luz@gmail.com',
    token: Math.random()
  }
  if (user.username === username && user.password === password) {
    return Promise.resolve(user)
  } else {
    return Promise.reject('Invalid credentials')
  }
}

export { getTodos, loginUser }
