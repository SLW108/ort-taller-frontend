/* eslint-disable jsx-a11y/anchor-is-valid */
import NavbarItem from './NavbarItem/NavbarItem'
import './Navbar.css'

const sections = [
  { name: 'Todo List', slug: 'todolist' },
  { name: 'Section 1', slug: 'section-1' },
  { name: 'Section 2', slug: 'section-2' }
]
/**
 * Navbar Component
 */
const Navbar = ({ changeSection }) => {
  return (
    <aside className='menu-navbar'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Menu</h5>
          <ul className='nav nav-nav flex-column nav-pills'>
            {sections.map(({ name, slug }) => (
              <NavbarItem
                name={name}
                slug={slug}
                changeSection={changeSection}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Navbar
