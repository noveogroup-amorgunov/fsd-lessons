import { useDialog } from '@monorepo/react-core/services/dialog-manager'
import { EnterIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useRef } from 'react'
import { LoginDialog } from './LoginDialog'

export const LoginDialogTrigger = reatomComponent(() => {
  const { show } = useDialog(LoginDialog)
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <button ref={buttonRef} onClick={() => show({ title: 'Login', triggerRef: buttonRef })}>
      <EnterIcon width={24} height={24} />
    </button>
  )
})
