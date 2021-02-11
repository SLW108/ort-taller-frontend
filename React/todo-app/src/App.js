import { useState } from 'react'
// Import main Components
import Header from './components/Header/Header'
import Login from './components/Index/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

// Import generic styles
import 'bootstrap-css-only'
import './App.css'

/**
 * App Component
 * Mi aplicación entera parte desde este componente
 */
const App = () => {
  // Define state
  const [userLogged, setUserLogged] = useState(null)
  /**
   * Change the state of the userLogged
   * @param {object} user
   */
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
