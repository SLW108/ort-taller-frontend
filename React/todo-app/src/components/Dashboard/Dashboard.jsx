import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom'
// Import components
import TodoList from './TodoList/TodoList'
import Stats from './Stats/Stats'
import Navbar from './Navbar/Navbar'
// Styles
import './Dashboard.css'
// Service
import { getTodos } from '../../services/api'

/**
 * Dashboard Component
 */
const Dashboard = ({ user }) => {
  const [todos, setTodos] = useState([])
  const { url } = useRouteMatch()
  const history = useHistory()
  /**
   * Load todos on component mounting
   */
  useEffect(() => {
    history.push(`${url}/todolist`)
    const { id } = user
    getTodos(id).then(todos => {
      setTodos(todos)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container-fluid dashboard'>
      <h1>Dashboard</h1>
      <Stats items={todos.map(item => item.completed)} />
      <br />
      <div className='row'>
        <div className='col-3'>
          <Navbar />
        </div>
        <div className='col-9'>
          <Switch>
            <Route path={`${url}/todolist`}>
              <TodoList items={todos} />
            </Route>
            <Route exact path={`${url}/section-1`}>
              Hola soy la section 1
            </Route>
            <Route exact path='/dashboard/section-2'>
              Hola soy la seccion 2
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
