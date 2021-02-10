import { useState } from 'react'
import './Login.css'

const Login = props => {
  // State
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  // Events
  const onHandleChange = e => {
    const { name, value } = e.target
    if (name === 'username') {
      setUserName(value)
    } else {
      setPassword(value)
    }
  }

  const onHandleSubmit = e => {
    // Valido
    e.preventDefault()
    console.log(username, password)

    // Envío datos a la API

    // Si está todo ok, entero a todos quienes esten esuchando el cambio
    props.onUserLogged({
      username,
      password
    })
  }

  return (
    <section className='d-flex flex-md justify-content-center login'>
      <div className='card'>
        <h2>Welcome back!</h2>
        <section className='card-body'>
          <form>
            <label htmlFor='inputEmail'>Username</label>
            <br />
            <input
              type='email'
              name='username'
              value={username}
              className='form-control'
              onChange={onHandleChange}
            />
            <br />
            <label htmlFor='inputPassword'>Password</label>
            <br />
            <input
              type='password'
              name='password'
              value={password}
              className='form-control'
              onChange={onHandleChange}
            />
            <br />
            <button className='btn btn-primary' onClick={onHandleSubmit}>
              Send
            </button>
          </form>
        </section>
      </div>
    </section>
  )
}
export default Login
