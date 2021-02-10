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

export { getTodos }
