import { useDialog } from '@monorepo/react-core/services/dialog-manager'
import { ConfirmDialog } from '@monorepo/react-core/ui'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useRef } from 'react'
import { logout } from '../model/actions'

export const LogoutButton = reatomComponent(() => {
  const { show: showAlert, hide: hideAlert } = useDialog(ConfirmDialog)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onLogout = wrap(async () => {
    await showAlert({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      triggerRef: buttonRef,
      onConfirm: wrap(async () => {
        await logout()
        hideAlert()
      }),
      onCancel: () => {
        hideAlert()
      },
    })
  })

  return <button ref={buttonRef} onClick={onLogout}>Logout</button>
})
