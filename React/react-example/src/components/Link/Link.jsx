const Link = ({ link, text }) => {
  return (
    <a
      className='App-link'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  )
}

export default Link
