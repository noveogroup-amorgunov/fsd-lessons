import { useDialog } from '@monorepo/react-core/services/dialog-manager'
import { AlertDialog } from '@monorepo/react-core/ui'
import { Button } from '@monorepo/react-core/uikit'
import { UpdateIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useEffect, useRef, useState } from 'react'

export const LoginDialog = reatomComponent(() => {
  const { show: showAlert } = useDialog(AlertDialog)
  const [isLoading, setIsLoading] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const onClick = () => {
    setIsLoading(true)
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false)
      showAlert({
        title: 'Alert',
        message: 'Some error',
      })
    }, 2000)
  }

  return (
    <form onSubmit={() => {}} data-fsd="widget/LoginDialog">
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
          <Button className="w-full ml-[110px]" type="submit" disabled={isLoading} onClick={onClick}>
            {isLoading ? <UpdateIcon className="animate-spin" /> : 'Login'}
          </Button>
        </div>
      </div>
    </form>
  )
})
