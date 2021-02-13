import Avatar from '@material-ui/core/Avatar'

const ProfileAvatar = ({ name }) => {
  const [firstLetter] = [...name]

  return <Avatar>{firstLetter}</Avatar>
}

export default ProfileAvatar
