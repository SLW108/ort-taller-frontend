import { useState, useEffect } from 'react'
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
  const [currentSection, setCurrentSection] = useState('todolist')

  const changeSection = section => {
    setCurrentSection(section)
  }

  /**
   * Load todos on component mounting
   */
  useEffect(() => {
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
          <Navbar changeSection={changeSection} />
        </div>
        <div className='col-9'>
          {currentSection === 'todolist' ? (
            <TodoList items={todos} />
          ) : currentSection === 'section-1' ? (
            'Hola soy la section 1'
          ) : (
            'Hola soy la section 2'
          )}
        </div>
      </div>
    </div>
  )
}
export default Dashboard
