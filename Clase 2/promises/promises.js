const findUser = () => {
  return {
    name: 'Martín',
    age: 33
  }
}

const promise = new Promise((resolve, reject) => {
  try {
    const user = findUser()
    resolve(user)
  } catch (error) {
    console.log('catch!!!!')
    reject(`Ha ocurrido un error: ${error}`)
  }
})

promise
  .then(user => {
    console.log('Yeyy! promesa cumplida!')
    console.log(user)
  })
  .catch(err => {
    console.log(err)
  })

console.log(promise)
