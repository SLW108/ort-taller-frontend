function showUserData (name, surname, email = 'empty') {
  console.log(
    `User name: ${name}, User surname: ${surname}, User email: ${
      email ? email : 'not provided'
    }`
  )
}

showUserData('Martin', 'Luz')
