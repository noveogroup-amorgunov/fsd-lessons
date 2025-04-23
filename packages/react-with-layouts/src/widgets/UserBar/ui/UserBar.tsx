import { Link } from 'wouter'

// any implementation to get user
function useUser() {
  return { name: 'Alexander' }
}

export function UserBar() {
  const user = useUser()

  return (
    <div data-fsd="widget/user-bar" className="min-w-50">
      <Link to="/profile">
        Hey,
        {' '}
        {user.name}
      </Link>
    </div>
  )
}
