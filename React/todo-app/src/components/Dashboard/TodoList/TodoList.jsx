import Paper from '@material-ui/core/Paper'

const TodoList = ({ todos, onHandleChangeCompleted }) => {
  const onHandleChange = (isChecked, id) => {
    onHandleChangeCompleted(isChecked, id)
  }

  return (
    <Paper>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Titule</th>
            <th scope='col'>Completed</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, title, completed }) => (
            <tr>
              <th scope='row'>{id}</th>
              <td>{title}</td>
              <td>
                <input
                  type='checkbox'
                  checked={completed}
                  onChange={e => {
                    const { currentTarget } = e
                    onHandleChange(currentTarget.checked, id)
                  }}
                />
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
