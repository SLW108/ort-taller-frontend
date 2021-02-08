const usuarios = [
  {
    nombre: 'Martín',
    apellido: 'Luz',
    edad: 12,
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
  const user = array.find(usuario => {
    if (usuario.nombre == name) {
      return usuario
    }
  })
  return user
}


function search(array, callback) {
  const result = array.find(callback)
  return result
}

// array
// keyToCompare
// valueToCompare

const key = "edad"
const valueToCompare = 18

search(usuarios, (item) => {
  if( item[key] > valueToCompare) {
    return item
  } 
 });
