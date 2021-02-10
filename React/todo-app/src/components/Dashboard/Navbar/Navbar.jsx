/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css'

const Navbar = ({ onChangeSection }) => {
  return (
    <aside className='menu-navbar'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Menu</h5>
          <ul className='nav nav-nav flex-column nav-pills'>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                onClick={e => {
                  e.preventDefault()
                  onChangeSection('list')
                }}
              >
                Todo list
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                onClick={e => {
                  e.preventDefault()
                  onChangeSection('section-1')
                }}
              >
                Section 1
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                onClick={e => {
                  e.preventDefault()
                  onChangeSection('section-2')
                }}
              >
                Section 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Navbar
