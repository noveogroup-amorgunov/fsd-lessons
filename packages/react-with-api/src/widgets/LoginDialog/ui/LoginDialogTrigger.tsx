import { useDialog } from '@monorepo/react-core/services/dialog-manager'
import { EnterIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { LoginDialog } from './LoginDialog'

export const LoginDialogTrigger = reatomComponent(() => {
  const { show } = useDialog(LoginDialog)

  return (
    <button onClick={() => show({ title: 'Login' })}>
      <EnterIcon width={24} height={24} />
    </button>
  )
})
