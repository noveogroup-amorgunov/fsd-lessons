import { Button } from '~/shared/ui/Button'

/*
input {
    border: 1px solid #000;
    padding: 4px 8px;
    border-radius: 8px;
}

label {
  color: #777;
  font-size: 14px;
}
*/

export function LoginForm() {
  return (
    <form onSubmit={() => {}} data-fsd="page/login/LoginForm">
      <div className="flex flex-col gap-6 py-6">
        <div className="grid gap-2">
          <label className="text-sm text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            className="border-1 border-black rounded-8px p-2"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            className="border-1 border-black rounded-8px p-2"
            id="password"
            type="password"
            required
          />
        </div>
      </div>
      <Button type="submit">Login</Button>
    </form>
  )
}
