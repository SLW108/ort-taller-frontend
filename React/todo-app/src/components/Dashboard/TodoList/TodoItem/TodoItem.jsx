/**
 * TodoItem Component
 * @param {number} id
 * @param {string} title
 * @param {boolean} completed
 * @returns {jsx}
 */
const TodoItem = ({ id, title, completed }) => (
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
)

export default TodoItem
