import Paper from '@material-ui/core/Paper'
import TodoItem from './TodoItem/TodoItem'
/**
 * TodoList Component
 * @param {object} items
 */
const TodoList = ({ items }) => {
  return (
    <Paper>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Completed</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TodoItem {...item} />
          ))}
        </tbody>
      </table>
    </Paper>
  )
}

export default TodoList
