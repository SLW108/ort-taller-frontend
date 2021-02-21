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

/**
 * Ejemplo de guardado de un todo usando POST
 * @param {number} userId
 * @param {string} title
 * @param {boolean} completed
 */
const saveTodo = ({ userId, title, completed }) => {
  // En el body se envía la información a ser guardada
  const body = JSON.stringify({
    userId: userId,
    title: title,
    completed: completed
  })
  // Defino mis headers. De necesitar un Authorization, lo agregaría acá
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }

  fetch(baseServiceURL, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

export { getTodos, loginUser, saveTodo }
