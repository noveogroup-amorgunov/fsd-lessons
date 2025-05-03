import { EnterIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useDialog } from '~/shared/dialog-manager'
import { LoginForm } from './LoginForm'

export const LoginDialogTrigger = reatomComponent(() => {
  const { show } = useDialog(LoginForm)

  return (
    <button onClick={() => show({ title: 'Login' })}>
      <EnterIcon width={24} height={24} />
    </button>
  )
}, 'LoginDialogTrigger')
