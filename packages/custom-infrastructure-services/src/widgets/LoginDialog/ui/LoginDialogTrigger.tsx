import { EnterIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useRef } from 'react'
import { useDialog } from '~/shared/services/dialog-manager'
import { LoginForm } from './LoginForm'

export const LoginDialogTrigger = reatomComponent(() => {
  const { show } = useDialog(LoginForm)
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <button ref={buttonRef} onClick={() => show({ title: 'Login', triggerRef: buttonRef })}>
      <EnterIcon width={24} height={24} />
    </button>
  )
}, 'LoginDialogTrigger')
