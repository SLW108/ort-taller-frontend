import logo from './logo.svg'
import Link from '../Link/Link'

const langs = [
  { name: 'React', link: 'http://react.org' },
  { name: 'Python', link: 'http://react.org' },
  { name: 'Golang', link: 'http://golang.org' }
]

const Header = () => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      {langs.map(({ name, link }, index) => (
        <Link text={name} link={link} key={`langs-${index}`} />
      ))}
    </header>
  )
}

export default Header
