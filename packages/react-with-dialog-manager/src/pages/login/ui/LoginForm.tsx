import { Button } from '@monorepo/react-core/uikit'

export function LoginForm() {
  return (
    <form onSubmit={() => {}} data-fsd="page/login/LoginForm">
      <div className="flex flex-col gap-1 p-6">
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="w-[90px] text-right text-[15px]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="w-[90px] text-right text-[15px]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="password"
            type="password"
            required
          />
        </fieldset>
        <div className="flex justify-end">
          <Button type="submit">Login</Button>
        </div>
      </div>
    </form>
  )
}
