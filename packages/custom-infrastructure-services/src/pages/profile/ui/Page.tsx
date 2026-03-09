import { Button } from '@monorepo/react-core/uikit'
import { reatomComponent } from '@reatom/react'
import { dialogs } from '~/shared/services/dialog-manager'
import { AlertDialog } from '~/shared/ui/AlertDialog'

export const ProfilePage = reatomComponent(() => {
  return (
    <main
      data-fsd="page/profile"
      className="flex-grow dark:bg-black dark:text-white"
    >
      <h1 className="text-3xl font-bold">Profile page</h1>
      <p>Any content</p>
      <Button
        onClick={() => {
          dialogs.open(AlertDialog, {
            title: 'Hello',
            message: 'Hello',
            onClose: () => {
              dialogs.close(AlertDialog)
            },
          })
        }}
      >
        Show test alert
      </Button>
    </main>
  )
})
