import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import logo from './logo.svg'
import './Header.css'

const getFirstLetterOfTheName = str => {
  const [firstLetter] = [...str]
  if (firstLetter) {
    return firstLetter.toUpperCase()
  }
}

const Header = ({ user }) => (
  <header className='App-header'>
    <nav className='navbar navbar-dark bg-dark'>
      {/* eslint-disable-next-line*/}
      <a className='navbar-brand' href='#'>
        <img
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt=''
        />
        React to-do app
      </a>
      {user ? (
        <Avatar>{getFirstLetterOfTheName(user.username || '')}</Avatar>
      ) : (
        ''
      )}
    </nav>
  </header>
)
export default Header
