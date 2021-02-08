// Creo la promesa del request con fetch
const req = fetch('https://jsonplaceholder.typicode.com/albums')

// Intento obtener el resultado de la Promise que me devuelve fetch
req
  .then(res => {
    // En este punto, puedo evaluar cual fue el status code de la respuesta para continuar o, mostrar un error
    if (res.status == 200) {
      return res.json()
    } else {
      // Aqui podría evaluar los status codes que me interesen para mostrar diferentes mensajes, o mostrar uno genérico como el siguiente:
      console.error(
        `Upps! algo salió mal, el status code recibido fue: ${res.status}`
      )
    }
  }) // Aqui se está resolviendo la promesa devuelta por la promesa anterior (la retornada por res.json())
  .then(json => {
    // En este momento, si todo está ok, debería recibir la respuesta de mi API.
    console.log(json)
    // A modo de ejemplo, muestro el resultado en el html
    document.getElementById('site').innerHTML = JSON.stringify(json)
  }) // Controlo cualquier error con un catch
  .catch(e => console.log(e))
