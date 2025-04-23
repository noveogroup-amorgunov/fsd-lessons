import { Link } from 'wouter'

// any implementation to get user
function useUser() {
  return { name: 'Alexander' }
}

export function UserBar() {
  const user = useUser()

  return (
    <div data-fsd="widget/user-bar">
      <Link to="/profile">
        Hey,
        {' '}
        {user.name}
      </Link>
    </div>
  )
}
