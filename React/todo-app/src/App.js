import { useState } from 'react'

import Header from './components/Header/Header'
import Login from './components/Index/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

import 'bootstrap-css-only'
import './App.css'

const App = () => {
  const [userLogged, setUserLogged] = useState(null)

  const onUserLogged = user => {
    setUserLogged(user)
  }

  return (
    <section className='App'>
      <Header user={userLogged} />
      {userLogged ? <Dashboard /> : <Login onUserLogged={onUserLogged} />}
    </section>
  )
}

export default App
