const buscarUsuario = id => {
  return new Promise((resolve, reject) => {
    resolve({
      id: 1,
      name: 'Martín',
      age: 33,
      posts: []
    })
  })
}

const buscarPosteosPorUsuario = id => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        title: 'Este es un post',
        idUsuario: 1,
        comments: []
      }
    ])
  })
}

const buscarComentariosPorPost = id => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        comment: 'Muy bueno! :)',
        idPost: 1
      }
    ])
  })
}

const cargarUsuario = async id => {
  const usuario = await buscarUsuario(id)
  const posts = await buscarPosteosPorUsuario(usuario.id)

  // Cargo los comments del post
  posts.map(async post => {
    const comments = await buscarComentariosPorPost(post.id)
    post.comments = comments
  })

  // Cargo los posts del usuario
  usuario.posts = posts
  return usuario
}

;(async () => {
  try {
    const usuario = await cargarUsuario(1)
    console.log(usuario)
  } catch (error) {
    console.log('No se encontró al usuario', error)
  }
})()
