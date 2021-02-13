import Paper from '@material-ui/core/Paper'
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
          {items.map(({ id, title, completed }) => (
            <tr>
              <th scope='row'>{id}</th>
              <td>{title}</td>
              <td>
                <input type='checkbox' checked={completed} />
              </td>
              <td>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  )
}

export default TodoList
