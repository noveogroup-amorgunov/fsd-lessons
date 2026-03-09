import { Button } from '@monorepo/react-core/uikit'
import { reatomComponent } from '@reatom/react'
import { closeDialog, openDialog } from '~/shared/dialog-manager'
import { AlertDialog } from '~/shared/ui/AlertDialog'

export const ProfilePage = reatomComponent(() => {
  return (
    <main data-fsd="page/profile" className="flex-grow dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Profile page</h1>
      <p>Any content</p>
      <Button onClick={() => {
        openDialog(AlertDialog, {
          title: 'Hello',
          message: 'Hello',
          onClose: () => {
            closeDialog(AlertDialog)
          },
        })
      }}
      >
        Show test alert
      </Button>
    </main>
  )
})
