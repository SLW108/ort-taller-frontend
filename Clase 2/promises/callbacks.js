const buscarUsuario = (id, callback) => {
  callback({
    id: 1,
    name: 'Martín',
    age: 33,
    posts: []
  })
}

const buscarPosteosPorUsuario = (id, callback) => {
  callback([
    {
      id: 1,
      title: 'Este es un post',
      idUsuario: 1,
      comments: []
    }
  ])
}

const buscarComentariosPorPost = (id, callback) => {
  callback([
    {
      id: 1,
      comment: 'Muy bueno! :)',
      idPost: 1
    }
  ])
}

// Callback hell
const cargarUsuario = (id, callback) => {
  let usuario

  setTimeout(() => {
    buscarUsuario(id, user => {
      if (user) {
        usuario = user
        buscarPosteosPorUsuario(usuario.id, posts => {
          usuario.posts = posts
          posts.map(post => {
            buscarComentariosPorPost(post.id, comments => {
              post.comments = comments
            })
          })
        })
      }
      callback(usuario)
    })
  }, 1000)
}

console.log('Inicio')
const martin = cargarUsuario(1, user => {
  console.log('Usuario:', user)
})
console.log('Fin')
