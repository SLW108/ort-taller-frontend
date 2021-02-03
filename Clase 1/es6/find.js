const usuarios = [
  {
    nombre: 'Martín',
    apellido: 'Luz',
    edad: 33,
    email: 'martin.luz@gmail.com'
  },
  {
    nombre: 'Francisco',
    apellido: 'Luz',
    edad: 1,
    email: 'fran.luz@gmail.com'
  },
  {
    nombre: 'Francisco',
    apellido: 'Garcia',
    edad: 1,
    email: 'fran.luz@gmail.com'
  },
  {
    nombre: 'Sofía',
    apellido: 'Rovira',
    edad: 31
  }
]

function searchByName (array, name) {
  const user = array.filter(function (usuario) {
    if (usuario.nombre == name) {
      return usuario
    }
  })
  return user
}

console.log(searchByName(usuarios, 'Sofía'))
