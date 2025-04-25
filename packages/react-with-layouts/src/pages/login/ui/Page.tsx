import { Link } from 'wouter'
import { LoginForm } from './LoginForm'

export function LoginPage() {
  return (
    <div data-fsd="page/login" className="flex items-center justify-center">
      <div className="">
        <h1 className="text-3xl font-bold">Login</h1>
        <div className="text-sm text-gray-500">
          Enter your email below to login to your account
        </div>
        <LoginForm />
        <div className="text-sm text-gray-500 pt-4">
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  )
}
