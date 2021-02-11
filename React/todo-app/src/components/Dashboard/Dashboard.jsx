import { useState, useEffect } from 'react'
// Import components
import TodoList from './TodoList/TodoList'

// Styles
import './Dashboard.css'
// Service
import { getTodos } from '../../services/api'

/**
 * Dashboard Component
 */
const Dashboard = ({ user }) => {
  const [todos, setTodos] = useState([])
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
      <TodoList items={todos} />
    </div>
  )
}
export default Dashboard
