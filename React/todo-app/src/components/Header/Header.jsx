import React from 'react'
import logo from './logo.svg'

import ProfileAvatar from './Avatar/Avatar'

import './Header.css'

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
      {user ? <ProfileAvatar name={user.name} /> : ''}
    </nav>
  </header>
)
export default Header
