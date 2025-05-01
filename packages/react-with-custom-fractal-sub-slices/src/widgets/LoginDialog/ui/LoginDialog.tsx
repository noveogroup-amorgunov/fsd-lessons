import { Button } from '@monorepo/react-core/uikit'
import { UpdateIcon } from '@radix-ui/react-icons'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { ApiError } from '~/shared/api'
import { email, password, submitForm } from '../model/store'

export const LoginDialog = reatomComponent(({ onClose }: { onClose: () => void }) => {
  const formIsReady = submitForm.ready()
  const formError = submitForm.error()

  // FIXME: Add errors from backend zod validation
  const formErrorMessage = formError instanceof ApiError
    ? formError.body.message
    : formError
      ? 'Something went wrong... Try again later'
      : null

  const onFormSubmit = wrap(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await submitForm()

    // @ts-expect-error fix reatom types
    if (!data.error) {
      onClose()
    }
  })

  return (
    <form onSubmit={onFormSubmit} data-fsd="widget/LoginDialog">
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
            value={email()}
            onChange={wrap(e => email(e.target.value))}
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
            value={password()}
            onChange={wrap(e => password(e.target.value))}
            required
          />
        </fieldset>
        <div className="flex justify-end">
          <Button className="w-full ml-[110px]" type="submit" disabled={!formIsReady}>
            {formIsReady ? 'Login' : <UpdateIcon className="animate-spin" />}
          </Button>
        </div>
        <div className="flex justify-end min-h-[24px]">
          <span className="text-red-500">{formErrorMessage}</span>
        </div>
      </div>
    </form>
  )
})
