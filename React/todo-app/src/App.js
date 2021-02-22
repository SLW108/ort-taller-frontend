import { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
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
  const history = useHistory()
  /**
   * Change the state of the userLogged
   * @param {object} user
   */
  const onUserLogged = user => {
    setUserLogged(user)
    history.push('/dashboard')
  }

  return (
    <section className='App'>
      <Header user={userLogged} />
      <Switch>
        <Route path='/' exact>
          <Login onUserLogged={onUserLogged} />
        </Route>
        <Route path='/dashboard'>
          {userLogged ? <Dashboard user={userLogged} /> : history.push('/')}
        </Route>
      </Switch>
    </section>
  )
}

export default App
