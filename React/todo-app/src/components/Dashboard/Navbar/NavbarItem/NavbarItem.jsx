/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * NavbarItem
 * @param {object} props
 */
const NavbarItem = ({ name, slug, changeSection }) => {
  const onHandleClick = () => changeSection(slug)
  return (
    <li className='nav-item'>
      <a className='nav-link' href='#' onClick={onHandleClick}>
        {name}
      </a>
    </li>
  )
}

export default NavbarItem
