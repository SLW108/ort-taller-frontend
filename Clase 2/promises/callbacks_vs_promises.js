const buscarUsuario = id => {
  return new Promise((resolve, reject) => {
    resolve({
      id: 1,
      name: "Martín",
      age: 33,
      posts: []
    });
  });
};

const buscarPosteosPorUsuario = id => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        title: "Este es un post",
        idUsuario: 1,
        comments: []
      }
    ]);
  });
};

const buscarComentariosPorPost = id => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        comment: "Muy bueno! :)",
        idPost: 1
      }
    ]);
  });
};

const cargarUsuario = id => {
  let usuario;
  return new Promise((resolve, reject) => {
    buscarUsuario(id).then(user => {
      usuario = user;
      buscarPosteosPorUsuario(user.id)
        .then(posts => {
          usuario.posts = posts;
          if (posts.length > 0) {
            posts.map(post =>
              buscarComentariosPorPost(post.id).then(comments => {
                post.comments = comments;
                resolve(usuario);
              })
            );
          } else {
            resolve(usuario);
          }
        })
        .catch(e => console.log(e));
    });
  });
};

cargarUsuario(1)
  .then(usuario => console.log(usuario))
  .catch(e => console.log("No se encontró al usuario"));
