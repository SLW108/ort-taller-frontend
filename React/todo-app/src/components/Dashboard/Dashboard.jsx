import { useState, useEffect } from 'react'
// Import components
import Navbar from './Navbar/Navbar'
import TodoList from './TodoList/TodoList'
import Stats from './Stats/Stats'

// Styles
import './Dashboard.css'
// Service
import { getTodos } from '../../api/service'

const Dashboard = () => {
  const [section, setSection] = useState('list')
  const [todos, setTodos] = useState([])

  const onChangeSection = newSection => {
    setSection(newSection)
  }

  useEffect(() => {
    getTodos().then(todos => {
      setTodos(todos)
    })
  }, [])

  const onHandleChangeCompleted = (isChecked, id) => {
    const modifiedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = isChecked
      }

      return todo
    })
    setTodos(modifiedTodos)
  }

  return (
    <div className='container-fluid dashboard'>
      <h1>Dashboard</h1>
      <Stats todos={todos} />
      <br />
      <div className='row'>
        <div className='col-3'>
          <Navbar onChangeSection={onChangeSection} />
        </div>
        <div className='col-9'>
          {section === 'list' ? (
            <TodoList
              todos={todos}
              onHandleChangeCompleted={onHandleChangeCompleted}
            />
          ) : section === 'section-1' ? (
            'Section 1'
          ) : (
            'Section 2'
          )}
        </div>
      </div>
    </div>
  )
}
export default Dashboard
