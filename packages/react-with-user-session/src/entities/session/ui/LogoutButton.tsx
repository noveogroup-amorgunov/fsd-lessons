import { useDialog } from '@monorepo/react-core/services/dialog-manager'
import { ConfirmDialog } from '@monorepo/react-core/ui'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { logout } from '../model/actions'

export const LogoutButton = reatomComponent(() => {
  const { show: showAlert, hide: hideAlert } = useDialog(ConfirmDialog)

  const onLogout = wrap(async () => {
    await showAlert({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      onConfirm: wrap(async () => {
        await logout()
        hideAlert()
      }),
      onCancel: () => {
        hideAlert()
      },
    })
  })

  return <button onClick={onLogout}>Logout</button>
})
